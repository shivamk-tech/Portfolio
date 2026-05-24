"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "./Motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) { setActiveSection(section); break; }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
          background: scrolled ? "rgba(5, 5, 16, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px" }}>
          {/* Logo */}
          <motion.a href="#hero" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <motion.div
              whileHover={{ rotate: 10 }}
              style={{ width: 36, height: 36, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)", flexShrink: 0 }}
            >
              <img src="/me.png" alt="Shivam" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </motion.div>
            <span style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#f1f5f9" }}>Shivam</span>
          </motion.a>

          {/* Desktop Nav */}
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }} className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link" style={{ color: activeSection === link.href.slice(1) ? "#f1f5f9" : undefined, position: "relative" }}>
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div layoutId="nav-indicator" style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 2, background: "linear-gradient(135deg, #ffffff, #ffffff)", borderRadius: 2 }} transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
              </a>
            ))}
            <MagneticButton href="#contact" className="btn-primary" style={{ padding: "9px 22px", fontSize: "0.85rem" }}>
              Hire Me
            </MagneticButton>
          </div>

          {/* Mobile Hamburger */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8, color: "#f1f5f9" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.g key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }}>
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </motion.g>
                ) : (
                  <motion.g key="open" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }}>
                    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                  </motion.g>
                )}
              </AnimatePresence>
            </motion.svg>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: "fixed", top: 73, left: 0, right: 0, zIndex: 999, background: "rgba(5,5,16,0.97)", borderTop: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}
          >
            <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  style={{ fontSize: "1rem", padding: "10px 0", display: "block", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
