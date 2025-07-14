"use client";
import { FaDiscord } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ContactDataType } from "@/types/contact";

const DiscordButton = () => {
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

  return (
    <div className="hidden show-discord-button fixed top-48 right-[clamp(20px,5vw,60px)] z-30">
      <a
        href={contactData.discord}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center hover:opacity-90 transition-all duration-200 rotate-[4deg] hover:rotate-[0deg] transform-gpu"
      >
        {/* Discord Logo Container */}
        <div className="flex items-center justify-center bg-white w-[clamp(60px,15vw,80px)] h-[clamp(70px,17vw,90px)] rounded-[14px] shadow-lg relative">
          <FaDiscord className="w-[clamp(40px,10vw,48px)] h-[clamp(40px,10vw,48px)] text-[#5865F2]" />
        </div>

        {/* Text Container */}
        <div className="flex flex-col justify-center bg-[#5865F2] px-[clamp(16px,4vw,24px)] h-[clamp(56px,14vw,72px)] ml-[-10px] rounded-r-[14px] shadow-lg">
          <span className="text-white font-bold text-[clamp(16px,4vw,24px)] whitespace-nowrap">
            JOIN MY SERVER!
          </span>
          <span className="text-white/80 text-[clamp(12px,2vw,14px)]">
            {contactData.discord}
          </span>
        </div>
      </a>
    </div>
  );
};

export default DiscordButton;
