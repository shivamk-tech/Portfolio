"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem, MagneticButton } from "./Motion";
import { Link, AtSign, GitBranch, Send, ChevronRight, CheckCircle, XCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus("sent");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const socials = [
    { icon: <Link size={20} />, label: "LinkedIn", value: "shivam-kumar-218777276", href: "https://www.linkedin.com/in/shivam-kumar-218777276/", color: "#ffffff" },
    { icon: <GitBranch size={20} />, label: "GitHub", value: "github.com/shivamk-tech", href: "https://github.com/shivamk-tech", color: "#94a3b8" },
    { icon: <AtSign size={20} />, label: "Twitter / X", value: "@tenzin_886", href: "https://x.com/tenzin_886", color: "#ffffff" },
  ];

  return (
    <section id="contact" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, #ffffff, transparent)", top: "50%", right: "-150px", transform: "translateY(-50%)" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label">Let&apos;s Talk</span>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p style={{ color: "#94a3b8", marginTop: "16px", maxWidth: 500, margin: "16px auto 0" }}>
            Have a project in mind or just want to say hi? My inbox is always open!
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "48px", alignItems: "start" }} className="contact-grid">

          {/* Left */}
          <StaggerContainer style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Profile card */}
            <StaggerItem>
              <motion.div
                className="glass-card"
                style={{ padding: "28px", background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))", borderColor: "rgba(255,255,255,0.1)" }}
                whileHover={{ borderColor: "rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(255,255,255,0.08)" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    style={{ width: 48, height: 48, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}
                  >
                    <img src="/me.png" alt="Shivam" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </motion.div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#f1f5f9", fontSize: "1rem" }}>Shivam Kumar Sagar</div>
                    <div style={{ fontSize: "0.85rem", color: "#94a3b8" }}>Next.js + TypeScript Developer</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <motion.span animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: 8, height: 8, borderRadius: "50%", background: "#aaaaaa", boxShadow: "0 0 8px #aaaaaa", display: "inline-block" }} />
                  <span style={{ fontSize: "0.85rem", color: "#cccccc" }}>Open to opportunities</span>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Social links */}
            {socials.map((link, i) => (
              <StaggerItem key={link.label}>
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", cursor: "pointer" }}
                  whileHover={{ x: 6, borderColor: `${link.color}40`, boxShadow: `0 0 24px ${link.color}15` }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  custom={i}
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    style={{ width: 44, height: 44, borderRadius: 12, background: `${link.color}18`, border: `1px solid ${link.color}30`, display: "flex", alignItems: "center", justifyContent: "center", color: link.color, flexShrink: 0 }}
                  >
                    {link.icon}
                  </motion.div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#64748b", fontFamily: "Fira Code, monospace", marginBottom: "2px" }}>{link.label}</div>
                    <div style={{ fontSize: "0.9rem", color: "#e2e8f0", fontWeight: 500 }}>{link.value}</div>
                  </div>
                  <ChevronRight size={16} style={{ marginLeft: "auto", color: "#475569" }} />
                </motion.a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Right: Form */}
          <Reveal from="right">
            <motion.div
              className="glass-card"
              style={{ padding: "36px" }}
              whileHover={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              <h3 className="font-space" style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "28px" }}>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  {[
                    { id: "contact-name", type: "text", label: "Full Name *", placeholder: "John Doe", field: "name" as const },
                    { id: "contact-email", type: "email", label: "Email *", placeholder: "john@example.com", field: "email" as const },
                  ].map(input => (
                    <motion.div key={input.id}>
                      <label style={{ display: "block", fontSize: "0.8rem", color: "#94a3b8", marginBottom: "8px", fontWeight: 500 }}>{input.label}</label>
                      <input id={input.id} type={input.type} required className="contact-input" placeholder={input.placeholder}
                        value={formData[input.field]} onChange={e => setFormData({ ...formData, [input.field]: e.target.value })} />
                    </motion.div>
                  ))}
                </div>

                <motion.div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "#94a3b8", marginBottom: "8px", fontWeight: 500 }}>Subject</label>
                  <input id="contact-subject" type="text" className="contact-input" placeholder="Project Inquiry / Collaboration"
                    value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} />
                </motion.div>

                <motion.div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "#94a3b8", marginBottom: "8px", fontWeight: 500 }}>Message *</label>
                  <textarea id="contact-message" required className="contact-input" placeholder="Tell me about your project or just say hello..."
                    rows={5} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{ resize: "vertical", minHeight: 120 }} />
                </motion.div>

                <MagneticButton
                  href="#"
                  className="btn-primary"
                  id="contact-submit"
                  style={{ justifyContent: "center", opacity: status === "sending" ? 0.8 : 1, pointerEvents: status !== "idle" ? "none" : "auto" }}
                >
                  {status === "idle" && <><Send size={16} /> Send Message</>}
                  {status === "sending" && <motion.span style={{ display: "flex", alignItems: "center", gap: 6 }} animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1 }}><Loader2 size={16} /> Sending...</motion.span>}
                  {status === "sent" && <motion.span style={{ display: "flex", alignItems: "center", gap: 6 }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}><CheckCircle size={16} /> Message Sent!</motion.span>}
                  {status === "error" && <span style={{ display: "flex", alignItems: "center", gap: 6 }}><XCircle size={16} /> Try Again</span>}
                </MagneticButton>
              </form>
            </motion.div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
