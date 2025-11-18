"use client"

import { Play, Info } from "lucide-react"
import { useState } from "react"

interface StartMenuProps {
  onStart: () => void
}

export function StartMenu({ onStart }: StartMenuProps) {
  const [showInstructions, setShowInstructions] = useState(false)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-black via-purple-950/20 to-black">
      <div className="absolute inset-0 bg-[url('/abstract-racing-track-neon.jpg')] opacity-10 bg-cover bg-center"></div>

      <div className="relative text-center max-w-2xl mx-4">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 gradient-text animate-in fade-in slide-in-from-bottom-4 duration-700">
            Portfolio Race
          </h1>
          <p className="text-xl text-gray-300 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Drive through Steven Ortega's portfolio
          </p>
        </div>

        {/* MAIN MENU */}
        {!showInstructions ? (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">

            {/* Start Button */}
            <button
              className="
                w-full max-w-xs py-6 text-lg
                bg-purple-600 hover:bg-purple-700
                text-white font-semibold 
                rounded-lg gap-2 flex items-center justify-center
                neon-glow-purple transition-all
              "
              onClick={onStart}
            >
              <Play className="w-5 h-5" />
              Start Race
            </button>

            {/* How to Play Button */}
            <button
              className="
                w-full max-w-xs py-6 text-lg
                border border-purple-500 text-purple-300
                hover:bg-purple-500/20 
                rounded-lg flex items-center justify-center gap-2
                bg-transparent transition-all
              "
              onClick={() => setShowInstructions(true)}
            >
              <Info className="w-5 h-5" />
              How to Play
            </button>

            {/* Footer */}
            <div className="mt-8 pt-8 border-t border-purple-500/30">
              <p className="text-sm text-gray-400">
                Experience the portfolio in a unique way - race through different sections and discover projects,
                skills, and achievements
              </p>
            </div>
          </div>
        ) : (
          /* INSTRUCTIONS MENU */
          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-purple-500/30 animate-in fade-in zoom-in-95 duration-300">
            <h2 className="text-2xl font-bold gradient-text mb-6">How to Play</h2>

            <div className="text-left space-y-4 text-gray-300">

              {/* Controls */}
              <div>
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Controls</h3>
                <ul className="space-y-2 text-sm">
                  <li><kbd className="kbd-purple">W / ↑</kbd> - Accelerate</li>
                  <li><kbd className="kbd-purple">S / ↓</kbd> - Brake / Reverse</li>
                  <li><kbd className="kbd-purple">A / ←</kbd> - Steer Left</li>
                  <li><kbd className="kbd-purple">D / →</kbd> - Steer Right</li>
                  <li><kbd className="kbd-purple">Space</kbd> - Handbrake</li>
                  <li><kbd className="kbd-purple">R</kbd> - Respawn</li>
                  <li><kbd className="kbd-purple">C</kbd> - Change Camera</li>
                  <li><kbd className="kbd-purple">M</kbd> - Toggle Minimap</li>
                </ul>
              </div>

              {/* Objective */}
              <div>
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Objective</h3>
                <p className="text-sm">
                  Drive through each zone to discover different sections of the portfolio. Each checkpoint reveals
                  information about projects, skills, experience, and more.
                </p>
              </div>

              {/* Mobile */}
              <div>
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Mobile Controls</h3>
                <p className="text-sm">Use the on-screen joystick and buttons to drive.</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              {/* Start */}
              <button
                className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all"
                onClick={onStart}
              >
                Start Race
              </button>

              {/* Back */}
              <button
                className="flex-1 py-3 border border-purple-500 bg-transparent rounded-lg text-purple-300 hover:bg-purple-500/20 transition-all"
                onClick={() => setShowInstructions(false)}
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
