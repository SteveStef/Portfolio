"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { AnimateOnScroll } from "./animate-on-scroll"
import { ChevronDown, ChevronUp } from "lucide-react"

interface SkillCategoryProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  delay?: number
}

export function SkillCategory({ title, icon, children, delay = 0 }: SkillCategoryProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimateOnScroll animation="opacity-100 translate-y-0" className="translate-y-4" delay={delay}>
      <Card
        className={`overflow-hidden transition-all duration-300 border-border/50 ${
          isHovered ? "shadow-md border-primary/30" : "shadow-sm"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="p-4 flex items-center justify-between cursor-pointer bg-card hover:bg-muted/50 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isHovered ? "bg-primary/20" : "bg-primary/10"
              }`}
            >
              {icon}
            </div>
            <h3 className="font-semibold text-xl">{title}</h3>
          </div>

          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </div>

        {isExpanded && <div className="p-4 pt-0 grid gap-4 sm:grid-cols-2 md:grid-cols-3">{children}</div>}
      </Card>
    </AnimateOnScroll>
  )
}

