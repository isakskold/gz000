const HeroSection = () => {
  return (
    <section id="stream" className="pt-24 pb-16 px-4 bg-primary-section">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">GroundZero000</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Professional Rocket League caster, content creator, and
                streamer. Experience top-tier gameplay analysis, live tournament
                casting, and entertaining community streams.
              </p>
            </div>
          </div>

          {/* Right Content - Twitch Stream Embed */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-border/30 subtle-shadow-lg">
              <iframe
                src="https://player.twitch.tv/?channel=groundzero000&parent=localhost"
                frameBorder="0"
                allowFullScreen={true}
                scrolling="no"
                height="378"
                width="100%"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
