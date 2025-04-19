import { events } from "@/data/events";
import PageHeader from "@/components/PageHeader";
import MatchEvent from "./components/MatchEvent";
import TournamentEvent from "./components/TournamentEvent";
import maxWidth from "@/const/maxWidth";

type Event = {
  type: "tournament" | "showmatch";
  date: string;
  time: string;
  prizePool: number;
} & (
  | {
      type: "tournament";
      name: string;
      maxParticipants: number;
      open: boolean;
    }
  | {
      type: "showmatch";
      teams: {
        name: string;
        players: string[];
      }[];
    }
);

const page: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full gap-12">
      <PageHeader text="Events" />
      <div
        className={`flex flex-col gap-[clamp(2rem,-1.73rem+12.973vw,8rem)] w-full max-w-[800px]`}
      >
        {events.map((event: Event, index) => {
          return (
            <div
              key={index}
              className="animate-event-fade hover:scale-[1.01] transition-transform duration-200 relative"
            >
              {event.type === "tournament" ? (
                <div className="relative">
                  <div className="absolute -top-[clamp(1.25rem,0.75rem+0.5vw,1.75rem)] left-4 bg-[#00aaff] text-black px-[clamp(0.75rem,0.5rem+0.5vw,1.25rem)] py-[clamp(0.25rem,0.125rem+0.25vw,0.5rem)] rounded-full text-[clamp(0.75rem,0.5rem+0.5vw,1.25rem)] font-bold border border-[#0077aa]">
                    Tournament
                  </div>
                  <TournamentEvent event={event} />
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute -top-[clamp(1.25rem,0.75rem+0.5vw,1.75rem)] left-4 bg-[#00aaff] text-black px-[clamp(0.75rem,0.5rem+0.5vw,1.25rem)] py-[clamp(0.25rem,0.125rem+0.25vw,0.5rem)] rounded-full text-[clamp(0.75rem,0.5rem+0.5vw,1.25rem)] font-bold border border-[#0077aa]">
                    Showmatch
                  </div>
                  <MatchEvent event={event} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
