// Single source of truth for apps and updates.
// Add an entry here and it shows up automatically on the home page (Projects)
// and on the hidden /hidden page. No other files need to change.

export type AppStatus = 'hatching' | 'incubating' | 'live'

export type App = {
  name: string
  blurb: string
  status: AppStatus
  /** Optional link once the app is public */
  href?: string
}

export type Update = {
  /** ISO date, e.g. 2026-11-27 */
  date: string
  title: string
  body: string
}

export const APPS: App[] = [
  // { name: 'Example app', blurb: 'One line about it.', status: 'hatching' },
]

export const UPDATES: Update[] = [
  {
    date: '2026-11-27',
    title: 'You found the nest.',
    body: 'This page is where the flock posts updates before anyone else hears them. Keep it between us.',
  },
]
