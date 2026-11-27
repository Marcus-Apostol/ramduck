import { createFileRoute } from '@tanstack/react-router'
import { WaitlistForm } from '@/components/WaitlistForm'

export const Route = createFileRoute('/flock')({
  head: () => ({ meta: [{ title: 'Join the flock · RAMduck' }] }),
  component: FlockPage,
})


function FlockPage() {
  return (
    <>
        {/* Waitlist */}
        <section id="flock" className="bg-pond-900 min-h-screen pt-36 pb-24 sm:pt-44 sm:pb-32">
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
    </>
  )
}
