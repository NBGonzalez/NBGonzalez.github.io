"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CVEducation() {
  console.log("CVEducation component rendering");

  const education = [
    {
      degree: "Bachelor's in Game Design & Development",
      institution: "Universidad Rey Juan Carlos",
      location: "Madrid, Spain",
      period: "2022 - Present",
      status: "Current",
      description: "Comprehensive program covering game design principles, programming, 3D modeling, animation, and project management. Focus on both technical implementation and creative design processes.",
      courses: [
        "Game Programming",
        "3D Graphics & Animation", 
        "Game Design Theory",
        "AI for Games",
        "UI/UX Design",
        "Project Management"
      ],
      gpa: "8.5/10"
    },
    {
      degree: "High School Diploma - Technology Track",
      institution: "Instituto Tecnológico",
      location: "Madrid, Spain", 
      period: "2020 - 2022",
      status: "Completed",
      description: "Specialized in technology and computer science with focus on programming fundamentals and digital design.",
      courses: [
        "Programming Fundamentals",
        "Digital Design",
        "Mathematics",
        "Physics",
        "Technical Drawing"
      ],
      gpa: "9.2/10"
    }
  ];

  const certifications = [
    {
      title: "Unity Certified Programmer",
      issuer: "Unity Technologies",
      year: "2024",
      status: "In Progress"
    },
    {
      title: "Game Development Fundamentals",
      issuer: "Coursera",
      year: "2023",
      status: "Completed"
    },
    {
      title: "3D Modeling with Blender",
      issuer: "Udemy",
      year: "2023", 
      status: "Completed"
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
    </section>
  );
}