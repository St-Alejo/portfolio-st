"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/lib/useLanguage"
import translations from "@/public/language/i18n.json"

const testimonials = [
  {
    id: 1,
    key: "v1",
    image: "/Valentina.png",
  },
  {
    id: 2,
    key: "v2",
    image: "/JoseB.webp",
  },
  {
    id: 3,
    key: "v3",
    image: "/Arevalo.jpg",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // lenguaje dinámico
  const { lang } = useLanguage()
  const t = translations[lang].testimonials

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4")
        }),
      { threshold: 0.1 }
    )

    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach((el) =>
      observer.observe(el)
    )
    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 gradient-purple-blue blur-[150px] opacity-15 dark:opacity-25 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-300 dark:to-purple-300 bg-clip-text text-transparent">
            {t.title}
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto text-pretty">
            {t.desc}
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className="animate-on-scroll gradient-purple-blue p-0.5 rounded-xl hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/90 dark:bg-black/40 backdrop-blur-md rounded-xl p-6 h-full border border-gray-300 dark:border-purple-500/20">

                {/* CONTENT */}
                <div className="space-y-6">

                  {/* Title + Role */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-300 dark:to-blue-300 bg-clip-text text-transparent">
                      {t[item.key + "_name" as keyof typeof t]}
                    </h3>

                    <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                      {t[item.key + "_role" as keyof typeof t]}
                    </p>
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t[item.key + "_text" as keyof typeof t]}
                  </p>

                  {/* Avatar */}
                  <div className="flex justify-center pt-4">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-purple-500 dark:border-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                      <img
                        src={item.image}
                        alt={t[item.key + "_name" as keyof typeof t]}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
