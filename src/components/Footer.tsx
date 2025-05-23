"use client";

import { useState, useEffect } from "react";
import { FaDiscord, FaTwitch, FaYoutube, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ContactDataType } from "@/types/contact";

const Footer = () => {
  const [contactData, setContactData] = useState<ContactDataType | null>(null);

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

  if (!contactData) return null;

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
            href={contactData.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00aaff] transition-colors duration-200"
          >
            <FaDiscord className="w-6 h-6" />
          </a>
          <a
            href={contactData.twitch}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00aaff] transition-colors duration-200"
          >
            <FaTwitch className="w-6 h-6" />
          </a>
          <a
            href={contactData.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00aaff] transition-colors duration-200"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
          <a
            href={contactData.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00aaff] transition-colors duration-200"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${contactData.email}`}
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
