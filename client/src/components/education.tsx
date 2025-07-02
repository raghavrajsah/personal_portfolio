import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, University } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor's degree, Computer Science and Mathematical Economics",
    institution: "Colgate University",
    logo: "/colgate-logo.png",
    honors: "Full-ride Merit Scholarship ($400k+)",
    description: "Relevant Coursework: Data Structures & Algorithms, Object Oriented Programming (OOP), Operating Systems, Natural Language Processing (NLP), Deep Learning, Data Science, Mobile App Development",
    dates: "Aug 2022 - 2026",
    icon: GraduationCap,
  },
  {
    degree: "Study Abroad in CS & Math",
    institution: "AIT-Budapest",
    logo: "/ait-budapest-logo.png",
    honors: "Courses: Applied Cryptography (A+), Deep Learning (A+), Mobile Software Development (A)",
    description: "Study Abroad in CS & Math",
    dates: "Jan 2025 - May 2025",
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
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <img src={edu.logo} alt={edu.institution + ' logo'} className="w-10 h-10 object-contain rounded-md bg-white border border-gray-200" />
                          <span className="text-2xl font-bold text-primary">{edu.institution}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h3>
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
