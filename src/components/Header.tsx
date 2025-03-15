import {
  FaDiscord,
  FaTwitch,
  FaYoutube,
  FaSteam,
  FaEnvelope,
} from "react-icons/fa";

import { Bars3Icon } from "@heroicons/react/24/solid";
import maxWidth from "@/const/maxWidth";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className="fixed flex px-2 top-0 w-full h-16 sm:h-32 bg-black">
      {/* Header content */}
      <div
        className={`flex grow mx-auto justify-between items-center max-w-[${maxWidth}]`}
      >
        {/* Logo */}
        <img
          src="/pngs/whiteLogo.png"
          alt="Logo"
          className="h-14 sm:h-16 md:h-20 w-auto"
        />
        {/* Burger menu for small screens */}
        <Bars3Icon className="md:hidden w-auto h-8 sm:h-10 text-white" />

        {/* Navbar */}
        <div className="hidden md:flex text-white gap-3.5 tracking-wider">
          <p>Home</p>
          <p>My Schedule</p>
          <p>About Me</p>
          <p>Contact</p>
        </div>
        {/* Socials */}
        <div className="hidden md:flex text-white gap-7">
          <FaDiscord className="w-6 h-6 text-white" />
          <FaTwitch className="w-6 h-6 text-white" />
          <FaYoutube className="w-6 h-6 text-white" />
          <FaSteam className="w-6 h-6 text-white" />
          <FaEnvelope className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
