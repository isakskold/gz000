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
import { Play, Eye, Clock, ExternalLink } from "lucide-react";

const YouTubeSection = () => {
  const videos = [
    {
      id: 1,
      title: "How I Hit Grand Champion in 1v1s - Complete Guide",
      thumbnail:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      views: "125K",
      duration: "15:42",
      uploadDate: "3 days ago",
      type: "Tutorial",
    },
    {
      id: 2,
      title: "INSANE Ceiling Shot Compilation - Best Goals of 2024",
      thumbnail:
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop",
      views: "89K",
      duration: "8:34",
      uploadDate: "1 week ago",
      type: "Highlights",
    },
    {
      id: 3,
      title: "Analyzing Pro Player Gameplay - What Makes Them Different",
      thumbnail:
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      views: "67K",
      duration: "12:18",
      uploadDate: "2 weeks ago",
      type: "Analysis",
    },
    {
      id: 4,
      title: "Road to SSL - Episode 12: The Hardest Rank Push Yet",
      thumbnail:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
      views: "156K",
      duration: "22:15",
      uploadDate: "3 weeks ago",
      type: "Series",
    },
    {
      id: 5,
      title: "Freestyle Friday - Impossible Goals Compilation",
      thumbnail:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      views: "94K",
      duration: "11:35",
      uploadDate: "1 month ago",
      type: "Highlights",
    },
    {
      id: 6,
      title: "Ranking Every Rocket League Car from Worst to Best",
      thumbnail:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      views: "203K",
      duration: "18:47",
      uploadDate: "1 month ago",
      type: "Analysis",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Tutorial":
        return "bg-primary/20 text-primary";
      case "Highlights":
        return "bg-accent/20 text-accent";
      case "Analysis":
        return "bg-purple-500/20 text-purple-400";
      case "Series":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="videos" className="py-16 px-4 bg-secondary-section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Latest <span className="gradient-text">YouTube</span> Videos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            In-depth tutorials, gameplay analysis, and highlight reels to help
            you improve your Rocket League skills
          </p>
        </div>

        {/* Videos Carousel */}
        <div className="relative mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video) => (
                <CarouselItem
                  key={video.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="group overflow-hidden bg-card border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg subtle-shadow">
                    <div className="relative overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Play overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/0 group-hover:bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="absolute bottom-2 right-2">
                        <Badge
                          variant="secondary"
                          className="bg-black/80 text-white"
                        >
                          <Clock className="w-3 h-3 mr-1" />
                          {video.duration}
                        </Badge>
                      </div>

                      {/* Type */}
                      <div className="absolute top-2 left-2">
                        <Badge className={getTypeColor(video.type)}>
                          {video.type}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6 space-y-3">
                      <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{video.views} views</span>
                          </div>
                          <span>{video.uploadDate}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation arrows positioned over content */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 border-white/20 text-white shadow-lg" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 border-white/20 text-white shadow-lg" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary/50 subtle-shadow"
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
