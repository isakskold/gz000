"use client";

import React from "react";
import { timelineItems } from "@/data/timeline";

const MobileTimeline: React.FC = () => {
  const sortedTimelineItems = [...timelineItems].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="flex flex-col w-full">
      {sortedTimelineItems.map((item, index) => (
        <React.Fragment key={index}>
          <div className="p-6 rounded-lg shadow-2xl border border-gray-50">
            <div className="flex justify-between gap-x-9 gap-y-2 flex-wrap">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span className="block text-sm rounded">{item.date}</span>
            </div>
            <p className="mt-4 text-base text">{item.info}</p>
          </div>
          {index < sortedTimelineItems.length - 1 && (
            <div className="flex justify-center">
              {/* Connector line appears only in the gap between items */}
              <div className="w-px h-6 bg-gray-300" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MobileTimeline;
