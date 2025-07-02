import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    logo: "/nvidia-logo.png",
    name: "Building Transformer-Based Natural Language Processing Applications",
    issuer: "NVIDIA",
    date: "Issued May 2025",
    link: "https://learn.nvidia.com/certificates?id=0PDheFl9S8yaGGE9LtqPWw/",
  },
  {
    logo: "/nvidia-logo.png",
    name: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "Issued Mar 2025",
    link: "https://learn.nvidia.com/certificates?id=v6T7cFZuTsqnBTKJ_E2TRw",
  },
  {
    logo: "/deeplearningai-logo.png",
    name: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    date: "Issued Aug 2024",
    link: "https://coursera.org/share/cac0b8610bb3a7b17a5cb624422fc2dd",
  },
  {
    logo: "/deeplearningai-logo.png",
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    date: "Issued Aug 2024",
    link: "https://coursera.org/share/7cd40f3dcd386baa5aef643264991342",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Certifications</h2>
        </motion.div>
        <div className="space-y-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              className="flex flex-col md:flex-row items-center bg-card rounded-xl shadow-md p-4 md:p-6 gap-4 md:gap-6 w-full md:max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={cert.logo} alt={cert.issuer + ' logo'} className="w-14 h-14 object-contain rounded-md bg-white border border-gray-200 mb-2 md:mb-0 md:mr-0" />
              <div className="flex-1 min-w-0 text-center md:text-left">
                <div className="text-lg font-semibold text-foreground break-words whitespace-normal">{cert.name}</div>
                <div className="text-sm text-muted-foreground font-medium">{cert.issuer}</div>
                <div className="text-xs text-muted-foreground mt-1">{cert.date}</div>
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mt-3 md:mt-0 md:ml-4 flex items-center justify-center px-4 py-2 border border-primary rounded-lg text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all w-full md:w-auto">
                Show credential <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 