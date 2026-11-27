import { createFileRoute } from '@tanstack/react-router'
import { APPS } from '@/data/flock'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/projects')({
  head: () => ({ meta: [{ title: 'Projects · RAMduck' }] }),
  component: ProjectsPage,
})

function ProjectsPage() {
  const empty = Math.max(0, 3 - APPS.length)
  return (
    <section className="relative min-h-screen bg-pond-950 pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="pixel-grid absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5">
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-beak">// Projects</p>
        <h2 className="mt-4 max-w-2xl font-pixel text-4xl sm:text-6xl leading-none">
          Fresh out of the <span className="text-lime">egg</span>
          <span className="text-beak">.</span>
        </h2>
        <p className="mt-6 max-w-lg text-lg text-cream/80">
          This is where new projects land as they hatch. More eggs are still warm, so check back
          soon.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {APPS.map((app, i) => (
            <Reveal key={app.name} delay={i * 100}>
              <a
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex aspect-[4/3] h-full flex-col justify-between border-2 border-cream/70 bg-pond-900 p-6 pixel-shadow transition duration-300 ease-out hover:-translate-y-1 hover:border-lime"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-beak">
                  {app.status}
                </span>
                <div>
                  <p className="font-pixel text-3xl">{app.name}</p>
                  <p className="mt-2 text-sm text-cream/70">{app.blurb}</p>
                  {app.href && (
                    <span className="mt-4 inline-block font-mono text-xs text-lime transition-transform duration-300 group-hover:translate-x-1">
                      Open app ↗
                    </span>
                  )}
                </div>
              </a>
            </Reveal>
          ))}
          {Array.from({ length: empty }, (_, i) => (
            <Reveal key={i} delay={(APPS.length + i) * 100}>
              <div className="flex aspect-[4/3] h-full flex-col items-center justify-center border-2 border-dashed border-cream/30 bg-pond-900/60 p-6 text-center">
                <span className="font-mono text-xs uppercase tracking-widest text-cream/40">
                  Slot {String(APPS.length + i + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 font-pixel text-3xl text-cream/80">Coming soon</p>
                <p className="mt-2 font-mono text-xs text-cream/40">
                  Press start<span className="caret">_</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
