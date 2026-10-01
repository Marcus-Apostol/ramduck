import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

const siteName = 'RAMduck — Something is hatching'
const siteDescription =
  'RAMduck is building something on the blockchain to end the RAM crisis. We can’t say much yet. Join the flock.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:image',
        content: '/.netlify/images?url=/img/ramduck-logo.jpg&w=1080&fm=jpg',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { name: 'theme-color', content: '#0b2a22' },
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/.netlify/images?url=/img/ramduck-logo.jpg&w=64&h=64&fit=cover&fm=png',
      },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=JetBrains+Mono:wght@400;500;700&family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
