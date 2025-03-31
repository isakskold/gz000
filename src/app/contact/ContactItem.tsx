"use client"; // Indicating this is a client component

import { FiCopy } from "react-icons/fi"; // Importing the copy icon from react-icons
import { FiCheck } from "react-icons/fi";
import { contactData } from "@/data/contact";
import { useState } from "react"; // Importing useState

interface ContactItemProps {
  label: keyof typeof contactData; // Enforce that 'label' is a valid key from 'contactData'
}

const ContactItem: React.FC<ContactItemProps> = ({ label }) => {
  const itemData: string = contactData[label]; // Access the contactData field using the label

  const [copied, setCopied] = useState(false);

  // Function to handle copying to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(itemData); // Using the Clipboard API to copy text
      setCopied(true); // Set the copied state to true
      setTimeout(() => {
        setCopied(false); // Revert the icon back to the copy icon after 4 seconds
      }, 2000); //
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-md bg-black/20 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
      <div className="flex flex-col w-full sm:w-auto">
        <h2 className="text-xl font-semibold break-words">{label}</h2>
        <p className="break-words">{itemData}</p>
      </div>
      <button
        className="text-blue-300 hover:text-blue-500 mt-3 sm:mt-0 sm:ml-4"
        onClick={handleCopy}
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <FiCheck
            size={24}
            style={{
              filter:
                "drop-shadow(0 0 20px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 1px rgba(0, 0, 0, 1))",
            }}
          />
        ) : (
          <FiCopy
            size={24}
            style={{
              filter:
                "drop-shadow(0 0 20px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 1px rgba(0, 0, 0, 1))",
            }}
          />
        )}
      </button>
    </div>
  );
};

export default ContactItem;
