import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PaginationLeaderboard } from "./PaginationLeaderboard";

interface LeaderboardPlayer {
  name: string;
  wins: number;
}

// Read leaderboard data
const leaderboardFile = path.join(
  process.cwd(),
  "content",
  "leaderboard",
  "leaderboard.md"
);
const file = fs.readFileSync(leaderboardFile, "utf8");
const { data } = matter(file);
const leaderboardData = data.leaderboardData || [];

const LeaderboardSection = () => {
  // Sort players by wins in descending order
  const sortedPlayers = [...leaderboardData].sort(
    (a: LeaderboardPlayer, b: LeaderboardPlayer) => b.wins - a.wins
  );

  return (
    <section id="leaderboard" className="py-16 px-4 bg-primary-section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold">
            1v1 <span className="gradient-text">Leaderboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tracking player performance from my hosted 1v1 showmatches
          </p>
          <div className="flex justify-center">
            <Star className="w-6 h-6 text-yellow-400 mx-1 animate-pulse" />
            <Star className="w-6 h-6 text-yellow-400 mx-1 animate-pulse delay-75" />
            <Star className="w-6 h-6 text-yellow-400 mx-1 animate-pulse delay-150" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Rankings */}
          <Card className="bg-card/80 backdrop-blur border-border/30 subtle-shadow-lg">
            <CardContent className="pt-6">
              <PaginationLeaderboard players={sortedPlayers} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
