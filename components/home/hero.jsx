import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-[58vh] min-h-[420px] overflow-hidden bg-black md:h-[68vh] lg:h-[76vh]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/65" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/25 to-transparent" />

      <div className="relative z-10 flex h-full items-start justify-center px-6 pt-6 md:pt-8">
        <Image
          src="/space-logo.svg"
          alt="Space Palette"
          width={150}
          height={150}
          priority
          className="h-auto w-[72px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)] md:w-[92px] lg:w-[110px]"
        />
      </div>
    </section>
  );
}
