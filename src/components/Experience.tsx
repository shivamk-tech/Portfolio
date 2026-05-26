"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";
import { Rocket, Code2, Brain, Target, BookOpen, Laugh, Code, Briefcase, ExternalLink, GitBranch } from "lucide-react";

const journey = [
  {
    title: "Started Coding Journey",
    period: "Aug 2024 — Present",
    type: "Self-taught",
    icon: <Rocket size={18} />,
    description: "Dove headfirst into web development with zero prior experience. Learned HTML, CSS, JavaScript, and fell in love with building things on the web.",
    achievements: ["Mastered HTML, CSS & JavaScript fundamentals", "Built first interactive web pages", "Joined developer communities & open source"],
    tech: ["HTML", "CSS", "JavaScript", "Git"],
    color: "#ffffff",
  },
  {
    title: "Full Stack Developer",
    period: "Feb 2025 — Present",
    type: "Building Projects",
    icon: <Code2 size={18} />,
    description: "Levelled up to full-stack development with Next.js and TypeScript. Built real-world projects including an Uber clone with real-time features.",
    achievements: ["Built Uber clone with real-time tracking", "Learned MongoDB, Express & Node.js", "Mastered Next.js & TypeScript", "Implemented JWT auth & REST APIs"],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Express"],
    color: "#ffffff",
  },
  {
    title: "Agentic AI & Generative AI",
    period: "2025 — Present",
    type: "Current Focus",
    icon: <Brain size={18} />,
    description: "Now working on Agentic AI and Generative AI — building intelligent systems that can reason, plan, and act autonomously. Exploring LLMs, AI agents, and modern AI tooling.",
    achievements: ["Working with LLMs & AI agents", "Building Agentic AI workflows", "Exploring Generative AI tools & APIs", "Combining full-stack skills with AI"],
    tech: ["Python", "LLMs", "AI Agents", "Gen AI", "Next.js", "TypeScript"],
    color: "#ffffff",
  },
  {
    title: "Working at Algomise",
    period: "2025 — Present",
    type: "Currently Working",
    icon: <Briefcase size={18} />,
    description: "Just started working with Algomise — an exciting early-stage venture. Contributing to building the product from the ground up.",
    achievements: ["Joined as an early contributor", "Working on product development", "Collaborating with the Algomise team"],
    tech: ["Next.js", "TypeScript", "AI"],
    color: "#ffffff",
    link: "https://algomise.com/",
    github: "https://github.com/Algomise",
  },
];

const goals = [
  { icon: <Target size={14} />, title: "Currently At", desc: "Working at Algomise — building from the ground up" },
  { icon: <Rocket size={14} />, title: "Long-term Goal", desc: "Build production-grade Agentic AI systems" },
  { icon: <BookOpen size={14} />, title: "Currently Working On", desc: "Agentic AI, Generative AI & Next.js projects" },
];

