"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Gamepad2 } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import Link from "next/link"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 20)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Disable scroll when mobile menu opens
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset"
  }, [isMobileMenuOpen])

  if (!mounted) return null

  // 🔥 BUTTON VARIANTS (Tailwind Only)
  const btnBase =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300"

  const btnOutline =
    `${btnBase} border border-border bg-transparent hover:scale-105 px-3 py-2 text-sm neon-border`

  const btnGhost =
    `${btnBase} p-2 hover:bg-accent/10`

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="#home" className="text-xl font-bold gradient-text">
            STEVEN ORTEGA
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-neon-purple transition-colors duration-200"
              >
                {link.name.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">

            {/* GAME MODE BUTTON (desktop only) */}
            <Link href="/game" className="hidden lg:flex">
              <span className={`${btnOutline} neon-glow-purple gap-2`}>
                <Gamepad2 className="h-4 w-4" />
                GAME MODE
              </span>
            </Link>

            {/* THEME TOGGLE */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`${btnGhost} hover:neon-glow-purple`}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              className={`lg:hidden ${btnGhost}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />

          <div className="relative h-full overflow-y-auto">
            <div className="container mx-auto px-4 py-6 space-y-1">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 px-4 rounded-lg text-base font-medium text-foreground hover:text-neon-purple hover:bg-primary/10 transition-all duration-200"
                >
                  {link.name.toUpperCase()}
                </a>
              ))}

              {/* GAME MODE in Mobile Menu */}
              <Link href="/game">
                <div className="flex items-center gap-3 py-3 px-4 rounded-lg text-base font-medium text-neon-purple hover:text-neon-blue hover:bg-primary/10 transition-all duration-200">
                  <Gamepad2 className="h-5 w-5" />
                  GAME MODE
                </div>
              </Link>

            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
