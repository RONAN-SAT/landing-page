export type EdgeColors = { primary: string; secondary: string };
export type ImageMeta = { src: string; w: number; h: number };

export function preloadImages(
  sources: string[],
  onProgress: (loaded: number, total: number) => void
): Promise<ImageMeta[]> {
  let loaded = 0;
  const total = sources.length;
  return Promise.all(
    sources.map(
      (src) =>
        new Promise<ImageMeta>((resolve) => {
          const img = new Image();
          const done = () => {
            loaded += 1;
            onProgress(loaded, total);
            resolve({ src, w: img.naturalWidth || 0, h: img.naturalHeight || 0 });
          };
          img.onload = done;
          img.onerror = done;
          img.src = src;
        })
    )
  );
}

function toHex(r: number, g: number, b: number): string {
  const c = (v: number) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
  return `#${c(r)}${c(g)}${c(b)}`;
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6;
  else if (max === gn) h = ((bn - rn) / d + 2) / 6;
  else h = ((rn - gn) / d + 4) / 6;
  return [h, s, l];
}

function hslToHex(h: number, s: number, l: number): string {
  const hue2rgb = (p: number, q: number, t: number) => {
    let tt = t;
    if (tt < 0) tt += 1;
    if (tt > 1) tt -= 1;
    if (tt < 1 / 6) return p + (q - p) * 6 * tt;
    if (tt < 1 / 2) return q;
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
    return p;
  };
  if (s === 0) {
    const v = Math.round(l * 255);
    return toHex(v, v, v);
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return toHex(hue2rgb(p, q, h + 1 / 3) * 255, hue2rgb(p, q, h) * 255, hue2rgb(p, q, h - 1 / 3) * 255);
}

function vibrant(r: number, g: number, b: number, satBoost: number): string {
  const [h, s, l] = rgbToHsl(r, g, b);
  const s2 = Math.min(1, s * satBoost + 0.08);
  const l2 = Math.min(0.66, Math.max(0.42, l));
  return hslToHex(h, s2, l2);
}

export function extractEdgeColors(src: string): Promise<EdgeColors> {
  return new Promise((resolve) => {
    const fallback: EdgeColors = { primary: "#BCCE75", secondary: "#FBDAE3" };
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const w = 48;
        const h = 60;
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return resolve(fallback);
        ctx.drawImage(img, 0, 0, w, h);
        const data = ctx.getImageData(0, 0, w, h).data;
        let rSum = 0;
        let gSum = 0;
        let bSum = 0;
        let count = 0;
        let bestScore = -1;
        let best = { r: 188, g: 206, b: 117 };
        const band = 3;
        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            const edge = x < band || y < band || x >= w - band || y >= h - band;
            if (!edge) continue;
            const i = (y * w + x) * 4;
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            rSum += r;
            gSum += g;
            bSum += b;
            count += 1;
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            const sat = max === 0 ? 0 : (max - min) / max;
            const score = sat * 0.75 + (max / 255) * 0.45;
            if (score > bestScore) {
              bestScore = score;
              best = { r, g, b };
            }
          }
        }
        if (count === 0) return resolve(fallback);
        resolve({
          primary: vibrant(best.r, best.g, best.b, 1.6),
          secondary: vibrant(rSum / count, gSum / count, bSum / count, 1.25),
        });
      } catch {
        resolve(fallback);
      }
    };
    img.onerror = () => resolve(fallback);
    img.src = src;
  });
}
