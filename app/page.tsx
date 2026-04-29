import Link from 'next/link'
import { getFairies, getEvents, getCostumes } from '@/lib/cosmic'
import FairyCard from '@/components/FairyCard'
import EventCard from '@/components/EventCard'
import CostumeCard from '@/components/CostumeCard'

export default async function HomePage() {
  const [fairies, events, costumes] = await Promise.all([
    getFairies(),
    getEvents(),
    getCostumes()
  ])

  return (
    <div className="sparkle-bg">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-sparkle opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center gap-4 mb-6 text-4xl md:text-5xl">
            <span className="animate-sparkle">✨</span>
            <span className="animate-float">🧚</span>
            <span className="animate-sparkle" style={{ animationDelay: '1s' }}>✨</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl gold-text font-bold mb-6 tracking-wide">
            Pixie Hollow Games
          </h1>
          <p className="text-pixie-100 text-lg md:text-xl max-w-3xl mx-auto font-body mb-4">
            Welcome to the magical world of Disney Fairies, where Tinkerbell, Fairy Mary, and the Tinker Fairies prepare for the greatest games of all time.
          </p>
          <p className="text-gold-300 text-base md:text-lg font-display italic">
            Featuring Circus Costumes for Ringling Bros. and Barnum & Bailey
          </p>
          <p className="text-pixie-300 text-sm mt-2 font-body uppercase tracking-widest">
            The Greatest Show On Earth • 2011
          </p>
        </div>
      </section>

      {/* Fairies Section */}
      {fairies.length > 0 && (
        <section className="py-16 container mx-auto px-4">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-gold-400 font-body text-sm uppercase tracking-widest mb-2">Meet the</p>
              <h2 className="font-display text-3xl md:text-5xl gold-text font-bold">Tinker Fairies</h2>
            </div>
            <Link href="/fairies" className="text-pixie-200 hover:text-gold-300 font-body font-medium transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fairies.slice(0, 4).map(fairy => (
              <FairyCard key={fairy.id} fairy={fairy} />
            ))}
          </div>
        </section>
      )}

      {/* Events Section */}
      {events.length > 0 && (
        <section className="py-16 container mx-auto px-4">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-gold-400 font-body text-sm uppercase tracking-widest mb-2">Discover</p>
              <h2 className="font-display text-3xl md:text-5xl gold-text font-bold">Magical Events</h2>
            </div>
            <Link href="/events" className="text-pixie-200 hover:text-gold-300 font-body font-medium transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 3).map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}

      {/* Costumes Section */}
      {costumes.length > 0 && (
        <section className="py-16 container mx-auto px-4">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-gold-400 font-body text-sm uppercase tracking-widest mb-2">Explore the</p>
              <h2 className="font-display text-3xl md:text-5xl gold-text font-bold">Circus Costumes</h2>
            </div>
            <Link href="/costumes" className="text-pixie-200 hover:text-gold-300 font-body font-medium transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {costumes.slice(0, 4).map(costume => (
              <CostumeCard key={costume.id} costume={costume} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}