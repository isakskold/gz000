import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { LeaderboardTabs } from "./LeaderboardTabs";

const LeaderboardSection = () => {
  const currentMatches = [
    {
      id: 1,
      opponent: "QuantumBoost_YT",
      rank: "Champion II",
      result: "W",
      score: "4-2",
      mmr: "+18",
      date: "Today, 2:15 PM",
      trend: "up",
    },
    {
      id: 2,
      opponent: "AerialMaster2024",
      rank: "Champion III",
      result: "L",
      score: "1-3",
      mmr: "-15",
      date: "Today, 1:45 PM",
      trend: "down",
    },
    {
      id: 3,
      opponent: "FlipResetKing",
      rank: "Champion I",
      result: "W",
      score: "5-1",
      mmr: "+16",
      date: "Today, 1:20 PM",
      trend: "up",
    },
    {
      id: 4,
      opponent: "DemoMachine99",
      rank: "Champion II",
      result: "W",
      score: "3-2",
      mmr: "+17",
      date: "Yesterday, 11:30 PM",
      trend: "up",
    },
    {
      id: 5,
      opponent: "CeilingShot_Pro",
      rank: "Champion III",
      result: "L",
      score: "2-4",
      mmr: "-16",
      date: "Yesterday, 11:05 PM",
      trend: "down",
    },
  ];

  const weeklyStats = {
    rank: "Champion II Division III",
    mmr: 1247,
    winRate: 68,
    gamesPlayed: 47,
    wins: 32,
    losses: 15,
    winStreak: 3,
    bestWin: "vs SSL_Legend (5-0)",
  };

  return (
    <section id="leaderboard" className="py-16 px-4 bg-primary-section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold">
            1v1 <span className="gradient-text">Leaderboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track competitive progress, analyze match history, and climb the
            ranks in real-time
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <LeaderboardTabs
            currentMatches={currentMatches}
            weeklyStats={weeklyStats}
          />
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
