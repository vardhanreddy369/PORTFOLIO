import { motion } from "framer-motion";
import "../styles/components/_hero.scss";
import {
  HERO_CONTENT,
  HERO_PHOTO,
  RESUME_PATH,
  SOCIAL_LINKS
} from "../data/content";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";
import AIPipeline from "./AIPipeline";
import TextScramble from "./TextScramble";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, type: "spring", stiffness: 120 } }
};

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = (event, id) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <section className="hero" id="home">
      <AIPipeline />
      <motion.div
        className="hero-inner"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Left column: Photo + Socials */}
        <div className="hero-left">
          <motion.figure className="hero-photo-wrapper" variants={fadeScale} style={{ perspective: "1000px" }}>
            <TiltCard className="hero-photo" tiltMax={10} scaleAmount={1.02}>
              <div className="hero-photo__frame">
                <img
                  src={HERO_PHOTO}
                  alt="Sri Vardhan Reddy Gutta portrait"
                  loading="lazy"
                />
              </div>
            </TiltCard>
          </motion.figure>

          <motion.div className="hero-socials" variants={fadeUp}>
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right column: Text + CTAs */}
        <div className="hero-content">
          <motion.span className="hero-kicker" variants={fadeUp}>
            {"// "}
            {HERO_CONTENT.title}
          </motion.span>

          <motion.h1 className="hero-heading" variants={fadeUp}>
            <TextScramble
              text="Sri Vardhan Reddy Gutta"
              className="hero-heading__name"
              delay={500}
              speed={30}
            />
          </motion.h1>

          <motion.p className="hero-subtitle" variants={fadeUp}>
            {HERO_CONTENT.subtitle}
          </motion.p>

          <motion.div className="hero-buttons" variants={fadeUp}>
            <MagneticButton
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => handleScroll(e, "projects")}
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              href={RESUME_PATH}
              className="btn btn-download"
              download
            >
              Download Resume
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => handleScroll(e, "contact")}
            >
              Get In Touch
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
