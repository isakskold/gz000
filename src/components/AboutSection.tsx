import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Mail, MessageCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-secondary-section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            About <span className="gradient-text">ProRL</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate Rocket League content creator dedicated to helping
            players improve their skills through high-quality tutorials,
            gameplay analysis, and entertaining streams.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main About Content */}
          <div className="lg:col-span-2">
            <Card className="border-border/30 subtle-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold">My Journey</h3>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Started playing Rocket League in 2016 and quickly fell in
                    love with the competitive scene. What began as a casual
                    hobby evolved into a passion for mastering the game's
                    mechanics and sharing knowledge with the community.
                  </p>
                  <p>
                    After reaching Grand Champion and competing in various
                    tournaments, I decided to start creating content to help
                    other players overcome the challenges I faced during my
                    climb. My focus is on 1v1 gameplay, mechanical improvement,
                    and strategic analysis.
                  </p>
                  <p>
                    Today, I stream regularly on Twitch and create in-depth
                    tutorials on YouTube, building a community of dedicated
                    players who share the same passion for improvement and
                    competition.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div>
            <Card className="border-border">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-xl font-bold flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Get In Touch</span>
                </h3>

                <p className="text-muted-foreground">
                  Want to collaborate, ask questions, or just chat about Rocket
                  League? I'd love to hear from you!
                </p>

                <div className="space-y-3">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.64 5.93a.5.5 0 01.86 0L13 7.07l1.5-1.14a.5.5 0 01.86 0c.25.19.25.57 0 .76L14 7.93l1.36 1.14a.5.5 0 010 .76c-.25.19-.61.19-.86 0L13 8.69l-1.5 1.14a.5.5 0 01-.86 0c-.25-.19-.25-.57 0-.76L12 7.93l-1.36-1.14a.5.5 0 010-.76z" />
                    </svg>
                    Follow on Twitch
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-red-500 text-red-500 hover:bg-red-500/10"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Subscribe on YouTube
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-500 hover:bg-blue-500/10"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Join Discord Community
                  </Button>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>
                      <strong>Streaming Schedule:</strong>
                    </p>
                    <p>Mon, Wed, Fri - 7PM EST</p>
                    <p>
                      <strong>New Videos:</strong>
                    </p>
                    <p>Tuesdays & Saturdays</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
