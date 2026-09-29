import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = {
    school: "University of Technology",
    program: "Bachelor of Engineering in Mechatronics",
    graduation: "Expected May 2025",
    location: "Engineering Campus",
    gpa: "3.8/4.0",
    achievements: [
      "Dean's List for 4 consecutive semesters",
      "President of Robotics Engineering Society",
      "IEEE Student Member and active participant",
      "Winner of University Innovation Challenge 2023"
    ],
    relevantCourses: [
      "Control Systems Engineering",
      "Robotics and Automation", 
      "Machine Learning Applications",
      "Digital Signal Processing",
      "Embedded Systems Design",
      "Manufacturing Processes"
    ]
  };

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Education
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Academic foundation and achievements in engineering and technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass hover:glow-primary transition-smooth">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 glow-primary">
                <GraduationCap className="w-10 h-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl font-bold text-primary mb-2">
                {education.program}
              </CardTitle>
              <p className="text-xl text-foreground font-semibold">
                {education.school}
              </p>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div className="flex items-center gap-2 text-white">
                  <Calendar className="w-5 h-5" />
                  <span>{education.graduation}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5" />
                  <span>{education.location}</span>
                </div>
                <div className="text-accent font-semibold">
                  GPA: {education.gpa}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-4">
                    Achievements
                  </h3>
                  <ul className="space-y-3">
                    {education.achievements.map((achievement, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-white leading-relaxed">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-accent mb-4">
                    Relevant Coursework
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {education.relevantCourses.map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-2 rounded-lg bg-secondary/50 text-secondary-foreground text-sm"
                      >
                        {course}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;