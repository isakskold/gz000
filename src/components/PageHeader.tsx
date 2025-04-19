interface Props {
  className?: string; // Optional className prop
  text: string; // Required text prop
}

const PageHeader: React.FC<Props> = ({ className = "", text }) => {
  return (
    <h1
      className={`text-[clamp(2.5rem,2rem+2vw,4rem)] text-center font-oxanium font-bold tracking-wider mt-9 w-fit ${className}`}
      style={{
        textShadow: "0 0 20px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.7)",
      }}
    >
      {text}
    </h1>
  );
};

export default PageHeader;
