"use client";

import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import Lazy from "../assets/Lazy.png";
import Negotiate from "../assets/Negotiation.png";
import DataAnalysis from "../assets/DataAnalysis.png";
import Cran from "../assets/Cran.png";
import Dashboard from "../assets/Dashboard.png";

const projectData = [
  {
    img: DataAnalysis,
    title: "Github Activity Pipeline",
    tag: "Data Engineering",
    desc: "Built a data pipeline to analyze GitHub data using dbt for transformation and Snowflake as the data warehouse. From ELT to ETL transformation to meaningful insights.",
    tech: ["python", "dbt", "amazonaws", "snowflake", "apacheairflow", "docker", "github"],
    link: "https://github.com/iaifti/Github-activity-analytics-pipeline",
  },
  {
    img: Dashboard,
    title: "SaaS Payment Analytics",
    tag: "Analytics",
    desc: "Analysis of synthetic SaaS user payment data using SQL with Snowflake and dbt. Created dashboards to visualize key metrics and trends.",
    tech: ["dbt", "powerbi", "snowflake", "git", "github"],
    link: "https://github.com/iaifti/Stripe_dbt_analysis",
  },
  {
    img: Negotiate,
    title: "Negotiation AI",
    tag: "Full Stack",
    desc: "AI-powered coaching assistant that provides real-time negotiation strategies and feedback.",
    tech: ["nextdotjs", "tailwindcss", "typescript", "nodedotjs", "supabase", "github"],
    link: "https://no-ai.vercel.app/",
  },
  {
    img: Cran,
    title: "Cran US",
    tag: "Web",
    desc: "Community-focused startup delivering tailored web and software solutions for local businesses.",
    tech: ["react", "tailwindcss", "javascript", "vercel", "nodedotjs"],
    link: "https://www.cran-us.com/",
  },
  {
    img: Lazy,
    title: "LazyProf",
    tag: "Full Stack",
    desc: "AI-powered auto-grader providing test evaluation, feedback, and secure sandbox execution.",
    tech: ["react", "express", "nodedotjs", "mongodb", "postman", "tailwindcss"],
    link: "https://github.com/iaifti/LazyProf",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};

const ProjectCard = ({ proj, index }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1a1500" : "#141108",
        border: `1px solid ${hovered ? "rgba(245,158,11,0.4)" : "rgba(245,158,11,0.12)"}`,
        borderRadius: 10,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 40px rgba(245,158,11,0.1)" : "none",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: 196 }}>
        <img src={proj.img} alt={proj.title} style={{
          width: "100%", height: "100%", objectFit: "cover",
          filter: hovered ? "brightness(0.9) saturate(1.1)" : "brightness(0.65) saturate(0.7)",
          transition: "all 0.35s ease",
          transform: hovered ? "scale(1.04)" : "scale(1)",
        }} />
        {/* Amber gradient bottom */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,14,4,0.85) 0%, transparent 55%)", pointerEvents: "none" }} />
        {/* Tag */}
        <div style={{
          position: "absolute", top: 12, left: 12,
          fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase",
          color: "#f59e0b", background: "rgba(17,14,4,0.8)", border: "1px solid rgba(245,158,11,0.35)",
          borderRadius: 100, padding: "3px 12px", backdropFilter: "blur(6px)",
        }}>{proj.tag}</div>
      </div>

      {/* Body */}
      <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", flex: 1, gap: "0.9rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(245,158,11,0.35)", letterSpacing: "0.1em" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: "clamp(0.88rem,1.4vw,0.98rem)", color: "#fff", margin: 0, letterSpacing: "0.02em" }}>
            {proj.title}
          </h3>
        </div>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.8, color: "rgba(255,230,150,0.38)", margin: 0, fontWeight: 300 }}>
          {proj.desc}
        </p>

        {/* Tech icons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
          {proj.tech.map((name) => (
            <div key={name} title={name} style={{ width: 20, height: 20, opacity: 0.4, filter: "invert(1) sepia(0.2) saturate(2) hue-rotate(5deg)", transition: "opacity 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0.4}>
              <img src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${name}.svg`} alt={name} style={{ width: "100%", height: "100%" }} />
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: "rgba(245,158,11,0.1)" }} />

        <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
          color: hovered ? "#f59e0b" : "rgba(255,230,150,0.35)", textDecoration: "none", transition: "color 0.2s ease",
        }}>
          View Project <FaExternalLinkAlt style={{ width: 10, height: 10 }} />
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <div id="projects" style={{ background: "#111008", padding: "clamp(4rem,10vw,8rem) clamp(1.5rem,7vw,7rem)", position: "relative", overflow: "hidden" }}>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400&family=DM+Mono:wght@400;500&family=Bebas+Neue&display=swap');`}</style>

    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(245,158,11,0.1)" }} />
    <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: "60vw", height: "30vw", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

    <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
      <div style={{ marginBottom: "4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
          <div style={{ width: 28, height: 2, background: "#f59e0b", borderRadius: 2 }} />
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: "#f59e0b", textTransform: "uppercase" }}>Selected Work</span>
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(3rem,7vw,5.5rem)", color: "#fff", letterSpacing: "0.02em", lineHeight: 0.9, margin: 0 }}>
          Featured<br /><span style={{ color: "transparent", WebkitTextStroke: "2px rgba(245,158,11,0.35)" }}>Projects</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "1.5rem" }}>
        {projectData.map((proj, i) => <ProjectCard key={proj.title} proj={proj} index={i} />)}
      </div>
    </div>
  </div>
);

export default Projects;