"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const items = [
  { text: "Next.js" }, { text: "TypeScript" }, { text: "React" },
  { text: "Node.js" }, { text: "Agentic AI" }, { text: "MongoDB" },
  { text: "Tailwind CSS" }, { text: "Gen AI" }, { text: "LLMs" },
  { text: "Express.js" }, { text: "REST APIs" }, { text: "GitHub API" },
  { text: "Python" }, { text: "AI Agents" }, { text: "Socket.io" },
];

const Dot = () => (
  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "inline-block", flexShrink: 0 }} />
);

function Strip({ direction = 1, speed = 40 }: { direction?: 1 | -1; speed?: number }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2;
    gsap.set(track, { x: direction === -1 ? -totalWidth : 0 });
    const tween = gsap.to(track, {
      x: direction === 1 ? -totalWidth : 0,
      duration: totalWidth / speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const val = parseFloat(x);
          if (direction === 1 && val <= -totalWidth) return "0px";
          if (direction === -1 && val >= 0) return `-${totalWidth}px`;
          return `${val}px`;
        },
      },
    });
    return () => { tween.kill(); };
  }, [direction, speed]);

  const repeated = [...items, ...items];

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div ref={trackRef} style={{ display: "flex", alignItems: "center", gap: "24px", width: "max-content", willChange: "transform" }}>
        {repeated.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "24px", flexShrink: 0 }}>
            <span style={{
              fontSize: "0.8rem", fontWeight: 600, fontFamily: "Fira Code, monospace",
              color: "rgba(255,255,255,0.35)", letterSpacing: "0.05em", whiteSpace: "nowrap",
              textTransform: "uppercase",
            }}>
              {item.text}
            </span>
            <Dot />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeStrip() {
  return (
    <div style={{ padding: "28px 0", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.01)", overflow: "hidden", display: "flex", flexDirection: "column", gap: "16px" }}>
      <Strip direction={1} speed={35} />
      <Strip direction={-1} speed={28} />
    </div>
  );
}
