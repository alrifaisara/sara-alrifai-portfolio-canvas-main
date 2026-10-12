import { useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Skill {
  name: string;
  category: string;
  learnedAt: string;
  appliedAt: string;
  examples: {
    text: string;
    ongoing?: boolean;
  }[];

  // Optional:
  // Add a value from 0–100 if you want a proficiency bar.
  level?: number;

  // Optional:
  status?: "currently_learning" | "currently_using";
}

const Skills = () => {
  const skills: Skill[] = [
    // =========================================================
    // Mechanical Design & CAD
    // =========================================================

    {
      name: "SolidWorks",
      category: "Mechanical Design & CAD",
      learnedAt:
        "Developed through engineering coursework, CAD work, technical drawing, and hands-on design projects.",
      appliedAt:
        "Used for 3D modelling and technical drawings during CAD work and engineering projects.",
      examples: [
        {
          text: "Produced SolidWorks 3D models and technical drawings while working with engineers at IDS Consulting.",
        },
        {
          text: "Used 3D modelling to translate engineering requirements into design revisions and project deliverables.",
        },
      ],
    },

    {
      name: "AutoCAD",
      category: "Mechanical Design & CAD",
      learnedAt:
        "Developed through professional CAD work and manufacturing-focused engineering projects.",
      appliedAt:
        "Used extensively for plant layouts, equipment installations, facility modifications, and technical drawings.",
      examples: [
        {
          text: "Created and maintained AutoCAD plant layouts at Mondelēz for equipment installations and facility modifications.",
        },
        {
          text: "Supported layout development and design specifications for the Voltron packaging system.",
        },
        {
          text: "Produced AutoCAD floor plans and engineering drawings at IDS Consulting.",
        },
      ],
    },

    {
      name: "GD&T",
      category: "Mechanical Design & CAD",
      learnedAt:
        "Developed through mechanical design coursework and technical drawing work.",
      appliedAt:
        "Used when interpreting engineering drawings, tolerances, dimensions, and design requirements.",
      examples: [
        {
          text: "Applied tolerance and dimensioning concepts while working with engineering drawings and CAD models.",
        },
        {
          text: "Used drawing requirements to guide design revisions and model development.",
        },
      ],
    },

    {
      name: "FDM 3D Printing",
      category: "Mechanical Design & CAD",
      learnedAt:
        "Developed through engineering design, prototyping, and hands-on mechanical work.",
      appliedAt:
        "Used for rapid prototyping and evaluating practical engineering applications for custom components.",
      examples: [
        {
          text: "Explored FDM 3D printing applications for maintenance and manufacturing use.",
        },
        {
          text: "Used CAD-to-prototype workflows when developing mechanical concepts.",
        },
      ],
    },

    // =========================================================
    // Controls & Embedded Systems
    // =========================================================

    {
      name: "STM32",
      category: "Controls & Embedded Systems",
      learnedAt:
        "Developed through microprocessor coursework and hands-on embedded-system projects.",
      appliedAt:
        "Used as the controller for a two-axis embedded motion-control system.",
      examples: [
        {
          text: "Designed and programmed a two-axis motion-control system using an STM32F401 microcontroller.",
        },
        {
          text: "Implemented GPIO, ADC inputs, external interrupts, and motor-control logic.",
        },
        {
          text: "Integrated limit switches for boundary detection and safe machine operation.",
        },
      ],
    },

    {
      name: "PLC Systems",
      category: "Controls & Embedded Systems",
      learnedAt:
        "Developed through engineering coursework and manufacturing automation experience.",
      appliedAt:
        "Used in production-line controls upgrade projects at Mondelēz.",
      examples: [
        {
          text: "Led a production-line PLC controls upgrade project involving controls development, design reviews, and equipment integration.",
        },
        {
          text: "Coordinated contractors and internal engineering teams through planning and project execution.",
        },
      ],
    },

    {
      name: "SPI",
      category: "Controls & Embedded Systems",
      learnedAt:
        "Developed through embedded-systems coursework and STM32 project work.",
      appliedAt:
        "Used to communicate between an STM32 microcontroller and stepper-motor drivers.",
      examples: [
        {
          text: "Interfaced STM32 hardware with stepper-motor drivers using SPI communication.",
        },
        {
          text: "Used SPI communication as part of independent two-axis motor control.",
        },
      ],
    },

    {
      name: "ADC",
      category: "Controls & Embedded Systems",
      learnedAt:
        "Developed through microprocessor, sensors, and instrumentation coursework.",
      appliedAt:
        "Used for analog speed and direction inputs in an STM32 motion-control system.",
      examples: [
        {
          text: "Read analog inputs using the STM32 ADC to provide variable motor-control inputs.",
        },
      ],
    },

    {
      name: "Interrupts",
      category: "Controls & Embedded Systems",
      learnedAt:
        "Developed through microprocessor coursework and STM32 embedded programming.",
      appliedAt:
        "Used external interrupts for responsive limit-switch handling and motor safety logic.",
      examples: [
        {
          text: "Implemented external interrupts to detect limit-switch activation.",
        },
        {
          text: "Used interrupt-based logic to prevent motion beyond mechanical boundaries.",
        },
      ],
    },

    {
      name: "Arduino",
      category: "Controls & Embedded Systems",
      learnedAt:
        "Developed through embedded-systems coursework and hands-on prototyping.",
      appliedAt:
        "Used for microcontroller programming, sensor integration, and engineering prototyping.",
      examples: [
        {
          text: "Used Arduino platforms while developing embedded-system and sensor-integration skills.",
        },
      ],
    },

    {
      name: "FPGA / VHDL",
      category: "Controls & Embedded Systems",
      learnedAt:
        "Developed through digital logic and microprocessor-related engineering coursework.",
      appliedAt:
        "Used to implement and understand digital logic and hardware-level system behaviour.",
      examples: [
        {
          text: "Developed VHDL experience through FPGA and digital-logic coursework.",
        },
      ],
    },

    {
      name: "PCB & Circuit Design",
      category: "Controls & Embedded Systems",
      learnedAt:
        "Developed through circuits, PCB design, sensors, and instrumentation coursework.",
      appliedAt:
        "Used for understanding electrical interfaces, circuit behaviour, and embedded-system integration.",
      examples: [
        {
          text: "Applied circuit and PCB design concepts through engineering coursework and embedded-system development.",
        },
      ],
    },

    // =========================================================
    // Programming
    // =========================================================

    {
      name: "C / C++",
      category: "Programming",
      learnedAt:
        "Developed through programming, algorithms, data structures, microprocessors, and embedded-systems coursework.",
      appliedAt:
        "Used extensively in embedded programming and motion-control projects.",
      examples: [
        {
          text: "Programmed the STM32 two-axis motion-control system in C/C++.",
        },
        {
          text: "Implemented motor-control logic, GPIO behaviour, interrupts, and safety handling.",
        },
        {
          text: "Used C in the EV3 prosthetic-hand project for motor and sensor control.",
        },
      ],
    },

    {
      name: "Python",
      category: "Programming",
      learnedAt:
        "Developed through engineering coursework, programming practice, and personal technical projects.",
      appliedAt:
        "Used for engineering calculations, scripting, and technical problem solving.",
      examples: [
        {
          text: "Applied Python in engineering coursework and programming-based technical work.",
        },
      ],
    },

    {
      name: "MATLAB / Simulink",
      category: "Programming",
      learnedAt:
        "Developed through engineering modelling, controls, numerical analysis, and systems coursework.",
      appliedAt:
        "Used for system modelling, simulation, engineering calculations, and controls analysis.",
      examples: [
        {
          text: "Used MATLAB and Simulink to model dynamic systems and analyze control behaviour.",
        },
        {
          text: "Worked with system identification and simulated system responses in controls coursework.",
        },
      ],
    },

    // =========================================================
    // Data & Analysis
    // =========================================================

    {
      name: "Power BI",
      category: "Data & Analysis",
      learnedAt:
        "Developed through manufacturing engineering and plant improvement work.",
      appliedAt:
        "Used at Mondelēz to improve tracking and visibility of plant action items.",
      examples: [
        {
          text: "Built a Power BI Gemba walk tracker for monitoring action items and outstanding plant issues.",
        },
        {
          text: "Used the dashboard to standardize reporting and improve visibility of open actions.",
        },
      ],
    },

    {
      name: "Excel",
      category: "Data & Analysis",
      learnedAt:
        "Developed through engineering administration, project work, reporting, and data analysis.",
      appliedAt:
        "Used PivotTables, VLOOKUP, and spreadsheet analysis for planning and reporting.",
      examples: [
        {
          text: "Analyzed data using Excel, PivotTables, and VLOOKUP at the University of Waterloo Engineering Undergraduate Office.",
        },
        {
          text: "Used spreadsheets for project planning, reporting, and engineering analysis.",
        },
      ],
    },
  ];

  // Controls the order categories appear on the page
  const categoryOrder = [
    "Mechanical Design & CAD",
    "Controls & Embedded Systems",
    "Programming",
    "Data & Analysis",
  ];

  const categories = categoryOrder.filter((category) =>
    skills.some((skill) => skill.category === category)
  );

  // =========================================================
  // Current / ongoing status
  // =========================================================

  const ongoingCount = (examples: { ongoing?: boolean }[]) =>
    examples.reduce(
      (count, example) => count + (example.ongoing ? 1 : 0),
      0
    );

  const ongoingState = (examples: { ongoing?: boolean }[]) => {
    const total = examples.length;
    const ongoing = ongoingCount(examples);

    if (ongoing === 0) return "none";
    if (ongoing === total) return "all";

    return "some";
  };

  const ongoingLabel = (skill: Skill) => {
    if (skill.status === "currently_learning") {
      return "Currently learning";
    }

    if (skill.status === "currently_using") {
      return "Currently using";
    }

    const state = ongoingState(skill.examples);

    if (state === "some") {
      return "Currently improving";
    }

    if (state === "all") {
      return "Currently learning";
    }

    return null;
  };

  // =========================================================
  // Proficiency bar functionality
  // =========================================================

  const clampLevel = (number: number) =>
    Math.max(0, Math.min(100, number));

  const levelLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Proficient";
    if (level >= 60) return "Intermediate";
    if (level >= 40) return "Familiar";

    return "Beginner";
  };

  const SkillLevel = ({ level }: { level: number }) => {
    const value = clampLevel(level);
    const label = levelLabel(value);

    const barRef = useRef<HTMLDivElement | null>(null);

    const [tooltip, setTooltip] = useState({
      show: false,
      x: 0,
      y: 0,
    });

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      if (!barRef.current) return;

      const padding = 10;

      const x = Math.min(
        window.innerWidth - padding,
        Math.max(padding, event.clientX)
      );

      const y = Math.min(
        window.innerHeight - padding,
        Math.max(padding, event.clientY)
      );

      setTooltip({
        show: true,
        x,
        y,
      });
    };

    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-white/70">
            {label}
          </p>
        </div>

        <div
          ref={barRef}
          className="h-2 w-full overflow-hidden rounded-full bg-white/10"
          onMouseEnter={handleMouseMove}
          onMouseLeave={() =>
            setTooltip((previous) => ({
              ...previous,
              show: false,
            }))
          }
          onMouseMove={handleMouseMove}
          aria-label={`${label} (${value}%)`}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all"
            style={{
              width: `${value}%`,
            }}
          />
        </div>

        {tooltip.show &&
          createPortal(
            <div
              className="pointer-events-none fixed z-[9999]"
              style={{
                left: tooltip.x,
                top: tooltip.y - 14,
                transform: "translate(-50%, -100%)",
              }}
            >
              <div className="relative rounded-md glass border border-primary/30 px-2 py-1 text-[11px] text-white shadow-md">
                {value}%

                <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-background border-r border-b border-primary/30" />
              </div>
            </div>,
            document.body
          )}
      </div>
    );
  };

  // =========================================================
  // Animations
  // =========================================================

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },

    visible: {
      opacity: 1,
      scale: 1,

      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* =====================================================
            Section Heading
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Skills
          </h2>

          <p className="text-xl text-white max-w-2xl mx-auto">
            Technical skills developed through engineering coursework,
            hands-on projects, and industry experience
          </p>

          <p className="text-sm text-white/60 mt-3">
            Click a skill to see where I learned it and how I have
            applied it.
          </p>
        </motion.div>

        {/* =====================================================
            Skill Categories
        ===================================================== */}

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: categoryIndex * 0.15,
              }}
              viewport={{
                once: true,
              }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                {category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                className="flex flex-wrap gap-3"
              >
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                    >
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className={`glass transition-smooth hover:glow-primary hover:border-primary hover:text-primary ${
                              ongoingLabel(skill)
                                ? "border-primary text-primary"
                                : ""
                            }`}
                          >
                            {skill.name}
                          </Button>
                        </DialogTrigger>

                        {/* =================================================
                            Skill Dialog
                        ================================================= */}

                        <DialogContent className="glass max-w-2xl p-0 overflow-hidden border-primary/30">

                          {/* Fixed top area */}

                          <div className="p-6 border-b border-primary/20">
                            <DialogHeader>
                              <DialogTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                                {skill.name}
                              </DialogTitle>

                              {ongoingLabel(skill) && (
                                <Badge
                                  variant="secondary"
                                  className="w-fit mt-2"
                                >
                                  {ongoingLabel(skill)}
                                </Badge>
                              )}

                              {typeof skill.level === "number" && (
                                <div className="pt-4">
                                  <SkillLevel
                                    level={skill.level}
                                  />
                                </div>
                              )}
                            </DialogHeader>
                          </div>

                          {/* Scrollable dialog body */}

                          <div className="max-h-[70vh] overflow-y-auto p-6">
                            <div className="space-y-5">

                              {/* Where I learned it */}

                              <div className="rounded-lg glass border border-primary/20 p-4">
                                <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                                  Where I learned it
                                </h4>

                                <p className="text-white/90 leading-relaxed">
                                  {skill.learnedAt}
                                </p>
                              </div>

                              {/* Application */}

                              <div className="rounded-lg glass border border-primary/20 p-4">
                                <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                                  How I've applied it
                                </h4>

                                <p className="text-white/90 leading-relaxed">
                                  {skill.appliedAt}
                                </p>
                              </div>

                              {/* Examples */}

                              <div className="rounded-lg glass border border-primary/20 p-4">
                                <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                                  Examples
                                </h4>

                                <ul className="space-y-3">
                                  {skill.examples.map(
                                    (example, index) => (
                                      <li
                                        key={index}
                                        className="flex items-start gap-3"
                                      >
                                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />

                                        <div className="text-white/90 leading-relaxed">
                                          {example.text}

                                          {example.ongoing && (
                                            <Badge
                                              variant="secondary"
                                              className="ml-2 text-[10px]"
                                            >
                                              Ongoing
                                            </Badge>
                                          )}
                                        </div>
                                      </li>
                                    )
                                  )}
                                </ul>
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