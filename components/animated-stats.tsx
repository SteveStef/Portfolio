"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface AnimatedStatProps {
  value: number
  label: string
  suffix?: string
  delay?: number
}

export function AnimatedStat({ value, label, suffix = "", delay = 0 }: AnimatedStatProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")

      let startValue = 0
      const duration = 1500 // ms
      const frameDuration = 1000 / 60 // 60fps
      const totalFrames = Math.round(duration / frameDuration)
      const increment = value / totalFrames

      let timer: NodeJS.Timeout

      const updateValue = () => {
        startValue += increment
        if (startValue > value) {
          setDisplayValue(value)
          clearTimeout(timer)
        } else {
          setDisplayValue(Math.floor(startValue))
          timer = setTimeout(updateValue, frameDuration)
        }
      }

      setTimeout(() => {
        updateValue()
      }, delay)

      return () => clearTimeout(timer)
    } else {
      controls.start("hidden")
      setDisplayValue(0)
    }
  }, [isInView, value, controls, delay])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay / 1000 } },
      }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {displayValue}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  )
}

interface AnimatedStatsProps {
  stats: {
    value: number
    label: string
    suffix?: string
  }[]
}

export function AnimatedStats({ stats }: AnimatedStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
      {stats.map((stat, index) => (
        <AnimatedStat key={stat.label} value={stat.value} label={stat.label} suffix={stat.suffix} delay={index * 150} />
      ))}
    </div>
  )
}

