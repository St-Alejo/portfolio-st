"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const skills = [
  { name: "HTML", icon: "/iconos/html-5.png" },
  { name: "CSS", icon: "/iconos/css-3.png" },
  { name: "JavaScript", icon: "/iconos/js.png" },
  { name: "React", icon: "/iconos/react.png" },
  { name: "Node.js", icon: "/iconos/programacion.png" },
  { name: "TypeScript", icon: "/iconos/types.png" },
  { name: "Python", icon: "/iconos/piton.png" },
  { name: "Spring Boot", icon: "/iconos/springboot.png" },
  { name: "MongoDB", icon: "/iconos/mongodb.png" },
  { name: "PostgreSQL", icon: "/iconos/postgres.png" },
  { name: "Docker", icon: "/iconos/docker.png" },
  { name: "Git", icon: "/iconos/git.png" },
]

function CardBase({
  className = "",
  children,
  style,
}: {
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}) {
  return (
    <div
      className={`rounded-lg border border-gray-300 dark:border-purple-500/20 bg-white/10 dark:bg-black/20 backdrop-blur-md shadow-sm text-gray-800 dark:text-gray-300 ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4")),
      { threshold: 0.1 }
    )

    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">

      {/* Suave aura interna — NO fondo de sección */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-40">
        <div className="absolute inset-0 gradient-purple-blue blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-500 to-purple-500 dark:from-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
            ABOUT <span className="text-transparent">ME</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto text-pretty">
            Here you will find more information about me, what I do, and the skills I’ve developed over time while working with modern technologies and real-world projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT TEXT */}
          <div className="space-y-6 animate-on-scroll">
            <h3 className="text-2xl font-bold bg-linear-to-r from-purple-500 to-blue-500 dark:from-purple-300 dark:to-blue-300 bg-clip-text text-transparent">
              Get to know me!
            </h3>

            <div className="space-y-4">

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a <strong className="text-gray-900 dark:text-white">Frontend Focused Web Developer</strong> building modern interfaces, interactive experiences, and high-quality web applications.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I enjoy sharing everything I’ve learned during my journey in{" "}
                <strong className="text-gray-900 dark:text-white">Web Development</strong> to help others in the Dev Community.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm open to <strong className="text-gray-900 dark:text-white">job opportunities</strong> where I can contribute, grow, and make meaningful impact. Feel free to reach out!
              </p>

            </div>
          </div>

          {/* RIGHT: SKILLS */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold bg-linear-to-r from-purple-500 to-blue-500 dark:from-purple-300 dark:to-blue-300 bg-clip-text text-transparent mb-6">
              My Skills
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <CardBase
                  key={skill.name}
                  className="p-4 text-center hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative w-12 h-12 mx-auto mb-2">
                    <Image src={skill.icon} alt={`${skill.name} icon`} fill className="object-contain" />
                  </div>

                  <p className="font-medium text-sm text-gray-800 dark:text-gray-200">{skill.name}</p>
                </CardBase>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
