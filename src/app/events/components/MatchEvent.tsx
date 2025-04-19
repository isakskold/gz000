import { ShowmatchEvent } from "@/types/events";

interface MatchEventProps {
  event: ShowmatchEvent;
}

export default function MatchEvent({ event }: MatchEventProps) {
  const format = event.teams[0].players.length;
  const isTeamMatch = format === 3;

  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg p-6 pt-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-[#00aaff] font-bold text-lg">
              {format}v{format}
            </span>
            <span className="text-gray-400">Showmatch</span>
          </div>
          <div className="text-[#00aaff] font-bold text-xl">
            ${event.prizePool.toLocaleString()}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex-1">
            {isTeamMatch && (
              <div className="text-gray-400 text-sm mb-1 text-center">
                {event.teams[0].name}
              </div>
            )}
            <div className="flex flex-col gap-1 items-center">
              {event.teams[0].players.map((player, index) => (
                <div key={index} className="text-white font-medium text-lg">
                  {player}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mx-8">
            <div className="text-[#00aaff] font-bold text-2xl">vs</div>
          </div>

          <div className="flex-1">
            {isTeamMatch && (
              <div className="text-gray-400 text-sm mb-1 text-center">
                {event.teams[1].name}
              </div>
            )}
            <div className="flex flex-col gap-1 items-center">
              {event.teams[1].players.map((player, index) => (
                <div key={index} className="text-white font-medium text-lg">
                  {player}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-400">
          <div>{event.date}</div>
          <div>{event.time}</div>
        </div>
      </div>
    </div>
  );
}
