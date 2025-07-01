import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, PenTool } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  const socialLinks = [
    { href: "mailto:alex@example.com", icon: Mail, label: "Email" },
    { href: "https://linkedin.com/in/alexthompson", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/alexthompson", icon: Github, label: "GitHub" },
    { href: "https://twitter.com/alexthompson", icon: Twitter, label: "Twitter" },
    { href: "https://blog.alexthompson.dev", icon: PenTool, label: "Blog" },
  ];

  const handleSocialClick = (label: string) => {
    trackEvent('footer_social_click', 'engagement', label);
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex justify-center space-x-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="social-link p-3 bg-muted-foreground/20 rounded-full hover:bg-primary transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                onClick={() => handleSocialClick(link.label)}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © 2023 Alex Thompson. All rights reserved.
          </motion.p>
          
          <motion.p 
            className="text-muted-foreground/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Built with React and Tailwind CSS • Deployed on Vercel
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
