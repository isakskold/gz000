import { LeaderboardPlayer } from "@/data/leaderboard";

interface Props {
  player: LeaderboardPlayer;
  index: number;
}

const LeaderboardItem: React.FC<Props> = ({ player, index }) => {
  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] border border-gray-700 hover:border-[#00aaff] transition-colors duration-200 ${
        index === 0 ? "border-[#00aaff] shadow-lg shadow-[#00aaff]/20" : ""
      }`}
    >
      {/* Rank */}
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full text-xl font-bold ${
          index === 0 ? "bg-[#00aaff] text-black" : "bg-gray-800 text-white"
        }`}
      >
        #{index + 1}
      </div>

      {/* Player Info */}
      <div className="flex items-center gap-3 flex-grow">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
          <span className="text-xl font-bold">
            {player.name.charAt(0).toUpperCase()}
          </span>
        </div>

        {/* Name */}
        <div className="flex-grow">
          <h3 className="text-xl font-oxanium font-bold">{player.name}</h3>
        </div>

        {/* Wins */}
        <div className="flex items-center gap-2">
          <span className="text-[#00aaff] font-bold text-xl">
            {player.wins}
          </span>
          <span className="text-gray-400">wins</span>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardItem;
