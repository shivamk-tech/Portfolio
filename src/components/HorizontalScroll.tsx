"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "TriggerInsta",  tag: "AI",         video: "/TriggerInsta.mov", image: "/TriggerImage.png",    duration: 8000  },
  { title: "CodeClaria",    tag: "AI",         video: "/CodeClaria.mov",   image: "/CodeClariaImage.png", duration: 11000 },
  { title: "Uber Clone",    tag: "Full Stack", video: "/UberVdo.mov",      image: "/UberImage.png",       duration: 13000 },
  { title: "Sketcha",       tag: "Frontend",   video: "/SketchaVdo.mov",   image: "/SketchaImage.png",    duration: 8000  },
];

function Card({ project }: { project: typeof projects[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  return (
    <div
      className="hs-card"
      style={{ width: "70vw", height: "75vh", flexShrink: 0, borderRadius: 20, overflow: "hidden", position: "relative", cursor: "pointer" }}
      onMouseEnter={() => {
        videoRef.current?.play();
        if (project.video) {
          timerRef.current = setInterval(() => {
            if (videoRef.current) { videoRef.current.currentTime = 0; videoRef.current.play(); }
          }, project.duration);
        }
      }}
      onMouseLeave={() => {
        if (timerRef.current) clearInterval(timerRef.current);
        if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
      }}
      onTouchStart={() => {
        videoRef.current?.play();
        if (project.video) {
          if (timerRef.current) clearInterval(timerRef.current);
          timerRef.current = setInterval(() => {
            if (videoRef.current) { videoRef.current.currentTime = 0; videoRef.current.play(); }
          }, project.duration);
        }
      }}
    >
      <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
      {project.video && (
        <video ref={videoRef} src={project.video} muted autoPlay playsInline loop={false}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      )}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
      <div style={{ position: "absolute", top: 16, left: 16, padding: "3px 10px", background: "rgba(0,0,0,0.5)", borderRadius: 4, fontSize: "0.65rem", fontFamily: "Fira Code, monospace", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
        {project.tag}
      </div>
      <div style={{ position: "absolute", top: 16, right: 16, padding: "3px 10px", background: "rgba(0,0,0,0.5)", borderRadius: 4, fontSize: "0.65rem", fontFamily: "Fira Code, monospace", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}>
        tap / hover to play
      </div>
      <div style={{ position: "absolute", bottom: 24, left: 24, fontFamily: "Space Grotesk, sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "#f1f5f9" }}>
        {project.title}
      </div>
    </div>
  );
}

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;

    // small delay to ensure DOM is fully painted
    const timer = setTimeout(() => {
      const section = sectionRef.current;
      const track   = trackRef.current;
      if (!section || !track) return;

      const scrollAmount = track.scrollWidth - window.innerWidth;

      const ctx = gsap.context(() => {
        gsap.to(track, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${scrollAmount}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        });
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [mounted]);

  return (
    <div ref={sectionRef} style={{ background: "#080808" }}>
      {mounted && (
        <div ref={trackRef} style={{ display: "flex", alignItems: "center", width: "max-content", height: "100vh", padding: "0 20px", gap: "16px" }}>
          {projects.map((p, i) => <Card key={i} project={p} />)}
          <div style={{ width: "15vw", flexShrink: 0 }} />
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .hs-card { width: 82vw !important; height: 60vh !important; border-radius: 14px !important; }
        }
        @media (max-width: 480px) {
          .hs-card { width: 88vw !important; height: 56vh !important; border-radius: 12px !important; }
        }
      `}</style>
    </div>
  );
}
