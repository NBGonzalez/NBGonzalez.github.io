"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function CVProjects() {
  const { t } = useTranslation();

  const projects = [
    {
      key: "fragmentsOfTime",
      image: "/images/FragmentsOfTime.png",
      technologies: ["Unity", "C#", "Blender", "Photoshop", "Substance Painter"],
      githubUrl: "https://github.com/NBGonzalez/Jam2025?tab=readme-ov-file",
      liveUrl: "https://criis-0924.itch.io/fragments-of-time",
      status: "Completed",
    },
    {
      key: "fallOff",
      image: "/images/FallOff.jpeg",
      technologies: ["Unity", "C#", "UnityCloud", "UnityAuthentication", "Photoshop"],
      githubUrl: "https://github.com/Chavid72/Aplicaciones",
      liveUrl: "https://github.com/Chavid72/Aplicaciones/blob/main/app-release.apk",
      status: "Completed",
    },
    {
      key: "theShopNextDoor",
      image: "/images/TheShopNextDoor.jpg",
      technologies: ["Unity", "C#", "Network For GameObjects", "Blender", "Substance Painter"],
      githubUrl: "https://github.com/Kioreco/The-Shop-Next-Door",
      liveUrl: "https://kioreco.itch.io/the-shop-next-door",
      status: "Completed",
    },
    {
      key: "decorDilema",
      image: "/images/DecorDilema.png",
      technologies: ["Unity", "C#", "Oculus Rift", "Blender"],
      githubUrl: "https://github.com/uapli/RV-DECOR-DILEMMA",
      liveUrl: "https://pablowht.itch.io/decor-dilemma",
      status: "Prototype",
    },
    {
      key: "arkanoid",
      image: "/images/Arkanoid.png",
      technologies: ["Visual Code", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/NBGonzalez/Arkanoid",
      liveUrl: "https://nbgonzalez.github.io/Arkanoid/",
      status: "Published",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-gaming-green text-black";
      case "Published":
        return "bg-neon-cyan text-black";
      case "In Development":
        return "bg-electric-purple text-white";
      case "Prototype":
        return "bg-yellow-500 text-black";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-space-blue to-dark-slate relative"
    >
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
            {t("projects.title")}{" "}
            <span className="text-gaming-green">{t("projects.highlight")}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gaming-green to-electric-purple mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-black/50 border-gray-700 hover:border-electric-purple/50 transition-all duration-300 overflow-hidden h-full">
                  {/* Imagen del proyecto */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={t(`projects.items.${project.key}.title`)}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30" />

                    <div className="absolute top-4 right-4 z-10">
                      <Badge
                        className={`${getStatusColor(
                          project.status
                        )} font-medium`}
                      >
                        {t(`projects.status.${project.status}`)}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-white group-hover:text-neon-cyan transition-colors">
                      {t(`projects.items.${project.key}.title`)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t(`projects.items.${project.key}.description`)}
                    </p>

                    {/* Tecnologías */}
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

                    {/* Botones */}
                    <div className="flex space-x-3 pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-electric-purple text-electric-purple hover:bg-electric-purple hover:text-white transition-all duration-300"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          {t("projects.buttons.code")}
                        </Button>
                      </a>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t("projects.buttons.demo")}
                        </Button>
                      </a>
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
