import { createFileRoute, Link } from '@tanstack/react-router'
import { BootLog } from '@/components/BootLog'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/')({
  component: Home,
})

const logo = (w: number) => `/.netlify/images?url=/img/ramduck-logo.jpg&w=${w}&fm=webp`

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

const DOORS = [
  { to: '/hints', n: '01', title: 'What we can say', body: 'Three things we’re allowed to tell you.' },
  { to: '/spoilers', n: '02', title: 'Spoilers', body: 'Two eggs, one nest. A small peek.' },
  { to: '/file', n: '03', title: 'The file', body: 'Heavily redacted. Try your luck.' },
  { to: '/projects', n: '04', title: 'Projects', body: 'What’s hatched so far.' },
] as const

function Home() {
  return (
    <>
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
                <Link
                  to="/flock"
                  className="pixel-shadow bg-lime px-6 py-3.5 font-pixel text-xl text-pond-950 hover:-translate-y-0.5 hover:bg-cream transition"
                >
                  Get early access →
                </Link>
                <Link
                  to="/file"
                  className="border-2 border-cream/70 px-6 py-3 font-pixel text-xl text-cream hover:border-lime hover:text-lime transition"
                >
                  Read the file
                </Link>
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

        {/* Doors */}
        <section className="bg-pond-900 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-mint">// Pick a door</p>
            <h2 className="mt-4 max-w-2xl font-pixel text-4xl sm:text-6xl leading-none">
              Explore the pond.
            </h2>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {DOORS.map((d, i) => (
                <Reveal key={d.to} delay={i * 80}>
                  <Link
                    to={d.to}
                    className="group flex h-full flex-col border-2 border-cream/70 bg-pond-950 p-7 pixel-shadow transition duration-300 ease-out hover:-translate-y-1 hover:border-lime"
                  >
                    <span className="font-mono text-sm text-beak">{d.n}</span>
                    <h3 className="mt-4 font-pixel text-3xl">{d.title}</h3>
                    <p className="mt-3 flex-1 text-cream/75">{d.body}</p>
                    <span className="mt-6 font-mono text-xs text-lime transition-transform duration-300 group-hover:translate-x-1">
                      Enter →
                    </span>
                  </Link>
                </Reveal>
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
    </>
  )
}
