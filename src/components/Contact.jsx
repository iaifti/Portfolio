import React, { useEffect, useState } from "react";

const Contact = () => {
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
      id="contact"
      style={{
        background: "#111008",
        padding: "5rem clamp(1.5rem,7vw,7rem)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
      }}
    >
      {/* top divider */}
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

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ marginBottom: "2.5rem", ...fadeUp(0.1) }}>
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
              Contact
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
            Let’s build something meaningful
          </h2>
        </div>

        {/* MAIN BOX */}
        <div
          style={{
            border: "1px solid rgba(245,158,11,0.15)",
            background: "rgba(245,158,11,0.04)",
            padding: "2rem",
            borderRadius: 8,
            ...fadeUp(0.2),
          }}
        >
          <p
            style={{
              color: "rgba(255,240,180,0.6)",
              lineHeight: 1.9,
              fontSize: 15,
            }}
          >
            I’m currently open to{" "}
            <span style={{ color: "#f59e0b" }}>
              full-time roles, internships, and collaborations
            </span>{" "}
            where I can help design and scale data systems.
          </p>

          {/* TAGS */}
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {["Full-time", "Internship", "Collaboration"].map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  padding: "6px 14px",
                  borderRadius: 100,
                  border: "1px solid rgba(245,158,11,0.25)",
                  color: "rgba(245,158,11,0.7)",
                  background: "rgba(245,158,11,0.06)",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "2rem" }}>
            <a
              href="mailto:mdistiaqahmed0@gmail.com"
              style={{
                display: "inline-block",
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                letterSpacing: "0.12em",
                padding: "10px 20px",
                borderRadius: 100,
                border: "1px solid rgba(245,158,11,0.4)",
                color: "#fff",
                textDecoration: "none",
                background: "rgba(245,158,11,0.1)",
                transition: "all 0.2s ease",
              }}
            >
              → Get in touch
            </a>
          </div>
        </div>

        {/* FOOTNOTE */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: "rgba(245,158,11,0.3)",
            letterSpacing: "0.1em",
            ...fadeUp(0.4),
          }}
        >
          <span>ISTIAQ.DEV</span>
          <span>ST. LOUIS, MO</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;