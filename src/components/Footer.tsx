"use client";
import { motion } from "framer-motion";
import { GitBranch, Link, AtSign, ArrowUpRight } from "lucide-react";

const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];
const socials = [
  { href: "https://github.com/shivamk-tech", label: "GitHub", icon: <GitBranch size={16} /> },
  { href: "https://www.linkedin.com/in/shivam-kumar-218777276/", label: "LinkedIn", icon: <Link size={16} /> },
  { href: "https://x.com/tenzin_886", label: "Twitter / X", icon: <AtSign size={16} /> },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>

      {/* Main footer content */}
      <div className="container" style={{ padding: "64px 28px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "48px", marginBottom: "48px" }} className="footer-grid">

          {/* Brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)", flexShrink: 0 }}>
                <img src="/me.png" alt="Shivam" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#f1f5f9" }}>Shivam</span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.7, maxWidth: 260, marginBottom: "24px" }}>
              Next.js + TypeScript developer building full-stack apps and exploring Agentic AI & Generative AI.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, color: "#f1f5f9", borderColor: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.06)" }}
                  style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", textDecoration: "none", transition: "all 0.2s ease" }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav col */}
          <div>
            <p style={{ fontSize: "0.7rem", fontFamily: "Fira Code, monospace", color: "#ffffff", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>Navigation</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {navLinks.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 4, color: "#f1f5f9" }}
                  style={{ fontSize: "0.875rem", color: "#475569", textDecoration: "none", transition: "color 0.2s ease", display: "flex", alignItems: "center", gap: "6px" }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div>
            <p style={{ fontSize: "0.7rem", fontFamily: "Fira Code, monospace", color: "#ffffff", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>Get In Touch</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <motion.a
                href="mailto:shivam@example.com"
                whileHover={{ x: 4, color: "#f1f5f9" }}
                style={{ fontSize: "0.875rem", color: "#475569", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
              >
                <ArrowUpRight size={14} /> Email me
              </motion.a>
              <motion.a
                href="https://github.com/shivamk-tech"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4, color: "#f1f5f9" }}
                style={{ fontSize: "0.875rem", color: "#475569", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
              >
                <ArrowUpRight size={14} /> GitHub Profile
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shivam-kumar-218777276/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4, color: "#f1f5f9" }}
                style={{ fontSize: "0.875rem", color: "#475569", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
              >
                <ArrowUpRight size={14} /> LinkedIn
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <span style={{ fontSize: "0.8rem", color: "#334155", fontFamily: "Fira Code, monospace" }}>
            © {year} Shivam Kumar Sagar. All rights reserved.
          </span>
          <span style={{ fontSize: "0.8rem", color: "#334155", fontFamily: "Fira Code, monospace" }}>
            Built with Next.js + TypeScript
          </span>
        </div>
      </div>

      {/* Big name watermark */}
      <div
        className="pointer-events-none select-none overflow-hidden"
        style={{
          marginTop: "-0.5rem",
          WebkitMaskImage: "linear-gradient(to bottom, #080808 0%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(to bottom, #080808 0%, rgba(0,0,0,0) 100%)",
        }}
      >
        <p
          className="text-center font-black leading-none"
          style={{ fontSize: "clamp(4rem, 18vw, 13rem)", color: "rgba(255,255,255,0.04)", letterSpacing: "-0.02em", fontFamily: "Space Grotesk, sans-serif", fontWeight: 900 }}
        >
          TeNzIn
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .container { padding-left: 16px !important; padding-right: 16px !important; }
        }
        @media (max-width: 480px) {
          .footer-bottom { flex-direction: column !important; text-align: center; gap: 8px !important; }
        }
      `}</style>
    </footer>
  );
}
