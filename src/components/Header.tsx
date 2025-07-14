"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  FaDiscord,
  FaTwitch,
  FaYoutube,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ContactDataType } from "@/types/contact";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactData, setContactData] = useState<ContactDataType | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch("/api/contact");
        if (!response.ok) throw new Error("Failed to fetch contact data");
        const data = await response.json();
        setContactData(data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchContactData();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  if (!contactData) {
    return (
      <div className="fixed flex px-2 top-0 w-full h-16 sm:h-32 bg-black/80 backdrop-blur-sm z-[9999] border-b border-gray-800">
        <div className="flex grow mx-auto justify-between items-center max-w-[1200px]">
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/pngs/whiteLogo.png"
              alt="Logo"
              width={80}
              height={80}
              className="h-14 sm:h-16 md:h-20 w-auto hover:scale-105 transition-transform duration-200 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed flex px-2 top-0 w-full h-16 sm:h-32 bg-black/80 backdrop-blur-sm z-[9999] border-b border-gray-800">
        <div className="flex grow mx-auto justify-between items-center max-w-[1200px]">
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/pngs/whiteLogo.png"
              alt="Logo"
              width={80}
              height={80}
              className="h-14 sm:h-16 md:h-20 w-auto hover:scale-105 transition-transform duration-200 cursor-pointer"
            />
          </Link>

          {/* Toggle button for mobile menu */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden w-auto h-8 sm:h-10 text-white hover:text-gray-300 transition-colors duration-200"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-8 h-8" />
            ) : (
              <FaBars className="w-8 h-8" />
            )}
          </button>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center gap-8 text-white font-rajdhani text-lg">
            <Link
              href="/"
              className={`cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
                pathname === "/" ? "text-[#00aaff]" : ""
              }`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/events"
              className={`cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
                pathname === "/events" ? "text-[#00aaff]" : ""
              }`}
              onClick={handleLinkClick}
            >
              Events
            </Link>
            <Link
              href="/leaderboard"
              className={`cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
                pathname === "/leaderboard" ? "text-[#00aaff]" : ""
              }`}
              onClick={handleLinkClick}
            >
              Leaderboard
            </Link>
            <Link
              href="/about"
              className={`cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
                pathname === "/about" ? "text-[#00aaff]" : ""
              }`}
              onClick={handleLinkClick}
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className={`cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
                pathname === "/contact" ? "text-[#00aaff]" : ""
              }`}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Socials */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={contactData.discord}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="w-6 h-6 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
            <a
              href={contactData.twitch}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitch className="w-6 h-6 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
            <a
              href={contactData.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="w-6 h-6 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
            <a
              href={contactData.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="w-6 h-6 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
            <a href={`mailto:${contactData.email}`}>
              <FaEnvelope className="w-6 h-6 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300 z-[9998] ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center gap-8 text-white font-rajdhani text-2xl">
            <Link
              href="/"
              className={`cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
                pathname === "/" ? "text-[#00aaff]" : ""
              }`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/events"
              className={`cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
                pathname === "/events" ? "text-[#00aaff]" : ""
              }`}
              onClick={handleLinkClick}
            >
              Events
            </Link>
            <Link
              href="/leaderboard"
              className={`cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
                pathname === "/leaderboard" ? "text-[#00aaff]" : ""
              }`}
              onClick={handleLinkClick}
            >
              Leaderboard
            </Link>
            <Link
              href="/about"
              className={`cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
                pathname === "/about" ? "text-[#00aaff]" : ""
              }`}
              onClick={handleLinkClick}
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className={`cursor-pointer hover:text-gray-300 transition-colors duration-200 ${
                pathname === "/contact" ? "text-[#00aaff]" : ""
              }`}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>

          <div className="flex gap-8 mt-8">
            <a
              href={contactData.discord}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
            <a
              href={contactData.twitch}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitch className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
            <a
              href={contactData.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
            <a
              href={contactData.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
            <a href={`mailto:${contactData.email}`}>
              <FaEnvelope className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
