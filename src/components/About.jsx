"use client";

import React, { useEffect, useState } from "react";

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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
        }}
      >
        {/* LEFT — PROFILE */}
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
              Hey — I’m{" "}
              <strong style={{ color: "#fff" }}>Istiaq Ahmed</strong>, a{" "}
              <span style={{ color: "#f59e0b" }}>
                Software Engineer
              </span>{" "}
              working on production software at Prosera, currently focused on
              the ProSync platform.
            </p>

            <p
              style={{
                color: "rgba(255,240,180,0.45)",
                fontSize: 14,
                lineHeight: 1.9,
              }}
            >
              My background started in data and backend systems, so I naturally
              think beyond the UI. I care about how a feature moves through
              the stack — from the interface and API layer to the data,
              infrastructure, and deployment behind it.
            </p>
          </div>
        </div>

        {/* RIGHT — DETAILS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Block 1 */}
          <div style={fadeUp(0.3)}>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.9,
              }}
            >
              At ProSync, I work across the{" "}
              <span style={{ color: "#f59e0b" }}>
                application stack
              </span>
              , building frontend experiences, backend services, APIs, and the
              integrations that connect them. I’m particularly interested in
              the engineering decisions underneath a feature — state,
              data flow, service boundaries, performance, and reliability.
            </p>
          </div>

          {/* Block 2 */}
          <div style={fadeUp(0.4)}>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.9,
              }}
            >
              I enjoy taking something from{" "}
              <span style={{ color: "#f59e0b" }}>
                “this needs to exist”
              </span>{" "}
              to a working piece of software. That means figuring out the
              architecture, implementing the feature, connecting the data,
              handling the edge cases, and making sure it survives outside
              of a local development environment.
            </p>
          </div>

          {/* Block 3 */}
          <div style={fadeUp(0.5)}>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.9,
              }}
            >
              My Computer Science background and experience with tools like
              Next.js, React, Node.js, Python, SQL, Snowflake, Spark, and
              cloud infrastructure give me a strong foundation across both
              software and data systems. I’m continuing to go deeper into
              distributed systems, backend engineering, and cloud-native
              development.
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
              I like working on problems where there’s more to solve than
              what’s visible on the screen. If you’re building something
              interesting, let’s talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

