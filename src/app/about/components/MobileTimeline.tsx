"use client";

import React from "react";
import { timelineItems } from "@/data/timeline";

const MobileTimeline: React.FC = () => {
  const sortedTimelineItems = [...timelineItems].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="flex flex-col w-full gap-6 relative">
      {/* Continuous Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2">
        <div className="w-0.5 h-full bg-[#00aaff] rounded-full" />
      </div>

      {sortedTimelineItems.map((item, index) => (
        <React.Fragment key={index}>
          <div className="relative z-10">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-oxanium text-stroke text-xl font-bold">
                    {item.title}
                  </h3>
                  <span className="font-rajdhani text-[#00aaff] text-sm">
                    {item.date}
                  </span>
                </div>
                <p className="font-rajdhani text-gray-300 leading-relaxed">
                  {item.info}
                </p>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MobileTimeline;
