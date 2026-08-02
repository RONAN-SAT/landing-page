# Ronan SAT Application Design System: "The Living Workbook"

This document is the authoritative guide for building the Ronan SAT ecosystem. It standardizes the **"Playful, Academic Tactical"** aesthetic for full-scale web applications, ensuring that every dashboard, simulation, and tool feels like a cohesive part of a physical, high-end study suite.

---

## 1. Core Philosophy: "The Living Workbook"
The application is not a "software interface"; it is a **digitized physical environment**. 
- **Surfaces:** Everything sits on "Paper" (`background`).
- **Depth:** No blurs. Depth is achieved through thick black offset shadows (`brutal-shadow`).
- **Hierarchy:** Importance is signaled by "Highlighter" colors, not font-weight alone.
- **Micro-interactions:** Actions should feel like clicking a mechanical pen or flipping a heavy page.

---

## 2. Visual Tokens (Core Foundation)

### A. Surface & Palette
| Token | Hex | Role |
| :--- | :--- | :--- |
| `paper-bg` | `#f4efe6` | Global page background. |
| `ink-fg` | `#0f0e0e` | All text, borders, and shadows. |
| `surface-white`| `#ffffff` | Elevated cards/modals. |
| `primary` | `#BCCE75` | Primary Action/Success (Pastel Olive Green). |
| `accent-1` | `#FBDAE3` | Vocabulary/Creative (Pastel Rose). |
| `accent-2` | `#DBE8FB` | Math/Logic (Pastel Sky). |
| `accent-3` | `#FBE1D3` | Alerts/Critical (Pastel Peach). |

### B. Structural Specs
- **Borders:** Global default is `2px solid #0f0e0e`. Interactive headers use `4px`.
- **Shadows:** Hard-coded offsets (non-blurred).
  - `sm`: `3px 3px 0px #0f0e0e`
  - `default`: `6px 6px 0px #0f0e0e`
  - `lg`: `12px 12px 0px #0f0e0e`
- **Corners:** `rounded-2xl` for UI elements; `rounded-full` for status pills/stickers.

---

## 3. Application Architecture Patterns

### A. The "Canvas" Layout
- **Sidebar:** Always a distinct "binder tab" on the left. It should use `border-r-4 border-ink-fg`.
- **Main View:** A large, padded area with `bg-dot-pattern`.
- **Navigation:** Use "Sticky Note" tabs for switching between views within a section.

### B. Form & Input Language
Inputs should feel tactile and "writable":
```tsx
// Standard Input Pattern
<input className="w-full bg-white border-2 border-ink-fg rounded-xl px-4 py-3 focus:ring-0 focus:brutal-shadow-sm transition-all" />

// Toggle/Switch Pattern
<button className="w-12 h-6 rounded-full border-2 border-ink-fg bg-white relative">
  <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-ink-fg transition-all" />
</button>
```

### C. Data & Performance Views
- **Tables:** Use alternating row colors (e.g., `bg-paper-bg` vs `bg-white`) and a thick header border.
- **Charts:** Use the accent palette (`accent-1`, `accent-2`, `accent-3`) for data series. Bar charts must have a `2px` black outline.
- **Empty States:** Use the "Sticker" aesthetic (e.g., a large, grayed-out icon with a handwritten-style note).

---

## 4. Components & Interactive States

### 1. Modals & Overlays (The "Pop-up Card")
Modals must not have soft backdrops. Use a `bg-ink-fg/20` backdrop and a large `brutal-shadow-lg` on the card.
```tsx
<div className="bg-white border-4 border-ink-fg rounded-[2.5rem] brutal-shadow-lg p-12">
  <h2 className="font-display text-4xl uppercase mb-4">Modal Title</h2>
  {children}
</div>
```

### 2. Feedback Indicators (Toasts/Alerts)
- **Success:** `bg-primary` with `border-2 border-ink-fg`.
- **Error:** `bg-accent-3` with `border-2 border-ink-fg` and white text.
- **Loading:** A spinning "Zap" icon or a pulsing "Highlighter" line along the top of the card.

---

## 5. Agent Instructions for Building Features

**When building a new app feature (e.g., a Timer, a Quiz View, or a Settings Page):**

1. **Theming First:** Check the `accent` mapping. Is this a Math feature? Use `accent-2` (Blue). Is it a Vocab feature? Use `accent-1` (Pink).
2. **Standardize UI:** Do not invent new border widths or shadow offsets. Use the `DESIGN.md` tokens.
3. **Responsive Canvas:** Ensure the "Binder Sidebar" collapses into a "Bottom Tab Bar" on mobile screens.
4. **Define Logic Separately:** Keep the "Brutal UI" in its own component layer, passing state as props to avoid cluttering the visual definitions.
5. **Interactive Feedback:** Every click must have a visual "press" state (e.g., `active:translate-x-0.5 active:translate-y-0.5 active:shadow-none`).
