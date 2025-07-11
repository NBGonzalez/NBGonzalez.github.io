"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CVEducation() {
  console.log("CVEducation component rendering");

const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const education = [
    {
      degree: "Bachelor's in Videogame Development & Design",
      institution: "Universidad Rey Juan Carlos",
      location: "Madrid, Spain",
      period: "2021 - Present",
      status: "Current",
      description: "Comprehensive program covering game design principles, programming, 3D modeling, animation, and project management. Focus on both technical implementation and creative design processes.",
      courses: [
        "Game Programming",
        "Multiplayers Environments",
        "3D Graphics & Animation", 
        "Algorithms",
        "Game Design Theory",
        "AI for Games",
        "UI/UX Design",
        "Project Management",
        "VR/AR Fundamentals"
      ],
      gpa: "7.39/10"
    },
    {
      degree: "Advanced Vocational Training - 3D Animation, Games & Interactive Environments",
      institution: "Universidad Europea",
      location: "Madrid, Spain", 
      period: "2018 - 2020",
      status: "Completed",
      description: "Specialized program focusing on digital content creation for games and interactive media. Developed comprehensive skills across the 3D production pipeline and digital art tools.",
      courses: [
        "3D Modeling",
        "Digital Design",
        "Texturing & Materials",
        "Game Development Basics",
        "2D & 3D Animations",
        "Digital Content Creation"
      ],
      gpa: "8.67/10"
    }
  ];

  const certifications = [
    {
      title: "Substance Painter & Designer",
      issuer: "Udemy",
      year: "2025",
      status: "In Progress",
      file: ""
    },
    {
      title: "Competitive Programming Certificate",
      issuer: "Isaac Lozano Osorio",
      year: "2025",
      status: "Completed",
      file: "competitive-programming-certificate.pdf"
    },
    {
      title: "Game Development & VR with Unity Certification",
      issuer: "Centro de Formación Municipal de Móstoles",
      year: "2021", 
      status: "Completed",
      file: "DESARROLLODEVIDEOJUEGOSYREALIADVIRTUALCONUNITY3D.pdf"
    }
  ];

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
            Education & <span className="text-electric-purple">Learning</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-purple to-gaming-green mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Education Timeline */}
          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
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
                            className={`${
                              edu.status === 'Current' 
                                ? 'bg-gaming-green text-black' 
                                : 'bg-neon-cyan text-black'
                            } w-fit`}
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
                            <h4 className="text-sm font-semibold text-white mb-2">Key Courses:</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.courses.map((course) => (
                                <Badge 
                                  key={course}
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
                            <span className="text-gaming-green font-semibold">GPA: {edu.gpa}</span>
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
              Certifications & Courses
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
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
                          className={`${
                            cert.status === 'Completed' 
                              ? 'bg-gaming-green text-black' 
                              : 'bg-electric-purple text-white'
                          } text-xs`}
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
      {selectedCert && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
    <div className="relative w-full max-w-4xl h-[90vh] bg-gray-900 rounded-xl shadow-lg overflow-hidden">
      <button
        className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
        onClick={() => setSelectedCert(null)}
      >
        Close
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