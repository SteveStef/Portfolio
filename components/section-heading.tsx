import { Badge } from "@/components/ui/badge"
import { AnimateOnScroll } from "./animate-on-scroll"

interface SectionHeadingProps {
  badge: string
  title: string
}

export function SectionHeading({ badge, title }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center text-center mb-16">
      <AnimateOnScroll animation="opacity-100 translate-y-0" className="translate-y-4">
        <Badge variant="outline" className="mb-4 px-6 py-1.5 text-lg font-medium rounded-full">
          {badge}
        </Badge>
      </AnimateOnScroll>
      <AnimateOnScroll animation="opacity-100 translate-y-0" delay={200} className="translate-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">{title}</h2>
      </AnimateOnScroll>
    </div>
  )
}

