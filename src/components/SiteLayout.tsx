import { Link, Outlet, useLocation } from '@tanstack/react-router'

const logo = (w: number) => `/.netlify/images?url=/img/ramduck-logo.jpg&w=${w}&fm=webp`

const LINKS = [
  { to: '/hints', label: 'What we can say' },
  { to: '/spoilers', label: 'Spoilers' },
  { to: '/file', label: 'The file' },
  { to: '/projects', label: 'Projects' },
] as const

const linkClass =
  'relative whitespace-nowrap text-cream/70 transition-colors duration-300 hover:text-lime ' +
  "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-lime after:transition-transform after:duration-300 hover:after:scale-x-100"

export function SiteLayout() {
  const { pathname } = useLocation()

  return (
    <div className="scanlines min-h-screen overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-pond-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo(96)} alt="" width={36} height={36} className="h-9 w-9" />
            <span className="font-pixel text-2xl tracking-wide">
              RAM<span className="text-beak">duck</span>
            </span>
          </Link>
          <nav className="flex items-center gap-6 font-mono text-sm">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`hidden md:inline ${linkClass}`}
                activeProps={{ className: '!text-lime after:!scale-x-100' }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/flock"
              className="bg-lime px-4 py-2 font-pixel text-base text-pond-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cream"
            >
              Join the flock
            </Link>
          </nav>
        </div>
        {/* Mobile page links */}
        <nav className="flex gap-5 overflow-x-auto border-t border-cream/10 px-5 py-2 font-mono text-xs md:hidden">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass} activeProps={{ className: '!text-lime' }}>
              {l.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Keyed on the path so every page change replays the enter animation */}
      <main key={pathname} className="page-enter">
        <Outlet />
      </main>

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
