"use client"

import { Github, Linkedin, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/useLanguage"
import translations from "@/public/language/i18n.json"

export function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang].footer

  return (
    <footer className="py-14 border-t border-gray-300 dark:border-purple-500/20 bg-white/80 dark:bg-black/40 backdrop-blur-xl transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">

          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-300 dark:to-blue-300 bg-clip-text text-transparent">
              Steven Ortega
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-md text-pretty mx-auto md:mx-0">
              {t.bio}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-300 dark:to-blue-300 bg-clip-text text-transparent mb-5">
              {t.social}
            </h3>

            <div className="flex gap-5">

              <a
                href="https://www.linkedin.com/in/steven-ortega-046874339/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/40 dark:bg-black/40 border border-gray-300/60 dark:border-purple-500/30 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_18px_rgba(139,92,246,0.7)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-purple-500 dark:text-purple-300" />
              </a>

              <a
                href="https://wa.me/573187993643"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/40 dark:bg-black/40 border border-gray-300/60 dark:border-purple-500/30 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_18px_rgba(59,130,246,0.7)]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6 text-blue-600 dark:text-cyan-300" />
              </a>

              <a
                href="https://github.com/St-Alejo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/40 dark:bg-black/40 border border-gray-300/60 dark:border-purple-500/30 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_18px_rgba(0,255,200,0.7)]"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-gray-900 dark:text-white" />
              </a>

            </div>
          </div>

        </div>

    
        <div className="text-center pt-6 border-t border-gray-300/60 dark:border-purple-500/20">
          <p className="text-sm text-gray-700 dark:text-gray-400">
            © {new Date().getFullYear()} — Steven Ortega. {t.rights}
          </p>
        </div>

      </div>
    </footer>
  )
}
