import "./styles/globals.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsCounter from "./components/StatsCounter";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Education from "./components/Education";
import Testimonial from "./components/Testimonial";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import GradientMesh from "./components/GradientMesh";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <>
      <CustomCursor />
      <GradientMesh />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <StatsCounter />
      <TechMarquee />
      <About />
      <Education />
      <Testimonial />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
