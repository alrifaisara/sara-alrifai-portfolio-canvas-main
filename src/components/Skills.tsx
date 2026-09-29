import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        {
          name: "Python",
          learned: "University coursework and self-study",
          applied: "Machine learning projects, automation scripts, data analysis",
          projects: ["Robotic Arm Controller", "ML Predictor", "Data Analysis Tools"]
        },
        {
          name: "C/C++",
          learned: "Engineering fundamentals and embedded systems courses",
          applied: "Arduino programming, microcontroller development",
          projects: ["Smart Home System", "Sensor Networks", "Real-time Control Systems"]
        },
        {
          name: "JavaScript/TypeScript",
          learned: "Web development bootcamp and personal projects",
          applied: "Frontend development, web applications, interactive dashboards",
          projects: ["Portfolio Website", "IoT Dashboards", "Data Visualization Apps"]
        },
        {
          name: "MATLAB",
          learned: "Engineering analysis and simulation courses",
          applied: "Signal processing, control systems design, mathematical modeling",
          projects: ["Control System Analysis", "Signal Processing Tools", "Simulation Models"]
        }
      ]
    },
    {
      category: "Engineering Tools",
      skills: [
        {
          name: "SolidWorks",
          learned: "CAD design courses and industry training",
          applied: "3D modeling, mechanical design, assembly drawings",
          projects: ["CAD Design Portfolio", "Robotic Components", "Product Prototypes"]
        },
        {
          name: "Arduino",
          learned: "Embedded systems coursework and hobby projects",
          applied: "IoT devices, sensor integration, automation systems",
          projects: ["Smart Home Automation", "Environmental Monitoring", "Robotic Controls"]
        },
        {
          name: "LabVIEW",
          learned: "Instrumentation and control systems lab",
          applied: "Data acquisition, instrument control, test automation",
          projects: ["Test Automation Systems", "Data Logging Tools", "Control Interfaces"]
        }
      ]
    },
    {
      category: "Technologies",
      skills: [
        {
          name: "React",
          learned: "Modern web development frameworks study",
          applied: "Interactive user interfaces, responsive web applications",
          projects: ["Portfolio Website", "Dashboard Applications", "IoT Control Panels"]
        },
        {
          name: "TensorFlow",
          learned: "Machine learning specialization and research projects",
          applied: "Neural networks, predictive modeling, computer vision",
          projects: ["ML Predictor", "Image Recognition Systems", "Predictive Analytics"]
        },
        {
          name: "Git/GitHub",
          learned: "Software engineering best practices and team projects",
          applied: "Version control, collaborative development, project management",
          projects: ["All software projects", "Team collaborations", "Open source contributions"]
        }
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        {
          name: "Problem Solving",
          learned: "Engineering curriculum and real-world challenges",
          applied: "Design optimization, debugging complex systems, innovation",
          projects: ["All engineering projects", "Research initiatives", "Troubleshooting"]
        },
        {
          name: "Team Leadership",
          learned: "Group projects, tutoring experience, internships",
          applied: "Project management, mentoring students, cross-functional collaboration",
          projects: ["Research Team Leadership", "Student Tutoring", "Internship Projects"]
        },
        {
          name: "Communication",
          learned: "Presentations, tutoring, technical writing",
          applied: "Technical documentation, client presentations, knowledge transfer",
          projects: ["Research Publications", "Tutorial Creation", "Client Interactions"]
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Skills
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Technical expertise and capabilities across engineering and technology domains
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                {category.category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={itemVariants}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="glass hover:glow-primary transition-smooth hover:border-primary hover:text-primary"
                          onClick={() => setSelectedSkill(skill)}
                        >
                          {skill.name}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="glass max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                            {skill.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-accent mb-2">Where I learned it</h4>
                            <p className="text-white">{skill.learned}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-accent mb-2">How I've applied it</h4>
                            <p className="text-white">{skill.applied}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-accent mb-3">Related projects</h4>
                            <div className="flex flex-wrap gap-2">
                              {skill.projects.map((project, index) => (
                                <Badge key={index} variant="secondary" className="text-sm">
                                  {project}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;