import { Play, Github, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const ProjectsSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const projects = [
    {
      title: "STM32 2-Axis Motion Control System",
      dates: "May 2026 - Aug 2026",
      skills: [
        "STM32",
        "C/C++",
        "SPI",
        "ADC",
        "Stepper Motors",
        "GPIO",
        "Interrupts",
        "Limit Switches",
      ],
      description:
        "Designed and programmed a 2-axis embedded motion-control system using an STM32F401 microcontroller. Interfaced with stepper-motor drivers through SPI, used ADC inputs for variable speed and direction control, and implemented GPIO interrupts and limit-switch handling for controlled bidirectional motion, boundary detection, and safe operation.",
      image: "/2axis-GIF.gif",
      githubUrl:
        "https://github.com/alrifaisara/STM32-Two-Axis-Motion-Control",
      demoUrl:
        "https://drive.google.com/file/d/1wTzyH2Zgd9V4VdhVxSJxOClEO_j5boO-/preview",
      videoUrl:
        "https://drive.google.com/file/d/1wTzyH2Zgd9V4VdhVxSJxOClEO_j5boO-/preview",
    },

    {
      title: "EV3 Prosthetic Hand",
      dates: "Oct 2023 - Dec 2023",
      skills: [
        "C",
        "EV3",
        "Sensor Integration",
        "Motor Control",
        "Mechanical Design",
      ],
      description:
        "Designed and programmed a prosthetic-hand prototype that combined sensor input, motor control, and mechanical design to achieve repeatable gripping and object handling.",
      image: "/Prosthetic-Hand-GIF.gif",
      githubUrl:
        "https://github.com/alrifaisara/Prosthetic-Hand-EV3/",
      demoUrl:
        "https://drive.google.com/file/d/1O89JtkFq9Y0AYt-BSoO9kphFq1CoDqlx/preview",
      videoUrl:
        "https://drive.google.com/file/d/10DyI4aRybYKFwBeCA9ksxyiSy2CUN4sW/preview",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Featured Projects
          </h2>

          <p className="text-xl text-white max-w-2xl mx-auto">
            A selection of hands-on engineering projects combining embedded
            systems, controls, programming, and mechanical design
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="glass hover:glow-primary transition-smooth h-full flex flex-col group overflow-hidden">

                <CardHeader className="p-6">

                  {/* Project Image */}
                  <div className="overflow-hidden rounded-xl mb-5">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className={`w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105 ${
                        project.videoUrl
                          ? "cursor-pointer"
                          : "cursor-default"
                      }`}
                      onClick={() =>
                        project.videoUrl &&
                        setActiveVideo(project.videoUrl)
                      }
                    />
                  </div>

                  {/* Title */}
                  <CardTitle className="text-2xl text-primary group-hover:text-accent transition-smooth">
                    {project.title}
                  </CardTitle>

                  {/* Date */}
                  <div className="flex items-center text-sm text-white/70 mt-1">
                    <CalendarDays className="h-4 w-4 mr-2 text-accent" />
                    {project.dates}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 text-xs bg-primary/10 border border-primary/20 text-white hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Description */}
                  <CardDescription className="text-white/80 leading-relaxed mt-4">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                {/* Buttons */}
                <CardContent className="p-6 pt-0 mt-auto">
                  <div className="flex flex-wrap gap-3">

                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-primary/40 text-white hover:bg-primary/10 hover:text-white"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>

                    {project.demoUrl && (
                      <Button
                        size="sm"
                        onClick={() => setActiveVideo(project.demoUrl)}
                        className="gradient-primary hover:glow-primary transition-smooth"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        View Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video / Demo Modal */}
      <Dialog
        open={!!activeVideo}
        onOpenChange={(open) => {
          if (!open) setActiveVideo(null);
        }}
      >
        <DialogContent className="max-w-4xl p-0 overflow-visible glass border-primary/30 [&>button:not(.dialog-custom-close)]:hidden">

          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="dialog-custom-close absolute -top-12 right-0 z-50 rounded-md glass border border-primary/30 px-3 py-1 text-white text-sm font-medium hover:glow-primary transition-smooth"
          >
            ✕
          </button>

          {activeVideo && (
            <iframe
              key={activeVideo}
              src={activeVideo}
              className="w-full aspect-video rounded-lg"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;