import maxWidth from "@/const/maxWidth";

interface Props {}

const page: React.FC<Props> = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-[800px]">
        <img
          src="/pngs/whiteLogoShadowed.png"
          alt="Shadowed Logo"
          className="h-auto w-[clamp(10rem,8rem+5vw,18.75rem)]"
          style={{
            filter:
              "drop-shadow(0 0 20px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))",
          }}
        />

        <div
          className="flex flex-col items-center gap-4 text-white text-stroke"
          style={{
            filter:
              "drop-shadow(0 0 20px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))",
          }}
        >
          <h1 className="typewriter font-oxanium text-[clamp(2rem,1.5rem+2vw,4.5rem)] font-bold tracking-widest text-center">
            GroundZero000
          </h1>
          <h2 className="font-rajdhani text-center text-[clamp(1.25rem,1rem+1vw,2.5rem)] tracking-wider">
            Welcome to my website!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
