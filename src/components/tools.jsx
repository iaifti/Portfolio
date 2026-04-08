"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const dataEngineeringTools = [
  { name: "SQL", icon: "mysql" },
  { name: "Python", icon: "python" },
  { name: "pandas", icon: "pandas" },
  { name: "Bash", icon: "gnubash" },
  { name: "Apache Spark", icon: "apachespark" },
  { name: "Hadoop", icon: "apachehadoop" },
  { name: "Kafka", icon: "apachekafka" },
  { name: "Airflow", icon: "apacheairflow" },
  { name: "dbt", icon: "dbt" },
  { name: "Power BI", icon: "powerbi" },
  { name: "AWS", icon: "amazonaws" },
  { name: "Azure", icon: "microsoftazure" },
  { name: "Google Cloud", icon: "googlecloud" },
  { name: "Snowflake", icon: "snowflake" },
  { name: "Databricks", icon: "databricks" },
  { name: "Redshift", icon: "amazonredshift" },
];

const versionControlAndDatabaseTools = [
  { name: "Excel", icon: "microsoftexcel" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
];

const softwareEngineeringTools = [
  { name: "React", icon: "react" },
  { name: "Express", icon: "express" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Figma", icon: "figma" },
  { name: "Linux", icon: "linux" },
  { name: "VS Code", icon: "visualstudiocode" },
  { name: "Supabase", icon: "supabase" },
  { name: "Clerk", icon: "clerk" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Vercel", icon: "vercel" },
  { name: "Postman", icon: "postman" },
];

const sections = [
  { label: "Data Engineering", eyebrow: "Primary Stack", desc: "Technologies and platforms I use to design scalable pipelines, process large datasets, and deliver reliable analytics systems.", tools: dataEngineeringTools },
  { label: "Version Control & DB", eyebrow: "Foundations", desc: "Tools essential to both data engineering and software development workflows — from source control to database management.", tools: versionControlAndDatabaseTools },
  { label: "Software Engineering", eyebrow: "Web & Dev", desc: "Tools and technologies I use for software development, including web applications and full-stack engineering.", tools: softwareEngineeringTools },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.04 } } };
const itemVariants = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } };

const ToolIcon = ({ tool }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div variants={itemVariants} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "default" }}>
      <div style={{
        width: 54, height: 54,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: hovered ? "rgba(245,158,11,0.12)" : "#181308",
        border: `1px solid ${hovered ? "rgba(245,158,11,0.5)" : "rgba(245,158,11,0.1)"}`,
        borderRadius: 10,
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 6px 20px rgba(245,158,11,0.12)" : "none",
      }}>
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${tool.icon}.svg`}
          alt={tool.name}
          style={{ width: 24, height: 24, filter: hovered ? "invert(1) sepia(1) saturate(2) hue-rotate(5deg)" : "invert(0.7) sepia(0.3) saturate(0.5)", transition: "all 0.2s ease" }}
        />
      </div>
      <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: "0.08em", color: hovered ? "rgba(245,158,11,0.9)" : "rgba(255,220,100,0.3)", textAlign: "center", lineHeight: 1.3, transition: "color 0.2s ease", maxWidth: 64 }}>
        {tool.name}
      </span>
    </motion.div>
  );
};

const Tools = () => (
  <section id="tools" style={{ background: "#111008", padding: "clamp(4rem,10vw,8rem) clamp(1.5rem,7vw,7rem)", position: "relative", overflow: "hidden" }}>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400&family=DM+Mono:wght@400;500&family=Bebas+Neue&display=swap');`}</style>

    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(245,158,11,0.1)" }} />
    <div style={{ position: "absolute", top: "20%", left: "-15%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(245,158,11,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

    <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
      <div style={{ marginBottom: "5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
          <div style={{ width: 28, height: 2, background: "#f59e0b", borderRadius: 2 }} />
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: "#f59e0b", textTransform: "uppercase" }}>Toolkit</span>
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(3rem,7vw,5.5rem)", color: "#fff", letterSpacing: "0.02em", lineHeight: 0.9, margin: 0 }}>
          Tools &<br /><span style={{ color: "transparent", WebkitTextStroke: "2px rgba(245,158,11,0.35)" }}>Technologies</span>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
        {sections.map((section, si) => (
          <div key={section.label}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(245,158,11,0.1)" }}>
              <div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: "0.2em", color: "rgba(245,158,11,0.45)", textTransform: "uppercase", marginBottom: 8 }}>
                  {String(si + 1).padStart(2, "0")} — {section.eyebrow}
                </div>
                <h3 style={{ fontFamily: "'DM Mono',monospace", fontWeight: 500, fontSize: "clamp(1rem,2vw,1.2rem)", color: "#fff", margin: 0, letterSpacing: "0.02em" }}>
                  {section.label}
                </h3>
              </div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, lineHeight: 1.8, color: "rgba(255,220,100,0.35)", fontWeight: 300, margin: 0, maxWidth: 420 }}>
                {section.desc}
              </p>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={containerVariants}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))", gap: "clamp(1rem,3vw,2rem)" }}>
              {section.tools.map((tool) => <ToolIcon key={tool.name} tool={tool} />)}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Tools;