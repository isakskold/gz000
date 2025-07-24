import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Mail, MessageCircle } from "lucide-react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Read bio data
const bioFile = path.join(process.cwd(), "content", "bio", "bio.md");
const bioFileContent = fs.readFileSync(bioFile, "utf8");
const { data: bioData } = matter(bioFileContent);

// Read contact data
const contactFile = path.join(
  process.cwd(),
  "content",
  "contact",
  "contact.md"
);
const contactFileContent = fs.readFileSync(contactFile, "utf8");
const { data: contactData } = matter(contactFileContent);

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
            <Card className="border-border/30 subtle-shadow h-full">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold">Bio</h3>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                  {bioData.bioText}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div>
            <Card className="border-border h-full">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-xl font-bold flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Get In Touch</span>
                </h3>

                <p className="text-muted-foreground">
                  Want to collaborate, ask questions, or just chat about Rocket
                  League? I'd love to hear from you!
                </p>

                <div className="space-y-4">
                  <a
                    href={contactData.twitch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-purple-500 text-foreground hover:bg-purple-500/10 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-purple-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
                    </svg>
                    Follow on Twitch
                  </a>

                  <a
                    href={contactData.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-red-500 text-foreground hover:bg-red-500/10 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-red-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Subscribe on YouTube
                  </a>

                  <a
                    href={contactData.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-blue-500 text-foreground hover:bg-blue-500/10 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                    </svg>
                    Join Discord Community
                  </a>

                  <a
                    href={contactData.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-gray-400 text-foreground hover:bg-gray-400/10 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                    Follow on X
                  </a>

                  <a
                    href={`mailto:${contactData.email}`}
                    className="w-full border border-green-500 text-foreground hover:bg-green-500/10 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3"
                  >
                    <Mail className="w-4 h-4 mr-2 text-green-500" />
                    Send Email
                  </a>
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
