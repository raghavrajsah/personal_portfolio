import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const skillsData = [
  { name: "Flutter", emoji: "📱", tooltip: "Cross-platform mobile development framework" },
  { name: "React", emoji: "⚛️", tooltip: "Frontend JavaScript library" },
  { name: "Spring", emoji: "🍃", tooltip: "Java enterprise framework" },
  { name: "FastAPI", emoji: "🚀", tooltip: "Modern Python web framework" },
  { name: "Kotlin", emoji: "🎯", tooltip: "Modern programming language" },
  { name: "Python", emoji: "🐍", tooltip: "Versatile programming language" },
  { name: "Java", emoji: "☕", tooltip: "Enterprise programming language" },
  { name: "AWS", emoji: "☁️", tooltip: "Amazon Web Services cloud platform" },
  { name: "Docker", emoji: "🐳", tooltip: "Containerization platform" },
  { name: "TypeScript", emoji: "📝", tooltip: "Typed JavaScript" },
  { name: "Node.js", emoji: "🟢", tooltip: "JavaScript runtime" },
  { name: "PostgreSQL", emoji: "🐘", tooltip: "Advanced relational database" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground">Tools and technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillsData.map((skill, index) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <motion.div
                  className="skill-badge bg-muted rounded-xl p-6 text-center shadow-sm hover:shadow-lg cursor-pointer group transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <motion.div 
                    className="text-3xl mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {skill.emoji}
                  </motion.div>
                  <p className="font-semibold text-foreground">{skill.name}</p>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
}
