export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] min-h-[100svh] overflow-hidden bg-black">
      <video
        className="hidden md:block absolute inset-0 h-full w-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <video
        className="block md:hidden absolute inset-0 h-full w-full object-contain"
        src="/hero-video-mob.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/18" />
    </section>
  );
}
