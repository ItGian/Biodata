import BioData from "./components/BioData";
import HeroSection from "./components/HeroSection";
import ProjectPortfolio from "./components/ProjectPortofolio";
import TimeLine from "./components/Timeline";
import Welcome from "./components/Welcome";





export default function Home() {
  return (
   <>
   <div>
  <HeroSection></HeroSection>
  <BioData></BioData>
  <Welcome></Welcome>
  <TimeLine></TimeLine>
  <ProjectPortfolio></ProjectPortfolio>
  </div>
   </>
  );
}

