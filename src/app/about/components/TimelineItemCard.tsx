import React, { forwardRef } from "react";
import { TimelineItem } from "@/data/timeline";

interface Props {
  item: TimelineItem;
  onClick: () => void;
  selected: boolean;
}

const TimelineItemCard = forwardRef<HTMLDivElement, Props>(
  ({ item: { title, date }, onClick, selected }, ref) => {
    return (
      <div
        ref={ref}
        className={`block cursor-pointer border rounded p-2 bg-black  ${
          selected ? "translate-x-[-32px]" : ""
        } transition-transform duration-300`}
        onClick={onClick}
      >
        <span>{title}</span>
        <span className="bg-[#0077aa] rounded py-1 block text-center">
          {date}
        </span>
      </div>
    );
  }
);

TimelineItemCard.displayName = "TimelineItemCard";

export default TimelineItemCard;
