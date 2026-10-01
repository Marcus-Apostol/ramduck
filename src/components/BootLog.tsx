import { useEffect, useState } from 'react'

const LINES: Array<{ text: string; status: string; tone: 'ok' | 'hidden' | 'warn' }> = [
  { text: 'initializing ramduck.core', status: 'OK', tone: 'ok' },
  { text: 'allocating memory', status: 'OK', tone: 'ok' },
  { text: 'syncing with chain', status: '██████', tone: 'hidden' },
  { text: 'ending ram crisis', status: '██████', tone: 'hidden' },
  { text: 'waking the duck', status: 'quack?', tone: 'warn' },
]

export function BootLog() {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (shown >= LINES.length) return
    const t = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 500 : 700)
    return () => clearTimeout(t)
  }, [shown])

  return (
    <div className="pixel-shadow border-2 border-cream/80 bg-pond-950/85 backdrop-blur font-mono text-[13px] sm:text-sm">
      <div className="flex items-center gap-2 border-b-2 border-cream/80 px-4 py-2 text-cream/60">
        <span className="h-2.5 w-2.5 bg-ember" />
        <span className="h-2.5 w-2.5 bg-lime" />
        <span className="h-2.5 w-2.5 bg-mint" />
        <span className="ml-2 tracking-wide">~/ramduck — boot.log</span>
      </div>
      <ul className="space-y-1.5 px-4 py-4 min-h-[190px]">
        {LINES.slice(0, shown).map((line) => (
          <li key={line.text} className="rise flex gap-2">
            <span className="text-mint">&gt;</span>
            <span className="text-cream/85">{line.text}</span>
            <span className="flex-1 overflow-hidden whitespace-nowrap text-cream/20">
              ........................................
            </span>
            <span
              className={
                line.tone === 'ok'
                  ? 'text-mint'
                  : line.tone === 'warn'
                    ? 'text-beak'
                    : 'text-cream/70'
              }
            >
              {line.status}
            </span>
          </li>
        ))}
        {shown >= LINES.length && (
          <li className="rise pt-2 text-lime">
            status: INCUBATING <span className="caret">▮</span>
          </li>
        )}
      </ul>
    </div>
  )
}
