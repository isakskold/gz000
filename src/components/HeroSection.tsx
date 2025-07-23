import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Eye, Clock } from "lucide-react";

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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 subtle-shadow"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Live Stream
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary/50 subtle-shadow"
              >
                View YouTube Channel
              </Button>
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
