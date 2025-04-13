"use client";

import React, { useState, useEffect, useRef } from "react";
import TimelineItemCard from "./TimelineItemCard";
import { timelineItems } from "@/data/timeline";

const Timeline: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const manualSelectionRef = useRef(false);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sort timelineItems by date ascending (earliest first)
  const sortedTimelineItems = [...timelineItems].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const autoChangeIndex = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex + 1) % sortedTimelineItems.length
    );
  };

  useEffect(() => {
    if (manualSelectionRef.current) return;
    const intervalId = setInterval(() => {
      autoChangeIndex();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [manualSelectionRef.current]);

  useEffect(() => {
    const item = itemsRef.current[selectedIndex];
    if (item) {
      item.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    manualSelectionRef.current = true;
  };

  return (
    <div className="flex justify-between w-full">
      {/* Left Panel: Dynamic content */}
      <div className="flex flex-col gap-8 justify-start max-w-1/2 max-h-[30vh] min-h-80 overflow-y-auto p-6 rounded-lg shadow-2xl">
        <h3 className="text-[clamp(1.5rem,0.625rem+1vw,2rem)] text-center">
          {sortedTimelineItems[selectedIndex].title}
        </h3>
        <p className="text-center text-[clamp(0.875rem,0.625rem+1vw,1.25rem)]">
          {sortedTimelineItems[selectedIndex].info}
        </p>
      </div>

      {/* Right Panel Wrapper */}
      <div className="relative flex">
        {/* Scrollable Timeline Items */}
        <div
          ref={containerRef}
          className="flex flex-col gap-8 max-h-[30vh] min-h-80 px-11 py-3 overflow-y-auto rounded-lg shadow-2xl"
        >
          {sortedTimelineItems.map((item, index) => (
            <TimelineItemCard
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              key={index}
              item={item}
              selected={index === selectedIndex}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>

        {/* Static Progress Bar */}
        <div className="absolute right-[9px] top-0 bottom-0 w-2">
          <div
            key={selectedIndex}
            className={`w-full bg-[#0077aa] rounded ${
              manualSelectionRef.current ? "opacity-0" : "opacity-100"
            } ${manualSelectionRef.current ? "" : "progress-bar-fill"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
