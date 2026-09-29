import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Mechatronics Engineering Intern",
      organization: "Advanced Robotics Labs",
      dates: "Jun 2023 - Present",
      achievements: [
        "Developed automated testing systems that reduced quality control time by 40%",
        "Programmed Arduino and Raspberry Pi controllers for industrial automation",
        "Collaborated on multi-disciplinary team to design robotic assembly line components"
      ]
    },
    {
      title: "Research Assistant",
      organization: "University Robotics Department",
      dates: "Sep 2022 - May 2023",
      achievements: [
        "Conducted research on machine learning applications in autonomous systems",
        "Published findings in IEEE conference proceedings",
        "Mentored 3 undergraduate students on robotics projects"
      ]
    },
    {
      title: "Engineering Tutor",
      organization: "University Learning Center",
      dates: "Jan 2022 - Present",
      achievements: [
        "Tutored 50+ students in mathematics, physics, and programming fundamentals",
        "Developed innovative teaching methods that improved student performance by 25%",
        "Created supplementary learning materials and video tutorials"
      ]
    },
    {
      title: "Junior Software Developer",
      organization: "TechStart Solutions",
      dates: "May 2021 - Aug 2021",
      achievements: [
        "Built responsive web applications using React and TypeScript",
        "Implemented RESTful APIs and database optimization strategies",
        "Participated in agile development processes and code reviews"
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
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />

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
                {/* Timeline Dot */}
                <div className="hidden md:flex w-16 h-16 rounded-full gradient-primary items-center justify-center text-primary-foreground font-bold text-lg glow-primary">
                  {index + 1}
                </div>

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