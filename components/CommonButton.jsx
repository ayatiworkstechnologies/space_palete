import { ArrowRight } from "lucide-react";

export default function CommonButton({
  as: Component = "a",
  href,
  type = "button",
  children,
  className = "",
  iconSize = 17,
  showIcon = true,
  ...props
}) {
  const baseClassName = `
    group relative inline-flex items-center justify-center gap-3 overflow-hidden 
    bg-white text-black px-8 py-4 text-[12px] uppercase tracking-[0.25em] 
    font-medium transition-transform active:scale-[0.98] ${className}
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
      <div className="absolute inset-0 bg-[#f47a3c] translate-y-full transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-y-0" />
    </Component>
  );
}
