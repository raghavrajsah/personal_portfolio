import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Zap, Rocket } from "lucide-react";

const experienceData = [
  {
    role: "Senior Full-Stack Engineer",
    company: "TechFlow Solutions",
    dates: "2022 - Present",
    impact: "Led development of microservices architecture that improved system performance by 40% and reduced deployment time from 2 hours to 15 minutes.",
    icon: Building2,
  },
  {
    role: "Machine Learning Engineer",
    company: "DataVision AI",
    dates: "2021 - 2022",
    impact: "Built predictive models that increased customer retention by 25% and developed real-time recommendation systems serving 1M+ daily users.",
    icon: Zap,
  },
  {
    role: "Frontend Developer",
    company: "StartupLab Inc",
    dates: "2019 - 2021",
    impact: "Transformed user experience with React redesign, achieving 60% improvement in user engagement and 35% increase in conversion rates.",
    icon: Rocket,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground">Building impactful solutions across different industries</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                className="relative mb-12 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                ></motion.div>
                <div className="ml-20">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <exp.icon className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-lg text-primary font-semibold">{exp.company}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-sm font-medium px-4 py-2 mt-2 md:mt-0">
                          {exp.dates}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{exp.impact}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
