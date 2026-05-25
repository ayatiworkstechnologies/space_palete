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
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" />
    </section>
  );
}
