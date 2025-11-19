"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

import translations from "@/public/language/i18n.json"
import { useLanguage } from "@/lib/useLanguage"

const skills = [
  { id: "skill_html" as const, icon: "/iconos/html-5.png" },
  { id: "skill_css" as const, icon: "/iconos/css-3.png" },
  { id: "skill_js" as const, icon: "/iconos/js.png" },
  { id: "skill_react" as const, icon: "/iconos/react.png" },
  { id: "skill_node" as const, icon: "/iconos/programacion.png" },
  { id: "skill_ts" as const, icon: "/iconos/types.png" },
  { id: "skill_python" as const, icon: "/iconos/piton.png" },
  { id: "skill_spring" as const, icon: "/iconos/springboot.png" },
  { id: "skill_mongo" as const, icon: "/iconos/mongodb.png" },
  { id: "skill_postgres" as const, icon: "/iconos/postgres.png" },
  { id: "skill_docker" as const, icon: "/iconos/docker.png" },
  { id: "skill_git" as const, icon: "/iconos/git.png" }
]
function CardBase({ className = "", children, style }: any) {
  return (
    <div
      className={`rounded-lg border border-gray-300 dark:border-purple-500/20 bg-white/10 dark:bg-black/20 
      backdrop-blur-md shadow-sm text-gray-800 dark:text-gray-300 ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { lang } = useLanguage()
  const t = translations[lang].about

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

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">

      {/* Aura interna */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute inset-0 gradient-purple-blue blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* TÍTULO */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-500 to-purple-500 
          dark:from-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
            {t.title}
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto text-pretty">
            {t.p1}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div className="space-y-10 animate-on-scroll">

            {/* About me */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-linear-to-r from-purple-500 to-blue-500 
              dark:from-purple-300 dark:to-blue-300 bg-clip-text text-transparent">
                {t.subtitle}
              </h3>

              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t.txt1}</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t.txt2}</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t.txt3}</p>
              </div>
            </div>

            {/* Hobbies */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-linear-to-r from-purple-500 to-blue-500 
              dark:from-purple-300 dark:to-blue-300 bg-clip-text text-transparent">
                {t.hobbiesTitle}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.hobbiesText}
              </p>
            </div>

          </div>

          {/* RIGHT - Skills */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold bg-linear-to-r from-purple-500 to-blue-500 
            dark:from-purple-300 dark:to-blue-300 bg-clip-text text-transparent mb-6">
              {t.skills}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <CardBase
                  key={skill.id}
                  className="p-4 text-center hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] 
                  transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative w-12 h-12 mx-auto mb-2">
                    <Image src={skill.icon} alt="skill icon" fill className="object-contain" />
                  </div>
                  <p className="font-medium text-sm text-gray-800 dark:text-gray-200">
                    {t[skill.id]}
                  </p>
                </CardBase>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
