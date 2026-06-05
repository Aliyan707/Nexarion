'use client'

import { useState, useEffect, useRef } from 'react'
import { easeOutExpo } from '@/lib/utils'

export function useCountUp(target: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!start) return

    const startTime = performance.now()

    const update = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutExpo(progress)
      setValue(Math.round(eased * target))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(update)
      }
    }

    frameRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frameRef.current)
  }, [target, duration, start])

  return value
}
