"use client";

import { motion } from "framer-motion";
import { Gamepad2, Code, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CVAbout() {
  console.log("CVAbout component rendering");

  const features = [
    {
      icon: Gamepad2,
      title: "Game Design",
      description: "Creating engaging gameplay mechanics and user experiences"
    },
    {
      icon: Code,
      title: "Development",
      description: "Building games with modern engines and programming languages"
    },
    {
      icon: Palette,
      title: "Creative Vision",
      description: "Combining artistic vision with technical implementation"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing boundaries in interactive entertainment"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-slate to-black relative">
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
            About <span className="text-electric-purple">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-purple to-neon-cyan mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Passionate game design and development student at Universidad Rey Juan Carlos in Madrid. 
              I combine creativity with technical skills to craft immersive gaming experiences that 
              captivate and engage players. My journey in game development is driven by a love for 
              interactive storytelling and innovative gameplay mechanics.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently exploring the intersection of cutting-edge technology and creative design, 
              with a focus on creating games that push the boundaries of what's possible in 
              interactive entertainment.
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-space-blue/50 border-electric-purple/20 hover:border-electric-purple/50 transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-electric-purple to-neon-cyan rounded-lg mb-4"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
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