import ContactItem from "./ContactItem";
import { contactData } from "@/data/contact";
import maxWidth from "@/const/maxWidth";
import PageHeader from "@/components/PageHeader";

interface Props {}

const page: React.FC<Props> = () => {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <PageHeader text="Contact Me" />

      <div
        className={`flex flex-col mx-auto gap-11 mb-9 justify-center w-full max-w-[${maxWidth}]`}
      >
        {Object.keys(contactData).map((key, index) => (
          <div
            key={key}
            className="animate-slide-in-top" // Same animation for all items
            style={{
              animationDelay: `${index * 150}ms`, // Dynamically calculate delay
            }}
          >
            <ContactItem key={key} label={key as keyof typeof contactData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
