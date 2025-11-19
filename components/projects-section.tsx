"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/useLanguage"
import translations from "@/public/language/i18n.json"


const projects = [
  { id: 1, key: "pharmazync", image: "/projects/PharmaSync.webp", link: "https://github.com/SantiagoArTyrs/PharmaSync.git" },
  { id: 2, key: "clock", image: "/modern-digital-clock-interface.jpg", link: "https://github.com/St-Alejo/Estructura.Datos.git" },
  { id: 3, key: "centers", image: "/education-platform-dashboard.png", link: "https://github.com/St-Alejo/centers-centro-de-peliculas.git" },
] as const

const certificates = [
  { 
    id: 1, 
    key: "html", 
    title: "HTML 5 Certified Developer", 
    issuer: "HOLA MUNDO.IO", 
    image: "/certificados/html.png", 
    link: "file:///C:/Users/Steven/Downloads/cert-html.pdf"
  },
  { 
    id: 2, 
    key: "css", 
    title: "CSS 3 Certification",
    issuer: "HOLA MUNDO.IO", 
    image: "/certificados/css3.png" 
  },
]


type ProjectKey = typeof projects[number]["key"]
type CertificateKey = typeof certificates[number]["key"]

type ProjectTranslationKey = `${ProjectKey}_title` | `${ProjectKey}_desc`
type CertificateTranslationKey = `${CertificateKey}_title`



export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"projects" | "certificates">("projects")
  const sectionRef = useRef<HTMLElement>(null)

  const { lang } = useLanguage()
  const t = translations[lang].projects

  /* Animaciones scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("animate-in", "fade-in", "zoom-in-50")),
      { threshold: 0.1 }
    )

    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [activeTab])

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">

      <div className="absolute inset-0 gradient-purple-blue blur-[160px] opacity-15 dark:opacity-25 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-300 dark:to-blue-300 bg-clip-text text-transparent">
            {t.title}
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl text-pretty mx-auto">
            {t.desc}
          </p>
        </div>

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
              {t.tab_projects}
            </button>

            <button
              onClick={() => setActiveTab("certificates")}
              className={`py-2 rounded-lg text-base transition-all ${
                activeTab === "certificates"
                  ? "bg-blue-600/20 text-blue-500 dark:text-blue-300 font-semibold"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {t.tab_certificates}
            </button>

          </div>
        </div>

        {activeTab === "projects" && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {projects.map((project, index) => (
                <div
                  key={project.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-on-scroll overflow-hidden bg-white/90 dark:bg-black/40 border border-gray-300 dark:border-purple-500/30 backdrop-blur-md rounded-xl hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img src={project.image} alt={project.key} className="w-full h-full object-cover" />
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-300 dark:to-blue-300 bg-clip-text text-transparent">
                      {t[`${project.key}_title` as ProjectTranslationKey]}
                    </h3>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {t[`${project.key}_desc` as ProjectTranslationKey]}
                    </p>
                  </div>

                  <div className="p-6 pt-0">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center 
                        border border-gray-300 dark:border-purple-500/40 
                        rounded-lg py-2 
                        hover:bg-purple-600/20 dark:hover:bg-purple-500/20 
                        hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] 
                        transition-all
                        text-gray-900 dark:text-white"
                    >
                      {t.view_more} <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}

            </div>
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-on-scroll overflow-hidden bg-white/90 dark:bg-black/40 border border-gray-300 dark:border-purple-500/30 backdrop-blur-md rounded-xl hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img src={cert.image} alt={cert.key} className="w-full h-full object-cover" />
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
