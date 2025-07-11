"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CVHero() {
  console.log("CVHero component rendering");

  const scrollToSection = (sectionId: string) => {
    console.log("Scrolling to section:", sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="min-h-screen relative bg-gradient-to-br from-black via-space-blue to-dark-slate overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-hexagon-pattern opacity-20"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
            initial={{ 
              x: Math.random() * 1200,
              y: Math.random() * 800,
              opacity: 0 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [0, -100, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Name with gaming-style glow effect */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-electric-purple via-neon-cyan to-gaming-green bg-clip-text text-transparent animate-glow-pulse">
              Néstor Bermejillo
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-2 font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Game Developer & Programmer
          </motion.p>

          <motion.p 
            className="text-lg text-neon-cyan mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Spain • Madrid
          </motion.p>

          {/* Social links */}
          <motion.div 
            className="flex justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
            href="https://github.com/NBGonzalez"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button 
              variant="outline" 
              size="lg" 
              className="border-electric-purple text-electric-purple hover:bg-electric-purple hover:text-white transition-all duration-300"
              onClick={() => console.log("GitHub link clicked")}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            </a>
            
            <a
            href="https://www.linkedin.com/in/nestor-bermejillo-gonzalez-101b53182/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button 
              variant="outline" 
              size="lg" 
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300"
              onClick={() => console.log("LinkedIn link clicked")}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            </a>
            
            <a href="mailto:nestorbermejillogonzalez@gmail.com">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gaming-green text-gaming-green hover:bg-gaming-green hover:text-black transition-all duration-300"
              onClick={() => console.log("Email link clicked")}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => scrollToSection('education')}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 hover:text-neon-cyan transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}