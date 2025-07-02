import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, PenTool } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      trackEvent('contact_form_submit', { category: 'engagement', label: 'contact_form' });
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      href: "mailto:rsah@colgate.edu", 
      icon: Mail, 
      label: "Email",
      color: "hover:bg-primary hover:text-primary-foreground"
    },
    { 
      href: "https://linkedin.com/in/raghavrajsah", 
      icon: Linkedin, 
      label: "LinkedIn",
      color: "hover:bg-primary hover:text-primary-foreground"
    },
    { 
      href: "https://github.com/raghavrajsah", 
      icon: Github, 
      label: "GitHub",
      color: "hover:bg-primary hover:text-primary-foreground"
    },
  ];

  return (
    <section id="contact" className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-12">Let's Connect</h2>
          
          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={`social-link p-4 bg-muted rounded-full transition-all ${link.color}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                onClick={() => trackEvent('social_link_click', { category: 'engagement', label: link.label })}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-muted/60 border border-border rounded-lg p-8 text-center text-lg font-semibold text-foreground shadow-md">
              Email: <a href="mailto:rsah@colgate.edu" className="text-primary underline">rsah@colgate.edu</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
