import { TournamentEvent as TournamentEventType } from "@/types/events";
import { Link } from "lucide-react";

interface TournamentEventProps {
  event: TournamentEventType;
}

export default function TournamentEvent({ event }: TournamentEventProps) {
  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-400">Tournament</div>
          <div className="text-[#00aaff] font-bold text-xl">
            ${event.prizePool.toLocaleString()}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-white font-medium text-xl">{event.name}</div>
          <div className="text-gray-400 text-sm">
            Max {event.maxParticipants} Participants
          </div>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div>{event.date}</div>
            <div>{event.time}</div>
          </div>
          <div className="flex items-center gap-2">
            {event.url && (
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00aaff] hover:text-[#0077aa] transition-colors"
                aria-label="Register for tournament"
              >
                <Link className="w-5 h-5" />
              </a>
            )}
            <div
              className={`font-bold ${
                event.open ? "text-[#00aaff]" : "text-red-500"
              }`}
            >
              {event.open ? "Open" : "Closed"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
