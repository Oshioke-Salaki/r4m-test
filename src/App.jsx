import AlreadyEngagedBanner from "./components/AlreadyEngagedBanner";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import QualitiesSection from "./components/QualitiesSection";
import ShareYourStory from "./components/ShareYourStory";
import Stories from "./components/Stories";
import WInWInSection from "./components/WInWInSection";
import WinnersSection from "./components/WinnersSection";

function App() {
  return (
    <div>
      <div className="bg-[#03071E]">
        <Navbar />
        <HeroSection />
      </div>
      <WinnersSection />
      <QualitiesSection />
      <AlreadyEngagedBanner />
      <div className="py-[200px] bg-white flex flex-col gap-y-[200px]">
        <ShareYourStory />
        <WInWInSection />
      </div>
      <Stories />
      <Footer />
    </div>
  );
}

export default App;
