import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Istiaq from "../assets/istiaqremovebg.png";

const ROLES = ["Data Engineer", "Analytics Engineer", "Pipeline Architect"];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
const GmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

const RoleTyper = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);
  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout;
    if (!deleting) {
      if (charIdx < target.length)
        timeout = setTimeout(() => setCharIdx((i) => i + 1), 60);
      else timeout = setTimeout(() => setDeleting(true), 2200);
    } else {
      if (charIdx > 0) timeout = setTimeout(() => setCharIdx((i) => i - 1), 35);
      else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
    setDisplayed(target.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);
  return (
    <span
      style={{
        color: "#f59e0b",
        fontFamily: "'DM Mono', monospace",
        fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)",
        letterSpacing: "0.03em",
      }}
    >
      {displayed}
      <span
        style={{
          animation: "blink 1s step-end infinite",
          borderRight: "2px solid #f59e0b",
          marginLeft: 1,
        }}
      />
    </span>
  );
};

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 80);
  }, []);
  const fadeUp = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "none" : "translateY(20px)",
    transition: `all 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111008",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Mono:wght@400;500&family=Bebas+Neue&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .hero-cran { color: rgba(255,220,100,0.6); text-decoration: none; border-bottom: 1px solid rgba(245,158,11,0.3); transition: all 0.2s; }
        .hero-cran:hover { color: #f59e0b; border-color: #f59e0b; }
        .social-pill { display:flex; align-items:center; gap:8px; padding:9px 18px; border-radius:100px; font-family:'DM Mono',monospace; font-size:12px; letter-spacing:0.08em; text-decoration:none; transition:all 0.2s ease; border:1px solid rgba(245,158,11,0.25); color:rgba(255,255,255,0.55); background:rgba(245,158,11,0.05); }
        .social-pill:hover { background:rgba(245,158,11,0.15); border-color:rgba(245,158,11,0.6); color:#fff; transform:translateY(-2px); }
        .stack-tag { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:0.12em; padding:5px 12px; border-radius:100px; border:1px solid rgba(245,158,11,0.2); color:rgba(245,158,11,0.65); background:rgba(245,158,11,0.06); white-space:nowrap; }
        @media(max-width:900px){ .hero-photo{ display:none!important; } .hero-grid{ grid-template-columns:1fr!important; } }
        @keyframes pulse {
  0%,100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.4); }
}
      `}</style>

      {/* Warm noise texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Large amber glow — top left */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "65vw",
          height: "65vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0.03) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Smaller warm glow — bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "5%",
          width: "35vw",
          height: "35vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Subtle diagonal lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(245,158,11,0.025) 0px, rgba(245,158,11,0.025) 1px, transparent 1px, transparent 60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Header */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <Header />
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: "0 clamp(1.5rem,7vw,7rem)",
          position: "relative",
          zIndex: 10,
          maxWidth: 1400,
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: "clamp(2rem,4vw,4rem)",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* LEFT */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                ...fadeUp(0.1),
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 2,
                  background: "#f59e0b",
                  borderRadius: 2,
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  color: "#f59e0b",
                  textTransform: "uppercase",
                }}
              >
                Available for hire
              </span>
            </div>

            {/* Name */}
            <div style={fadeUp(0.2)}>
              <div
                style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "clamp(4rem,11vw,9rem)",
                  lineHeight: 0.9,
                  letterSpacing: "0.02em",
                  userSelect: "none",
                }}
              >
                <div style={{ color: "#fff" }}>ISTIAQ</div>
                <div
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px rgba(245,158,11,0.4)",
                  }}
                >
                  AHMED
                </div>
              </div>
            </div>

            {/* Typewriter */}
            <div
              style={{
                marginTop: "1.5rem",
                ...fadeUp(0.4),
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.08em",
                }}
              >
                $ role —
              </span>
              <RoleTyper />
            </div>

            {/* Bio */}
            <div
              style={{ marginTop: "1.75rem", ...fadeUp(0.55), maxWidth: 480 }}
            >
              <p
                style={{
                  color: "rgba(255,240,180,0.45)",
                  fontSize: 15,
                  lineHeight: 1.9,
                  margin: 0,
                  fontWeight: 300,
                }}
              >
                Former Co-Founder & Engineer at{" "}
                <span className="hero-cran">CRAN US</span> Building data
                infrastructure that turns raw pipelines into business clarity.
              </p>
            </div>

            {/* Stack tags */}
            <div
              style={{
                marginTop: "1.75rem",
                ...fadeUp(0.65),
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {["Python", "SQL", "dbt", "Snowflake", "Airflow"].map((t) => (
                <span key={t} className="stack-tag">
                  {t}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{
                marginTop: "2rem",
                marginBottom: "1.75rem",
                height: 1,
                background: "rgba(245,158,11,0.12)",
                ...fadeUp(0.7),
              }}
            />

            {/* Socials */}
            <div
              style={{
                ...fadeUp(0.8),
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <a
                className="social-pill"
                href="https://www.linkedin.com/in/ahmedmdistiaq"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                className="social-pill"
                href="https://github.com/iaifti"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                className="social-pill"
                href="mailto:mdistiaqahmed0@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <GmailIcon />
                Email me
              </a>
            </div>
          </div>

          {/* RIGHT — photo */}
          {/* RIGHT — data system panel */}
          <div
            className="hero-photo"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateX(20px)",
              transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.4s",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {/* PANEL */}
            <div
              style={{
                position: "relative",
                border: "1px solid rgba(245,158,11,0.2)",
                borderRadius: 8,
                padding: "1.25rem",
                background: "rgba(245,158,11,0.04)",
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                color: "#f59e0b",
                overflow: "hidden",
              }}
            >
              {/* glow */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 20% 0%, rgba(245,158,11,0.15), transparent 60%)",
                  pointerEvents: "none",
                }}
              />

              {/* header */}
              <div style={{ marginBottom: "0.75rem", opacity: 0.6 }}>
                SYSTEM LOG — PIPELINE STATUS
              </div>

              {/* logs */}
              {[
                "→ ingesting raw_events.csv",
                "→ cleaning null values",
                "→ building dim_customers",
                "→ joining fact_payments",
                "→ generating metrics",
                "✓ pipeline success",
              ].map((line, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: "0.4rem",
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "none" : "translateX(10px)",
                    transition: `all 0.4s ease ${i * 0.15 + 0.5}s`,
                  }}
                >
                  {line}
                </div>
              ))}
            </div>

            {/* MINI PIPELINE VISUAL */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                padding: "0.75rem",
                border: "1px solid rgba(245,158,11,0.15)",
                borderRadius: 6,
                background: "rgba(245,158,11,0.03)",
              }}
            >
              {["Raw", "Staging", "Warehouse", "Metrics"].map((stage, i) => (
                <div
                  key={stage}
                  style={{
                    flex: 1,
                    textAlign: "center",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    color: "rgba(245,158,11,0.7)",
                    position: "relative",
                  }}
                >
                  {/* node */}
                  <div
                    style={{
                      margin: "0 auto 6px",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#f59e0b",
                      animation: "pulse 1.8s infinite",
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />

                  {stage}

                  {/* connector */}
                  {i !== 3 && (
                    <div
                      style={{
                        position: "absolute",
                        top: 4,
                        right: "-50%",
                        width: "100%",
                        height: 1,
                        background: "rgba(245,158,11,0.3)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* stats (keep yours but refined) */}
            {/* <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 10,
              }}
            >
              {[
                ["", ""],
                ["∞", "Pipelines"],
                ["dbt", "SQL"],
              ].map(([v, l]) => (
                <div
                  key={l}
                  style={{
                    textAlign: "center",
                    padding: "10px 8px",
                    background: "rgba(245,158,11,0.05)",
                    border: "1px solid rgba(245,158,11,0.15)",
                    borderRadius: 6,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "1rem",
                      color: "#f59e0b",
                      fontWeight: 700,
                    }}
                  >
                    {v}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,0.35)",
                      letterSpacing: "0.1em",
                      marginTop: 4,
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          borderTop: "1px solid rgba(245,158,11,0.1)",
          padding: "0.875rem clamp(1.5rem,7vw,7rem)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.5s ease 1.1s",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: 11,
            color: "rgba(245,158,11,0.3)",
            letterSpacing: "0.15em",
          }}
        >
          ISTIAQ.DEV — 2025
        </span>
        <span
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: 11,
            color: "rgba(245,158,11,0.3)",
            letterSpacing: "0.1em",
          }}
        >
          ST. LOUIS, MO
        </span>
      </div>
    </div>
  );
};

export default Hero;
