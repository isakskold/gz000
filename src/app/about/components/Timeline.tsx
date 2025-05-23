"use client";

import React, { useState, useEffect, useRef } from "react";
import TimelineItemCard from "./TimelineItemCard";

interface TimelineItem {
  title: string;
  date: string;
  info: string;
}

interface TimelineProps {
  timelineItems: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ timelineItems }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const manualSelectionRef = useRef(false);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sort timelineItems by date ascending (earliest first)
  const sortedTimelineItems = [...timelineItems].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  useEffect(() => {
    if (manualSelectionRef.current) return;

    const autoChangeIndex = () => {
      setSelectedIndex(
        (prevIndex) => (prevIndex + 1) % sortedTimelineItems.length
      );
    };

    const intervalId = setInterval(() => {
      autoChangeIndex();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [sortedTimelineItems.length]);

  useEffect(() => {
    const item = itemsRef.current[selectedIndex];
    const container = containerRef.current;
    if (item && container) {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        const itemTop = item.offsetTop;
        const itemHeight = item.offsetHeight;
        const containerHeight = container.offsetHeight;
        const targetScroll = itemTop - containerHeight / 2 + itemHeight / 2;

        container.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }, 100); // Small delay to ensure smooth transition
    }
  }, [selectedIndex]);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    manualSelectionRef.current = true;
  };

  return (
    <div className="hidden md:flex justify-between w-full">
      {/* Left Panel: Dynamic content */}
      <div className="flex flex-col gap-8 justify-start max-w-1/2 max-h-[30vh] min-h-80 overflow-y-auto p-6 rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] shadow-lg border border-gray-700">
        <div key={selectedIndex} className="animate-fade">
          <h3 className="text-[clamp(1.5rem,0.625rem+1vw,2rem)] text-[#00aaff] mb-4 text-center font-oxanium text-stroke font-bold">
            {sortedTimelineItems[selectedIndex].title}
          </h3>
          <p className="text-center text-[clamp(0.875rem,0.625rem+1vw,1.25rem)] font-rajdhani leading-relaxed">
            {sortedTimelineItems[selectedIndex].info}
          </p>
        </div>
      </div>

      {/* Right Panel Wrapper */}
      <div className="relative flex">
        {/* Scrollable Timeline Items */}
        <div
          ref={containerRef}
          className="flex flex-col gap-8 max-h-[30vh] min-h-80 px-11 py-3 overflow-y-auto rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] shadow-lg border border-gray-700 scroll-smooth"
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
            className={`w-full bg-[#00aaff] rounded ${
              manualSelectionRef.current ? "opacity-0" : "opacity-100"
            } ${manualSelectionRef.current ? "" : "progress-bar-fill"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
