import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HorizontalScrollClient from "@/components/HorizontalScrollClient";

export default function Home() {
  return (
    <main style={{ background: "var(--bg-primary)", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Projects/>
      <HorizontalScrollClient />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
