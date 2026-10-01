import { createFileRoute } from '@tanstack/react-router'
import { BootLog } from '@/components/BootLog'
import { ClassifiedFile } from '@/components/ClassifiedFile'
import { WaitlistForm } from '@/components/WaitlistForm'

export const Route = createFileRoute('/')({
  component: Home,
})

const logo = (w: number) => `/.netlify/images?url=/img/ramduck-logo.jpg&w=${w}&fm=webp`

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

const TICKER = [
  'ON-CHAIN',
  '◆',
  'END THE RAM CRISIS',
  '◆',
  'SOMETHING IS HATCHING',
  '◆',
  'MEMORY',
  '◆',
  'QUACK',
  '◆',
  '████████',
  '◆',
]

function Home() {
  return (
    <div className="scanlines min-h-screen overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-pond-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo(96)} alt="" width={36} height={36} className="h-9 w-9" />
            <span className="font-pixel text-2xl tracking-wide">
              RAM<span className="text-beak">duck</span>
            </span>
          </a>
          <nav className="flex items-center gap-6 font-mono text-sm">
            <a href="#hints" className="hidden sm:inline text-cream/70 hover:text-lime">
              What we can say
            </a>
            <a href="#file" className="hidden sm:inline text-cream/70 hover:text-lime">
              The file
            </a>
            <a href="#games" className="hidden sm:inline text-cream/70 hover:text-lime">
              Games
            </a>
            <a
              href="#flock"
              className="bg-lime px-4 py-2 font-pixel text-base text-pond-950 hover:bg-cream transition"
            >
              Join the flock
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="pond-gradient relative pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div className="pixel-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="rise inline-flex items-center gap-2 border border-lime/50 bg-pond-950/40 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-lime">
              <span className="h-2 w-2 bg-lime caret" /> Stealth mode · Incubating
            </p>
            <h1
              className="rise mt-6 font-pixel text-[3.4rem] leading-[0.95] sm:text-7xl lg:text-[5.5rem]"
              style={{ animationDelay: '0.1s' }}
            >
              Something
              <br />
              is <span className="text-lime">hatching</span>
              <span className="text-beak">.</span>
            </h1>
            <p
              className="rise mt-6 max-w-lg text-lg text-cream/80 sm:text-xl"
              style={{ animationDelay: '0.2s' }}
            >
              RAMduck is building something on the blockchain, and it’s going to end the RAM
              crisis. That’s about all we’re allowed to say. <span className="redacted">the rest is under the duck</span>
            </p>
            <div className="rise mt-9 flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
              <a
                href="#flock"
                className="pixel-shadow bg-lime px-6 py-3.5 font-pixel text-xl text-pond-950 hover:-translate-y-0.5 hover:bg-cream transition"
              >
                Get early access →
              </a>
              <a
                href="#file"
                className="border-2 border-cream/70 px-6 py-3 font-pixel text-xl text-cream hover:border-lime hover:text-lime transition"
              >
                Read the file
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={logo(900)}
              srcSet={`${logo(600)} 600w, ${logo(900)} 900w, ${logo(1080)} 1080w`}
              sizes="(min-width: 1024px) 480px, 90vw"
              alt="The RAMduck mascot, a white duck sitting on a pixel-art memory chip"
              width={1080}
              height={1080}
              className="bob mx-auto w-full max-w-[460px] pixel-shadow"
            />
            <div className="relative -mt-16 ml-auto w-[92%] sm:-mt-24 lg:-mr-8">
              <BootLog />
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden border-y-2 border-pond-950 bg-beak py-3 text-pond-950">
        <div className="ticker flex w-max gap-8 whitespace-nowrap font-pixel text-2xl">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* Hints */}
      <section id="hints" className="bg-pond-900 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-mint">
            // Declassified: 3 of ███
          </p>
          <h2 className="mt-4 max-w-2xl font-pixel text-4xl sm:text-6xl leading-none">
            What we can tell you.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {HINTS.map((h) => (
              <article
                key={h.n}
                className="group relative border-2 border-cream/70 bg-pond-950 p-7 pixel-shadow transition hover:-translate-y-1 hover:border-lime"
              >
                <span className="font-mono text-sm text-beak">{h.n}</span>
                <h3 className="mt-4 font-pixel text-3xl">{h.title}</h3>
                <p className="mt-3 text-cream/75">{h.body}</p>
                <p className="mt-6 border-t border-dashed border-cream/20 pt-4 font-mono text-xs text-cream/40">
                  <span className="group-hover:hidden">Hover to learn more…</span>
                  <span className="hidden text-beak group-hover:inline">{h.hidden}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Flock banner */}
      <section aria-label="The flock" className="relative h-[340px] sm:h-[420px] overflow-hidden border-y-2 border-pond-950">
        <div className="duck-flock absolute inset-0" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-pond-900/10 via-transparent to-pond-950/60" />
        <div className="relative flex h-full items-center justify-center px-5">
          <div className="border-2 border-pond-950 bg-cream px-8 py-6 text-center text-pond-950 pixel-shadow -rotate-1">
            <p className="font-pixel text-4xl sm:text-6xl">The flock is growing.</p>
            <p className="mt-2 font-mono text-sm">One duck is smart. A chain of them is something else.</p>
          </div>
        </div>
      </section>

      {/* Classified file */}
      <section id="file" className="pond-gradient relative py-24 sm:py-32">
        <div className="pixel-grid absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-lime">// Leaked (sort of)</p>
            <h2 className="mt-4 font-pixel text-4xl sm:text-6xl leading-none">The file.</h2>
            <p className="mt-6 max-w-md text-lg text-cream/80">
              Our legal team got to it first. What’s left is everything we’re comfortable sharing
              right now. Go ahead, try to declassify it.
            </p>
          </div>
          <ClassifiedFile />
        </div>
      </section>

      {/* Games */}
      <section id="games" className="relative bg-pond-950 py-24 sm:py-32">
        <div className="pixel-grid absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-beak">// Games</p>
          <h2 className="mt-4 max-w-2xl font-pixel text-4xl sm:text-6xl leading-none">
            New games are <span className="text-lime">coming soon</span>
            <span className="text-beak">.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-cream/80">
            This is where we’ll announce our video games. Nothing here yet, the eggs are still
            warm. Check back soon.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {['01', '02', '03'].map((slot) => (
              <div
                key={slot}
                className="flex aspect-[4/3] flex-col items-center justify-center border-2 border-dashed border-cream/30 bg-pond-900/60 p-6 text-center"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-cream/40">
                  Slot {slot}
                </span>
                <p className="mt-3 font-pixel text-3xl text-cream/80">Coming soon</p>
                <p className="mt-2 font-mono text-xs text-cream/40">
                  Press start<span className="caret">_</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="flock" className="bg-pond-900 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-mint">// Early access</p>
            <h2 className="mt-4 font-pixel text-5xl sm:text-7xl leading-none">
              Join the <span className="text-beak">flock</span>.
            </h2>
            <p className="mt-6 max-w-md text-lg text-cream/80">
              The first ducklings get in before anyone else. Leave your email and you’ll be the
              first to hear the egg crack.
            </p>
            <ul className="mt-8 space-y-3 font-mono text-sm text-cream/70">
              <li><span className="text-lime">✓</span> First look at the reveal</li>
              <li><span className="text-lime">✓</span> Early access to <span className="redacted">the network</span></li>
              <li><span className="text-lime">✓</span> A very exclusive duck</li>
            </ul>
          </div>
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cream/10 bg-pond-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 font-mono text-xs text-cream/40 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo(64)} alt="" width={24} height={24} className="h-6 w-6" />
            <span>© RAMduck. All quacks reserved.</span>
          </div>
          <span>Block height: ██████ · Status: incubating</span>
        </div>
      </footer>
    </div>
  )
}
