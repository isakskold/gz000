// app/about/page.tsx
import PageHeader from "@/components/PageHeader";
import TimelineWrapper from "./components/TimelineWrapper";

const Page = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[800px] mx-auto">
      <PageHeader text="About Me" />
      <div className="flex flex-col gap-20 w-full items-center mt-8">
        <h2 className="text-3xl">Timeline</h2>
        <TimelineWrapper />
      </div>
    </div>
  );
};

export default Page;
