import Image from "next/image";
import clsx from "clsx";

type BrandLogoProps = {
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  withWordmark?: boolean;
  size?: number;
  priority?: boolean;
  variant?: "default" | "white";
};

export default function BrandLogo({
  className,
  iconClassName,
  labelClassName,
  withWordmark = true,
  size = 32,
  priority = false,
  variant = "default",
}: BrandLogoProps) {
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <div
        className={clsx("shrink-0 p-[2px]", iconClassName)}
        style={{ width: size, height: size }}
      >
        <Image
          src={variant === "white" ? "/brand/logo-white.svg" : "/brand/logo.svg"}
          alt="Ronan SAT logo"
          width={size}
          height={size}
          priority={priority}
          className="h-full w-full object-contain"
        />
      </div>
      {withWordmark ? (
        <span
          className={clsx(
            "font-display font-bold tracking-tight uppercase",
            labelClassName,
          )}
        >
          Ronan SAT
        </span>
      ) : null}
    </div>
  );
}
