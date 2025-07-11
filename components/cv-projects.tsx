"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CVProjects() {
  console.log("CVProjects component rendering");

  const projects = [
    {
      title: "Fragments Of Time",
      description: "The main character seeks to find the killer who murdered his daughter. To do so, he created a machine that allows him to travel to the moment of her death.",
      image: "/images/FragmentsOfTime.png",
      technologies: ["Unity", "C#", "Blender", "Photoshop", "Substance Painter"],
      githubUrl: "https://github.com/NBGonzalez/Jam2025?tab=readme-ov-file",
      liveUrl: "https://criis-0924.itch.io/fragments-of-time",
      status: "In Development"
    },
    {
      title: "FallOff",
      description: "A 3D action RPG featuring dynamic combat system, character progression, and immersive storytelling. Built with Unity and C#.",
      image: "/images/FallOff.jpeg",
      technologies: ["Unity", "C#", "UnityCloud", "UnityAuthentication","Photoshop"],
      githubUrl: "https://github.com/NBGonzalez/Jam2025?tab=readme-ov-file",
      liveUrl: "https://criis-0924.itch.io/fragments-of-time",
      status: "Completed"
    },
    {
      title: "The Shop Next Door",
      description: "The Shop Next Door is a two player competitive game where two sisters will have to fight to find a good balance between life and work.",
      image: "/images/TheShopNextDoor.jpg",
      technologies: ["Unity", "C#", "Network For GameObjects", "Blender", "Substance Painter"],
      githubUrl: "https://github.com/Kioreco/The-Shop-Next-Door",
      liveUrl: "https://kioreco.itch.io/the-shop-next-door",
      status: "Completed"
    },
    {
      title: "Decor Dilema",
      description: "Immersive VR experience showcasing interactive environments that you can decorate according to customer orders.",
      image: "/images/DecorDilema.png",
      technologies: ["Unity", "C#", "Oculus Rift", "Blender"],
      githubUrl: "https://github.com/uapli/RV-DECOR-DILEMMA",
      liveUrl: "https://pablowht.itch.io/decor-dilemma",
      status: "Prototype"
    },
    {
      title: "Arkanoid",
      description: "The classic Arkanoid video game, in which the difficulty is increasing as blocks are breaking. Created completely in JavaScript.",
      image: "/images/Arkanoid.png",
      technologies: ["Visual Code", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/NBGonzalez/Arkanoid",
      liveUrl: "https://nbgonzalez.github.io/Arkanoid/",
      status: "Published"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-gaming-green text-black";
      case "Published": return "bg-neon-cyan text-black";
      case "In Development": return "bg-electric-purple text-white";
      case "Prototype": return "bg-yellow-500 text-black";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-space-blue to-dark-slate relative">
      <div className="absolute inset-0 bg-hexagon-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-gaming-green">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gaming-green to-electric-purple mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A showcase of my game development projects, from concept to completion.
            Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-black/50 border-gray-700 hover:border-electric-purple/50 transition-all duration-300 overflow-hidden h-full">
                  {/* Project Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-12 h-12 text-white/70" />
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className={`${getStatusColor(project.status)} font-medium`}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>


                  <CardHeader>
                    <CardTitle className="text-xl text-white group-hover:text-neon-cyan transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-gray-600 text-gray-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex space-x-3 pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-electric-purple text-electric-purple hover:bg-electric-purple hover:text-white transition-all duration-300"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>


                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}