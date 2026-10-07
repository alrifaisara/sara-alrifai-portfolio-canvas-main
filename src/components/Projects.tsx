import { Play, Github, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    image: "2axis-GIF.gif",
    githubUrl:
      "https://github.com/y24moham/Two_axis_machine_STM32_Control/",
    demoUrl:
      "https://drive.google.com/file/d/1OqJbgLzihHthyge3sKhTlL_7apw86IUl/preview",
    videoUrl:
      "https://drive.google.com/file/d/1I3mCT2xIy3bBejYWqJA6apu2jjCAlniW/preview",
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
    image: "Prosthetic-Hand-GIF.gif",
    githubUrl:
      "https://github.com/alrifaisara/Prosthetic-Hand-EV3/",
    demoUrl:
      "https://drive.google.com/file/d/1O89JtkFq9Y0AYt-BSoO9kphFq1CoDqlx/view?usp=drive_link",
    videoUrl:
      "https://drive.google.com/file/d/10DyI4aRybYKFwBeCA9ksxyiSy2CUN4sW/preview",
  },
];
  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className={`w-full h-48 object-cover rounded-lg mb-4 transition ${
                      project.videoUrl
                        ? "cursor-pointer hover:opacity-90"
                        : "cursor-default"
                    }`}

                  onClick={() => project.videoUrl && setActiveVideo(project.videoUrl)}
                />
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-xl">{project.title}</CardTitle>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {project.dates}
                  </div>
                </div>
                {/* Skills bubbles */}
                {project.skills && (
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 text-xs cursor-text select-text opacity-90"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
                <CardDescription>{project.description}</CardDescription>

              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      onClick={() => setActiveVideo(project.demoUrl)}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 👇 VIDEO MODAL GOES HERE */}
      <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-visible [&>button:not(.dialog-custom-close)]:hidden">
          {/* custom outside close */}
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="dialog-custom-close absolute -top-12 right-0 z-50 rounded-md bg-background border px-3 py-1 text-sm font-medium shadow hover:bg-muted transition"
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