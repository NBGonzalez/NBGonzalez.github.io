"use client";

import "@/lib/i18n";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  courses: string[];
  gpa: string;
};

type CertificationItem = {
  title: string;
  issuer: string;
  year: string;
  status: string;
  file: string;
};

export default function CVEducation() {
  console.log("CVEducation component rendering");
  const { t } = useTranslation();
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  // Datos desde los JSON de i18n (con fallback a [])
  const education = (t("education.degrees", {
    returnObjects: true,
    defaultValue: [],
  }) as EducationItem[]) ?? [];

  const certifications = (t("education.certificationsList", {
    returnObjects: true,
    defaultValue: [],
  }) as CertificationItem[]) ?? [];

  // Utilidades para pintar estados en ambos idiomas
  const isCurrent = (status: string) => /current|curso/i.test(status);
  const isCompleted = (status: string) => /completed|completado/i.test(status);

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-dark-slate to-black relative">
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
            {t("education.title.part1")}{" "}
            <span className="text-electric-purple">{t("education.title.part2")}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-purple to-gaming-green mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Education Timeline */}
          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.degree}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-space-blue/30 border-electric-purple/20 hover:border-electric-purple/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-electric-purple to-neon-cyan rounded-lg flex items-center justify-center">
                          <GraduationCap className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-bold text-white">
                            {edu.degree}
                          </h3>
                          <Badge 
                            className={`${isCurrent(edu.status) ? "bg-gaming-green text-black" : "bg-neon-cyan text-black"} w-fit`}
                          >
                            {edu.status}
                          </Badge>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center text-gray-300 mb-3 gap-2 md:gap-4">
                          <div className="flex items-center">
                            <GraduationCap className="w-4 h-4 mr-2 text-electric-purple" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-neon-cyan" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-gaming-green" />
                            <span>{edu.period}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {edu.description}
                        </p>

                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-white mb-2">
                              {t("education.keyCourses")}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.courses.map((course, i) => (
                                <Badge 
                                  key={`${course}-${i}`}
                                  variant="outline" 
                                  className="text-xs border-gray-600 text-gray-400"
                                >
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <Award className="w-4 h-4 mr-2 text-gaming-green" />
                            <span className="text-gaming-green font-semibold">
                              {t("education.gpa")}: {edu.gpa}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {t("education.certifications")}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={`${cert.title}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedCert(cert.file)}
                  className="cursor-pointer"
                >
                  <Card className="bg-black/50 border-gray-700 hover:border-neon-cyan/50 transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <Award className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">
                        {cert.issuer}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-xs">{cert.year}</span>
                        <Badge 
                          className={`${isCompleted(cert.status) ? "bg-gaming-green text-black" : "bg-electric-purple text-white"} text-xs`}
                        >
                          {cert.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal visor de certificados */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-4xl h-[90vh] bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <button
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
              onClick={() => setSelectedCert(null)}
            >
              {t("ui.close")}
            </button>
            <iframe
              src={`/Certificates/${selectedCert}`}
              title="Certificate Viewer"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
