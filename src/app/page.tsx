import maxWidth from "@/const/maxWidth";

interface Props {}

const page: React.FC<Props> = () => {
  return (
    <div
      className={`grow flex gap-20 md:gap-10 flex-col md:flex-row justify-center items-center mx-auto relative max-w-[${maxWidth}]`}
    >
      <img
        src="/pngs/whiteLogoShadowed.png"
        alt="Shadowed Logo"
        className="h-auto w-1/3 max-w-[1000px] min-w-52 -m-14"
      />

      <div className="flex flex-col items-center gap-5 text-gray-300">
        <h1 className="typewriter font-orbitron text-4xl md:text-6xl  font-bold tracking-widest">
          GroundZero000
        </h1>
        <span className="font-rajdhani text-center h-fit w-fit text-2xl tracking-wider">
          Welcome to my website!
        </span>
      </div>
    </div>
  );
};

export default page;
