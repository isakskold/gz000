// app/about/page.tsx
import PageHeader from "@/components/PageHeader";
import TimelineWrapper from "./components/TimelineWrapper";
import { bioText } from "@/data/bio";

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
          <TimelineWrapper />
        </div>
      </div>
    </div>
  );
};

export default Page;
