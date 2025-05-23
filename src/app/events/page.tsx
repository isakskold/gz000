import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PageHeader from "@/components/PageHeader";
import MatchEvent from "./components/MatchEvent";
import TournamentEvent from "./components/TournamentEvent";
import {
  TournamentEvent as TournamentEventType,
  ShowmatchEvent,
} from "@/types/events";

function getAllMarkdownFiles(dir: string) {
  const directory = path.join(process.cwd(), dir);
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => path.join(directory, file));
}

function parseTournament(filePath: string): TournamentEventType {
  const file = fs.readFileSync(filePath, "utf8");
  const { data } = matter(file);
  return {
    type: "tournament",
    name: data.name,
    date: data.date.split(" ")[0],
    time: data.date.split(" ")[1] || "",
    prizePool: Number(data.prizePool),
    maxParticipants: Number(data.maxParticipants),
    open: Boolean(data.open),
    url: data.url || undefined,
  };
}

function parseShowmatch(
  filePath: string,
  type: "1v1" | "2v2" | "3v3"
): ShowmatchEvent {
  const file = fs.readFileSync(filePath, "utf8");
  const { data } = matter(file);
  let teams;
  if (type === "1v1") {
    teams = [
      { players: [data.team1.player] },
      { players: [data.team2.player] },
    ];
  } else if (type === "2v2") {
    teams = [
      { players: [data.team1.player1, data.team1.player2] },
      { players: [data.team2.player1, data.team2.player2] },
    ];
  } else {
    teams = [
      {
        name: data.team1.name,
        players: [data.team1.player1, data.team1.player2, data.team1.player3],
      },
      {
        name: data.team2.name,
        players: [data.team2.player1, data.team2.player2, data.team2.player3],
      },
    ];
  }
  return {
    type: "showmatch",
    date: data.date.split(" ")[0],
    time: data.date.split(" ")[1] || "",
    prizePool: Number(data.prizePool),
    teams,
  };
}

export default function EventsPage() {
  // Read and parse all tournaments
  const tournaments: TournamentEventType[] = getAllMarkdownFiles(
    "content/tournaments"
  ).map(parseTournament);
  // Read and parse all showmatches
  const showmatches1v1: ShowmatchEvent[] = getAllMarkdownFiles(
    "content/showmatches_1v1"
  ).map((f) => parseShowmatch(f, "1v1"));
  const showmatches2v2: ShowmatchEvent[] = getAllMarkdownFiles(
    "content/showmatches_2v2"
  ).map((f) => parseShowmatch(f, "2v2"));
  const showmatches3v3: ShowmatchEvent[] = getAllMarkdownFiles(
    "content/showmatches_3v3"
  ).map((f) => parseShowmatch(f, "3v3"));
  const allEvents = [
    ...tournaments,
    ...showmatches1v1,
    ...showmatches2v2,
    ...showmatches3v3,
  ];
  allEvents.sort(
    (a, b) =>
      new Date(a.date + "T" + (a.time || "00:00")).getTime() -
      new Date(b.date + "T" + (b.time || "00:00")).getTime()
  );

  return (
    <div className="flex flex-col items-center w-full gap-12">
      <PageHeader text="Events" />
      <div
        className={`flex flex-col gap-[clamp(2rem,-1.73rem+12.973vw,8rem)] w-full max-w-[800px]`}
      >
        {allEvents.map((event, index) => (
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
        ))}
      </div>
    </div>
  );
}
