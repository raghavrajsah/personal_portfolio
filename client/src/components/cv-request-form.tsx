import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Mail } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface CvRequestFormProps {
  onClose?: () => void;
}

export default function CvRequestForm({ onClose }: CvRequestFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      trackEvent("request_cv", { category: "engagement", label: "hero_form" });
      
      // Use Netlify Function endpoint
      const response = await fetch("/.netlify/functions/request-cv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setEmail("");
        // Auto-close after 3 seconds
        setTimeout(() => {
          if (onClose) onClose();
        }, 3000);
      } else {
        setError(data.message || "Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error("CV request error:", error);
      setError("Failed to send request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800"
      >
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
          <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
            Request Sent!
          </h3>
          <p className="text-sm text-green-600 dark:text-green-300">
            You'll receive a notification when your CV is ready.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 items-center"
    >
      <div className="relative w-full sm:w-64">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pr-10"
          disabled={isSubmitting}
        />
        <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Sending...
          </div>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Request
          </>
        )}
      </Button>
      
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-600 dark:text-red-400 text-sm mt-2 sm:mt-0 sm:absolute sm:top-full sm:left-0"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
} 