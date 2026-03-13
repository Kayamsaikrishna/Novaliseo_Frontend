import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import type React from "react"

interface LayeredTextProps {
  lines?: Array<{ top: string; bottom: string }>
  fontSize?: string
  className?: string
}

export function LayeredText({
  lines = [
    { top: "\u00A0", bottom: "INFINITE" },
    { top: "INFINITE", bottom: "PROGRESS" },
    { top: "PROGRESS", bottom: "INNOVATION" },
    { top: "INNOVATION", bottom: "FUTURE" },
    { top: "FUTURE", bottom: "DREAMS" },
    { top: "DREAMS", bottom: "ACHIEVEMENT" },
    { top: "ACHIEVEMENT", bottom: "\u00A0" },
  ],
  fontSize = "clamp(2rem, 6vw, 5rem)", // Fully responsive clamp scales beautifully on all screens
  className = "",
}: LayeredTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline>()

  const calculateTranslateX = (index: number) => {
    const centerIndex = Math.floor(lines.length / 2)
    return (index - centerIndex) * 0.45 // 0.45em step offset per layer
  }

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const paragraphs = container.querySelectorAll("p")

    timelineRef.current = gsap.timeline({ paused: true })

    // We animate exactly exactly the height of one line (0.8em), scaling automatically
    timelineRef.current.to(paragraphs, {
      y: "-0.8em",
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.08,
    })

    const handleMouseEnter = () => timelineRef.current?.play()
    const handleMouseLeave = () => timelineRef.current?.reverse()

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
      timelineRef.current?.kill()
    }
  }, [lines])

  return (
    <div
      ref={containerRef}
      className={`mx-auto py-[1em] font-sans font-black uppercase text-center ${className}`}
      style={{ fontSize, letterSpacing: "-0.03em" } as React.CSSProperties}
    >
      <ul className="list-none p-0 m-0 flex flex-col items-center">
        {lines.map((line, index) => {
          const translateX = calculateTranslateX(index)
          return (
            <li
              key={index}
              className="overflow-hidden relative"
              style={
                {
                  height: "0.8em", // Lock container height per sliced box relative to font size
                  transform: `translateX(${translateX}em) skew(${index % 2 === 0 ? "60deg, -30deg" : "0deg, -30deg"}) scaleY(${index % 2 === 0 ? "0.66667" : "1.33333"})`,
                } as React.CSSProperties
              }
            >
              <p className="px-[0.3em] align-top whitespace-nowrap m-0 leading-[0.8em] text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 via-sky-300 to-blue-600" style={{ height: "0.8em" }}>
                {line.top}
              </p>
              <p className="px-[0.3em] align-top whitespace-nowrap m-0 leading-[0.8em] text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 via-sky-300 to-blue-600" style={{ height: "0.8em" }}>
                {line.bottom}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
