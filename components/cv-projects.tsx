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
      title: "Fantasy RPG Adventure",
      description: "A 3D action RPG featuring dynamic combat system, character progression, and immersive storytelling. Built with Unity and C#.",
      image: "/api/placeholder/400/250",
      technologies: ["Unity", "C#", "Blender", "Photoshop"],
      githubUrl: "#",
      liveUrl: "#",
      status: "In Development"
    },
    {
      title: "Puzzle Platformer",
      description: "2D puzzle-platformer with innovative mechanics and beautiful pixel art. Features 30+ levels and engaging soundtrack.",
      image: "/api/placeholder/400/250", 
      technologies: ["Unity", "C#", "Aseprite", "FMOD"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "VR Experience Demo",
      description: "Immersive VR experience showcasing interactive environments and intuitive gesture controls for educational purposes.",
      image: "/api/placeholder/400/250",
      technologies: ["Unity", "C#", "Oculus SDK", "3ds Max"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Prototype"
    },
    {
      title: "Mobile Racing Game",
      description: "Fast-paced mobile racing game with customizable vehicles, multiple tracks, and multiplayer support.",
      image: "/api/placeholder/400/250",
      technologies: ["Unity", "C#", "Firebase", "Google Play"],
      githubUrl: "#",
      liveUrl: "#",
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
                  <div className="relative overflow-hidden bg-gradient-to-br from-electric-purple/20 to-neon-cyan/20 h-48">
                    <div className="absolute inset-0 bg-gaming-gradient opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white/60" />
                    </div>
                    <div className="absolute top-4 right-4">
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
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-electric-purple text-electric-purple hover:bg-electric-purple hover:text-white transition-all duration-300 flex-1"
                        onClick={() => console.log("GitHub clicked for:", project.title)}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 flex-1"
                        onClick={() => console.log("Live demo clicked for:", project.title)}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
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