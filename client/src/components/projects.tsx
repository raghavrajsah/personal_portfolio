import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with advanced search, real-time inventory, and integrated payments. Handles 50K+ monthly transactions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "ML Analytics Dashboard",
    description: "Real-time analytics platform with predictive models and interactive visualizations. Processes 1M+ data points daily.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tech: ["Python", "FastAPI", "TensorFlow"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "Cross-platform mobile app with offline sync, team collaboration, and smart notifications. 10K+ active users.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tech: ["Flutter", "Firebase", "Dart"],
    github: "#",
    demo: "#",
  },
  {
    title: "DevOps Pipeline",
    description: "Automated CI/CD pipeline with containerized deployments, monitoring, and auto-scaling. Reduced deployment time by 85%.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tech: ["Docker", "AWS", "Kubernetes"],
    github: "#",
    demo: "#",
  },
  {
    title: "Blockchain Trading Platform",
    description: "Decentralized trading platform with smart contracts, real-time price feeds, and wallet integration. $2M+ in transactions.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tech: ["Solidity", "Web3.js", "Ethereum"],
    github: "#",
    demo: "#",
  },
  {
    title: "Social Networking App",
    description: "Real-time social platform with video calls, messaging, and content sharing. 100K+ registered users across 15 countries.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    tech: ["React Native", "Socket.io", "MongoDB"],
    github: "#",
    demo: "#",
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
    trackEvent('project_link_click', 'engagement', `${projectTitle}_${linkType}`);
  };

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
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
                <CardContent className="p-6">
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
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleProjectClick(project.title, 'github')}
                      className="text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleProjectClick(project.title, 'demo')}
                      className="text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
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
