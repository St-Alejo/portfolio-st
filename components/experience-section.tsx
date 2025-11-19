"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/lib/useLanguage"
import translations from "@/public/language/i18n.json"

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { lang } = useLanguage()
  const t = translations[lang].experience

  const experiences = [
    {
      id: 1,
      role: t.exp1_role,
      duration: t.exp1_year,
      description: t.exp1_desc,
    },
    {
      id: 2,
      role: t.exp2_role,
      duration: t.exp2_year,
      description: t.exp2_desc,
    },
    {
      id: 3,
      role: t.exp3_role,
      duration: t.exp3_year,
      description: t.exp3_desc,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-left-4")
        }),
      { threshold: 0.1 }
    )

    sectionRef.current
      ?.querySelectorAll(".animate-on-scroll")
      ?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative">

      <div className="absolute inset-0 gradient-purple-blue blur-[140px] opacity-15 dark:opacity-25 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
            {t.title}
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            {t.desc}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              style={{ animationDelay: `${index * 150}ms` }}
              className="
                animate-on-scroll gradient-purple-blue p-0.5 rounded-xl
                hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]
                transition-all duration-300
              "
            >
              <div className="bg-white/90 dark:bg-black/40 backdrop-blur-md rounded-xl p-6 border border-gray-200 dark:border-purple-500/20 transition-all duration-300">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-300 dark:to-blue-300 bg-clip-text text-transparent">
                    {exp.role}
                  </h3>

                  <span className="text-sm font-mono text-gray-600 dark:text-gray-400">
                    
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
