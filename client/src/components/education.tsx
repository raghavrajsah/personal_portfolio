import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, University } from "lucide-react";

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    honors: "Summa Cum Laude • GPA: 3.9/4.0",
    description: "Specialized in Machine Learning and Distributed Systems. Thesis: \"Optimizing Neural Network Performance in Edge Computing Environments\"",
    dates: "2019 - 2021",
    icon: GraduationCap,
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "UC Berkeley",
    honors: "Magna Cum Laude • Dean's List • Computer Science Honor Society",
    description: "Focus on full-stack development, algorithms, and software architecture. Senior project: E-commerce platform serving 10,000+ users",
    dates: "2015 - 2019",
    icon: University,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-xl text-muted-foreground">Academic foundation in computer science and engineering</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 last:mb-0"
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <edu.icon className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-lg text-primary font-semibold">{edu.institution}</p>
                      </div>
                      <p className="text-muted-foreground mb-4">{edu.honors}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                        {edu.dates}
                      </Badge>
                    </div>
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
