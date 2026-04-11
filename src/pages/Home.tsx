import HeroSection from "../components/HeroSection";
import ServicesGrid from "../components/ServicesGrid";
import IndustriesSection from "../components/IndustriesSection";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import ClientsSection from "../components/ClientsSection";
import MediaRoom from "../components/MediaRoom";
import AwardsSection from "../components/AwardsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesGrid limit={3} />
      <StatsSection />
      <IndustriesSection />
      <MediaRoom />
      <ClientsSection />
      <AwardsSection />
      <Testimonials />
    </>
  );
}
