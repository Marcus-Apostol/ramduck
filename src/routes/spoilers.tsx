import { createFileRoute } from '@tanstack/react-router'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/spoilers')({
  head: () => ({ meta: [{ title: 'Spoilers · RAMduck' }] }),
  component: SpoilersPage,
})

const SPOILERS = [
  {
    tag: 'Track A',
    title: 'The RAM fix.',
    body: 'Our first egg. Something on the blockchain that takes on the memory shortage, so nobody runs out of RAM again.',
    teaser: 'How it works',
    hidden: 'still under the duck',
    accent: 'text-lime',
  },
  {
    tag: 'Track B',
    title: 'Everything after.',
    body: 'RAM is just the start. We’re building the future of technology: a whole pond of apps, software and other stuff we can’t name yet.',
    teaser: 'What’s next',
    hidden: 'apps, tools and more ducks',
    accent: 'text-beak',
  },
]

function SpoilersPage() {
  return (
    <>
        {/* Spoilers */}
        <section id="spoilers" className="relative bg-pond-950 min-h-screen pt-36 pb-24 sm:pt-44 sm:pb-32">
          <div className="pixel-grid absolute inset-0 opacity-30" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-5">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-beak">
              // Spoiler alert
            </p>
            <h2 className="mt-4 max-w-3xl font-pixel text-4xl sm:text-6xl leading-none">
              Two eggs. <span className="text-lime">One nest</span>
              <span className="text-beak">.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-cream/80">
              Fine, here’s a small spoiler. There’s the thing that ends the RAM crisis, and there’s
              everything that comes after it.
            </p>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {SPOILERS.map((s, i) => (
                <Reveal key={s.tag} delay={i * 100}>
                <article
                  className="h-full border-2 border-cream/70 bg-pond-900 p-8 pixel-shadow transition duration-300 ease-out hover:-translate-y-1 hover:border-lime"
                >
                  <span className={`font-mono text-sm uppercase tracking-widest ${s.accent}`}>
                    {s.tag}
                  </span>
                  <h3 className="mt-4 font-pixel text-4xl">{s.title}</h3>
                  <p className="mt-3 text-cream/75">{s.body}</p>
                  <p className="mt-6 border-t border-dashed border-cream/20 pt-4 font-mono text-xs text-cream/50">
                    {s.teaser}: <span className="redacted">{s.hidden}</span>
                  </p>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}
