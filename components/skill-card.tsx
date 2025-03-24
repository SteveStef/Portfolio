"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { AnimateOnScroll } from "./animate-on-scroll"

interface SkillCardProps {
  name: string
  icon?: React.ReactNode
  delay?: number
}

export function SkillCard({ name, icon, delay = 0 }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimateOnScroll animation="opacity-100 translate-y-0" delay={delay} className="translate-y-4">
      <Card
        className={`p-4 flex items-center gap-3 transition-all duration-300 ${
          isHovered ? "shadow-lg border-primary/50 scale-105" : "shadow-sm"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {icon && (
          <div
            className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 ${
              isHovered ? "bg-primary/20" : ""
            }`}
          >
            {icon}
          </div>
        )}
        <span className="font-medium">{name}</span>
      </Card>
    </AnimateOnScroll>
  )
}

