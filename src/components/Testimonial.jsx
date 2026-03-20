import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIAL_QUOTE } from "../data/content";
import "../styles/components/_testimonial.scss";

export default function Testimonial() {
  return (
    <motion.section
      className="testimonial"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="testimonial-quote">{TESTIMONIAL_QUOTE.text}</p>
      <p className="testimonial-author">{TESTIMONIAL_QUOTE.author}</p>
      <p className="testimonial-role">{TESTIMONIAL_QUOTE.role}</p>
    </motion.section>
  );
}
