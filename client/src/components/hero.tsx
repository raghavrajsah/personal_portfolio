import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useState, useEffect } from "react";
import profileImage from "@assets/IMG_6417_1751378252912.jpg";
import CvRequestForm from "./cv-request-form";

export default function Hero() {
  const roles = ["Software Engineer", "AI/ML Developer", "Systems Builder","Problem Solver", "Technology Builder", "Innovation Engineer"];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedName, setTypedName] = useState("");
  const [showCvForm, setShowCvForm] = useState(false);
  const fullName = "Raghav R. Sah";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    let current = 0;
    setTypedName("");
    const type = () => {
      if (current <= fullName.length) {
        setTypedName(fullName.slice(0, current));
        current++;
        setTimeout(type, 130); // Adjust speed here (ms per character)
      }
    };
    type();

    return () => {
      clearInterval(interval);
    };
  }, [roles.length]);

  const handleRequestCV = () => {
    trackEvent("request_cv_click", { category: "engagement", label: "hero_button" });
    setShowCvForm(true);
  };

  const handleCloseCvForm = () => {
    setShowCvForm(false);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="pt-40 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={profileImage}
            alt="Raghav Raj Sah headshot"
            className="w-40 h-40 rounded-full mx-auto mb-8 shadow-lg object-cover"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {typedName}
          </motion.h1>

          <motion.div
            className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto h-8 flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: -90 }}
                transition={{ duration: 0.1 }}
                className="inline-block text-[#2095f3]"
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="text-sm md:text-base text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            I'm a senior at Colgate University studying Computer Science,
            graduating in May 2026. With hands-on experience at Y Combinator and
            Silicon Valley startups, I bring professional expertise in software
            development, agile methodologies, and thriving in fast-paced
            collaborative environments.
          </motion.p>

          <motion.div
            className="flex justify-center items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted hover:bg-muted/80 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <SiGithub className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted hover:bg-muted/80 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <SiLinkedin className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://www.ycombinator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted hover:bg-muted/80 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <img src="/yc-logo.png" alt="Y Combinator" className="w-5 h-5 object-contain" />
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {showCvForm ? (
                <motion.div
                  key="cv-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <CvRequestForm onClose={handleCloseCvForm} />
                </motion.div>
              ) : (
                <motion.div
                  key="cv-button"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <Button
                    onClick={handleRequestCV}
                    className="bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Request CV
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            
            <Button
              variant="outline"
              onClick={scrollToContact}
              className="text-primary font-semibold px-6 py-3 text-sm border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Let's Connect
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
