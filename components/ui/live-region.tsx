"use client"

import { useEffect, useRef } from "react"

interface LiveRegionProps {
  message: string
  politeness?: "polite" | "assertive"
  clearOnUnmount?: boolean
}

export function LiveRegion({ message, politeness = "polite", clearOnUnmount = true }: LiveRegionProps) {
  const regionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (regionRef.current) {
      regionRef.current.textContent = message
    }
  }, [message])

  useEffect(() => {
    return () => {
      if (clearOnUnmount && regionRef.current) {
        regionRef.current.textContent = ""
      }
    }
  }, [clearOnUnmount])

  return (
    <div
      ref={regionRef}
      aria-live={politeness}
      aria-atomic="true"
      className="sr-only"
    />
  )
}
