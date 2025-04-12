"use client";

import React, { useState, useEffect, useRef } from "react";
import TimelineItemCard from "./TimelineItemCard";
import { timelineItems } from "@/data/timeline";

const Timeline: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const manualSelectionRef = useRef(false);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sort the timelineItems by the date in ascending order (earliest first)
  const sortedTimelineItems = [...timelineItems].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  // Function to automatically update the selected index
  const autoChangeIndex = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex + 1) % sortedTimelineItems.length
    );
  };

  // Automatically change selected item every 10 seconds unless manually changed
  useEffect(() => {
    if (manualSelectionRef.current) return; // Don't run if manually selected

    const intervalId = setInterval(() => {
      autoChangeIndex();
    }, 4000); // Change every 10 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [manualSelectionRef.current]);

  // Scroll the selected item into view relative to the container
  useEffect(() => {
    const item = itemsRef.current[selectedIndex];
    if (item) {
      item.scrollIntoView({
        behavior: "smooth", // Scroll smoothly
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    manualSelectionRef.current = true; // Disable auto change when user manually selects an item
  };

  return (
    <div className="flex justify-between w-full">
      {/* Left Panel: Dynamic content */}
      <div className="flex flex-col gap-8 justify-start max-w-1/2 p-6 rounded-lg shadow-2xl">
        <h3 className="text-[clamp(1.5rem,0.625rem+1vw,2rem)] text-center">
          {sortedTimelineItems[selectedIndex].title}
        </h3>
        <p className="text-center text-[clamp(0.875rem,0.625rem+1vw,1.25rem)]">
          {sortedTimelineItems[selectedIndex].info}
        </p>
      </div>

      {/* Right Panel: Vertical list */}
      <div
        ref={containerRef}
        className="flex flex-col gap-8 max-h-[30vh] min-h-80 px-11 py-3 overflow-y-auto  rounded-lg shadow-2xl "
      >
        {sortedTimelineItems.map((item, index) => (
          <TimelineItemCard
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            key={index}
            item={item}
            selected={index === selectedIndex}
            onClick={() => handleItemClick(index)} // Change selection on click
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
