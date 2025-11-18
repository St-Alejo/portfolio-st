"use client"

import { useEffect, useRef } from "react"

const experiences = [
  {
    id: 1,
    role: "Freelance Developer",
    duration: "2023 — Present",
    description: "Creation of web and mobile applications for national and international clients.",
  },
  {
    id: 2,
    role: "University CodeMentor",
    duration: "2023 — Present",
    description: "Creation of web and mobile applications for national and international clients.",
  },
  {
    id: 3,
    role: "Research Assistant — University X",
    duration: "2022 — 2023",
    description: "Collaboration on artificial intelligence projects applied to process optimization.",
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-left-4")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-neon-blue">EXPERI</span>
            <span className="text-neon-cyan">ENCE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Here you will find a summary of my professional experience, highlighting the roles, skills, and projects
            that have shaped my journey as a creator and developer.
          </p>
        </div>

        {/* EXPERIENCE CARDS */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            
            <div
              key={exp.id}
              style={{ animationDelay: `${index * 150}ms` }}
              className="
                animate-on-scroll 
                gradient-purple-blue p-0.5 rounded-xl
                hover:scale-[1.02] hover:neon-glow-blue
                transition-all duration-300
              "
            >
              <div className="bg-card rounded-xl p-6">
                
                {/* HEADER */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h3 className="text-xl font-semibold gradient-text">{exp.role}</h3>
                  <span className="text-sm font-mono text-muted-foreground">{exp.duration}</span>
                </div>

                {/* CONTENT */}
                <p className="text-muted-foreground leading-relaxed">
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
