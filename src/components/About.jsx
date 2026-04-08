import React, { useEffect, useState } from "react";

const About = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  const fadeUp = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "none" : "translateY(20px)",
    transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background: "#111008",
        position: "relative",
        padding: "6rem clamp(1.5rem,7vw,7rem)",
        fontFamily: "'DM Sans', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* subtle divider line */}
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
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 2, background: "#f59e0b" }} />
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
          Building clarity from complexity
        </h2>
      </div>

      {/* Main Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
        }}
      >
        {/* LEFT — PROFILE CARD */}
        <div style={{ ...fadeUp(0.2) }}>
          <div
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
              a{" "}
              <span style={{ color: "#f59e0b" }}>
                Data & Analytics Engineer
              </span>{" "}
              and former co-founder at CRAN US.
            </p>

            <p
              style={{
                color: "rgba(255,240,180,0.45)",
                fontSize: 14,
                lineHeight: 1.9,
              }}
            >
              I design data systems that transform raw, messy business data into
              structured, reliable models—helping teams understand what’s
              happening, why it matters, and what to do next.
            </p>
          </div>
        </div>

        {/* RIGHT — DETAILS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {/* Block 1 */}
          <div style={fadeUp(0.3)}>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9 }}>
              My work focuses on turning{" "}
              <span style={{ color: "#f59e0b" }}>
                product and business data
              </span>{" "}
              into clean, trustworthy analytics layers. I’ve built dimensional
              models, defined metrics, and supported reporting across key SaaS
              KPIs like MRR, churn, and retention.
            </p>
          </div>

          {/* Block 2 */}
          <div style={fadeUp(0.4)}>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9 }}>
              I’ve worked end-to-end from understanding real business problems
              to designing pipelines and delivering insights that teams actually
              use.
            </p>
          </div>

          {/* Block 3 */}
          <div style={fadeUp(0.5)}>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9 }}>
              A Computer Science graduate from Southeast Missouri
              State University building projects with modern data tools
              like dbt, Snowflake, and Spark.
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
              If you're building something data-driven — or just want to talk
              data — let’s connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;