"use client"

import { useEffect, useState } from "react"

export function WashingtonMapBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate opacity based on scroll position (fades out over first 800px)
  const opacity = Math.max(0, 1 - scrollY / 800)
  const scale = 1 + scrollY * 0.0001 // Subtle parallax effect

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: opacity * 0.15, // Make it very subtle - 15% of the calculated opacity
        transform: `scale(${scale})`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Washington State Map Image */}
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/washington-map.png')",
          filter: "blur(1px) brightness(1.2) contrast(0.8)",
          mixBlendMode: "multiply",
        }}
      />
      
      {/* Additional overlay for better blending */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            135deg, 
            rgba(22, 64, 39, 0.02) 0%, 
            rgba(255, 255, 255, 0.05) 50%, 
            rgba(22, 64, 39, 0.01) 100%
          )`,
        }}
      />
      
      {/* Gradient overlay for better content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30" />
    </div>
  )
}
