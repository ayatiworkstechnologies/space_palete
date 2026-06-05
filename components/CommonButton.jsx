import { ArrowRight } from "lucide-react";

export default function CommonButton({
  as: Component = "a",
  href,
  type = "button",
  children,
  className = "",
  iconSize = 17,
  showIcon = true,
  variant = "solid",
  overlayClassName = "bg-[#E16E38]",
  ...props
}) {
  const variantClassName =
    variant === "outline"
      ? "border border-white/30 bg-transparent text-white hover:border-[#E16E38]"
      : "bg-white text-black";

  const baseClassName = `
    group relative inline-flex min-h-11 items-center justify-center gap-3 overflow-hidden 
    px-7 py-3 text-[11px] uppercase tracking-[0.22em] 
    font-semibold leading-none transition-transform active:scale-[0.98]
    ${variantClassName} ${className}
  `.trim();

  return (
    <Component
      href={href}
      type={Component === "button" ? type : undefined}
      className={baseClassName}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-3 transition-colors group-hover:text-white">
        {children}
        {showIcon && (
          <ArrowRight
            size={iconSize}
            className="transition duration-300 group-hover:translate-x-1"
          />
        )}
      </span>
      <div className={`absolute inset-0 translate-y-full transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-y-0 ${overlayClassName}`} />
    </Component>
  );
}
