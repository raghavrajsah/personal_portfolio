import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Trophy, X, ExternalLink } from "lucide-react";

interface AchievementNotificationProps {
  message: string;
  duration?: number; // in seconds
  onClose?: () => void;
}

export default function AchievementNotification({ 
  message, 
  duration = 30, 
  onClose 
}: AchievementNotificationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  const progressPercentage = ((duration - timeLeft) / duration) * 100;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-24 right-6 z-50 max-w-sm"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow-2xl border border-green-400/20 overflow-hidden">
            {/* Progress bar */}
            <div className="h-1 bg-green-400/30">
              <motion.div
                className="h-full bg-white/80"
                initial={{ width: "0%" }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, ease: "linear" }}
              />
            </div>
            
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Trophy className="w-6 h-6 text-yellow-300" />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-1">Achievement Unlocked!</h3>
                    <p className="text-xs text-green-100 leading-relaxed">{message}</p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="flex-shrink-0 ml-2 p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* README Button */}
              <div className="mt-3">
                <a
                  href="https://www.forbes.com/sites/richardnieva/2025/04/16/this-tech-incubator-is-harder-to-get-into-than-harvard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md transition-all duration-300 text-xs font-medium border border-white/30 hover:border-white/50"
                >
                  <ExternalLink className="w-3 h-3" />
                  Read More
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 