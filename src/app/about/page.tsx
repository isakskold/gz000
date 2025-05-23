// app/about/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PageHeader from "@/components/PageHeader";
import TimelineWrapper from "./components/TimelineWrapper";
import { TimelineItem } from "@/types/timeline";

const bioFile = path.join(process.cwd(), "content/bio/bio.md");
const bioFileContent = fs.readFileSync(bioFile, "utf8");
const { data: bioData } = matter(bioFileContent);
const bioText = bioData.bioText || "";

const timelineFile = path.join(process.cwd(), "content/timeline/timeline.md");
const timelineFileContent = fs.readFileSync(timelineFile, "utf8");
const { data: timelineData } = matter(timelineFileContent);
const timelineItems = (timelineData.timelineItems || []).sort(
  (a: TimelineItem, b: TimelineItem) =>
    new Date(a.date).getTime() - new Date(b.date).getTime()
);

const Page = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[800px] mx-auto">
      <PageHeader text="About Me" />
      <div className="flex flex-col gap-20 w-full items-center mt-8">
        {/* Bio Section */}
        <div className="w-full">
          <h2 className="text-3xl font-oxanium text-stroke mb-6 text-center">
            Bio
          </h2>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg p-8 shadow-lg border border-gray-700">
            <p className="font-rajdhani text-gray-300 text-lg leading-relaxed text-center whitespace-pre-line">
              {bioText}
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="w-full">
          <h2 className="text-3xl font-oxanium text-stroke mb-6 text-center">
            Timeline
          </h2>
          <TimelineWrapper timelineItems={timelineItems} />
        </div>
      </div>
    </div>
  );
};

export default Page;
