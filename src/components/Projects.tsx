import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Home Automation System",
      description: "Arduino-based home automation with IoT integration for controlling lights, temperature, and security systems.",
      image: "/api/placeholder/400/250",
      github: "https://github.com/sara-alrifai/smart-home",
      demo: "https://demo.smart-home.com",
      video: "https://youtube.com/watch?v=demo1"
    },
    {
      title: "Robotic Arm Controller",
      description: "Python-controlled 6-DOF robotic arm with computer vision for object recognition and manipulation.",
      image: "/api/placeholder/400/250", 
      github: "https://github.com/sara-alrifai/robotic-arm",
      demo: "https://demo.robotic-arm.com",
      video: "https://youtube.com/watch?v=demo2"
    },
    {
      title: "Machine Learning Predictor",
      description: "TensorFlow-based predictive model for manufacturing quality control with 95% accuracy.",
      image: "/api/placeholder/400/250",
      github: "https://github.com/sara-alrifai/ml-predictor", 
      demo: "https://demo.ml-predictor.com",
      video: "https://youtube.com/watch?v=demo3"
    },
    {
      title: "CAD Design Portfolio",
      description: "SolidWorks designs for mechanical components and assemblies with engineering calculations.",
      image: "/api/placeholder/400/250",
      github: "https://github.com/sara-alrifai/cad-portfolio",
      demo: "https://demo.cad-portfolio.com",
      video: "https://youtube.com/watch?v=demo4"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Projects
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            A showcase of my technical projects spanning robotics, automation, and software development
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass hover:glow-primary transition-smooth group h-full">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-secondary rounded-t-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  <p className="text-white mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:border-primary hover:text-primary transition-smooth"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:border-accent hover:text-accent transition-smooth"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:border-destructive hover:text-destructive transition-smooth"
                      asChild
                    >
                      <a href={project.video} target="_blank" rel="noopener noreferrer">
                        <Play className="w-4 h-4 mr-2" />
                        Video
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;