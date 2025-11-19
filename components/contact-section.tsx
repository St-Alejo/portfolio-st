"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/lib/useLanguage"
import translations from "@/public/language/i18n.json"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const sectionRef = useRef<HTMLElement>(null)
  const { lang } = useLanguage()
  const t = translations[lang].contact

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("animate-in", "fade-in", "zoom-in-50")
      })
    }, { threshold: 0.1 })

    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formDataToSend = new FormData()
    formDataToSend.append("access_key", "5bb6b96d-0ba8-46f8-9101-d7ff0f552d3c")
    formDataToSend.append("name", formData.name)
    formDataToSend.append("email", formData.email)
    formDataToSend.append("message", formData.message)
    formDataToSend.append("subject", "Nuevo mensaje desde tu portafolio")
    formDataToSend.append("from_name", formData.name)
    formDataToSend.append("redirect", "https://web3forms.com/success")

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formDataToSend })
      const data = await response.json()

      if (data.success) {
        setSubmitMessage("¡Mensaje enviado exitosamente!")
        setFormData({ name: "", email: "", message: "" })
      } else setSubmitMessage("Error al enviar el mensaje. Intenta nuevamente.")
    } catch {
      setSubmitMessage("Error al enviar el mensaje. Intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 gradient-purple-blue blur-[130px] opacity-15 dark:opacity-25 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 dark:from-purple-300 dark:to-cyan-300 bg-clip-text text-transparent">
            CONTACT
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
          </p>
        </div>

        {/* Card Container */}
        <div className="max-w-2xl mx-auto animate-on-scroll gradient-purple-blue p-0.5 rounded-xl shadow-xl dark:shadow-purple-500/30">

          <div className="bg-white/90 dark:bg-black/40 backdrop-blur-md rounded-xl p-8 border border-gray-200 dark:border-purple-500/20">

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-900 dark:text-white font-medium">Name</label>
                <input 
                  id="name" type="text" placeholder="Enter your name" required
                  value={formData.name} 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-purple-500/30 bg-white/50 dark:bg-black/40
                   text-gray-900 dark:text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-900 dark:text-white font-medium">Email</label>
                <input 
                  id="email" type="email" placeholder="Enter your email" required
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-purple-500/30 bg-white/50 dark:bg-black/40 text-gray-900
                   dark:text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-900 dark:text-white font-medium">Message</label>
                <textarea 
                  id="message" placeholder="Enter your message" required
                  value={formData.message} 
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-purple-500/30 bg-white/50 dark:bg-black/40 text-gray-900
                   dark:text-white backdrop-blur-sm min-h-[150px] focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
              </div>

              {/* Button */}
              <button type="submit" disabled={isSubmitting} className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg dark:shadow-purple-500/20">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Response Text */}
              {submitMessage && (
                <p className={`text-center text-sm ${submitMessage.includes("exitosamente") ? "text-green-500" : "text-red-500"}`}>
                  {submitMessage}
                </p>
              )}

            </form>

          </div>
        </div>
      </div>
    </section>
  )
}
