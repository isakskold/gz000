import {
  FaDiscord,
  FaTwitch,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black/90 backdrop-blur-md relative">
      {/* Blurred edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center gap-8 py-8 px-4 max-w-[800px] mx-auto">
        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://discord.gg/your-discord"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00aaff] transition-colors duration-200"
          >
            <FaDiscord className="w-6 h-6" />
          </a>
          <a
            href="https://twitch.tv/your-twitch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00aaff] transition-colors duration-200"
          >
            <FaTwitch className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com/your-youtube"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00aaff] transition-colors duration-200"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00aaff] transition-colors duration-200"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-gray-400 hover:text-[#00aaff] transition-colors duration-200"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm font-rajdhani">
          © {currentYear} GroundZero000
        </div>
      </div>
    </footer>
  );
};

export default Footer;
