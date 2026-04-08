import { useEffect, useState } from "react";

const heroStats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Pipelines", value: Infinity, suffix: "" },
  { label: "Rows Processed/sec", value: 500000, suffix: "" },
  { label: "Core Stack", value: "dbt / SQL", suffix: "" },
];

const StatCard = ({ value, suffix, label, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value === Infinity) return; // skip anim for ∞
    let start = 0;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / value), 10);
    const interval = setInterval(() => {
      start += 1;
      if (start >= value) {
        clearInterval(interval);
        setCount(value);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "12px 10px",
        borderRadius: 8,
        background: "rgba(245,158,11,0.06)",
        border: "1px solid rgba(245,158,11,0.15)",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "default",
        animation: `fadeUp 0.6s ease forwards`,
        animationDelay: `${delay}s`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(245,158,11,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ fontFamily: "'DM Mono'", fontSize: "1.2rem", color: "#f59e0b", fontWeight: 700 }}>
        {value === Infinity ? "∞" : count.toLocaleString()}{suffix}
      </div>
      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", marginTop: 4 }}>
        {label}
      </div>
    </div>
  );
};

const HeroStats = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
        gap: 12,
        marginTop: 24,
        maxWidth: 380,
        margin: "24px auto 0",
      }}
    >
      {heroStats.map((stat, idx) => (
        <StatCard key={stat.label} {...stat} delay={0.1 + idx * 0.15} />
      ))}
      <style>{`
        @keyframes fadeUp { 0% {opacity:0; transform:translateY(20px)} 100% {opacity:1; transform:translateY(0)} }
      `}</style>
    </div>
  );
};

export default HeroStats;