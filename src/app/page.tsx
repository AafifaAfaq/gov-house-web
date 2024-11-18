import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Box from "./components/Boxes";
import Main from "./components/Main";
import Slider from "./components/Slider";
import Courses from "./components/CoreCorses";
import AdvanceCourses from "./components/Advance";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Main />
      <Slider />
      <Box />
      <Courses />
      <AdvanceCourses />
      <Footer />
    </div>
  );
}
