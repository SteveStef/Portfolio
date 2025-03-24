"use client"

import { ChevronRight } from "lucide-react"
import { useEffect, useRef } from "react"

interface CareerNavItemProps {
  company: string
  position: string
  active: boolean
  onClick: () => void
  targetId: string
}

export function CareerNavItem({ company, position, active, onClick, targetId }: CareerNavItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    onClick()

    // Smooth scroll to the target element
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerOffset = 100
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // Update active state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById(targetId)
      if (!targetElement) return

      const rect = targetElement.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2

      if (isVisible && !active) {
        onClick()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [active, onClick, targetId])

  return (
    <div
      ref={itemRef}
      onClick={handleClick}
      className={`
        flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300
        ${
          active
            ? "bg-primary/10 border-l-4 border-primary"
            : "bg-transparent hover:bg-primary/5 border-l-4 border-transparent"
        }
      `}
    >
      <div className="flex-1">
        <p className={`font-medium ${active ? "text-primary" : ""}`}>{company}</p>
        <p className="text-sm text-muted-foreground">{position}</p>
      </div>
      <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${active ? "text-primary" : "opacity-50"}`} />
    </div>
  )
}

