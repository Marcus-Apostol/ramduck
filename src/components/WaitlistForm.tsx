import { useState } from 'react'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

type Status = 'idle' | 'sending' | 'done' | 'error'

export function WaitlistForm() {
  const [fields, setFields] = useState({ email: '', guess: '', 'bot-field': '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'waitlist', ...fields }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="rise border-2 border-lime bg-pond-950/70 p-8 text-center pixel-shadow">
        <p className="font-pixel text-4xl text-lime">You’re in the flock.</p>
        <p className="mt-3 text-cream/75">
          We’ll quack at you first when the egg cracks. Keep this between us.
        </p>
      </div>
    )
  }

  return (
    <form
      name="waitlist"
      onSubmit={handleSubmit}
      className="border-2 border-cream/80 bg-pond-950/70 backdrop-blur p-6 sm:p-8 pixel-shadow space-y-5"
    >
      <input type="hidden" name="form-name" value="waitlist" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" value={fields['bot-field']} onChange={handleChange} />
        </label>
      </p>

      <label className="block">
        <span className="font-mono text-xs uppercase tracking-widest text-cream/60">Email</span>
        <input
          type="email"
          name="email"
          required
          value={fields.email}
          onChange={handleChange}
          placeholder="you@pond.xyz"
          className="mt-2 w-full border-2 border-cream/40 bg-transparent px-4 py-3 font-mono text-cream placeholder:text-cream/30 focus:border-lime focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="font-mono text-xs uppercase tracking-widest text-cream/60">
          What do you think we’re building? <span className="normal-case tracking-normal">(optional)</span>
        </span>
        <input
          type="text"
          name="guess"
          value={fields.guess}
          onChange={handleChange}
          maxLength={280}
          placeholder="Infinite RAM for ducks?"
          className="mt-2 w-full border-2 border-cream/40 bg-transparent px-4 py-3 font-mono text-cream placeholder:text-cream/30 focus:border-lime focus:outline-none"
        />
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-lime text-pond-950 py-4 font-pixel text-2xl tracking-wide hover:bg-cream active:translate-y-0.5 transition disabled:opacity-60"
      >
        {status === 'sending' ? 'Hatching…' : 'Join the flock →'}
      </button>

      {status === 'error' && (
        <p className="font-mono text-sm text-ember">Something went sideways. Try again in a moment.</p>
      )}
      <p className="font-mono text-xs text-cream/40">No spam. Just one quack when it’s time.</p>
    </form>
  )
}
