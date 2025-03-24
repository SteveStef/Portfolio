"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface TabContentProps {
  tabs: {
    id: string
    label: string
    icon: React.ReactNode
    content: React.ReactNode
  }[]
}

export function TabContent({ tabs }: TabContentProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "outline"}
            className={`gap-2 rounded-full transition-all ${
              activeTab === tab.id ? "bg-primary text-primary-foreground" : "hover:bg-primary/10 hover:text-primary"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </Button>
        ))}
      </div>

      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {tab.content}
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

