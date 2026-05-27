export default function BackgroundVectors() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="vector-wave absolute left-1/2 top-0 h-[34rem] w-[78rem] -translate-x-1/2 opacity-32" />

      <div className="vector-burst vector-burst-top absolute -right-28 top-24 h-[32rem] w-[32rem] opacity-42" />
      <div className="vector-burst vector-burst-left absolute -left-36 top-[42rem] h-[30rem] w-[30rem] opacity-28" />
      <div className="vector-burst vector-burst-bottom absolute bottom-20 right-[8%] h-[26rem] w-[26rem] opacity-18" />

      <div className="vector-burst vector-burst-side-left absolute -left-32 top-[18%] h-[22rem] w-[22rem] opacity-22" />
      <div className="vector-burst vector-burst-side-right absolute -right-32 top-[58%] h-[24rem] w-[24rem] opacity-20" />
      <div className="vector-burst vector-burst-upper-left absolute left-[6%] top-[7%] h-[16rem] w-[16rem] opacity-14" />
      <div className="vector-burst vector-burst-lower-left absolute left-[10%] bottom-[12%] h-[18rem] w-[18rem] opacity-12" />
      <div className="vector-burst vector-burst-mid-right absolute right-[6%] top-[32%] h-[18rem] w-[18rem] opacity-14" />
    </div>
  );
}
