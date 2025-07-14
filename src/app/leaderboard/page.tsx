import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PageHeader from "@/components/PageHeader";
import LeaderboardItem from "./components/LeaderboardItem";

const leaderboardFile = path.join(
  process.cwd(),
  "content/leaderboard/leaderboard.md"
);
const file = fs.readFileSync(leaderboardFile, "utf8");
const { data } = matter(file);
const leaderboardData = data.leaderboardData || [];

const Page = () => {
  // Sort players by wins in descending order
  const sortedPlayers = [...leaderboardData].sort((a, b) => b.wins - a.wins);

  return (
    <div className="flex flex-col items-center w-full gap-12">
      <PageHeader text="1v1 Leaderboard" />

      <div className="flex flex-col gap-[clamp(1rem,0.5rem+2vw,3rem)] w-full max-w-[800px]">
        {sortedPlayers.map((player, index) => (
          <div
            key={player.name}
            className="animate-slide-in-top"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <LeaderboardItem player={player} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
