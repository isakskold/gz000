"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Crown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface LeaderboardPlayer {
  name: string;
  wins: number;
}

interface PaginationLeaderboardProps {
  players: LeaderboardPlayer[];
}

export const PaginationLeaderboard = ({
  players,
}: PaginationLeaderboardProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 5;

  // Calculate pagination
  const totalPages = Math.ceil(players.length / playersPerPage);
  const startIndex = (currentPage - 1) * playersPerPage;
  const endIndex = startIndex + playersPerPage;
  const displayedPlayers = players.slice(startIndex, endIndex);
  const hasMultiplePages = players.length > playersPerPage;

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="w-8 h-8 text-yellow-400 drop-shadow-lg" />;
      case 2:
        return <Trophy className="w-7 h-7 text-gray-300 drop-shadow-md" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600 drop-shadow-md" />;
      default:
        return (
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-muted/20 border border-border/30">
            <span className="text-lg font-bold text-muted-foreground">
              {position}
            </span>
          </div>
        );
    }
  };

  const getCardStyling = (position: number) => {
    switch (position) {
      case 1:
        return "bg-gradient-to-br from-yellow-500/10 via-card/80 to-card/80 backdrop-blur border-yellow-500/30 shadow-xl shadow-yellow-500/10";
      case 2:
        return "bg-gradient-to-br from-gray-400/10 via-card/80 to-card/80 backdrop-blur border-gray-400/30 shadow-lg shadow-gray-400/5";
      case 3:
        return "bg-gradient-to-br from-amber-600/10 via-card/80 to-card/80 backdrop-blur border-amber-600/30 shadow-lg shadow-amber-600/5";
      default:
        return "bg-card/60 backdrop-blur border-border/30";
    }
  };

  return (
    <div className="space-y-4">
      {/* Header with Title and Page Info */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Trophy className="w-10 h-10 text-yellow-400" />
          <h3 className="text-3xl font-bold">Current Rankings</h3>
        </div>
        {hasMultiplePages && (
          <Badge variant="secondary">
            Page {currentPage} of {totalPages} ({players.length} total players)
          </Badge>
        )}
      </div>

      {displayedPlayers.length > 0 ? (
        displayedPlayers.map((player: LeaderboardPlayer, index: number) => {
          const position = players.findIndex((p) => p.name === player.name) + 1;
          return (
            <div
              key={player.name}
              className={`${getCardStyling(
                position
              )} p-6 rounded-xl transition-all duration-300 animate-in fade-in-0 slide-in-from-left-2`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="w-full sm:flex-grow flex items-center justify-start gap-4 min-w-0">
                  {getRankIcon(position)}
                  <div className="min-w-0 flex-1">
                    <p
                      className={`font-bold truncate ${
                        position <= 3 ? "text-2xl" : "text-xl"
                      }`}
                    >
                      {player.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start sm:justify-end gap-3 w-full sm:w-auto">
                  <div
                    className={`font-bold sm:text-right ${
                      position <= 3
                        ? "text-4xl text-primary"
                        : "text-3xl text-primary"
                    }`}
                  >
                    {player.wins}
                  </div>
                  <div className="text-sm text-muted-foreground w-12 text-left">
                    wins
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <Trophy className="w-16 h-16 mx-auto mb-6 opacity-50" />
          <p className="text-xl">No leaderboard data available</p>
        </div>
      )}

      {/* Pagination Controls */}
      {hasMultiplePages && (
        <div className="pt-4 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button
              variant="outline"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="w-full sm:w-auto flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Showing players</span>
              <Badge variant="outline">
                {startIndex + 1}-{Math.min(endIndex, players.length)}
              </Badge>
              <span>of {players.length}</span>
            </div>

            <Button
              variant="outline"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="w-full sm:w-auto flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
