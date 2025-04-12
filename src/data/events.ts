// events.ts

export type TournamentEvent = {
  type: "tournament";
  open: boolean;
  name: string;
  date: string; // ISO format
  time: string;
  prizePool: number;
  maxParticipants: number;
};

export type ShowmatchEvent = {
  type: "showmatch";
  date: string; // ISO format
  time: string;
  prizePool: number;
  teams: {
    name: string;
    players: string[];
  }[];
};

export type Event = TournamentEvent | ShowmatchEvent;

export const events: Event[] = [
  {
    type: "tournament",
    open: true,
    name: "RL Open Cup",
    date: "2025-04-15",
    time: "18:00",
    prizePool: 500,
    maxParticipants: 32,
  },
  {
    type: "tournament",
    open: false,
    name: "Spring Showdown",
    date: "2025-05-02",
    time: "19:00",
    prizePool: 1000,
    maxParticipants: 64,
  },
  {
    type: "showmatch",
    date: "2025-05-05",
    time: "21:00",
    prizePool: 300,
    teams: [
      {
        name: "Vitality",
        players: ["Alphakep", "Rizzo", "Turbopolsa"],
      },
      {
        name: "C9",
        players: ["FairyPeak", "Monkey Moon", "Seiko"],
      },
    ],
  },
];
