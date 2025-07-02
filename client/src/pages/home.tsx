import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Certifications from "@/components/certifications";
import Blog from "@/components/blog";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
