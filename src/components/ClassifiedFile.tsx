import { useState } from 'react'

function R({ w }: { w: string }) {
  return (
    <span className="redacted" style={{ display: 'inline-block', width: w }} aria-label="redacted">
      &nbsp;
    </span>
  )
}

const DENIALS = [
  'ACCESS DENIED. Nice try.',
  'Still no. The duck is watching.',
  'Clearance level: not yet.',
  'Quack. (That means no.)',
  'Join the flock. Then we’ll talk.',
]

export function ClassifiedFile() {
  const [attempts, setAttempts] = useState(0)
  const [shaking, setShaking] = useState(false)

  function tryDeclassify() {
    setAttempts((n) => n + 1)
    setShaking(true)
    setTimeout(() => setShaking(false), 400)
  }

  return (
    <div
      className={`relative bg-cream text-pond-950 border-2 border-pond-950 pixel-shadow p-6 sm:p-10 font-mono text-sm sm:text-[15px] leading-8 transition-transform ${
        shaking ? 'translate-x-1 -rotate-[0.4deg]' : ''
      }`}
    >
      <div className="absolute -top-4 right-6 rotate-3 border-2 border-ember bg-cream px-3 py-1 font-pixel text-lg text-ember tracking-widest">
        CLASSIFIED
      </div>

      <div className="flex flex-wrap justify-between gap-2 border-b-2 border-dashed border-pond-950/30 pb-4 mb-6 text-xs uppercase tracking-widest text-pond-950/60">
        <span>File: RD-0001</span>
        <span>Clearance: flock only</span>
        <span>Rev. 0.0.1</span>
      </div>

      <p>
        <strong>Project:</strong> RAMduck. <strong>Objective:</strong> end the RAM crisis by{' '}
        <R w="9ch" /> without ever <R w="12ch" />.
      </p>
      <p>
        Core runs on <R w="7ch" /> and settles every <R w="10ch" /> directly on-chain, so no single{' '}
        <R w="8ch" /> can <R w="11ch" /> it.
      </p>
      <p>
        Memory is <em>persistent</em>, <R w="10ch" />, and belongs to <R w="6ch" />.
      </p>
      <p>
        Launch window: <R w="14ch" />. Codename for the first block: <R w="8ch" />.
      </p>
      <p className="text-pond-950/60">
        Note: do <u>not</u> feed the duck after midnight. <R w="16ch" />
      </p>

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="button"
          onClick={tryDeclassify}
          className="bg-pond-950 text-cream px-5 py-3 font-pixel text-lg tracking-wide hover:bg-pond-800 active:translate-y-0.5 transition"
        >
          Declassify file
        </button>
        <p aria-live="polite" className="text-ember font-bold min-h-[1.5em]">
          {attempts > 0 && DENIALS[(attempts - 1) % DENIALS.length]}
        </p>
      </div>
    </div>
  )
}
