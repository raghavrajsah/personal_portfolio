import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const projectsData = [
  {
    title: "BiscuitBuddy.io – UCLA Hackathon MVP",
    description: "Production-ready voice assistant MVP built in 36 hours at UCLA hackathon, scaling to 10,000+ daily users with 95% speech recognition accuracy and 30% latency reduction.",
    image: "/biscuitbuddy.png",
    tech: ["Unity 3D", "FastAPI", "Python/Gemini AI"],
    demo: "https://biscuitbuddy.io/",
    github: null,
  },
  {
    title: "Art Hub Nepal",
    description: "Interactive cultural heritage platform documenting Nepali public artworks including paintings, murals, sculptures, and architecture. Features an intuitive map interface connecting local artists with society to bridge the gap between traditional art and modern accessibility.",
    image: "/arthubnepal.png",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "https://www.arthubnepal.com/",
    github: null,
  },
  {
    title: "NIST Compliance Research (Higher Ed)",
    description: "Automated cybersecurity compliance scanner analyzing 3,000+ university web pages against NIST 800-53 standards, generating actionable gap analysis reports for institutional security improvements.",
    image: "/nist.png",
    tech: ["Python", "Scrapy", "Playwright"],
    demo: null,
    github: "https://github.com/raghavrajsah",
  },
  {
    title: "Adaptive Spam Filter – NLP Final Project",
    description: "Multi-language spam detection system with severity classification and continuous learning capabilities, featuring user feedback integration for model retraining and explainable AI components.",
    image: "/spamfilter.png",
    tech: ["Python", "scikit-learn", "spaCy"],
    demo: null,
    github: "https://github.com/raghavrajsah/AdaptiveSpamFilter-NLP",
  },
  {
    title: "Cryptocurrency Price Forecasting System",
    description: "Hybrid ML model combining LSTM, ARIMA, and XGBoost achieving 85% accuracy in crypto price prediction, processing 1M+ social media posts for sentiment analysis with real-time inference capabilities.",
    image: "/crypto.png",
    tech: ["TensorFlow/Keras", "XGBoost", "ARIMA"],
    demo: null,
    github: "https://github.com/Khik2219/Cryptocurrency-Price-Forecasting-Using-Hybrid-Models",
  },
  {
    title: "Aerial Object Detection System",
    description: "High-performance computer vision system achieving 85% mAP at 100 FPS using Faster R-CNN for drone-based search and rescue operations, reducing search grid coverage by 40%.",
    image: "/aerial.png",
    tech: ["Python", "PyTorch", "OpenCV"],
    demo: null,
    github: "https://github.com/raghavrajsah",
  },
];

const techColors: Record<string, string> = {
  React: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  "Node.js": "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  PostgreSQL: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  Python: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  FastAPI: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  TensorFlow: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  Flutter: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300",
  Firebase: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
  Dart: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
  Docker: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  AWS: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
  Kubernetes: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  Solidity: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  "Web3.js": "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  Ethereum: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  "React Native": "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  "Socket.io": "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  MongoDB: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

export default function Projects() {
  const handleProjectClick = (projectTitle: string, linkType: 'github' | 'demo') => {
    trackEvent('project_link_click', { category: 'engagement', label: `${projectTitle}_${linkType}` });
  };

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">Some things I've built and contributed to</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="project-card shadow-lg hover:shadow-xl overflow-hidden group transition-all duration-300">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <CardContent className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className={`text-sm font-medium ${techColors[tech] || 'bg-gray-100 text-gray-700'}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleProjectClick(project.title, 'github')}
                        className="text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleProjectClick(project.title, 'demo')}
                        className="text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
