import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import YouTubeSection from "@/components/YouTubeSection";
import LeaderboardSection from "@/components/LeaderboardSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <YouTubeSection />
        <LeaderboardSection />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
};

export default page;
