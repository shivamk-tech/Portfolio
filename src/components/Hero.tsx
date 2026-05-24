"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { MagneticButton } from "./Motion";
import { GitBranch, Monitor } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Next.js & TypeScript Dev",
  "Building Agentic AI",
  "Generative AI Explorer",
  "Building Cool Things",
];

const orbitItems = [
  { label: "Re", angle: 0 },
  { label: "TS", angle: 72 },
  { label: "Node", angle: 144 },
  { label: "Py", angle: 216 },
  { label: "DB", angle: 288 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollY } = useScroll();
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);
  const bgY = useTransform(scrollY, [0, 600], [0, 80]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(".hero-badge",     { opacity: 0, y: -16 },            { opacity: 1, y: 0, duration: 0.5 })
      .fromTo(".hero-title",     { opacity: 0, y: 50, skewY: 2 },   { opacity: 1, y: 0, skewY: 0, duration: 0.8 }, "-=0.2")
      .fromTo(".hero-typewriter",{ opacity: 0, x: -16 },             { opacity: 1, x: 0, duration: 0.5 }, "-=0.4")
      .fromTo(".hero-desc",      { opacity: 0, y: 16 },              { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .fromTo(".hero-ctas",      { opacity: 0, y: 16 },              { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .fromTo(".hero-stats",     { opacity: 0, y: 16 },              { opacity: 1, y: 0, duration: 0.5 }, "-=0.2");
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => { setDisplayText(current.slice(0, charIndex + 1)); setCharIndex(c => c + 1); }, 80);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => { setDisplayText(current.slice(0, charIndex - 1)); setCharIndex(c => c - 1); }, 38);
    } else {
      setIsDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      s: Math.random() * 1.5 + 0.4, o: Math.random() * 0.35 + 0.05,
    }));
    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.o})`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx*dx + dy*dy);
        if (d < 90) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - d/90)})`; ctx.lineWidth = 0.4; ctx.stroke();
        }
      }
      id = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <section id="hero" className="grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 80 }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />

      <motion.div style={{ y: bgY, position: "absolute", top: -120, right: -120, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.06), transparent)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div className="orb" style={{ width: 350, height: 350, background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent)", bottom: 80, left: -80 }} />

      <motion.div style={{ opacity: opacityHero, width: "100%", position: "relative", zIndex: 1 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "60px", alignItems: "center" }} className="hero-grid">

            {/* Left */}
            <div>
              <div className="hero-badge" style={{ opacity: 0, display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "4px", marginBottom: "36px" }}>
                <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: 6, height: 6, borderRadius: "50%", background: "#ffffff", boxShadow: "0 0 6px #ffffff", display: "inline-block" }} />
                <span style={{ fontSize: "0.78rem", color: "#ffffff", fontWeight: 600, fontFamily: "Fira Code, monospace", letterSpacing: "0.5px" }}>
                  open_to_opportunities()
                </span>
              </div>

              <h1 className="hero-title font-space" style={{ opacity: 0, fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 800, lineHeight: 1.05, marginBottom: "20px", color: "#f0f0ea", letterSpacing: "-0.02em" }}>
                Hey, I&apos;m<br />
                <span className="gradient-text">Shivam</span>
              </h1>

              <div className="hero-typewriter" style={{ opacity: 0, fontSize: "clamp(1rem, 2vw, 1.25rem)", marginBottom: "28px", height: "2em", display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontFamily: "Fira Code, monospace", color: "#3f3f3a" }}>//</span>
                <span style={{ fontFamily: "Fira Code, monospace", color: "#ffffff", fontWeight: 500 }}>
                  {displayText}
                </span>
                <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}
                  style={{ width: 2, height: "1.1em", background: "#ffffff", display: "inline-block" }} />
              </div>

              <p className="hero-desc" style={{ opacity: 0, fontSize: "1rem", color: "#7a7a72", lineHeight: 1.85, maxWidth: 480, marginBottom: "40px" }}>
                Full Stack dev now diving deep into{" "}
                <span style={{ color: "#f0f0ea", fontWeight: 600 }}>Agentic AI & Gen AI</span>.
                I build full-stack apps with Next.js & TypeScript and ship AI-powered stuff.
                <br />
                <span style={{ fontFamily: "Fira Code, monospace", fontSize: "0.82rem", color: "#3f3f3a", marginTop: 10, display: "block" }}>
                  // fun: I fix 1 bug → create 3 new ones
                </span>
              </p>

              <div className="hero-ctas" style={{ opacity: 0, display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <MagneticButton href="#projects" className="btn-primary" id="hero-view-projects">
                  View Projects →
                </MagneticButton>
                <MagneticButton href="https://github.com/shivamk-tech" target="_blank" rel="noopener noreferrer" className="btn-outline" id="hero-github">
                  <GitBranch size={16} />
                  GitHub
                </MagneticButton>
              </div>

              <div className="hero-stats" style={{ opacity: 0, display: "flex", gap: "48px", marginTop: "60px", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.05)", flexWrap: "wrap" }}>
                {[
                  { value: "10mo", label: "coding" },
                  { value: "5+", label: "projects" },
                  { value: "∞", label: "bugs" },
                ].map((s, i) => (
                  <motion.div key={s.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 + i * 0.12 }}>
                    <div className="font-space accent-text" style={{ fontSize: "2.2rem", fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: "0.8rem", color: "#3f3f3a", marginTop: 5, fontFamily: "Fira Code, monospace" }}>{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — Avatar */}
            <motion.div className="hero-avatar" animate={{ y: [0, -14, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} style={{ width: 280, height: 280, position: "relative", flexShrink: 0 }}>
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 22, ease: "linear" }} style={{ position: "absolute", inset: -18, border: "1px dashed rgba(255,255,255,0.2)", borderRadius: "50%" }} />
              <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 35, ease: "linear" }} style={{ position: "absolute", inset: -38, border: "1px dashed rgba(255,255,255,0.08)", borderRadius: "50%" }} />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 120 }}
                style={{ width: "100%", height: "100%", borderRadius: "50%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}
              >
                <img src="/me.png" alt="Shivam" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
                {orbitItems.map(({ label, angle }, i) => {
                  const rad = (angle * Math.PI) / 180;
                  return (
                    <motion.div key={i}
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.25 }}
                      style={{ position: "absolute", left: `calc(50% + ${Math.cos(rad) * 148}px - 20px)`, top: `calc(50% + ${Math.sin(rad) * 148}px - 20px)`, width: 40, height: 40, borderRadius: "50%", background: "#0e0e0e", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", fontWeight: 700, color: "#ffffff", fontFamily: "Fira Code, monospace" }}
                    >
                      {label}
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)" }} />
        <span style={{ fontSize: "0.68rem", color: "#3f3f3a", fontFamily: "Fira Code, monospace", letterSpacing: 2 }}>SCROLL</span>
      </motion.div>

      <style>{`
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } .hero-avatar { display: none !important; } }
      `}</style>
    </section>
  );
}
