"use client"

import { Github, Linkedin, MessageCircle, FileText, Briefcase } from "lucide-react"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/useLanguage"
import translations from "@/public/language/i18n.json"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Idioma actual
  const { lang } = useLanguage()
  const t = translations[lang].hero

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4")
        }),
      { threshold: 0.1 }
    )

    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const buttonBase =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 px-6 py-3 text-lg"

  const buttonOutline = `
    ${buttonBase}
    border bg-transparent hover:scale-105
    border-gray-900/30 text-gray-900
    dark:border-purple-400/30 dark:text-gray-200
  `

  const buttonGradient = `
    ${buttonBase}
    gradient-purple-blue text-white hover:scale-105
    shadow-lg shadow-purple-500/20
    dark:shadow-purple-500/40
  `

  return (
    <section
      id="home"
      ref={sectionRef}
      className="
        min-h-screen flex items-center justify-center relative overflow-hidden pt-24
        transition-colors duration-500
      "
    >
      <div
        className="
          absolute inset-0 gradient-purple-blue blur-[120px] opacity-20 dark:opacity-30 pointer-events-none
        "
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8 animate-on-scroll">

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                {t.hi}{" "}
                <span className="gradient-text dark:from-purple-300 dark:to-blue-300">
                  {t.name}
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed text-pretty">
                {t.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/steven-ortega-046874339/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonOutline} neon-glow-purple`}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                {t.linkedin}
              </a>

              <a
                href="https://github.com/St-Alejo"
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonOutline} neon-glow-blue`}
              >
                <Github className="mr-2 h-5 w-5" />
                {t.github}
              </a>

              <a
                href="https://wa.me/573187993643"
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonOutline} neon-glow-cyan`}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.whatsapp}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className={`${buttonGradient} neon-glow-purple`}>
                <Briefcase className="mr-2 h-5 w-5" />
                {t.btnProjects}
              </a>

              <a
                href="/cv/CV_Steven.pdf"
                download
                className={`${buttonOutline} hover:scale-105`}
              >
                <FileText className="mr-2 h-5 w-5" />
                {t.btnCV}
              </a>
            </div>

          </div>

          <div className="animate-on-scroll flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">

              <div
                className="
                  absolute inset-0 gradient-purple-blue rounded-full blur-3xl opacity-25
                  dark:opacity-35 dark:blur-[110px]
                "
              />

              <img
                src="R.jpeg"
                alt="Steven Ortega"
                className="
                  relative z-10 w-full h-full object-cover rounded-2xl
                  shadow-xl
                  neon-glow-purple
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
