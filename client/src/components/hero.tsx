import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

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
    <section id="hero" className="pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
            alt="Alex Thompson headshot" 
            className="w-32 h-32 rounded-full mx-auto mb-8 shadow-xl object-cover" 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Alex Thompson
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Full-Stack Engineer • ML Builder • Startup Optimist
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              onClick={handleDownloadCV}
              className="bg-primary text-primary-foreground px-8 py-4 text-base font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
              size="lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToContact}
              className="text-primary font-semibold px-8 py-4 text-base border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
              size="lg"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
