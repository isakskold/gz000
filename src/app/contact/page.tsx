import ContactItem from "./ContactItem";
import PageHeader from "@/components/PageHeader";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Props = Record<string, never>;

const contactFile = path.join(process.cwd(), "content/contact/contact.md");
const file = fs.readFileSync(contactFile, "utf8");
const { data: contactData } = matter(file);

const filteredContactKeys = Object.keys(contactData).filter(
  (key) => key !== "title"
);

const page: React.FC<Props> = () => {
  return (
    <div className="flex w-full flex-col items-center gap-12 relative z-0">
      <PageHeader text="Contact Me" />

      <div
        className={`flex flex-col mx-auto gap-11 justify-center w-full max-w-[800px]`}
      >
        {filteredContactKeys.map((key, index) => (
          <div
            key={key}
            className="animate-slide-in-top" // Same animation for all items
            style={{
              animationDelay: `${index * 150}ms`, // Dynamically calculate delay
            }}
          >
            <ContactItem key={key} label={key} value={contactData[key]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
