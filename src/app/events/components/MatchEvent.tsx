import { ShowmatchEvent } from "@/types/events";

interface MatchEventProps {
  event: ShowmatchEvent;
}

export default function MatchEvent({ event }: MatchEventProps) {
  const format = event.teams[0].players.length;
  const isTeamMatch = format === 3;

  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg p-3 sm:p-6 pt-4 sm:pt-8 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Main card container */}
      <div className="flex flex-col gap-2 sm:gap-4">
        {/* Header section - Format and Prize Pool */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[#00aaff] font-bold text-sm sm:text-lg">
              {format}v{format}
            </span>
            <span className="text-gray-400 text-xs sm:text-base">
              Showmatch
            </span>
          </div>
          <div className="text-[#00aaff] font-bold text-base sm:text-xl">
            ${event.prizePool.toLocaleString()}
          </div>
        </div>

        {/* Teams section */}
        <div className="flex items-center justify-between">
          {/* Team 1 */}
          <div className="flex-1 max-w-[40%]">
            {isTeamMatch && (
              <div className="text-gray-400 text-xs mb-1 text-center truncate">
                {event.teams[0].name}
              </div>
            )}
            <div className="flex flex-col gap-0.5 sm:gap-1 items-center">
              {event.teams[0].players.map((player, index) => (
                <div
                  key={index}
                  className="text-white font-medium text-sm sm:text-lg text-center truncate w-full"
                >
                  {player}
                </div>
              ))}
            </div>
          </div>

          {/* VS separator */}
          <div className="flex flex-col items-center justify-center mx-2 sm:mx-8 shrink-0">
            <div className="text-[#00aaff] font-bold text-lg sm:text-2xl">
              vs
            </div>
          </div>

          {/* Team 2 */}
          <div className="flex-1 max-w-[40%]">
            {isTeamMatch && (
              <div className="text-gray-400 text-xs mb-1 text-center truncate">
                {event.teams[1].name}
              </div>
            )}
            <div className="flex flex-col gap-0.5 sm:gap-1 items-center">
              {event.teams[1].players.map((player, index) => (
                <div
                  key={index}
                  className="text-white font-medium text-sm sm:text-lg text-center truncate w-full"
                >
                  {player}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer - Date and Time */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center text-xs text-gray-400 gap-1 sm:gap-0">
          <div>{event.date}</div>
          <div>{event.time}</div>
        </div>
      </div>
    </div>
  );
}
