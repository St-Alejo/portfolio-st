"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, Gamepad2 } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <nav className="
      fixed top-0 left-0 right-0 z-100
      backdrop-blur-xl
      bg-white/40 dark:bg-black/40
      border-b border-gray-300/40 dark:border-purple-500/20
      transition-all duration-300
    ">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link 
          href="#hero"
          className="
            text-xl font-bold tracking-wide
            bg-linear-to-r from-blue-500 to-purple-500 
            dark:from-blue-400 dark:to-purple-300
            bg-clip-text text-transparent
          "
        >
          STEVEN ORTEGA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavItem name="HOME" href="#hero" />
          <NavItem name="ABOUT ME" href="#about" />
          <NavItem name="PROJECTS" href="#projects" />
          <NavItem name="TESTIMONIALS" href="#testimonials" />
          <NavItem name="EXPERIENCE" href="#experience" />
          <NavItem name="CONTACT" href="#contact" />

          {/* Game Mode */}
          <button
            className="
              px-3 py-1 rounded-lg flex items-center gap-2
              bg-linear-to-r from-purple-600 to-blue-600
              hover:scale-105 transition-all duration-300
              text-white shadow-lg shadow-purple-500/20
            "
          >
            <Gamepad2 className="w-4 h-4" />
            Game Mode
          </button>

          {/* Dark / Light */}
          <button
            onClick={toggleTheme}
            className="
              p-2 rounded-xl border 
              border-black/20 bg-white/50
              dark:border-purple-500/30 dark:bg-black/50
              hover:bg-white/80 dark:hover:bg-black/70
              backdrop-blur-sm transition-all duration-300
            "
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-white/30 dark:bg-black/30 backdrop-blur"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="
          md:hidden flex flex-col gap-4 px-6 py-5 
          bg-white/90 dark:bg-black/90
          backdrop-blur-xl border-t
          border-gray-300/40 dark:border-purple-500/20
        ">
          <NavItemMobile name="HOME" href="#hero" setIsOpen={setIsOpen} />
          <NavItemMobile name="ABOUT ME" href="#about" setIsOpen={setIsOpen} />
          <NavItemMobile name="PROJECTS" href="#projects" setIsOpen={setIsOpen} />
          <NavItemMobile name="TESTIMONIALS" href="#testimonials" setIsOpen={setIsOpen} />
          <NavItemMobile name="EXPERIENCE" href="#experience" setIsOpen={setIsOpen} />
          <NavItemMobile name="CONTACT" href="#contact" setIsOpen={setIsOpen} />

          {/* Game Mode */}
          <button
            className="
              px-3 py-2 rounded-lg flex items-center gap-2 mt-2
              bg-linear-to-r from-purple-600 to-blue-600
              text-white shadow-md shadow-purple-500/30
            "
          >
            <Gamepad2 className="w-4 h-4" />
            Game Mode
          </button>

          {/* Dark / Light */}
          <button
            onClick={toggleTheme}
            className="
              p-2 rounded-xl border mt-2
              border-black/20 bg-white/50
              dark:border-purple-500/30 dark:bg-black/50
              hover:bg-white/70 dark:hover:bg-black/70
              backdrop-blur-sm transition-all duration-300
            "
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>
      )}
    </nav>
  )
}

/* COMPONENTS */

function NavItem({ name, href }: { name: string; href: string }) {
  return (
    <Link
      href={href}
      className="
        hover:text-purple-500 dark:hover:text-purple-400
        transition-colors duration-200
      "
    >
      {name}
    </Link>
  )
}

function NavItemMobile({
  name,
  href,
  setIsOpen,
}: {
  name: string
  href: string
  setIsOpen: (v: boolean) => void
}) {
  return (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className="
        py-2 border-b border-gray-300/30 dark:border-purple-500/20
        hover:text-purple-500 dark:hover:text-purple-400
        transition-all
      "
    >
      {name}
    </Link>
  )
}
