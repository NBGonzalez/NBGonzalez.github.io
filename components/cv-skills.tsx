"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiJavascript,
  SiCsharp,
  SiPython,
  SiUnity,
  SiAutodeskmaya,
  SiBlender,
  SiGithub,
  SiGit,
  SiSqlite,
  SiMysql,
  SiMongodb,
  SiCplusplus,
  SiUnrealengine
} from "react-icons/si";

import { DiVisualstudio,
  DiJava
 } from "react-icons/di";

export default function CVSkills() {
  console.log("CVSkills component rendering");

  const technicalSkills = [
    { name: "Unity", icon: SiUnity, color: "#000000" },
    { name: 'Unreal Engine', icon: SiUnrealengine, color: '#0E1128' },
    { name: "C#", icon: SiCsharp, color: "#239120" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
    { name: 'SQL', icon: SiMysql, color: '#4479A1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Java', icon: DiJava, color: '#ED8B00' },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Blender", icon: SiBlender, color: "#F5792A" },
    { name: 'Autodesk Maya', icon: SiAutodeskmaya, color: '#1E8EA9' },
    { name: 'Substance Painter', icon: null, color: '#FF6B35' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: 'Visual Studio', icon: DiVisualstudio, color: '#5C2D91' }
  ];

  const gameDevSkills = [
    "Game Design",
    "Level Design",
    "UI/UX Design",
    "3D Modeling",
    "Textures",
    "Shader Programming",
    "Programming Patterns",
    "AI Programming",
    "Database",
    "Multiplayer Systems",
    "Performance Optimization"
  ];

  const SkillCard = ({ skill }: { skill: { name: string; icon: any; color: string } }) => (
  <Card className="bg-space-blue/30 border-electric-purple/20 hover:border-electric-purple/50 transition-all duration-300">
    <CardContent className="p-5 flex flex-col items-center justify-center gap-4">
      {/* Icon Container (como el de educación) */}
      <div className="w-16 h-16 bg-gradient-to-br from-electric-purple to-neon-cyan rounded-lg flex items-center justify-center shadow-md">
        {skill.icon ? (
          <skill.icon className="w-8 h-8 text-white" style={{ color: skill.color }} />
        ) : (
          <span className="text-white font-bold text-xl">
            {skill.name.charAt(0)}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="text-white text-center font-semibold text-md tracking-wide">
        {skill.name}
      </h3>
    </CardContent>
  </Card>
);


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
          {/* Technical Skills with icons */}
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard skill={skill} />
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

          
        </div>
      </div>
    </section>
  );
}
