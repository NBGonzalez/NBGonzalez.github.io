"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, User, Code, Folder, GraduationCap, Mail, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingNav() {
  console.log("FloatingNav component rendering");
  
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Scroll position:", latest);
    setIsVisible(latest > 100);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            console.log("Active section changed to:", section);
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "education", icon: GraduationCap, label: "Education" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "projects", icon: Folder, label: "Projects" },
    { id: "contact", icon: Mail, label: "Contact" },
    //{ id: "about", icon: User, label: "About" }

  ];

  const scrollToSection = (sectionId: string) => {
    console.log("Navigating to section:", sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToTop = () => {
    console.log("Scrolling to top");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-black/80 backdrop-blur-md border border-electric-purple/20 rounded-full px-6 py-3">
          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative p-3 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-electric-purple text-white'
                    : 'text-gray-400 hover:text-neon-cyan hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="sr-only">{item.label}</span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-neon-cyan rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isVisible ? 1 : 0, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-electric-purple to-neon-cyan hover:from-electric-purple/80 hover:to-neon-cyan/80 text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      </motion.div>
    </>
  );
}