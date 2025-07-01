"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function CVContact() {
  console.log("CVContact component rendering");
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log("Form input changed:", e.target.name, e.target.value);
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Here you would typically send the form data to a server
    alert("Message sent! (This is a demo)");
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tu.email@ejemplo.com",
      link: "mailto:tu.email@ejemplo.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+34 XXX XXX XXX",
      link: "tel:+34XXXXXXXXX"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Madrid, Spain",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "#",
      color: "text-gray-400 hover:text-white"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      url: "#",
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "#",
      color: "text-sky-400 hover:text-sky-300"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-space-blue relative">
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
            Get In <span className="text-neon-cyan">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-electric-purple mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Ready to collaborate on your next gaming project? Let's connect and create something amazing together!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-space-blue/30 border-electric-purple/20 hover:border-electric-purple/50 transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-electric-purple to-neon-cyan rounded-lg flex items-center justify-center">
                              <info.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm">{info.label}</p>
                              <a 
                                href={info.link}
                                className="text-white hover:text-neon-cyan transition-colors"
                                onClick={() => console.log(`${info.label} clicked:`, info.value)}
                              >
                                {info.value}
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center ${social.color} transition-all duration-300`}
                      onClick={() => console.log(`${social.label} clicked`)}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border-electric-purple/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Send a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-neon-cyan"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-neon-cyan"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-neon-cyan resize-none"
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-electric-purple to-neon-cyan hover:from-electric-purple/80 hover:to-neon-cyan/80 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400">
            © 2024 Tu Nombre. Built with passion for game development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}