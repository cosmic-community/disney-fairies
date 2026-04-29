import { getEvents } from '@/lib/cosmic'
import EventCard from '@/components/EventCard'

export const metadata = {
  title: 'Events - Disney Fairies',
  description: 'Explore Pixie Hollow Games and magical events'
}

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div className="sparkle-bg py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-5xl mb-4 animate-float">🎪</div>
          <h1 className="font-display text-4xl md:text-6xl gold-text font-bold mb-4">
            Magical Events
          </h1>
          <p className="text-pixie-200 text-lg max-w-2xl mx-auto font-body">
            From the Pixie Hollow Games to The Greatest Show On Earth — discover all the magical moments.
          </p>
        </div>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-pixie-300 font-body">No events found yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}