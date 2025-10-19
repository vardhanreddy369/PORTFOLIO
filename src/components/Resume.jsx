import "../styles/components/_resume.scss";
import { RESUME_PATH } from "../data/content";

export default function Resume() {
  return (
    <section className="section resume" id="resume">
      <h2>Resume</h2>
      <p className="resume-intro">
        Get a detailed look at my technical experience, education, and projects.
      </p>
      <a href={RESUME_PATH} download className="btn">
        Download Resume
      </a>
    </section>
  );
}
