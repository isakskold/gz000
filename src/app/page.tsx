import maxWidth from "@/const/maxWidth";

interface Props {}

const page: React.FC<Props> = () => {
  return (
    <div
      className={`w-full flex-wrap flex flex-col lg:flex-row gap-20 md:gap-10 justify-center items-center mx-auto relative max-w-[${maxWidth}]`}
    >
      <img
        src="/pngs/whiteLogoShadowed.png"
        alt="Shadowed Logo"
        className="h-auto w-1/3 max-w-[1000px] min-w-52 -m-14 relative"
        style={{
          filter:
            "drop-shadow(0 0 20px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))",
        }}
      />

      <div
        className="flex flex-col p-4 items-center gap-5 lg:mt-32  text-white  text-stroke"
        style={{
          filter:
            "drop-shadow(0 0 20px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))",
        }}
      >
        <h1 className="typewriter  font-oxanium text-4xl md:text-5xl lg:text-6xl lg2:text-7xl font-bold tracking-widest">
          GroundZero000
        </h1>
        <h2 className="font-rajdhani text-center h-fit w-fit text-2xl tracking-wider">
          Welcome to my website!
        </h2>
      </div>
    </div>
  );
};

export default page;
