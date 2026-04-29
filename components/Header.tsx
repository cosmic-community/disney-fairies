import Link from 'next/link'

export default function Header() {
  return (
    <header className="relative z-20">
      <div className="circus-banner h-2" />
      <div className="bg-gradient-to-b from-pixie-950 to-pixie-900/95 backdrop-blur-sm border-b border-gold-500/30">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="text-4xl animate-float">🧚</div>
              <div>
                <h1 className="font-display text-2xl md:text-3xl gold-text font-bold tracking-wide">
                  Disney Fairies
                </h1>
                <p className="text-pixie-200 text-xs md:text-sm font-body">
                  Pixie Hollow Games
                </p>
              </div>
            </Link>
            <nav className="flex items-center gap-1 md:gap-2">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/fairies">Fairies</NavLink>
              <NavLink href="/events">Events</NavLink>
              <NavLink href="/costumes">Costumes</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 md:px-4 md:py-2 text-sm md:text-base font-body text-pixie-100 hover:text-gold-300 hover:bg-pixie-800/50 rounded-lg transition-all duration-200 font-medium"
    >
      {children}
    </Link>
  )
}