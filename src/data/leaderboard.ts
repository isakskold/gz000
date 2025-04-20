// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                             LEADERBOARD DATA                                 ║
// ╚══════════════════════════════════════════════════════════════════════════════╝
//
// ┌──────────────────────────────────────────────────────────────────────────────┐
// │                          HOW TO EDIT LEADERBOARD                             │
// └──────────────────────────────────────────────────────────────────────────────┘
//
// Player template:
// {
//   name: "PlayerName",
//   wins: 0
// }
//
// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                             IMPORTANT NOTES                                  ║
// ╚══════════════════════════════════════════════════════════════════════════════╝
// • Keep commas between players
// • Keep square brackets [ ] around all players
// • All fields are required
// • Leaderboard is automatically sorted by wins
// ───────────────────────────────────────────────────────────────────────────────

export interface LeaderboardPlayer {
  name: string;
  wins: number;
}

export const leaderboardData: LeaderboardPlayer[] = [
  {
    name: "GroundZero000",
    wins: 42,
  },
  {
    name: "ProPlayer1",
    wins: 38,
  },
  {
    name: "ChampionX",
    wins: 35,
  },
  {
    name: "EliteGamer",
    wins: 32,
  },
  {
    name: "MasterPlayer",
    wins: 30,
  },
  {
    name: "SkillDemon",
    wins: 28,
  },
  {
    name: "VictoryKing",
    wins: 25,
  },
  {
    name: "BattleMaster",
    wins: 22,
  },
  {
    name: "WarriorPro",
    wins: 20,
  },
  {
    name: "DuelMaster",
    wins: 18,
  },
];
