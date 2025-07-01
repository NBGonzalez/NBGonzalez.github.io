"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function CVSkills() {
  console.log("CVSkills component rendering");

  const technicalSkills = [
    { name: "Unity", level: 85, color: "from-electric-purple to-neon-cyan" },
    { name: "C#", level: 80, color: "from-neon-cyan to-gaming-green" },
    { name: "JavaScript", level: 75, color: "from-gaming-green to-electric-purple" },
    { name: "Python", level: 70, color: "from-electric-purple to-neon-cyan" },
    { name: "Blender", level: 65, color: "from-neon-cyan to-gaming-green" },
    { name: "Git", level: 85, color: "from-gaming-green to-electric-purple" }
  ];

  const gameDevSkills = [
    "Game Design",
    "Level Design", 
    "UI/UX Design",
    "3D Modeling",
    "Animation",
    "Shader Programming",
    "Physics Simulation",
    "AI Programming",
    "Multiplayer Systems",
    "Performance Optimization"
  ];

  const tools = [
    "Unity Engine",
    "Unreal Engine",
    "Visual Studio",
    "Blender",
    "Adobe Creative Suite",
    "Figma",
    "Trello",
    "GitHub",
    "Perforce"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-space-blue relative">
      <div className="absolute inset-0 bg-hexagon-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-neon-cyan">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-gaming-green mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Programming & Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Programming & Development
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={skill.level} 
                      className="h-3 bg-gray-700"
                    />
                    <div 
                      className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Game Development Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Game Development Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {gameDevSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge 
                    variant="outline" 
                    className="px-4 py-2 text-sm border-electric-purple text-electric-purple hover:bg-electric-purple hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Software */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Tools & Software
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge 
                    variant="outline" 
                    className="px-4 py-2 text-sm border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}