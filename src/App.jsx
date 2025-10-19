import "./styles/globals.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}
