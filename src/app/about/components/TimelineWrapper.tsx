"use client";

import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";

// Dynamically import Timeline and MobileTimeline with ssr: false to make sure they are rendered only on the client-side
const Timeline = dynamic(() => import("./Timeline"), { ssr: false });
const MobileTimeline = dynamic(() => import("./MobileTimeline"), {
  ssr: false,
});

const TimelineWrapper = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? <Timeline /> : <MobileTimeline />;
};

export default TimelineWrapper;
