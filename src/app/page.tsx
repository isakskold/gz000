import maxWidth from "@/const/maxWidth";

interface Props {}

const page: React.FC<Props> = () => {
  return (
    <div
      className={`w-full flex-wrap flex flex-col lg:flex-row gap-[clamp(4rem,-0.885rem+16.991vw,10rem)] lg:gap-4 justify-center items-center mx-auto relative max-w-[${maxWidth}]`}
    >
      <img
        src="/pngs/whiteLogoShadowed.png"
        alt="Shadowed Logo"
        className="h-auto w-[clamp(13rem,8.319rem+16.283vw,18.75rem))] -m-14 relative"
        style={{
          filter:
            "drop-shadow(0 0 20px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))",
        }}
      />

      <div
        className="flex flex-col p-4 items-center gap-5  text-white  text-stroke"
        style={{
          filter:
            "drop-shadow(0 0 20px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))",
        }}
      >
        <h1 className="typewriter  font-oxanium text-[clamp(2.5rem,1.257rem+4.324vw,4.5rem)] font-bold tracking-widest">
          GroundZero000
        </h1>
        <h2 className="font-rajdhani text-center h-fit w-fit text-[clamp(1.5rem,0.878rem+2.162vw,2.5rem)] tracking-wider">
          Welcome to my website!
        </h2>
      </div>
    </div>
  );
};

export default page;
