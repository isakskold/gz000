interface Props {
  className?: string; // Optional className prop
  text: string; // Required text prop
}

const PageHeader: React.FC<Props> = ({ className = "", text }) => {
  return (
    <h1 className={`text-5xl text-center mt-9 w-fit ${className}`}>{text}</h1>
  );
};

export default PageHeader;
