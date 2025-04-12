import { events } from "@/data/events";
import PageHeader from "@/components/PageHeader";
import MatchEvent from "./components/MatchEvent";
import TournamentEvent from "./components/TournamentEvent";

const page: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 mx-auto">
      <PageHeader text="Upcoming Events" />
      <div className="flex flex-col gap-[clamp(2rem,-1.73rem+12.973vw,8rem)]">
        {events.map((event, index) => {
          if (event.type === "tournament") {
            return <TournamentEvent key={index} event={event} />;
          } else if (event.type === "showmatch") {
            return <MatchEvent key={index} event={event} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default page;
