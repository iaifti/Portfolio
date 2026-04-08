import React, { useState, useEffect } from "react";
import HB from "../components/hb";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Bebas+Neue&display=swap');
        .nav-link {
          position: relative;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,230,130,0.45);
          text-decoration: none;
          padding: 6px 0;
          transition: color 0.2s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: #f59e0b;
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: #fff; }
        .nav-link:hover::after { width: 100%; }
        .connect-btn {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #f59e0b;
          text-decoration: none;
          padding: 8px 20px;
          border: 1px solid rgba(245,158,11,0.35);
          border-radius: 100px;
          transition: all 0.2s ease;
          background: rgba(245,158,11,0.06);
        }
        .connect-btn:hover {
          background: rgba(245,158,11,0.15);
          border-color: #f59e0b;
          color: #fff;
        }
        .mobile-nav-link {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,230,130,0.45);
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid rgba(245,158,11,0.08);
          display: block;
          width: 100%;
          text-align: center;
          transition: color 0.2s ease;
        }
        .mobile-nav-link:hover { color: #f59e0b; }
        .mobile-connect {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #f59e0b;
          text-decoration: none;
          padding: 12px 0;
          display: block;
          width: 100%;
          text-align: center;
        }
        @media (max-width: 768px) { .hdr-desktop { display: none !important; } .hdr-mobile { display: block !important; } }
        @media (min-width: 769px) { .hdr-desktop { display: flex !important; } .hdr-mobile { display: none !important; } }
      `}</style>

      <nav style={{
        position: "relative", zIndex: 20, width: "100%",
        borderBottom: scrolled ? "1px solid rgba(245,158,11,0.1)" : "1px solid transparent",
        background: scrolled ? "rgba(17,16,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(1.5rem,7vw,7rem)", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <a href="#" style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.5rem", letterSpacing:"0.08em", color:"#fff", textDecoration:"none", transition:"color 0.2s" }}
            onMouseEnter={e => e.target.style.color="#f59e0b"}
            onMouseLeave={e => e.target.style.color="#fff"}
          >
            Ahmed<span style={{ color:"#f59e0b" }}>.</span>
          </a>

          {/* Desktop */}
          <div className="hdr-desktop" style={{ alignItems:"center", gap:"2.5rem" }}>
            <ul style={{ display:"flex", gap:"2rem", listStyle:"none", margin:0, padding:0 }}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}><a href={href} className="nav-link">{label}</a></li>
              ))}
            </ul>
            <a href="https://www.linkedin.com/in/ahmedmdistiaq" target="_blank" rel="noreferrer" className="connect-btn">Connect ↗</a>
          </div>

          {/* Hamburger */}
          <div className="hdr-mobile"><HB toggleMenu={() => setIsMenuOpen(o => !o)} /></div>
        </div>

        {/* Mobile drawer */}
        <div style={{ overflow:"hidden", maxHeight:isMenuOpen?320:0, transition:"max-height 0.35s cubic-bezier(0.22,1,0.36,1)", background:"rgba(17,16,8,0.97)", borderTop:isMenuOpen?"1px solid rgba(245,158,11,0.08)":"none" }}>
          <div style={{ padding:"1rem clamp(1.5rem,7vw,7rem)" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>{label}</a>
            ))}
            <a href="https://www.linkedin.com/in/ahmedmdistiaq" target="_blank" rel="noreferrer" className="mobile-connect" style={{ marginTop:12 }}>Connect ↗</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;