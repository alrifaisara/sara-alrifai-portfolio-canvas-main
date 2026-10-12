import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
     {
      title: "Engineering Co-op",
      organization: "Mondelēz International – Halls Plant",
      dates: "Sep 2025 - Apr 2026",
      technologies: "PLCs · AutoCAD · CAPEX · Equipment Integration · Power BI",
      achievements: [
        "Led a production-line PLC controls upgrade project, coordinating contractors and internal engineering teams through controls development, design reviews, equipment integration, implementation planning, and project execution.",
        "Developed the technical scope, cost justification, and implementation strategy for a CAPEX project and presented the proposal to North American governance for approval.",
        "Created and maintained AutoCAD plant layouts for equipment installations and facility modifications, including layout development and design support for the Voltron packaging system.",
        "Developed equipment operating principles by sketching, disassembling, and inspecting machine subassemblies to document component functions and support operator training.",
        "Supported plant safety and facility-improvement projects, including the design and implementation of a pedestrian crosswalk integrating operational, layout, and employee-safety requirements.",
        "Created a Power BI Gemba walk tracker to monitor action items, standardize reporting, and improve visibility of outstanding plant issues."
      ]
  },
  {
    title: "CAD Modelling Assistant",
    organization: "IDS Consulting",
    dates: "Apr 2023 - Sep 2023",
    technologies: "SolidWorks · AutoCAD · Technical Drawings · 3D Modelling",
    achievements: [
    "Produced AutoCAD floor plans, SolidWorks 3D models, and technical drawings in collaboration with engineers to support project design requirements.",
    "Interpreted engineering requirements and incorporated design revisions into drawings and 3D models to align deliverables with project specifications."
    ]
  }
     
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Experience
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            My professional journey in engineering, research, and technology
          </p>
          
        </motion.div>

        <div className="relative">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="relative flex items-start gap-8"
              >

                {/* Content Card */}
                <Card className="glass hover:glow-primary transition-smooth flex-1 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-smooth">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-foreground font-medium">
                          {exp.organization}
                        </p>
                        <p className="text-sm text-white/70 mt-1">
                          {exp.technologies}
                        </p>
                      </div>
                      <div className="text-sm text-white mt-2 md:mt-0 md:text-right">
                        {exp.dates}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-white leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;