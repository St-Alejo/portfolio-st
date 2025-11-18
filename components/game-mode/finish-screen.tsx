"use client"

import { Trophy, RotateCcw, ExternalLink } from "lucide-react"
import { useGameStore } from "@/lib/game-store"

interface FinishScreenProps {
  onRestart: () => void
  onExit: () => void
}

export function FinishScreen({ onRestart, onExit }: FinishScreenProps) {
  const checkpointIndex = useGameStore((state) => state.checkpointIndex)
  const totalCheckpoints = 7

  const isComplete = checkpointIndex >= totalCheckpoints - 1

  if (!isComplete) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-500">
      <div className="text-center max-w-2xl mx-4 animate-in zoom-in-95 duration-500 delay-200">
        
        {/* ICON + TITLE */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Trophy className="w-16 h-16 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Congratulations!</h1>
          <p className="text-xl text-gray-300 mb-2">You've completed the portfolio race!</p>
          <p className="text-gray-400">
            You've explored all sections of Steven Ortega's portfolio through this unique racing experience.
          </p>
        </div>

        {/* SUMMARY BOX */}
        <div className="bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 mb-8">
          <h2 className="text-2xl font-bold gradient-text mb-4">Race Summary</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-purple-400">{totalCheckpoints}</p>
              <p className="text-sm text-gray-400">Zones Visited</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">100%</p>
              <p className="text-sm text-gray-400">Portfolio Explored</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-400">Complete</p>
              <p className="text-sm text-gray-400">Status</p>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="space-y-3 flex flex-col items-center">

          {/* FULL PORTFOLIO BUTTON */}
          <button
            onClick={onExit}
            className="
              w-full max-w-xs flex items-center justify-center gap-2 py-3
              rounded-lg font-medium text-white
              bg-purple-600 hover:bg-purple-700
              transition-all duration-300
              shadow-lg hover:shadow-purple-600/30
            "
          >
            <ExternalLink className="w-5 h-5" />
            View Full Portfolio
          </button>

          {/* RACE AGAIN BUTTON */}
          <button
            onClick={onRestart}
            className="
              w-full max-w-xs flex items-center justify-center gap-2 py-3
              rounded-lg font-medium
              border border-purple-500 text-purple-300
              bg-transparent hover:bg-purple-500/20
              transition-all duration-300
              shadow-md hover:shadow-purple-500/30
            "
          >
            <RotateCcw className="w-5 h-5" />
            Race Again
          </button>

        </div>
      </div>
    </div>
  )
}
