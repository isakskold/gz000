import Timeline from "./components/Timeline";
import PageHeader from "@/components/PageHeader";

const page: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[800px] mx-auto">
      <PageHeader text="About Me" />
      <div className="flex flex-col gap-20 w-full items-center mt-8 ">
        <h2 className="text-3xl">Timeline</h2>
        <Timeline />
      </div>
    </div>
  );
};

export default page;
