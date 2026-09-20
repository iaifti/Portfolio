"use client";

import { useEffect, useState } from "react";

const About = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeUp = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "none" : "translateY(20px)",
    transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section
      id="about"
      className="about-section"
      style={{
        minHeight: "100vh",
        background: "#111008",
        position: "relative",
        padding: "6rem clamp(1.5rem,7vw,7rem)",
        fontFamily: "'DM Sans', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* subtle divider */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 1,
          background: "rgba(245,158,11,0.08)",
        }}
      />

      {/* Header */}
      <div style={{ marginBottom: "3rem", ...fadeUp(0.1) }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 28,
              height: 2,
              background: "#f59e0b",
            }}
          />

          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.22em",
              color: "#f59e0b",
              textTransform: "uppercase",
            }}
          >
            About
          </span>
        </div>

        <h2
          style={{
            marginTop: "1rem",
            fontSize: "clamp(2rem,4vw,3rem)",
            color: "#fff",
            fontWeight: 500,
          }}
        >
          I build systems, not just screens.
        </h2>
      </div>

      {/* Main Grid */}
      <div className="about-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
        }}
      >
        {/* LEFT — PROFILE */}
        <div className="about-left" style={{ ...fadeUp(0.2) }}>
          <div
            className="about-card"
            style={{
              border: "1px solid rgba(245,158,11,0.15)",
              background: "rgba(245,158,11,0.04)",
              padding: "2rem",
              borderRadius: 8,
            }}
          >
            <p
              style={{
                color: "rgba(255,240,180,0.65)",
                fontSize: 15,
                lineHeight: 1.9,
                marginBottom: "1.5rem",
              }}
            >
              Hey — I’m <strong style={{ color: "#fff" }}>Istiaq Ahmed</strong>,
              a <span style={{ color: "#f59e0b" }}>Software Engineer</span>{" "} at Prosera, working for development of industrial production grade software solutions. 
            </p>

            <p
              style={{
                color: "rgba(255,240,180,0.45)",
                fontSize: 14,
                lineHeight: 1.9,
              }}
            >
              My background started in software engineering and data, so I naturally
              think beyond the UI. I care about how a feature moves through the
              stack — from the interface and API layer to the data,
              infrastructure, and deployment behind it.
            </p>
          </div>
        </div>

        {/* RIGHT — DETAILS */}
        <div
          className="about-right"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Block 1 */}
          <div 
          className="about-secondary-copy"
          style={fadeUp(0.3)}>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.9,
              }}
            >
              At Prosera, I work across the{" "}
              <span style={{ color: "#f59e0b" }}>full application stack</span>:
              frontend, APIs, integrations, and the DevOps practices that keep
              everything running in production.
            </p>
          </div>

          {/* Block 2 */}
          <div 
          className="about-secondary-copy"
          style={fadeUp(0.4)}>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.9,
              }}
            >
              Most of my attention goes to the decisions that don't show up in a
              demo: where state lives, how data moves between services, and what
              happens when a dependency is slow or unavailable. I prefer to own
              a feature from the first design discussion through to{" "}
              <span style={{ color: "#f59e0b" }}>release and monitoring</span>.
            </p>
          </div>

          {/* Block 3 */}
          <div 
          className="about-secondary-copy"
          style={fadeUp(0.5)}>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.9,
              }}
            >
              I hold a degree in Computer Science and work primarily with
              Next.js, React, Node.js, and Python, alongside SQL, Snowflake, and
              Spark on the data side. I'm currently focused on backend
              architecture, distributed systems, and cloud infrastructure.
            </p>
          </div>

          {/* CTA */}
          <div style={fadeUp(0.6)}>
            <p
              style={{
                color: "rgba(255,240,180,0.5)",
                fontSize: 14,
              }}
            >
              If you're working on something with real technical depth, I'd like
              to hear about it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
