// Add a new component for project cards
"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, ExternalLink, Github } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  features: string[]
  technologies: {
    name: string
    color: string
  }[]
  imageText: string
  type: string
  featured?: boolean
  reverse?: boolean
  delay?: number
}

export function ProjectCard({
  title,
  description,
  features,
  technologies,
  imageText,
  type,
  featured = false,
  reverse = false,
  delay = 0,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimateOnScroll animation="opacity-100 scale-100" className="scale-95" delay={delay}>
      <div className="group relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
          <div className="bg-card rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-12 gap-0">
              {/* Project Image/Preview */}
              <div
                className={`md:col-span-5 relative overflow-hidden h-64 md:h-auto ${reverse ? "order-1 md:order-2" : "order-1"}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <motion.div
                    className="text-5xl font-bold text-primary/30"
                    animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.7 }}
                  >
                    {imageText}
                  </motion.div>
                </div>
                {featured && (
                  <div className="absolute bottom-0 right-0 m-4 z-10">
                    <Badge className="bg-primary/80 hover:bg-primary text-white">Featured</Badge>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className={`md:col-span-7 p-6 md:p-8 ${reverse ? "order-2 md:order-1" : "order-2"}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{title}</h3>
                  <Badge variant="outline" className="text-primary border-primary">
                    {type}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6">{description}</p>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech.name}
                      className={`bg-[${tech.color}]/10 text-[${tech.color}] hover:bg-[${tech.color}]/20`}
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <Button variant="outline" size="sm" className="gap-2 rounded-full">
                    <ExternalLink className="h-4 w-4" />
                    <span>Visit Project</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 rounded-full">
                    <Github className="h-4 w-4" />
                    <span>View Code</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  )
}