export default function Experience() {
  const [leetcode, setLeetcode] = useState<{ solvedProblem: number; easySolved: number; mediumSolved: number; hardSolved: number } | null>(null);

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/Algo_shivam/solved")
      .then(r => r.json())
      .then(d => setLeetcode(d))
      .catch(() => {});
  }, []);

  return (
    <section id="experience" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, #ffffff, transparent)", bottom: 0, left: "-100px" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label">My Story</span>
          <h2 className="section-title">Coding <span className="gradient-text">Journey</span></h2>
          <p style={{ color: "#94a3b8", marginTop: "16px", maxWidth: 520, margin: "16px auto 0" }}>
            10 months in — here&apos;s how the adventure has gone so far
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "48px", alignItems: "start" }} className="exp-grid">

          {/* Timeline */}
          <div className="timeline-col" style={{ paddingLeft: "32px" }}>
            {journey.map((item, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ position: "relative", marginBottom: i < journey.length - 1 ? "48px" : 0 }}
              >
                {i < journey.length - 1 && (
                  <motion.div
                    className="timeline-line"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 + 0.4 }}
                    style={{ transformOrigin: "top" }}
                  />
                )}

                <motion.div
                  className="glass-card"
                  style={{ padding: "28px" }}
                  whileHover={{ borderColor: `${item.color}50`, boxShadow: `0 0 40px ${item.color}15`, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                    <div>
                      <h3 className="font-space" style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f1f5f9", display: "flex", alignItems: "center", gap: "8px" }}>
                        <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }} style={{ color: "#ffffff", display: "flex" }}>
                          {item.icon}
                        </motion.span>
                        {item.title}
                      </h3>
                      <div style={{ marginTop: "4px" }}>
                        <span className="tag">{item.type}</span>
                      </div>
                    </div>
                    <span style={{ fontFamily: "Fira Code, monospace", fontSize: "0.8rem", color: "#64748b", background: "rgba(255,255,255,0.04)", padding: "4px 10px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.06)", whiteSpace: "nowrap" }}>
                      {item.period}
                    </span>
                  </div>

                  <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "16px" }}>{item.description}</p>

                  <ul style={{ listStyle: "none", marginBottom: "20px" }}>
                    {item.achievements.map((a, j) => (
                      <motion.li key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.08 }}
                        style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.875rem", color: "#cbd5e1", marginBottom: "6px" }}
                      >
                        <span style={{ color: "#aaaaaa", marginTop: "3px", flexShrink: 0 }}>✓</span>
                        {a}
                      </motion.li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {item.tech.map((t, j) => (
                      <motion.span key={t} className="skill-badge" style={{ fontSize: "0.72rem" }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.06 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>

                  {(item.link || item.github) && (
                    <div style={{ display: "flex", gap: "16px", marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      {item.link && (
                        <motion.a href={item.link} target="_blank" rel="noopener noreferrer"
                          whileHover={{ x: 3, color: "#f1f5f9" }}
                          style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.82rem", color: "#64748b", textDecoration: "none", fontWeight: 500 }}
                        >
                          <ExternalLink size={13} /> algomise.com
                        </motion.a>
                      )}
                      {item.github && (
                        <motion.a href={item.github} target="_blank" rel="noopener noreferrer"
                          whileHover={{ x: 3, color: "#f1f5f9" }}
                          style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.82rem", color: "#64748b", textDecoration: "none", fontWeight: 500 }}
                        >
                          <GitBranch size={13} /> GitHub
                        </motion.a>
                      )}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right panel */}
          <StaggerContainer style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Goals */}
            <StaggerItem>
              <motion.div
                className="glass-card"
                style={{ padding: "28px", background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))", borderColor: "rgba(255,255,255,0.1)" }}
                whileHover={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <h3 className="font-space" style={{ fontSize: "1rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Target size={16} color="#ffffff" /> Goals
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {goals.map((goal, i) => (
                    <motion.div key={goal.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 4 }}
                      style={{ padding: "14px", background: "rgba(255,255,255,0.03)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)", cursor: "default" }}
                    >
                      <div style={{ fontSize: "0.75rem", color: "#ffffff", fontWeight: 600, marginBottom: "4px", fontFamily: "Fira Code, monospace", textTransform: "uppercase", letterSpacing: "1px", display: "flex", alignItems: "center", gap: "6px" }}>
                        {goal.icon} {goal.title}
                      </div>
                      <div style={{ fontSize: "0.875rem", color: "#e2e8f0", lineHeight: 1.5 }}>{goal.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>

            {/* GitHub Streak */}
            <StaggerItem>
              <motion.div className="glass-card" style={{ padding: "28px" }} whileHover={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <h3 className="font-space" style={{ fontSize: "1rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "16px" }}>GitHub Activity</h3>
                <img src="https://github-readme-streak-stats.herokuapp.com/?user=shivamk-tech&theme=dark&hide_border=true&background=00000000&ring=ffffff&fire=ffffff&currStreakLabel=ffffff&sideLabels=888888&currStreakNum=ffffff&sideNums=aaaaaa&dates=555555&stroke=333333" alt="GitHub Streak" style={{ width: "100%", borderRadius: 8 }} />
              </motion.div>
            </StaggerItem>

            {/* LeetCode Stats */}
            <StaggerItem>
              <motion.div className="glass-card" style={{ padding: "28px" }} whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}>
                <h3 className="font-space" style={{ fontSize: "1rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Code size={16} color="#ffffff" /> LeetCode Stats
                </h3>
                {leetcode ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "rgba(255,255,255,0.04)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                      <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>Total Solved</span>
                      <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ffffff", fontFamily: "Space Grotesk, sans-serif" }}>{leetcode.solvedProblem}</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                      {[
                        { label: "Easy", value: leetcode.easySolved, color: "rgba(255,255,255,0.9)" },
                        { label: "Medium", value: leetcode.mediumSolved, color: "rgba(255,255,255,0.6)" },
                        { label: "Hard", value: leetcode.hardSolved, color: "rgba(255,255,255,0.35)" },
                      ].map(s => (
                        <div key={s.label} style={{ padding: "10px", background: "rgba(255,255,255,0.03)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
                          <div style={{ fontSize: "1.1rem", fontWeight: 700, color: s.color, fontFamily: "Space Grotesk, sans-serif" }}>{s.value}</div>
                          <div style={{ fontSize: "0.7rem", color: "#555555", fontFamily: "Fira Code, monospace", marginTop: 3 }}>{s.label}</div>
                        </div>
                      ))}
                    </div>
                    <a href="https://leetcode.com/Algo_shivam" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "#555555", fontFamily: "Fira Code, monospace", textAlign: "center", textDecoration: "none", marginTop: 4 }}>
                      leetcode.com/Algo_shivam →
                    </a>
                  </div>
                ) : (
                  <div style={{ display: "flex", gap: "8px", flexDirection: "column" }}>
                    {[1,2,3].map(i => <div key={i} style={{ height: 40, background: "rgba(255,255,255,0.04)", borderRadius: 8, animation: "pulse 1.5s infinite" }} />)}
                  </div>
                )}
              </motion.div>
            </StaggerItem>

            {/* Fun quote */}
            <StaggerItem>
              <motion.div
                className="glass-card"
                style={{ padding: "24px", background: "rgba(251,191,36,0.04)", borderColor: "rgba(251,191,36,0.15)" }}
                whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
              >
                <motion.div animate={{ rotate: [0, 10, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }} style={{ marginBottom: "10px", color: "#ffffff", display: "flex" }}>
                  <Laugh size={24} />
                </motion.div>
                <div style={{ fontSize: "0.875rem", color: "#cccccc", fontStyle: "italic", lineHeight: 1.6 }}>
                  &ldquo;I fix one bug and create three new bugs&rdquo;
                </div>
                <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "8px", fontFamily: "Fira Code, monospace" }}>
                  — Shivam, every single day
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .exp-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) {
          .timeline-col { padding-left: 24px !important; }
          .exp-grid { gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
