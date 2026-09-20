const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#111008",
        color: "rgba(255, 240, 180, 0.6)",
        borderTop: "1px solid rgba(245,158,11,0.08)",
        padding: "1.5rem clamp(1.5rem, 7vw, 7rem)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          &copy; {date} Md Istiaq Ahmed
        </p>

        <p
          style={{
            margin: 0,
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(245,158,11,0.55)",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          Built with intent
        </p>
      </div>
    </footer>
  );
};

export default Footer;
