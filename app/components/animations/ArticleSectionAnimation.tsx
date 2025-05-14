'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedArticleSectionProps {
  title: string
  content: React.ReactNode
  index?: number // pour les delays en cascade
}

export default function AnimatedArticleSection({
  title,
  content,
  index = 0
}: AnimatedArticleSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          delay: index * 0.15,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [index])

  return (
    <div ref={sectionRef} className="space-y-4 prose prose-sm max-w-none">
      <h3 className="text-[#0B23FF] font-medium">{title}</h3>
      <div className="text-gray-400 leading-relaxed">{content}</div>
    </div>
  )
}