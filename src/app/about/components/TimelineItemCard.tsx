import React, { forwardRef } from "react";
import { TimelineItem } from "@/data/timeline";

interface Props {
  item: TimelineItem;
  onClick: () => void;
  selected: boolean;
}

const TimelineItemCard = forwardRef<HTMLDivElement, Props>(
  ({ item, onClick, selected }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={`cursor-pointer transition-all duration-200 ${
          selected
            ? "scale-105 text-[#00aaff]"
            : "text-gray-400 hover:text-white hover:scale-[1.02]"
        }`}
      >
        <div className="flex flex-col items-center gap-1">
          <div className="font-oxanium text-stroke font-bold text-lg">
            {item.title}
          </div>
          <div className="font-rajdhani text-sm">{item.date}</div>
        </div>
      </div>
    );
  }
);

TimelineItemCard.displayName = "TimelineItemCard";

export default TimelineItemCard;
