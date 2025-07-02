import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Zap, Rocket } from "lucide-react";

const experienceData = [
  {
    role: "Software Engineering Intern (AI/ML)",
    company: "Ozeki Technologies",
    logo: "/ozeki-logo.png",
    dates: "June 2025 – Aug 2025",
    location: "San Francisco, CA",
    description: "Ozeki builds AI-powered software to automate business negotiations, helping companies close better agreements faster. Its platform streamlines how teams strategize, negotiate, and evaluate contracts using large language models and custom reasoning agents."
  },
  {
    role: "Software Engineering Intern",
    company: "Celest.Dev (Y Combinator)",
    logo: "/celest-logo.png",
    dates: "May 2024 – Aug 2024",
    location: "San Francisco, CA",
    description: "Celest is a Y Combinator startup that provides backend-as-a-service for Flutter and Dart developers, providing powerful tools that help mobile engineers become full-stack developers. Its flagship feature, 'Cloud Widgets,' allows developers to declaratively define backend services and infrastructure directly in Dart."
  },
  {
    role: "Software Engineering Intern",
    company: "ITS Research Computing and Data Services",
    logo: "/colgate-logo.png",
    dates: "June 2023 – Aug 2023",
    location: "Hamilton, NY",
    description: "The ITS Research Computing and Data Services team at Colgate University supports faculty, staff, and students in conducting computational research by providing infrastructure, tools, and expertise for managing scientific and data-intensive workflows."
  },
  {
    role: "Software Developer & Lead Researcher",
    company: "Incubate Nepal",
    logo: "/incubate-logo.png",
    dates: "Jul 2021 – Feb 2022",
    location: "Nepal",
    description: "Incubate Nepal is an innovation hub supporting research projects in Nepal."
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
          <p className="text-xl text-muted-foreground">Building real-world software that scales</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line (desktop only) */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                className="relative mb-12 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline circle (desktop only) */}
                <motion.div 
                  className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                ></motion.div>
                <div className="md:ml-20">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                          <div className="flex items-center gap-3">
                            <img src={exp.logo} alt={exp.company + ' logo'} className="w-8 h-8 object-contain rounded bg-white border border-gray-200" />
                            <p className="text-lg text-primary font-semibold">{exp.company}</p>
                            <span className="text-sm text-muted-foreground ml-2">{exp.location}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-sm font-medium px-4 py-2 mt-2 md:mt-0">
                          {exp.dates}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
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
