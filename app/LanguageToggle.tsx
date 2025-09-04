"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LanguageToggleNeon() {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  useEffect(() => {
    setIsEnglish(i18n.language === "en");
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = isEnglish ? "es" : "en";
    i18n.changeLanguage(newLang);
    setIsEnglish(!isEnglish);
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={toggleLanguage}
        aria-pressed={isEnglish}
        aria-label="Toggle language"
        className="relative w-36 h-12 rounded-xl cursor-pointer overflow-hidden 
                   bg-gradient-to-r from-space-blue to-dark-slate
                   border-2 border-electric-purple/50
                   shadow-[0_0_25px_rgba(147,51,234,0.5)]
                   
                   hover:border-electric-purple/80
                   transition-all duration-300"
      >
        {/* Fondo de neón animado */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-electric-purple/20 to-neon-cyan/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        
        {/* Knob con efecto neón */}
        <motion.div
          className="absolute top-1 bottom-1 w-[43%] rounded-lg 
                     bg-gradient-to-r from-electric-purple to-neon-cyan
                     shadow-[0_0_10px_rgba(147,51,234,0.7),0_0_20px_rgba(34,211,238,0.5)]"
          animate={{
            left: isEnglish ? "53%" : "3%",
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 25,
          }}
        />

        {/* Textos con efecto neón */}
        <div className="relative z-10 flex justify-between items-center w-full h-full px-4">
          <span
            className={`font-bold text-lg transition-all duration-300 ${
              !isEnglish
                ? "text-white drop-shadow-[0_0_6px_rgba(34,211,238,1)]"
                : "text-gray-400"
            }`}
          >
            ESP
          </span>
          <span
            className={`font-bold text-lg transition-all duration-300 ${
              isEnglish
                ? "text-white drop-shadow-[0_0_6px_rgba(147,51,234,1)]"
                : "text-gray-400"
            }`}
          >
            ENG
          </span>
        </div>
        
        {/* Efecto de brillo al pasar el ratón */}
        <motion.div 
          className="absolute inset-0 bg-neon-cyan opacity-0"
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.2 }}
        />
      </button>
    </div>
  );
}