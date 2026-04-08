import { motion } from "framer-motion";

const experiences = [
  {
    title: "Cran US LLC",
    role: "Software Engineer & Co-Founder",
    period: "2023 — 2024",
    bullets: [
      "Co-founded SaaS startup serving paying customers; owned full development lifecycle from requirements gathering to production deployment and post-launch iteration.",
      "Partnered directly with early customers to understand business problems and prioritize feature development, requiring rapid translation of qualitative feedback into technical solutions.",
      "Built data infrastructure supporting operational reporting, enabling visibility into user behavior and feature adoption for early customers.",
    ],
  },
  {
    title: "SEMO Recreation Center",
    role: "Data Entry Assistant",
    period: "2022 — 2023",
    bullets: [
      "Managed patron records in CRM system, ensuring data quality and consistency; created Excel-based tracking tools for scheduling coordination and workflow optimization.",
      "Contributed to workflow improvements and assisted users with clear communication and problem-solving support.",
    ],
  },
  {
    title: "Learning Assistant Program",
    role: "Computer Science Tutor",
    period: "2022 — 2023",
    bullets: [
      "Tutored Python, Java, and Unix/Linux fundamentals in 1:1 and small group settings, developing skills in explaining technical concepts to non-technical audiences.",
      "Helped students debug logic errors and strengthen problem-solving approaches, building experience in translating abstract problems into structured solutions.",
    ],
  },
  {
    title: "SEMO Dining Services",
    role: "Operations Supervisor",
    period: "2021 — 2022",
    bullets: [
      "Managed daily operations across 15-person team, coordinating shift scheduling, food production workflows, and inventory tracking to maintain service quality during high-volume periods.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] } }),
};

const Experiences = () => (
  <section id="experience" style={{ background: "#111008", padding: "clamp(4rem,10vw,8rem) clamp(1.5rem,7vw,7rem)", position: "relative", overflow: "hidden" }}>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400&family=DM+Mono:wght@400;500&family=Bebas+Neue&display=swap');
      .exp-bullet { display:flex; align-items:baseline; gap:10px; }
      .exp-bullet::before { content:'—'; color:#f59e0b; font-family:'DM Mono',monospace; font-size:11px; flex-shrink:0; opacity:0.6; }
    `}</style>

    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(245,158,11,0.1)" }} />
    <div style={{ position: "absolute", bottom: "5%", right: "-10%", width: "50vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(245,158,11,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

    <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
      <div style={{ marginBottom: "4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
          <div style={{ width: 28, height: 2, background: "#f59e0b", borderRadius: 2 }} />
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: "#f59e0b", textTransform: "uppercase" }}>Career</span>
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(3rem,7vw,5.5rem)", color: "#fff", letterSpacing: "0.02em", lineHeight: 0.9, margin: 0 }}>
          Professional<br /><span style={{ color: "transparent", WebkitTextStroke: "2px rgba(245,158,11,0.35)" }}>Experience</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "1.5rem" }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={i} custom={i} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-60px" }} variants={cardVariants}
            style={{ background: "#141108", border: "1px solid rgba(245,158,11,0.12)", borderRadius: 10, padding: "clamp(1.25rem,3vw,2rem)", position: "relative", transition: "all 0.25s ease" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.35)"; e.currentTarget.style.background = "#1a1500"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(245,158,11,0.08)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.12)"; e.currentTarget.style.background = "#141108"; e.currentTarget.style.boxShadow = "none"; }}
          >
            {/* Amber top accent */}
            <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent)", borderRadius: "0 0 4px 4px" }} />

            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: "0.2em", color: "rgba(245,158,11,0.4)", marginBottom: "1rem" }}>
              {String(i + 1).padStart(2, "0")}
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              <h3 style={{ fontFamily: "'DM Mono',monospace", fontWeight: 500, fontSize: "clamp(0.9rem,1.5vw,1.05rem)", color: "#fff", margin: "0 0 8px", letterSpacing: "0.01em" }}>
                {exp.role}
              </h3>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: "0.1em", color: "#f59e0b" }}>{exp.title}</span>
                {exp.period && <>
                  <span style={{ color: "rgba(245,158,11,0.2)", fontSize: 10 }}>·</span>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: "0.1em", color: "rgba(255,200,80,0.3)" }}>{exp.period}</span>
                </>}
              </div>
            </div>

            <div style={{ height: 1, background: "rgba(245,158,11,0.08)", marginBottom: "1.25rem" }} />

            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {exp.bullets.map((point, j) => (
                <li key={j} className="exp-bullet" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, lineHeight: 1.78, color: "rgba(255,230,150,0.38)", fontWeight: 300 }}>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experiences;