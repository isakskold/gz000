import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Eye, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="stream" className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-border/30 subtle-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                LIVE NOW
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Pro <span className="gradient-text">Rocket League</span> Content
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Watch high-level gameplay, tutorials, and competitive matches.
                Join thousands of viewers climbing the ranks together.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold">2.1K</span>
                <span className="text-muted-foreground">Followers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-accent" />
                <span className="font-semibold">847</span>
                <span className="text-muted-foreground">Watching</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-semibold">4h 23m</span>
                <span className="text-muted-foreground">Stream Time</span>
              </div>
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

          {/* Right Content - Stream Preview */}
          <div className="relative">
            <Card className="overflow-hidden bg-gradient-to-br from-card to-card/50 border-border/30 subtle-shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                {/* Mock Stream Content */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto subtle-shadow">
                      <Play className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Ranked 1v1 Grind</h3>
                      <p className="text-muted-foreground">
                        Climbing to Grand Champion
                      </p>
                    </div>
                  </div>
                </div>

                {/* Live indicator */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500/90 text-white">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    LIVE
                  </Badge>
                </div>

                {/* Viewer count */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black/60">
                    <Eye className="w-3 h-3 mr-1" />
                    847 viewers
                  </Badge>
                </div>
              </div>

              {/* Stream Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    Road to Grand Champion - 1v1 Ranked
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Currently Diamond III Div 4
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span className="font-medium">ProRL_Gaming</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Follow on Twitch
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
