import { useEffect, useRef, useState, type ReactNode } from 'react'

// Fades + lifts its children into view the first time they scroll on screen.
// Content is visible without JS (prerendered HTML), and the effect is skipped for
// users who prefer reduced motion (handled in styles.css).
export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<'idle' | 'hidden' | 'shown'>('idle')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setState('shown')
      return
    }
    setState('hidden')
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('shown')
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal h-full ${state === 'hidden' ? 'reveal-hidden' : ''} ${state === 'shown' ? 'reveal-shown' : ''}`}
      style={{ transitionDelay: state === 'shown' ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  )
}
