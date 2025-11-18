"use client"

import { useGameStore } from "@/lib/game-store"
import { X, ExternalLink } from "lucide-react"
import { useEffect } from "react"

export function UIOverlay() {
  const isOverlayOpen = useGameStore((state) => state.isOverlayOpen)
  const overlayContent = useGameStore((state) => state.overlayContent)
  const setOverlay = useGameStore((state) => state.setOverlay)
  const setPaused = useGameStore((state) => state.setPaused)

  useEffect(() => {
    setPaused(isOverlayOpen)
  }, [isOverlayOpen, setPaused])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOverlayOpen) setOverlay(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOverlayOpen, setOverlay])

  if (!isOverlayOpen || !overlayContent) return null

  const sectionLinks: Record<string, string> = {
    hero: "#hero",
    about: "#about",
    projects: "#projects",
    certificates: "#certificates",
    testimonials: "#testimonials",
    experience: "#experience",
    contact: "#contact",
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative max-w-2xl w-full mx-4 p-8 bg-linear-to-br from-purple-900/95 to-blue-900/95 rounded-lg border-2 border-purple-500/50 neon-glow-purple animate-in zoom-in-95 duration-300">

        {/* Close button */}
        <button
          onClick={() => setOverlay(false)}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Text content */}
        <div className="mb-6">
          <div className="inline-block px-3 py-1 bg-purple-500/30 rounded-full text-sm text-purple-300 mb-3">
            Zone Checkpoint
          </div>
          <h2 className="text-4xl font-bold mb-4 gradient-text">{overlayContent.title}</h2>
          <p className="text-lg text-gray-200">{overlayContent.description}</p>
        </div>

        {/* ACTION BUTTONS — Tailwind reemplazando ShadCN */}
        <div className="flex flex-wrap gap-3">

          {/* Solid Button */}
          <button
            className="
              px-5 py-3 rounded-lg bg-purple-600 hover:bg-purple-700
              text-white font-semibold gap-2 flex items-center
              transition-all shadow-md
            "
            onClick={() => {
              const link = sectionLinks[overlayContent.zoneId]
              console.log("[v0] Navigate to:", link)
              setOverlay(false)
            }}
          >
            <ExternalLink className="w-4 h-4" />
            View Full Section
          </button>

          {/* Outline Button */}
          <button
            className="
              px-5 py-3 rounded-lg bg-transparent 
              border border-purple-500 text-purple-300
              hover:bg-purple-500/20 font-semibold transition-all
            "
            onClick={() => setOverlay(false)}
          >
            Continue Driving
          </button>

          {/* Ghost Button */}
          <button
            className="
              px-5 py-3 rounded-lg text-gray-400
              hover:text-white hover:bg-white/10
              transition-all font-medium
            "
            onClick={() => {
              setOverlay(false)
              window.dispatchEvent(new KeyboardEvent("keydown", { key: "r" }))
            }}
          >
            Restart from Beginning
          </button>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t border-purple-500/30">
          <p className="text-sm text-gray-400">
            Press <kbd className="kbd-purple">ESC</kbd> or{" "}
            <kbd className="kbd-purple">Space</kbd> to continue
          </p>
        </div>
      </div>
    </div>
  )
}
