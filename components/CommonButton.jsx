import { ArrowRight } from "lucide-react";

export default function CommonButton({
  as: Component = "a",
  href,
  type = "button",
  children,
  className = "",
  iconSize = 17,
  ...props
}) {
  const baseClassName =
    "group inline-flex items-center gap-4 border border-white/55 px-4 py-2.5 text-[11px] font-medium text-white transition duration-300 hover:border-[#f47a3c] hover:bg-[#f47a3c] hover:text-black";

  const resolvedClassName = [baseClassName, className].filter(Boolean).join(" ");

  return (
    <Component
      href={href}
      type={Component === "button" ? type : undefined}
      className={resolvedClassName}
      {...props}
    >
      {children}
      <ArrowRight
        size={iconSize}
        className="transition duration-300 group-hover:translate-x-1"
      />
    </Component>
  );
}
