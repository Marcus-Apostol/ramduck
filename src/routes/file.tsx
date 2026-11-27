import { createFileRoute } from '@tanstack/react-router'
import { ClassifiedFile } from '@/components/ClassifiedFile'

export const Route = createFileRoute('/file')({
  head: () => ({ meta: [{ title: 'The file · RAMduck' }] }),
  component: FilePage,
})


function FilePage() {
  return (
    <>
        {/* Classified file */}
        <section id="file" className="pond-gradient relative min-h-screen pt-36 pb-24 sm:pt-44 sm:pb-32">
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
    </>
  )
}
