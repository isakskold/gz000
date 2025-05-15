// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                                EVENTS DATA                                   ║
// ╚══════════════════════════════════════════════════════════════════════════════╝
//
// ┌──────────────────────────────────────────────────────────────────────────────┐
// │                          HOW TO EDIT EVENTS DATA                             │
// └──────────────────────────────────────────────────────────────────────────────┘
//
// Tournament template:
// {
//   type: "tournament",
//   open: true,
//   name: "Tournament Name",
//   date: "YYYY-MM-DD",
//   time: "HH:MM",
//   prizePool: 500,
//   maxParticipants: 32,
//   url: "https://challengermode.com/tournaments/123",
// }
//
// 1v1 template:
// {
//   type: "showmatch",
//   date: "YYYY-MM-DD",
//   time: "HH:MM",
//   prizePool: 200,
//   teams: [
//     { players: ["Player1"] },
//     { players: ["Player2"] }
//   ],
// }
//
// 2v2 template:
// {
//   type: "showmatch",
//   date: "YYYY-MM-DD",
//   time: "HH:MM",
//   prizePool: 250,
//   teams: [
//     { players: ["Player1", "Player2"] },
//     { players: ["Player3", "Player4"] }
//   ],
// }
//
// 3v3 template:
// {
//   type: "showmatch",
//   date: "YYYY-MM-DD",
//   time: "HH:MM",
//   prizePool: 300,
//   teams: [
//     {
//       name: "Team Name",
//       players: ["Player1", "Player2", "Player3"],
//     },
//     {
//       name: "Team Name",
//       players: ["Player1", "Player2", "Player3"],
//     },
//   ],
// }
//
// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                             IMPORTANT NOTES                                  ║
// ╚══════════════════════════════════════════════════════════════════════════════╝
// • Specify event type in the "type" field. Use either "tournament" or "showmatch" based on which event type it should be
// • Keep commas between events
// • Keep square brackets [ ] around all events
// • All fields are required
// • Use YYYY-MM-DD for dates
// • Use 24-hour format for times
// • Team names only required for 3v3 matches
// • URL for tournaments are optional. The link icon will be hidden if no URL is provided
// • Prizepool value is displayed in dollars ($)
// ───────────────────────────────────────────────────────────────────────────────

import { Event } from "@/types/events";

export const events: Event[] = [
  {
    type: "tournament",
    open: true,
    name: "Weekly 1v1 Tournament",
    date: "2024-03-15",
    time: "19:00",
    prizePool: 100,
    maxParticipants: 32,
    url: "https://challengermode.com/tournaments/123",
  },
  {
    type: "tournament",
    open: false,
    name: "Monthly Championship",
    date: "2024-03-20",
    time: "20:00",
    prizePool: 500,
    maxParticipants: 64,
    url: "https://start.gg/tournament/456",
  },
  {
    type: "tournament",
    open: true,
    name: "Community Cup",
    date: "2024-03-25",
    time: "18:00",
    prizePool: 250,
    maxParticipants: 16,
  },
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
  {
    type: "showmatch",
    date: "2025-05-10",
    time: "20:00",
    prizePool: 200,
    teams: [{ players: ["Jstn"] }, { players: ["GarrettG"] }],
  },
  {
    type: "showmatch",
    date: "2025-05-15",
    time: "19:00",
    prizePool: 250,
    teams: [
      { players: ["Squishy", "Gimmick"] },
      { players: ["JKnaps", "Chicago"] },
    ],
  },
];
