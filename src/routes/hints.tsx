import { createFileRoute } from '@tanstack/react-router'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/hints')({
  head: () => ({ meta: [{ title: 'What we can say · RAMduck' }] }),
  component: HintsPage,
})

const HINTS = [
  {
    n: '01',
    title: 'It’s on-chain.',
    body: 'We’re building something on the blockchain. Verifiable, unstoppable and a little bit stubborn.',
    hidden: 'Which chain? Wouldn’t you like to know.',
  },
  {
    n: '02',
    title: 'It ends the RAM crisis.',
    body: 'There’s a reason “RAM” comes first in our name. The memory shortage has met its duck.',
    hidden: 'How? That part stays in the egg.',
  },
  {
    n: '03',
    title: 'It belongs to no one.',
    body: 'No gatekeepers, no middlemen, no permission slips. Just the flock.',
    hidden: 'Who runs it? Nobody. Everybody. Mostly ducks.',
  },
]

function HintsPage() {
  return (
    <>
        {/* Hints */}
        <section id="hints" className="bg-pond-900 min-h-screen pt-36 pb-24 sm:pt-44 sm:pb-32">
          <div className="mx-auto max-w-6xl px-5">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-mint">
              // Declassified: 3 of ███
            </p>
            <h2 className="mt-4 max-w-2xl font-pixel text-4xl sm:text-6xl leading-none">
              What we can tell you.
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {HINTS.map((h, i) => (
                <Reveal key={h.n} delay={i * 100}>
                <article
                  className="group relative h-full border-2 border-cream/70 bg-pond-950 p-7 pixel-shadow transition duration-300 ease-out hover:-translate-y-1 hover:border-lime"
                >
                  <span className="font-mono text-sm text-beak">{h.n}</span>
                  <h3 className="mt-4 font-pixel text-3xl">{h.title}</h3>
                  <p className="mt-3 text-cream/75">{h.body}</p>
                  <p className="mt-6 border-t border-dashed border-cream/20 pt-4 font-mono text-xs text-cream/40">
                    <span className="group-hover:hidden">Hover to learn more…</span>
                    <span className="hidden text-beak group-hover:inline">{h.hidden}</span>
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
