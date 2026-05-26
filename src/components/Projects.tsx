"use client";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Reveal, MagneticButton } from "./Motion";
import { GitBranch, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CodeClaria",
    description: "AI-powered code review platform. Connect your GitHub repos and get intelligent PR/commit analysis backed by subscription-based access control.",
    tags: ["Next.js", "TypeScript", "AI", "GitHub API", "LLM"],
    category: "AI",
    icon: "/CodeClariaIcon.png",
    preview: "/CodeClariaImage.png",
    github: "https://github.com/shivamk-tech",
    live: "https://code-claria.vercel.app/",
    highlights: ["AI-powered PR & commit analysis", "GitHub repo integration", "Subscription-based access control", "LLM-backed code feedback"],
  },
  {
    id: 2,
    title: "TriggerInsta",
    description: "Smart Instagram automation platform. Automate replies, lead collection, scheduled actions & engagement workflows with a modern analytics dashboard.",
    tags: ["Next.js", "TypeScript", "Instagram API", "Automation", "Analytics"],
    category: "AI",
    icon: "/TriggerIcon.png",
    preview: "/TriggerImage.png",
    github: "https://github.com/shivamk-tech",
    live: "#",
    highlights: ["Auto-replies & lead collection", "Scheduled engagement workflows", "Analytics dashboard", "Modern automation UI"],
  },
  {
    id: 3,
    title: "Full Stack Uber Clone",
    description: "Real-time ride booking platform with live location tracking, role-based auth for riders and drivers, and a scalable backend architecture.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "Maps API"],
    category: "Full Stack",
    icon: "/UberIcon.png",
    preview: "/UberImage.png",
    github: "https://github.com/shivamk-tech",
    live: "https://uber-zeta-henna.vercel.app/",
    highlights: ["Real-time ride booking system", "Live location tracking with maps", "Auth & role-based system", "Scalable backend"],
  },
  {
    id: 4,
    title: "Sketcha",
    description: "A creative drawing and sketching application with an interactive canvas UI designed for smooth, intuitive drawing experiences.",
    tags: ["React", "Canvas API", "JavaScript", "Tailwind CSS"],
    category: "Frontend",
    icon: "/SketchaIcon.png",
    preview: "/SketchaImage.png",
    github: "https://github.com/shivamk-tech",
    live: "https://shivamk-tech.github.io/Sketcha/",
    highlights: ["Interactive drawing canvas", "Multiple brush & color tools", "Smooth UX & animations", "Export sketches as image"],
  },
];

const categories = ["All", "AI", "Full Stack", "Frontend"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="orb" style={{ width: 600, height: 600, background: "radial-gradient(circle, #ffffff, transparent)", top: 0, right: "-200px" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Reveal style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="section-label">What I&apos;ve Built</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: "#94a3b8", marginTop: "16px", maxWidth: 520, margin: "16px auto 0" }}>
            Real projects I&apos;ve built from scratch — breaking things and learning along the way
          </p>
        </Reveal>

        {/* Filter Tabs */}
        <Reveal delay={0.1} style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "48px", flexWrap: "wrap" }}>
          <LayoutGroup>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                layout
                style={{
                  padding: "8px 20px", borderRadius: "50px", border: "1px solid",
                  borderColor: activeCategory === cat ? "transparent" : "rgba(255,255,255,0.08)",
                  background: activeCategory === cat ? "#ffffff" : "transparent",
                  color: activeCategory === cat ? "#000000" : "#94a3b8",
                  fontWeight: 500, fontSize: "0.9rem", cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {cat}
              </motion.button>
            ))}
          </LayoutGroup>
        </Reveal>

        {/* 2x2 Projects Grid */}
        <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }} className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(255,255,255,0.06)" }}
                className="glass-card"
                style={{ padding: 0, overflow: "hidden", cursor: "default" }}
              >
                {/* Preview Image */}
                <div
                  className="project-preview"
                  style={{ position: "relative", height: 200, overflow: "hidden", background: "#0e0e0e" }}
                >
                  <img
                    src={project.preview}
                    alt={project.title}
                    className="project-preview-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85, transition: "opacity 0.3s ease, transform 0.4s ease", display: "block" }}
                  />
                  {/* Gradient overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.8) 0%, transparent 60%)" }} />
                  {/* Icon + category badge */}
                  <div style={{ position: "absolute", top: 12, left: 12, width: 36, height: 36, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)", background: "#080808" }}>
                    <img src={project.icon} alt={project.title + " icon"} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ position: "absolute", top: 12, right: 12, padding: "4px 10px", background: "rgba(0,0,0,0.5)", borderRadius: "50px", fontSize: "0.7rem", fontWeight: 600, color: "#ffffff", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}>
                    {project.category}
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: "20px 24px 24px" }}>
                  <h3 className="font-space" style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "8px" }}>{project.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.6, marginBottom: "16px" }}>{project.description}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                    {project.tags.map((tag) => (
                      <motion.span key={tag} className="skill-badge" style={{ fontSize: "0.7rem" }} whileHover={{ scale: 1.08 }}>
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "16px" }}>
                    <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "#94a3b8", textDecoration: "none", fontWeight: 500 }}
                      whileHover={{ color: "#f1f5f9", x: 2 }}
                    >
                      <GitBranch size={14} /> Source Code
                    </motion.a>
                    <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "#ffffff", textDecoration: "none", fontWeight: 500 }}
                      whileHover={{ color: "#e0e0e0", x: 2 }}
                    >
                      <ExternalLink size={14} /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <Reveal delay={0.2} style={{ textAlign: "center", marginTop: "48px" }}>
          <MagneticButton href="https://github.com/shivamk-tech" target="_blank" rel="noopener noreferrer" className="btn-primary" id="view-all-github">
            <GitBranch size={18} />
            View All on GitHub → shivamk-tech
          </MagneticButton>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 480px) { .project-preview { height: 160px !important; } }
        .project-preview-img { object-position: top; }
        .project-preview:hover .project-preview-img { opacity: 1 !important; transform: scale(1.04); }
      `}</style>
    </section>
  );
}
