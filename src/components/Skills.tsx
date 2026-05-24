"use client";
import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";
import { Layers, Server, BookOpen, Sprout, Zap } from "lucide-react";

const skills = {
  "Frontend": [
    "React.js", "Next.js", "TypeScript", "JavaScript", "HTML / CSS", "Tailwind CSS",
  ],
  "Backend": [
    "Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs",
  ],
  "Learning & Tools": [
    "Python", "C / C++", "Git & GitHub", "VS Code", "Postman",
  ],
};

const categoryIcon: Record<string, React.ReactNode> = {
  "Frontend": <Layers size={16} />,
  "Backend": <Server size={16} />,
  "Learning & Tools": <BookOpen size={16} />,
};

const currentlyLearning = [
  { label: "Agentic AI & Gen AI", icon: <Sprout size={14} />, status: "In Progress" },
  { label: "Advanced Next.js & TypeScript", icon: <Layers size={14} />, status: "Building" },
  { label: "System Design", icon: <Server size={14} />, status: "Exploring" },
];

const techStack = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Express.js", "MongoDB", "MySQL", "Python", "C++", "C",
  "HTML5", "CSS3", "Tailwind CSS", "Git", "GitHub", "Postman", "VS Code",
  "LLMs", "AI Agents", "Gen AI", "Instagram API", "GitHub API",
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, #ffffff, transparent)", top: "50%", left: "-200px", transform: "translateY(-50%)" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label">Tech Arsenal</span>
          <h2 className="section-title">Skills &amp; <span className="gradient-text">Stack</span></h2>
          <p style={{ color: "#94a3b8", marginTop: "16px", maxWidth: 500, margin: "16px auto 0" }}>
            Technologies I work with daily — and some I&apos;m actively levelling up
          </p>
        </Reveal>

        {/* Skill categories */}
        <StaggerContainer style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "32px" }}>
          {Object.entries(skills).map(([category, items]) => (
            <StaggerItem key={category}>
              <motion.div
                className="glass-card"
                style={{ padding: "28px", height: "100%" }}
                whileHover={{ borderColor: "rgba(255,255,255,0.15)", boxShadow: "0 0 40px rgba(255,255,255,0.05)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-space" style={{ fontSize: "1rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ width: 32, height: 32, borderRadius: 8, background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: "#0a0a0a" }}>
                    {categoryIcon[category]}
                  </span>
                  {category}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="skill-badge"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.08, background: "rgba(255,255,255,0.1)", color: "#f1f5f9" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Currently Learning */}
        <Reveal delay={0.1}>
          <motion.div
            className="glass-card"
            style={{ padding: "28px", marginBottom: "24px", borderColor: "rgba(255,255,255,0.1)" }}
            whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}
          >
            <h3 className="font-space" style={{ fontSize: "1rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Sprout size={16} color="#ffffff" /> Currently Learning
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {currentlyLearning.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.04 }}
                  style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8 }}
                >
                  <span style={{ color: "#888888" }}>{item.icon}</span>
                  <span style={{ fontSize: "0.875rem", color: "#e2e8f0", fontWeight: 500 }}>{item.label}</span>
                  <span style={{ fontSize: "0.65rem", fontFamily: "Fira Code, monospace", color: "#555555", background: "rgba(255,255,255,0.04)", padding: "2px 6px", borderRadius: 4, border: "1px solid rgba(255,255,255,0.06)" }}>{item.status}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Reveal>

        {/* Full Tech Stack */}
        <Reveal delay={0.2}>
          <motion.div className="glass-card" style={{ padding: "28px", textAlign: "center" }} whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}>
            <h3 className="font-space" style={{ fontSize: "1rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <Zap size={16} color="#ffffff" /> Full Tech Stack
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="skill-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, background: "rgba(255,255,255,0.1)", color: "#f1f5f9" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
