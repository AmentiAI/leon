'use client'
import { useEffect, useRef, useState } from 'react'

export default function AnimatedCounter({ target, suffix = '', prefix = '', isDecimal = false }) {
  const finalVal = prefix + (isDecimal ? Number(target).toFixed(1) : Math.floor(target)) + suffix
  const [value, setValue] = useState(finalVal)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || animated.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        animated.current = true
        observer.unobserve(el)

        const duration = 1800
        const start = performance.now()
        const update = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - t, 3)
          const val = target * ease
          setValue(prefix + (isDecimal ? val.toFixed(1) : Math.floor(val)) + suffix)
          if (t < 1) requestAnimationFrame(update)
        }
        requestAnimationFrame(update)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix, prefix, isDecimal])

  return <span ref={ref}>{value}</span>
}
