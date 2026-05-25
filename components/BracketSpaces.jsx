export default function BracketSpaces({ className = "" }) {
  return (
    <span
      className={`relative mx-[0.12em] inline-flex items-center justify-center align-baseline px-[0.55em] py-[0.14em] leading-none text-[#f47a3c] ${className}`}
    >
      <span className="absolute left-0 top-0 h-[0.28em] w-[0.28em] border-l-[0.045em] border-t-[0.045em] border-[#f47a3c]" />
      <span className="absolute bottom-0 left-0 h-[0.28em] w-[0.28em] border-b-[0.045em] border-l-[0.045em] border-[#f47a3c]" />
      <span className="absolute right-0 top-0 h-[0.28em] w-[0.28em] border-r-[0.045em] border-t-[0.045em] border-[#f47a3c]" />
      <span className="absolute bottom-0 right-0 h-[0.28em] w-[0.28em] border-b-[0.045em] border-r-[0.045em] border-[#f47a3c]" />
      <span>Spaces</span>
    </span>
  );
}
