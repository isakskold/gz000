import { Button } from "@/components/ui/button";
import { Twitch, Youtube, Mail } from "lucide-react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Read contact data
const contactFile = path.join(
  process.cwd(),
  "content",
  "contact",
  "contact.md"
);
const contactFileContent = fs.readFileSync(contactFile, "utf8");
const { data: contactData } = matter(contactFileContent);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    {
      name: "Twitch",
      icon: Twitch,
      url: contactData.twitch,
      color: "hover:text-purple-400",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: contactData.youtube,
      color: "hover:text-red-400",
    },
    {
      name: "X",
      icon: XIcon,
      url: contactData.twitter,
      color: "hover:text-gray-400",
    },
    {
      name: "Discord",
      icon: DiscordIcon,
      url: contactData.discord,
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:${contactData.email}`,
      color: "hover:text-green-400",
    },
  ];

  const quickLinks = [
    { name: "Live Stream", href: "#stream" },
    { name: "Latest Videos", href: "#videos" },
    { name: "Leaderboard", href: "#leaderboard" },
    { name: "About", href: "#about" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <Image
              src="/pngs/whiteLogoShadowed.png"
              alt="GroundZero000 Logo"
              width={32}
              height={32}
            />
            <span className="text-2xl font-bold gradient-text">
              GroundZero000
            </span>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex space-x-2">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
                className={`hover:bg-slate-700 ${link.color} transition-colors rounded-full`}
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1 text-gray-300 text-sm">
            <span>Designed & Developed by</span>
            <a
              href="https://isakskold.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors font-medium"
            >
              Isak Sköld
            </a>
          </div>
          <div className="text-gray-300 text-sm">
            © 2024 GroundZero000. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
