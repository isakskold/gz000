import { leaderboardData } from "@/data/leaderboard";
import PageHeader from "@/components/PageHeader";
import LeaderboardItem from "./components/LeaderboardItem";

const Page = () => {
  // Sort players by wins in descending order
  const sortedPlayers = [...leaderboardData].sort((a, b) => b.wins - a.wins);

  return (
    <div className="flex flex-col items-center w-full gap-12">
      <PageHeader text="1v1 Leaderboard" />

      <div className="flex flex-col gap-4 w-full max-w-[800px]">
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
