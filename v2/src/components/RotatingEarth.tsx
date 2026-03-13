"use client"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"

interface RotatingEarthProps {
  width?: number
  height?: number
  className?: string
}

export default function RotatingEarth({ width = 800, height = 600, className = "" }: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (!context) return

    // Set up responsive dimensions
    let containerWidth = 0;
    let containerHeight = 0;
    let radius = 0;

    const updateDimensions = () => {
        containerWidth = Math.min(width, window.innerWidth)
        containerHeight = Math.min(height, window.innerHeight)
        
        // Adaptive radius: larger on wide screens, smaller on tall/mobile screens to avoid cutoff
        const isPortrait = window.innerHeight > window.innerWidth;
        radius = Math.min(containerWidth, containerHeight) / (isPortrait ? 2.5 : 2.2);

        const dpr = window.devicePixelRatio || 1
        canvas.width = containerWidth * dpr
        canvas.height = containerHeight * dpr
        canvas.style.width = `${containerWidth}px`
        canvas.style.height = `${containerHeight}px`
        context.scale(dpr, dpr)
        
        if (projection) {
            projection
                .scale(radius)
                .translate([containerWidth / 2, containerHeight / 2])
        }
    }

    // Create projection and path generator for Canvas
    const projection = d3.geoOrthographic().clipAngle(90)
    const path = d3.geoPath().projection(projection).context(context)

    updateDimensions()

    const onResize = () => {
        updateDimensions();
        render();
    }
    window.addEventListener("resize", onResize)

    const pointInPolygon = (point: [number, number], polygon: number[][]): boolean => {
      const [x, y] = point
      let inside = false

      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i]
        const [xj, yj] = polygon[j]

        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside
        }
      }

      return inside
    }

    const pointInFeature = (point: [number, number], feature: any): boolean => {
      const geometry = feature.geometry

      if (geometry.type === "Polygon") {
        const coordinates = geometry.coordinates
        // Check if point is in outer ring
        if (!pointInPolygon(point, coordinates[0])) {
          return false
        }
        // Check if point is in any hole (inner rings)
        for (let i = 1; i < coordinates.length; i++) {
          if (pointInPolygon(point, coordinates[i])) {
            return false // Point is in a hole
          }
        }
        return true
      } else if (geometry.type === "MultiPolygon") {
        // Check each polygon in the MultiPolygon
        for (const polygon of geometry.coordinates) {
          // Check if point is in outer ring
          if (pointInPolygon(point, polygon[0])) {
            // Check if point is in any hole
            let inHole = false
            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) {
                inHole = true
                break
              }
            }
            if (!inHole) {
              return true
            }
          }
        }
        return false
      }

      return false
    }

    const generateDotsInPolygon = (feature: any, dotSpacing = 16) => {
      const dots: [number, number][] = []
      const bounds = d3.geoBounds(feature)
      const [[minLng, minLat], [maxLng, maxLat]] = bounds

      const stepSize = dotSpacing * 0.08
      let pointsGenerated = 0

      for (let lng = minLng; lng <= maxLng; lng += stepSize) {
        for (let lat = minLat; lat <= maxLat; lat += stepSize) {
          const point: [number, number] = [lng, lat]
          if (pointInFeature(point, feature)) {
            dots.push(point)
            pointsGenerated++
          }
        }
      }
      return dots
    }

    interface DotData {
      lng: number
      lat: number
      visible: boolean
      isIndia?: boolean
    }

    const allDots: DotData[] = []
    let landFeatures: any
    let indiaFeature: any

    const render = () => {
      // Clear canvas
      context.clearRect(0, 0, containerWidth, containerHeight)

      const currentScale = projection.scale()
      const scaleFactor = currentScale / radius

      // Draw ocean (globe background) - Transparent for mesh themes
      context.beginPath()
      context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI)
      context.fillStyle = "rgba(10, 20, 40, 0.4)"
      context.fill()
      
      // Atmosphere glow
      context.shadowBlur = 40 * scaleFactor
      context.shadowColor = "rgba(34, 211, 238, 0.4)"
      context.strokeStyle = "rgba(34, 211, 238, 0.5)"
      context.lineWidth = 2 * scaleFactor
      context.stroke()
      context.shadowBlur = 0

      if (landFeatures) {
        // Draw graticule
        const graticule = d3.geoGraticule()
        context.beginPath()
        path(graticule())
        context.strokeStyle = "rgba(255, 255, 255, 0.1)"
        context.lineWidth = 0.5 * scaleFactor
        context.stroke()

        // Draw land outlines
        context.beginPath()
        landFeatures.features.forEach((feature: any) => {
          path(feature)
        })
        context.strokeStyle = "rgba(255, 255, 255, 0.2)"
        context.lineWidth = 0.5 * scaleFactor
        context.stroke()

        // Draw halftone dots
        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat])
          const invertCenter = projection.invert ? projection.invert([containerWidth / 2, containerHeight / 2]) : null
          const isVisible = invertCenter ? d3.geoDistance([dot.lng, dot.lat], invertCenter as [number, number]) < Math.PI / 2 : false
          
          if (projected && isVisible) {
            context.beginPath()
            context.arc(projected[0], projected[1], (dot.isIndia ? 2.8 : 1.4) * scaleFactor, 0, 2 * Math.PI)
            
            if (dot.isIndia) {
                // Brighter, multi-layered glow for India
                context.fillStyle = "#00F2FF" // Brighter electric cyan
                context.shadowBlur = 20 * scaleFactor
                context.shadowColor = "#00F2FF"
                context.fill()
                
                // Second pass for even more intensity
                context.shadowBlur = 5 * scaleFactor
                context.fillStyle = "#FFFFFF" // White core for brightness
                context.fill()
            } else {
                context.fillStyle = "rgba(255, 255, 255, 0.5)" // Boosted opacity for land
                context.fill()
            }
            context.shadowBlur = 0
          }
        })

        // Draw India Label
        const indiaCoord: [number, number] = [78.9629, 20.5937]
        const projectedTarget = projection(indiaCoord)
        const invertCenter = projection.invert ? projection.invert([containerWidth / 2, containerHeight / 2]) : null
        const isTargetVisible = invertCenter ? d3.geoDistance(indiaCoord, invertCenter as [number, number]) < Math.PI / 2 : false
        
        if (projectedTarget && isTargetVisible) {
            const distance = invertCenter ? d3.geoDistance(indiaCoord, invertCenter as [number, number]) : 0
            const opacity = Math.max(0, 1 - (distance / (Math.PI / 2.2))) // Fade near edges
            
            context.save()
            context.globalAlpha = opacity
            
            // Draw lead line
            context.beginPath()
            context.moveTo(projectedTarget[0], projectedTarget[1])
            context.lineTo(projectedTarget[0] + 30 * scaleFactor, projectedTarget[1] - 30 * scaleFactor)
            context.strokeStyle = "#00F2FF"
            context.lineWidth = 1 * scaleFactor
            context.stroke()
            
            // Draw text
            context.font = `bold ${Math.max(10, 14 * scaleFactor)}px monospace`
            context.fillStyle = "#00F2FF"
            context.textAlign = "left"
            context.textBaseline = "bottom"
            
            // Text shadow for readability
            context.shadowBlur = 10 * scaleFactor
            context.shadowColor = "rgba(0, 242, 255, 0.5)"
            context.fillText("NOVALISEO_CORE :: INDIA", projectedTarget[0] + 35 * scaleFactor, projectedTarget[1] - 30 * scaleFactor)
            
            context.restore()
        }
      }
    }

    const loadWorldData = async () => {
      try {
        setIsLoading(true)

        // Load land and India specific data
        const [landResponse, indiaResponse] = await Promise.all([
          fetch("https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json"),
          fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson")
        ])

        if (!landResponse.ok || !indiaResponse.ok) throw new Error("Failed to load map data")

        landFeatures = await landResponse.json()
        const countries = await indiaResponse.json()
        indiaFeature = countries.features.find((f: any) => f.properties.ADMIN === "India" || f.properties.ISO_A3 === "IND")

        // Generate dots for all land features
        landFeatures.features.forEach((feature: any) => {
          const dots = generateDotsInPolygon(feature, 25)
          dots.forEach(([lng, lat]) => {
            allDots.push({ lng, lat, visible: true })
          })
        })

        // Generate specially highlighted dots for India
        if (indiaFeature) {
            const indiaDots = generateDotsInPolygon(indiaFeature, 12)
            indiaDots.forEach(([lng, lat]) => {
                allDots.push({ lng, lat, visible: true, isIndia: true })
            })
        }

        render()
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
      }
    }

    // Set up rotation and interaction
    const rotation = [ -78, -20 ] // Initial rotation to show India
    let autoRotate = true
    const rotationSpeed = 0.3

    const rotate = () => {
      if (autoRotate) {
        rotation[0] += rotationSpeed
        projection.rotate(rotation as [number, number])
        render()
      }
    }

    // Auto-rotation timer
    const rotationTimer = d3.timer(rotate)

    const handleMouseDown = (event: MouseEvent) => {
      autoRotate = false
      const startX = event.clientX
      const startY = event.clientY
      const startRotation = [...rotation]

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const sensitivity = 0.25
        const dx = moveEvent.clientX - startX
        const dy = moveEvent.clientY - startY

        rotation[0] = startRotation[0] + dx * sensitivity
        rotation[1] = startRotation[1] - dy * sensitivity
        rotation[1] = Math.max(-90, Math.min(90, rotation[1]))

        projection.rotate(rotation as [number, number])
        render()
      }

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
        autoRotate = true
      }

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    canvas.addEventListener("mousedown", handleMouseDown)
    loadWorldData()

    return () => {
      rotationTimer.stop()
      canvas.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("resize", onResize)
    }
  }, [width, height])

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="cursor-grab active:cursor-grabbing"
      />
      {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
          </div>
      )}
    </div>
  )
}
