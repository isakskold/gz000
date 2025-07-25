import { NextRequest, NextResponse } from "next/server";
import { fetchLatestYouTubeVideos, YouTubeVideo } from "@/lib/youtube";

// Server-side cache - shared across ALL requests and users
let cachedVideos: YouTubeVideo[] | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const maxResults = parseInt(searchParams.get("maxResults") || "5");
    const now = Date.now();

    // Check if we have valid cached data
    const isCacheValid =
      cachedVideos && cacheTimestamp && now - cacheTimestamp < CACHE_DURATION;

    if (isCacheValid) {
      console.log("🎯 CACHE HIT: Serving cached YouTube data", {
        cacheAge: Math.round((now - cacheTimestamp!) / (1000 * 60)), // age in minutes
        videosCount: cachedVideos!.length,
        requestedCount: maxResults,
      });

      // Return cached data, sliced to requested amount
      const videosToReturn = cachedVideos!.slice(0, maxResults);

      return NextResponse.json({
        success: true,
        videos: videosToReturn,
        count: videosToReturn.length,
        cached: true,
        cacheAge: Math.round((now - cacheTimestamp!) / (1000 * 60 * 60)), // age in hours
      });
    }

    // Cache miss - fetch fresh data
    console.log("🔄 CACHE MISS: Fetching fresh YouTube data", {
      reason: !cachedVideos
        ? "No cached data"
        : !cacheTimestamp
        ? "No cache timestamp"
        : "Cache expired",
      maxResults,
    });

    const videos = await fetchLatestYouTubeVideos(maxResults);

    // Update cache with fresh data
    cachedVideos = videos;
    cacheTimestamp = now;

    console.log("✅ FRESH DATA CACHED: Successfully updated cache", {
      videosCount: videos.length,
      cacheTimestamp: new Date(cacheTimestamp).toISOString(),
    });

    return NextResponse.json({
      success: true,
      videos,
      count: videos.length,
      cached: false,
      fetchedAt: new Date(cacheTimestamp).toISOString(),
    });
  } catch (error) {
    console.error("❌ YouTube API route error:", error);

    // If we have cached data but API failed, serve stale cache as fallback
    if (cachedVideos && cachedVideos.length > 0) {
      console.log(
        "🆘 SERVING STALE CACHE: API failed, using cached data as fallback",
        {
          videosCount: cachedVideos.length,
          cacheAge: cacheTimestamp
            ? Math.round((Date.now() - cacheTimestamp) / (1000 * 60 * 60))
            : "unknown",
        }
      );

      const maxResults = parseInt(
        new URL(request.url).searchParams.get("maxResults") || "5"
      );
      const videosToReturn = cachedVideos.slice(0, maxResults);

      return NextResponse.json({
        success: true,
        videos: videosToReturn,
        count: videosToReturn.length,
        cached: true,
        stale: true,
        error: "API failed, serving cached data",
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch YouTube videos",
        videos: [],
      },
      { status: 500 }
    );
  }
}
