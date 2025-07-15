"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Match {
  id: number;
  opponent: string;
  rank: string;
  result: string;
  score: string;
  mmr: string;
  date: string;
  trend: string;
}

interface WeeklyStats {
  rank: string;
  mmr: number;
  winRate: number;
  gamesPlayed: number;
  wins: number;
  losses: number;
  winStreak: number;
  bestWin: string;
}

interface LeaderboardTabsProps {
  currentMatches: Match[];
  weeklyStats: WeeklyStats;
}

export const LeaderboardTabs = ({
  currentMatches,
  weeklyStats,
}: LeaderboardTabsProps) => {
  const [selectedTab, setSelectedTab] = useState("current");

  const getRankColor = (rank: string) => {
    if (rank.includes("Champion")) return "text-purple-400";
    if (rank.includes("Diamond")) return "text-blue-400";
    if (rank.includes("Grand Champion")) return "text-red-400";
    return "text-muted-foreground";
  };

  const getResultColor = (result: string) => {
    return result === "W"
      ? "bg-green-500/20 text-green-400"
      : "bg-red-500/20 text-red-400";
  };

  const getTrendIcon = (trend: string) => {
    if (trend === "up")
      return <TrendingUp className="w-4 h-4 text-green-400" />;
    if (trend === "down")
      return <TrendingDown className="w-4 h-4 text-red-400" />;
    return <Minus className="w-4 h-4 text-muted-foreground" />;
  };

  return (
    <Tabs
      value={selectedTab}
      onValueChange={setSelectedTab}
      className="space-y-6"
    >
      <TabsList className="grid w-full grid-cols-2 bg-card">
        <TabsTrigger value="current">Recent Matches</TabsTrigger>
        <TabsTrigger value="weekly">Weekly Stats</TabsTrigger>
      </TabsList>

      <TabsContent value="current" className="space-y-4">
        <Card className="border-border/30 subtle-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-primary" />
              <span>Match History</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentMatches.map((match) => (
              <div
                key={match.id}
                className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <Badge className={getResultColor(match.result)}>
                    {match.result}
                  </Badge>
                  <div>
                    <p className="font-medium">{match.opponent}</p>
                    <p className={`text-sm ${getRankColor(match.rank)}`}>
                      {match.rank}
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="font-semibold">{match.score}</p>
                  <p className="text-sm text-muted-foreground">{match.date}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <span
                    className={`font-medium ${
                      match.result === "W" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {match.mmr}
                  </span>
                  {getTrendIcon(match.trend)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="weekly" className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border/30 subtle-shadow">
            <CardHeader>
              <CardTitle>Current Rank</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">
                  {weeklyStats.rank}
                </div>
                <div className="text-2xl font-semibold text-muted-foreground">
                  {weeklyStats.mmr} MMR
                </div>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                75% to Champion III
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/30 subtle-shadow">
            <CardHeader>
              <CardTitle>Weekly Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Win Rate</span>
                <span className="font-semibold text-green-400">
                  {weeklyStats.winRate}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Games Played</span>
                <span className="font-semibold">{weeklyStats.gamesPlayed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Wins</span>
                <span className="font-semibold text-green-400">
                  {weeklyStats.wins}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Losses</span>
                <span className="font-semibold text-red-400">
                  {weeklyStats.losses}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Current Streak</span>
                <Badge className="bg-green-500/20 text-green-400">
                  {weeklyStats.winStreak}W
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle>Best Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-6 bg-secondary/30 rounded-lg">
              <Trophy className="w-12 h-12 text-accent mx-auto mb-2" />
              <p className="font-semibold text-lg">{weeklyStats.bestWin}</p>
              <p className="text-muted-foreground">Dominant Victory</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
