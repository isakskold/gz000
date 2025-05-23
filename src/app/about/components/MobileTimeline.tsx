"use client";

import React from "react";

interface MobileTimelineProps {
  timelineItems: any[];
}

const MobileTimeline: React.FC<MobileTimelineProps> = ({ timelineItems }) => {
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
                <div className="flex flex-wrap gap-4 justify-between items-start">
                  <h3 className="font-oxanium text-[#00aaff] text-lg font-bold w-[220px] break-words">
                    {item.title}
                  </h3>
                  <span className="font-rajdhani text-[#00aaff] text-sm text-right">
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
