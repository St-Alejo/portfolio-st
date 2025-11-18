"use client"

import type React from "react"

interface SectionBlendWrapperProps {
  children: React.ReactNode
  id?: string
  gradientFrom?: string
  gradientTo?: string
  className?: string
}

export function SectionBlendWrapper({
  children,
  id,
  gradientFrom = "from-transparent",
  gradientTo = "to-transparent",
  className = "",
}: SectionBlendWrapperProps) {
  return (
    <div id={id} className={`relative ${className}`}>
      {/* Top blend gradient - fades from previous section */}
      <div
        className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${gradientFrom} via-transparent to-transparent pointer-events-none z-10`}
        aria-hidden="true"
      />

      {/* Section content */}
      <div className="relative z-0">{children}</div>

      {/* Bottom blend gradient - fades into next section */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-transparent ${gradientTo} pointer-events-none z-10`}
        aria-hidden="true"
      />
    </div>
  )
}
