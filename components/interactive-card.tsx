"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
}

export function InteractiveCard({ children, className = "" }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none bg-primary/10 rounded-full mix-blend-soft-light"
          animate={{
            height: 400,
            width: 400,
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
            opacity: 0.3,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        />
      )}
      <Card className="border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden bg-card h-full">
        {children}
      </Card>
    </motion.div>
  )
}

