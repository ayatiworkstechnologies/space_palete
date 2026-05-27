import { ArrowRight } from "lucide-react";

export default function CommonButton({
  as: Component = "a",
  href,
  type = "button",
  children,
  className = "",
  iconSize = 17,
  variant = "outline",
  size = "md",
  ...props
}) {
  const baseClassName =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full border text-[11px] font-medium uppercase tracking-[0.18em] transition duration-300";

  const variants = {
    outline:
      "border-white/55 bg-white/[0.02] text-white hover:border-[#f47a3c] hover:bg-[#f47a3c] hover:text-black",
    subtle:
      "border-white/10 bg-white/[0.05] text-white hover:border-white/25 hover:bg-white/10",
    accent:
      "border-[#f47a3c] bg-[#f47a3c] text-black hover:bg-transparent hover:text-[#f47a3c]",
  };

  const sizes = {
    sm: "gap-3 px-4 py-2.5",
    md: "gap-4 px-5 py-3",
    lg: "gap-4 px-6 py-3.5",
  };

  const resolvedClassName = [
    baseClassName,
    variants[variant] || variants.outline,
    sizes[size] || sizes.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      href={href}
      type={Component === "button" ? type : undefined}
      className={resolvedClassName}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.14),transparent)] opacity-0 transition duration-500 group-hover:opacity-100" />
      {children}
      <ArrowRight
        size={iconSize}
        className="relative z-10 transition duration-300 group-hover:translate-x-1"
      />
    </Component>
  );
}
