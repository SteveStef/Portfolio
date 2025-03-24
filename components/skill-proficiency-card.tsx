"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimateOnScroll } from "./animate-on-scroll"
import { motion } from "framer-motion"

interface SkillProficiencyCardProps {
  name: string
  icon: React.ReactNode
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  category: string
  delay?: number
}

export function SkillProficiencyCard({ name, icon, level, category, delay = 0 }: SkillProficiencyCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Define colors based on proficiency level
  const getLevelColor = () => {
    switch (level) {
      case "Beginner":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
      case "Intermediate":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
      case "Advanced":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
      case "Expert":
        return "bg-primary/10 text-primary dark:bg-primary/20"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  // Define dots based on proficiency level
  const getDots = () => {
    const dots = []
    const totalDots = 5
    const filledDots = level === "Beginner" ? 2 : level === "Intermediate" ? 3 : level === "Advanced" ? 4 : 5

    for (let i = 0; i < totalDots; i++) {
      dots.push(
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            i < filledDots ? "bg-primary" : "bg-primary/20"
          } ${isHovered ? "scale-125" : ""}`}
          style={{ transitionDelay: `${i * 50}ms` }}
        />,
      )
    }

    return dots
  }

  return (
    <AnimateOnScroll animation="opacity-100 translate-y-0" className="translate-y-4" delay={delay}>
      <Card
        className={`p-4 transition-all duration-300 hover:shadow-lg border-border/50 ${
          isHovered ? "shadow-md border-primary/30" : "shadow-sm"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start gap-4">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isHovered ? "bg-primary/20" : "bg-primary/10"
            }`}
          >
            {icon}
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-lg">{name}</h3>
              <Badge variant="outline" className={`text-xs px-2 ${getLevelColor()}`}>
                {level}
              </Badge>
            </div>

            <div className="flex items-center gap-1 mb-2">{getDots()}</div>

            <p className="text-xs text-muted-foreground">{category}</p>
          </div>
        </div>

        {isHovered && (
          <motion.div
            className="w-full h-1 bg-gradient-to-r from-primary/50 to-primary mt-3"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5 }}
          />
        )}
      </Card>
    </AnimateOnScroll>
  )
}

