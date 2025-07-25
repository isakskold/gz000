export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
  publishedAt: string;
  channelTitle: string;
}

export interface YouTubeApiResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  items: {
    kind: string;
    etag: string;
    id: string;
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: { url: string; width: number; height: number };
        medium: { url: string; width: number; height: number };
        high: { url: string; width: number; height: number };
        standard?: { url: string; width: number; height: number };
        maxres?: { url: string; width: number; height: number };
      };
      channelTitle: string;
      playlistId: string;
      position: number;
      resourceId: {
        kind: string;
        videoId: string;
      };
      videoOwnerChannelTitle: string;
      videoOwnerChannelId: string;
    };
    status?: {
      privacyStatus: string;
    };
  }[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export async function fetchLatestYouTubeVideos(
  maxResults: number = 5
): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const playlistId = process.env.PLAYLIST_ID;

  if (!apiKey || !playlistId) {
    console.error("Missing YouTube API credentials");
    return [];
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,status&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `YouTube API error: ${response.status} ${response.statusText}`
      );
    }

    const data: YouTubeApiResponse = await response.json();

    // Filter out videos that aren't publicly available or are offline livestreams
    const publicVideos = data.items.filter((item) => {
      // Check if the video has public privacy status
      const isPublic = item.status?.privacyStatus === "public";

      // Filter out videos with certain title patterns that indicate offline streams
      const hasOfflineIndicators =
        /livestream.*offline|offline.*livestream|stream.*ended|private video|deleted video/i.test(
          item.snippet.title
        );

      return isPublic && !hasOfflineIndicators;
    });

    // Remove duplicate content (livestream + VOD versions)
    // Keep the newer version when there are duplicates (VOD over livestream)
    const availableVideos = publicVideos.filter((item, index, array) => {
      const hasNewerDuplicate = array.some((other, otherIndex) => {
        if (otherIndex === index) return false; // Skip self

        // Check if titles are very similar (accounting for minor differences)
        const titleA = item.snippet.title
          .toLowerCase()
          .replace(/[^\w\s]/g, "")
          .trim();
        const titleB = other.snippet.title
          .toLowerCase()
          .replace(/[^\w\s]/g, "")
          .trim();

        // Check if one title is contained in the other or they're very similar
        const similarTitles =
          titleA.includes(titleB) ||
          titleB.includes(titleA) ||
          titleA === titleB;

        if (!similarTitles) return false;

        // Check if published dates are close (within 24 hours - common for livestream/VOD pairs)
        const dateA = new Date(item.snippet.publishedAt);
        const dateB = new Date(other.snippet.publishedAt);
        const timeDiff = Math.abs(dateA.getTime() - dateB.getTime());
        const hoursDiff = timeDiff / (1000 * 60 * 60);

        // If similar titles and close dates, keep the older one (VOD over livestream)
        return hoursDiff <= 24 && dateB < dateA;
      });

      return !hasNewerDuplicate;
    });

    console.log(
      `Filtered ${
        data.items.length - availableVideos.length
      } unavailable videos (${data.items.length} total → ${
        availableVideos.length
      } available)`
    );

    return availableVideos.map((item) => ({
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail:
        item.snippet.thumbnails.maxres?.url ||
        item.snippet.thumbnails.high?.url ||
        item.snippet.thumbnails.medium?.url ||
        item.snippet.thumbnails.default.url,
      videoId: item.snippet.resourceId.videoId,
      publishedAt: item.snippet.publishedAt,
      channelTitle: item.snippet.channelTitle,
    }));
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
}
