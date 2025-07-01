import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  SiPython, SiTypescript, SiJavascript, SiKotlin,
  SiReact, SiFlutter, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiFastapi, SiSpring, SiExpress,
  SiPostgresql, SiMongodb, SiRedis, SiMysql,
  SiAmazon, SiDocker, SiKubernetes, SiGithubactions,
  SiGit, SiFigma, SiPostman, SiJira
} from "react-icons/si";
import { Coffee } from "lucide-react";

const skillsData = {
  "Programming Languages": [
    { name: "Python", icon: SiPython, iconColor: "text-blue-500" },
    { name: "TypeScript", icon: SiTypescript, iconColor: "text-blue-600" },
    { name: "Java", icon: Coffee, iconColor: "text-red-500" },
    { name: "Kotlin", icon: SiKotlin, iconColor: "text-purple-500" },
    { name: "JavaScript", icon: SiJavascript, iconColor: "text-yellow-500" },
  ],
  "Frontend & Mobile": [
    { name: "React", icon: SiReact, iconColor: "text-cyan-500" },
    { name: "Flutter", icon: SiFlutter, iconColor: "text-blue-500" },
    { name: "Next.js", icon: SiNextdotjs, iconColor: "text-gray-800 dark:text-gray-200" },
    { name: "Tailwind CSS", icon: SiTailwindcss, iconColor: "text-teal-500" },
  ],
  "Backend & APIs": [
    { name: "Node.js", icon: SiNodedotjs, iconColor: "text-green-500" },
    { name: "FastAPI", icon: SiFastapi, iconColor: "text-emerald-500" },
    { name: "Spring Boot", icon: SiSpring, iconColor: "text-green-600" },
    { name: "Express.js", icon: SiExpress, iconColor: "text-gray-700 dark:text-gray-300" },
  ],
  "Databases": [
    { name: "PostgreSQL", icon: SiPostgresql, iconColor: "text-blue-600" },
    { name: "MongoDB", icon: SiMongodb, iconColor: "text-green-600" },
    { name: "Redis", icon: SiRedis, iconColor: "text-red-500" },
    { name: "MySQL", icon: SiMysql, iconColor: "text-blue-500" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: SiAmazon, iconColor: "text-orange-500" },
    { name: "Docker", icon: SiDocker, iconColor: "text-blue-500" },
    { name: "Kubernetes", icon: SiKubernetes, iconColor: "text-blue-600" },
    { name: "GitHub Actions", icon: SiGithubactions, iconColor: "text-gray-800 dark:text-gray-200" },
  ],
  "Tools & Technologies": [
    { name: "Git", icon: SiGit, iconColor: "text-orange-600" },
    { name: "Figma", icon: SiFigma, iconColor: "text-purple-500" },
    { name: "Postman", icon: SiPostman, iconColor: "text-orange-500" },
    { name: "Jira", icon: SiJira, iconColor: "text-blue-600" },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-foreground">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted/80 transition-all duration-200 cursor-pointer group"
                      >
                        <div className={`mb-2 transition-colors duration-200 group-hover:scale-110 ${skill.iconColor}`}>
                          <skill.icon className="w-8 h-8" />
                        </div>
                        <span className="text-sm font-medium text-foreground text-center leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
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
