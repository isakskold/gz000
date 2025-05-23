"use client";

import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";

// Dynamically import Timeline and MobileTimeline with ssr: false to make sure they are rendered only on the client-side
const Timeline = dynamic(() => import("./Timeline"), { ssr: false });
const MobileTimeline = dynamic(() => import("./MobileTimeline"), {
  ssr: false,
});

interface TimelineItem {
  title: string;
  date: string;
  info: string;
}

interface TimelineWrapperProps {
  timelineItems: TimelineItem[];
}

const TimelineWrapper = ({ timelineItems }: TimelineWrapperProps) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? (
    <Timeline timelineItems={timelineItems} />
  ) : (
    <MobileTimeline timelineItems={timelineItems} />
  );
};

export default TimelineWrapper;
