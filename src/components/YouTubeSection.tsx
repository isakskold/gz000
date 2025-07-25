"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play, Clock, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { YouTubeVideo } from "@/lib/youtube";

interface VideoDisplayData {
  id: string;
  title: string;
  thumbnail: string;
  duration?: string;
  uploadDate: string;
  videoId: string;
  url: string;
  description: string;
}

const YouTubeSection = () => {
  const [videos, setVideos] = useState<VideoDisplayData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/youtube?maxResults=6");
        const data = await response.json();

        if (data.success && data.videos.length > 0) {
          const formattedVideos: VideoDisplayData[] = data.videos.map(
            (video: YouTubeVideo) => ({
              id: video.id,
              title: video.title,
              thumbnail: video.thumbnail,
              uploadDate: formatDate(video.publishedAt),
              videoId: video.videoId,
              url: `https://youtube.com/watch?v=${video.videoId}`,
              description: video.description,
            })
          );
          setVideos(formattedVideos);
        } else {
          console.warn("No videos returned from API");
          setError("No videos available");
        }
      } catch (err) {
        console.error("Error fetching YouTube videos:", err);
        setError("Failed to load videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30)
      return `${Math.floor(diffDays / 7)} week${
        Math.floor(diffDays / 7) > 1 ? "s" : ""
      } ago`;
    if (diffDays < 365)
      return `${Math.floor(diffDays / 30)} month${
        Math.floor(diffDays / 30) > 1 ? "s" : ""
      } ago`;
    return `${Math.floor(diffDays / 365)} year${
      Math.floor(diffDays / 365) > 1 ? "s" : ""
    } ago`;
  };

  const truncateDescription = (
    description: string,
    maxLength: number = 120
  ): string => {
    if (!description) return "";
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength).trim() + "...";
  };

  const handleVideoClick = (video: VideoDisplayData) => {
    window.open(video.url, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <section id="videos" className="py-16 px-4 bg-secondary-section">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Latest <span className="gradient-text">YouTube</span> Videos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Loading latest videos...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error || videos.length === 0) {
    return (
      <section id="videos" className="py-16 px-4 bg-secondary-section">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Latest <span className="gradient-text">YouTube</span> Videos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {error || "No videos available at the moment"}
            </p>
            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-border cursor-pointer text-foreground hover:bg-secondary/50 subtle-shadow transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/GroundZero0",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit YouTube Channel
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="videos" className="py-16 px-4 bg-secondary-section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Latest <span className="gradient-text">YouTube</span> Videos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Live streams, gameplay content, and entertaining Rocket League
            videos covering everything from casual matches to competitive
            casting
          </p>
        </div>

        {/* Videos Carousel */}
        <div className="relative mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full "
          >
            <CarouselContent className="-ml-2 md:-ml-3 py-2">
              {videos.map((video) => (
                <CarouselItem
                  key={video.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card
                    className="group overflow-hidden bg-card border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 subtle-shadow cursor-pointer h-full flex flex-col mx-2 md:mx-3"
                    onClick={() => handleVideoClick(video)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full aspect-video object-cover group-hover:scale-103 transition-transform duration-500"
                      />

                      {/* Gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Enhanced Play overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <div className="w-20 h-20 bg-red-600/0 group-hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-lg">
                          <Play className="w-8 h-8 text-white ml-1 fill-white" />
                        </div>
                      </div>

                      {/* Duration */}
                      {video.duration && (
                        <div className="absolute bottom-3 right-3">
                          <Badge
                            variant="secondary"
                            className="bg-black/90 text-white border-0 shadow-lg"
                          >
                            <Clock className="w-3 h-3 mr-1" />
                            {video.duration}
                          </Badge>
                        </div>
                      )}
                    </div>

                    <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                        {video.title}
                      </h3>

                      {/* Upload date */}
                      <div className="text-sm text-muted-foreground">
                        <span>{video.uploadDate}</span>
                      </div>

                      {/* Description preview - always takes up space */}
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed min-h-[2.5rem]">
                          {video.description
                            ? truncateDescription(video.description)
                            : ""}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation arrows positioned over content */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 border-white/20 text-white shadow-lg w-12 h-12 md:w-14 md:h-14 [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-8 md:[&>svg]:h-8" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 border-white/20 text-white shadow-lg w-12 h-12 md:w-14 md:h-14 [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-8 md:[&>svg]:h-8" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-border cursor-pointer text-foreground hover:bg-secondary/50 subtle-shadow transition-all duration-300"
            onClick={() =>
              window.open(
                "https://www.youtube.com/GroundZero0",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View All Videos on YouTube
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
