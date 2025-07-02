import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, PenTool } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  const socialLinks = [
    { href: "mailto:rsah@colgate.edu", icon: Mail, label: "Email" },
    { href: "https://linkedin.com/in/raghavrajsah", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/raghavrajsah", icon: Github, label: "GitHub" },
  ];

  const handleSocialClick = (label: string) => {
    trackEvent('footer_social_click', { category: 'engagement', label });
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
                onClick={() => trackEvent('social_link_click', { category: 'engagement', label: link.label })}
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
            © 2025 Raghav Raj Sah. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
