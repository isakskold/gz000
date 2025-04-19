export interface Team {
  name?: string;
  players: string[];
}

export interface TournamentEvent {
  type: "tournament";
  open: boolean;
  name: string;
  date: string; // ISO format
  time: string;
  prizePool: number;
  maxParticipants: number;
  url?: string; // Optional URL for tournament registration
}

export interface ShowmatchEvent {
  type: "showmatch";
  date: string; // ISO format
  time: string;
  prizePool: number;
  teams: Team[];
}

export type Event = TournamentEvent | ShowmatchEvent;
