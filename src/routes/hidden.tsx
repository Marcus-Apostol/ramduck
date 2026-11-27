import { createFileRoute } from '@tanstack/react-router'
import { APPS, UPDATES } from '@/data/flock'

// Unlisted page: no links point here and search engines are told to skip it.
// Content comes from src/data/flock.ts, so new apps and updates appear automatically.
export const Route = createFileRoute('/hidden')({
  head: () => ({
    meta: [
      { title: 'RAMduck — You found the nest' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  }),
  component: Hidden,
})

const logo = (w: number) => `/.netlify/images?url=/img/ramduck-logo.jpg&w=${w}&fm=webp`

function Hidden() {
  const updates = [...UPDATES].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="scanlines pond-gradient relative min-h-screen overflow-x-hidden">
      <div className="pixel-grid absolute inset-0 opacity-40" aria-hidden />
      <main className="relative mx-auto max-w-4xl px-5 py-16 sm:py-24">
        <a href="/" className="inline-flex items-center gap-3">
          <img src={logo(96)} alt="" width={36} height={36} className="h-9 w-9" />
          <span className="font-pixel text-2xl tracking-wide">
            RAM<span className="text-beak">duck</span>
          </span>
        </a>

        <p className="mt-12 inline-flex items-center gap-2 border border-beak/60 bg-pond-950/40 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-beak">
          <span className="h-2 w-2 bg-beak caret" /> Unlisted · Flock only
        </p>
        <h1 className="mt-6 font-pixel text-5xl leading-none sm:text-7xl">
          You found the <span className="text-lime">nest</span>
          <span className="text-beak">.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream/80">
          No password, no secret handshake. If you’re here, you’re early. This is where new apps
          and updates land first.
        </p>

        <section aria-labelledby="apps" className="mt-16">
          <h2 id="apps" className="font-mono text-sm uppercase tracking-[0.25em] text-mint">
            // New apps
          </h2>
          {APPS.length === 0 ? (
            <p className="mt-4 border-2 border-dashed border-cream/30 bg-pond-950/60 p-6 font-mono text-sm text-cream/60">
              Nothing has hatched yet. The eggs are still warm<span className="caret">_</span>
            </p>
          ) : (
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {APPS.map((app) => (
                <li key={app.name} className="border-2 border-cream/70 bg-pond-950 p-6 pixel-shadow">
                  <span className="font-mono text-xs uppercase tracking-widest text-beak">
                    {app.status}
                  </span>
                  <p className="mt-2 font-pixel text-3xl">
                    {app.href ? (
                      <a href={app.href} className="hover:text-lime">
                        {app.name} →
                      </a>
                    ) : (
                      app.name
                    )}
                  </p>
                  <p className="mt-2 text-cream/75">{app.blurb}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section aria-labelledby="updates" className="mt-16">
          <h2 id="updates" className="font-mono text-sm uppercase tracking-[0.25em] text-mint">
            // Updates
          </h2>
          <ol className="mt-4 space-y-4">
            {updates.map((u) => (
              <li key={u.date + u.title} className="border-l-4 border-lime bg-pond-950/70 p-6">
                <time dateTime={u.date} className="font-mono text-xs text-cream/50">
                  {u.date}
                </time>
                <p className="mt-1 font-pixel text-2xl">{u.title}</p>
                <p className="mt-2 text-cream/75">{u.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <p className="mt-20 font-mono text-xs text-cream/40">
          Quack quietly. <a href="/" className="underline hover:text-lime">Back to the pond</a>
        </p>
      </main>
    </div>
  )
}
