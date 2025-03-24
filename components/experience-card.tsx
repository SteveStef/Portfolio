"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

interface ExperienceCardProps {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string[]
  badge?: string
  delay?: number
  onInView: () => void
}

export function ExperienceCard({
  id,
  title,
  company,
  location,
  period,
  description,
  badge,
  delay = 0,
  onInView,
}: ExperienceCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      onInView()
    }
  }, [inView, onInView])

  return (
    <div id={id} ref={ref} className="relative pl-14 md:pl-8">
      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
        <div className={`w-3 h-3 rounded-full bg-primary ${inView ? "animate-pulse" : ""}`}></div>
      </div>

      <AnimateOnScroll animation="opacity-100 translate-y-0" className="translate-y-4" delay={delay}>
        <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
          <CardHeader className="bg-primary/5 pb-4">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-base font-medium">{company}</CardDescription>
              </div>
              {badge && (
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors">{badge}</Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> {location}
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
              <div>{period}</div>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              {description.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </AnimateOnScroll>
    </div>
  )
}

