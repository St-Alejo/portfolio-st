"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink } from 'lucide-react'
import { link } from "fs"

const projects = [
  {
    id: 1,
    title: "Pharmazync",
    description: "An AI-powered pharmaceutical chatbot, developed using automated workflows in n8n. It handles inquiries about drugs, stock, interactions, general recommendations, and referral to human staff, integrating APIs, validations, and custom logic to provide accurate and fast responses.",
    image: "/projects/PharmaSync.webp",
    link: "https://github.com/SantiagoArTyrs/PharmaSync.git",
  },
  {
    id: 2,
    title: "Clock App",
    description: "An advanced clock programmed in Python that manages multiple time zones using date and time libraries. It allows you to check international times, adjust specific regions, and run additional functions such as time conversion, custom formats, and automated utilities.",
    image: "/modern-digital-clock-interface.jpg",
    link: "https://github.com/St-Alejo/Estructura.Datos.git",
  },
  {
    id: 3,
    title: "Centers Platform",
    description: "Streaming platform-like interface made in JavaScript, with smooth navigation, dynamic catalog, and design inspired by modern services like Netflix.",
    image: "/education-platform-dashboard.png",
    link: "https://github.com/St-Alejo/centers-centro-de-peliculas.git",
  },
]

const certificates = [
  { id: 1, title: "HTML 5 Certified Developer", issuer: "HOLA MUNDO.IO", image: "/certificados/html.png", link: "file:///C:/Users/Steven/AppData/Local/Microsoft/Windows/INetCache/IE/599NL0E5/Steven%20Alejandro%20Ortega%20Riascos%20-%202025-06-05[1].pdf" },
  { id: 2, title: "CSS 3 Certification", issuer: "HOLA MUNDO.IO", image: "/certificados/css3.png" },

]

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("projects")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("animate-in", "fade-in", "zoom-in-50")
      })
    }, { threshold: 0.1 })

    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [activeTab])

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      
      {/* Background Glow */}
      <div className="absolute inset-0 gradient-purple-blue blur-[160px] opacity-15 dark:opacity-25 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-300 dark:to-blue-300 bg-clip-text text-transparent">
            PROJECTS
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl text-pretty mx-auto">
            Here you will find some of the personal and clients projects that I created, 
            with each project containing its own case study and detailed explanation.
          </p>
        </div>

        {/* CUSTOM TABS */}
        <div className="w-full flex justify-center mb-12">
          <div className="grid grid-cols-2 w-full max-w-md p-1 rounded-xl bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-gray-300/50 dark:border-purple-500/20">

            <button
              onClick={() => setActiveTab("projects")}
              className={`py-2 rounded-lg text-base transition-all ${
                activeTab === "projects"
                  ? "bg-purple-600/20 text-purple-500 dark:text-purple-300 font-semibold"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              PROJECTS
            </button>

            <button
              onClick={() => setActiveTab("certificates")}
              className={`py-2 rounded-lg text-base transition-all ${
                activeTab === "certificates"
                  ? "bg-blue-600/20 text-blue-500 dark:text-blue-300 font-semibold"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              CERTIFICATES
            </button>

          </div>
        </div>

        {/* PROJECTS GRID */}
        {activeTab === "projects" && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                
                <div 
                  key={project.id}
                  className="animate-on-scroll overflow-hidden bg-white/90 dark:bg-black/40 border border-gray-300 dark:border-purple-500/30 backdrop-blur-md rounded-xl hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-300 dark:to-blue-300 bg-clip-text text-transparent">
                      {project.title}
                    </h3>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="p-6 pt-0">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center border border-gray-300 dark:border-purple-500/40 rounded-lg py-2 hover:bg-purple-600/20 dark:hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all"
                    >
                      View More <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>

                </div>

              ))}
            </div>
          </div>
        )}

        {/* CERTIFICATES GRID */}
        {activeTab === "certificates" && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                
                <div 
                  key={cert.id}
                  className="animate-on-scroll overflow-hidden bg-white/90 dark:bg-black/40 border border-gray-300 dark:border-purple-500/30 backdrop-blur-md rounded-xl hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img src={cert.image || "/placeholder.svg"} alt={cert.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
                      {cert.title}
                    </h3>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {cert.issuer}
                    </p>
                  </div>

                </div>

              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
