import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillsData = {
  "Programming Languages": [
    { name: "Python", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
    { name: "Java", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
    { name: "Kotlin", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
    { name: "JavaScript", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
  ],
  "Frontend & Mobile": [
    { name: "React", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300" },
    { name: "Flutter", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
    { name: "Next.js", color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300" },
    { name: "Tailwind CSS", color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300" },
  ],
  "Backend & APIs": [
    { name: "Node.js", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
    { name: "FastAPI", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300" },
    { name: "Spring Boot", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
    { name: "Express.js", color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300" },
  ],
  "Databases": [
    { name: "PostgreSQL", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300" },
    { name: "MongoDB", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
    { name: "Redis", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
    { name: "MySQL", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
    { name: "Docker", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
    { name: "Kubernetes", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
    { name: "GitHub Actions", color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300" },
  ],
  "Tools & Technologies": [
    { name: "Git", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
    { name: "Figma", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
    { name: "Postman", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
    { name: "Jira", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
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
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="secondary" 
                          className={`${skill.color} font-medium hover:scale-105 transition-transform duration-200`}
                        >
                          {skill.name}
                        </Badge>
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
