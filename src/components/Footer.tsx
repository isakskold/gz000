import { Button } from "@/components/ui/button";
import { Twitch, Youtube, Twitter, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "Twitch", icon: Twitch, url: "#", color: "hover:text-purple-400" },
    { name: "YouTube", icon: Youtube, url: "#", color: "hover:text-red-400" },
    { name: "Twitter", icon: Twitter, url: "#", color: "hover:text-blue-400" },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "hover:text-pink-400",
    },
    { name: "Email", icon: Mail, url: "#", color: "hover:text-green-400" },
  ];

  const quickLinks = [
    { name: "Live Stream", href: "#stream" },
    { name: "Latest Videos", href: "#videos" },
    { name: "Leaderboard", href: "#leaderboard" },
    { name: "About", href: "#about" },
  ];

  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">G</span>
              </div>
              <span className="text-2xl font-bold gradient-text">
                GroundZero000
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Professional Rocket League content creator helping players improve
              their skills and climb the ranks.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  className={`hover:bg-slate-700 ${link.color} transition-colors`}
                >
                  <link.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Content</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Tutorials
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Gameplay Analysis
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Highlight Reels
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Live Streams
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Stay Updated</h3>
            <p className="text-gray-300 text-sm">
              Get notified about new videos, stream schedules, and exclusive
              content.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-sky-400 hover:bg-sky-500 text-slate-900">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1 text-gray-300 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for the Rocket League community</span>
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
