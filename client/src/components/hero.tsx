import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Hero() {
  const handleDownloadCV = async () => {
    try {
      trackEvent('download_cv', 'engagement', 'hero_button');
      // In a real implementation, this would trigger the actual download
      console.log("CV download requested");
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-24 px-6 min-h-[80vh] flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 font-medium">Available for new projects</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Building Digital Solutions with{" "}
            <span className="text-primary">Modern Tech</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Get expert{" "}
            <span className="font-semibold text-foreground">full-stack development</span>,{" "}
            <span className="font-semibold text-foreground">AI integration</span>, and{" "}
            <span className="font-semibold text-foreground">scalable solutions</span>{" "}
            for your business needs.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              onClick={handleDownloadCV}
              className="bg-primary text-primary-foreground px-8 py-4 text-base font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl rounded-full"
              size="lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Portfolio
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToContact}
              className="text-primary font-semibold px-8 py-4 text-base border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all rounded-full"
              size="lg"
            >
              View Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div 
            className="flex justify-center items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <SiGithub className="w-6 h-6 text-gray-700" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <SiLinkedin className="w-6 h-6 text-gray-700" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
