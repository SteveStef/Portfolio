"use client"

import { useState } from "react"
import { AnimateOnScroll } from "./animate-on-scroll"

interface SkillBarProps {
  name: string
  level: number
  color?: string
  delay?: number
}

export function SkillBar({ name, level, color = "bg-primary", delay = 0 }: SkillBarProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimateOnScroll animation="opacity-100" delay={delay}>
      <div className="mb-4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="flex justify-between mb-1">
          <span className="font-medium">{name}</span>
          <span className={`text-sm transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
            {level}%
          </span>
        </div>
        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
          <div
            className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${level}%`, transitionDelay: `${delay}ms` }}
          ></div>
        </div>
      </div>
    </AnimateOnScroll>
  )
}

