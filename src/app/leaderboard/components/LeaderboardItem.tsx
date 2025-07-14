import { LeaderboardPlayer } from "@/types/leaderboard";

interface Props {
  player: LeaderboardPlayer;
  index: number;
}

const LeaderboardItem: React.FC<Props> = ({ player, index }) => {
  return (
    <div
      className={`relative flex flex-col sm:flex-row items-center gap-[clamp(0.5rem,0.25rem+1vw,1rem)] p-[clamp(0.75rem,0.5rem+1vw,1.5rem)] rounded-lg bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] border border-gray-700 hover:border-[#00aaff] transition-colors duration-200 ${
        index === 0 ? "border-[#00aaff] shadow-lg shadow-[#00aaff]/20" : ""
      }`}
    >
      {/* Rank */}
      <div
        className={`absolute -top-[clamp(1rem,0.75rem+1vw,1.5rem)] -left-[clamp(1rem,0.75rem+1vw,1.5rem)] flex items-center justify-center w-[clamp(2.5rem,2rem+2vw,3.5rem)] h-[clamp(2.5rem,2rem+2vw,3.5rem)] rounded-full text-[clamp(1rem,0.75rem+1vw,1.5rem)] font-bold shadow-lg shadow-black/50 ${
          index === 0 ? "bg-[#00aaff] text-black" : "bg-gray-800 text-white"
        }`}
      >
        #{index + 1}
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-[clamp(0.5rem,0.25rem+1vw,1rem)] flex-grow">
        {/* Avatar and Name */}
        <div className="flex items-center gap-[clamp(0.5rem,0.25rem+1vw,1rem)]">
          {/* Avatar */}
          <div className="w-[clamp(2.5rem,2rem+2vw,3.5rem)] h-[clamp(2.5rem,2rem+2vw,3.5rem)] rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-[clamp(1rem,0.75rem+1vw,1.5rem)] font-bold">
              {player.name.charAt(0).toUpperCase()}
            </span>
          </div>

          {/* Name */}
          <div>
            <h3 className="text-[clamp(1rem,0.75rem+1vw,1.5rem)] font-oxanium font-bold">
              {player.name}
            </h3>
          </div>
        </div>

        {/* Wins */}
        <div className="flex items-center gap-2">
          <span className="text-[#00aaff] font-bold text-[clamp(1rem,0.75rem+1vw,1.5rem)]">
            {player.wins}
          </span>
          <span className="text-gray-400 text-[clamp(0.875rem,0.625rem+1vw,1.25rem)]">
            wins
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardItem;
