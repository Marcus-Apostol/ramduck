// Single source of truth for apps.
// Add an entry here and it shows up automatically on the Projects page.

export type AppStatus = 'hatching' | 'incubating' | 'live'

export type App = {
  name: string
  blurb: string
  status: AppStatus
  /** Link once the app is public (opens in a new tab) */
  href?: string
}

export const APPS: App[] = [
  {
    name: 'PolyHunch',
    blurb: 'The first duckling out of the nest. Got a hunch? Go take a look.',
    status: 'live',
    href: 'https://polyhunch.base44.app/',
  },
]
