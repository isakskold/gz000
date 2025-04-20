"use client"; // Indicating this is a client component

import { FiCopy } from "react-icons/fi"; // Importing the copy icon from react-icons
import { FiCheck } from "react-icons/fi";
import { contactData } from "@/data/contact";
import { useState } from "react"; // Importing useState

interface ContactItemProps {
  label: keyof typeof contactData; // Enforce that 'label' is a valid key from 'contactData'
}

const ContactItem: React.FC<ContactItemProps> = ({ label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contactData[label]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg p-4 sm:p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-2">
          <div className="font-oxanium text-stroke text-lg sm:text-xl font-bold break-words">
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </div>
          <button
            onClick={handleCopy}
            className="text-[#00aaff] hover:text-white transition-colors duration-200 flex-shrink-0"
          >
            {copied ? <FiCheck size={20} /> : <FiCopy size={20} />}
          </button>
        </div>
        <div className="font-rajdhani text-gray-300 text-base sm:text-lg break-words">
          {contactData[label]}
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
