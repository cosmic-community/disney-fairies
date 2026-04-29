import Link from 'next/link'
import type { Event } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function EventCard({ event }: { event: Event }) {
  const featuredImage = event.metadata?.featured_image
  const title = getMetafieldValue(event.metadata?.event_title) || event.title
  const eventDate = getMetafieldValue(event.metadata?.event_date)
  
  const formattedDate = eventDate ? new Date(eventDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : ''

  return (
    <Link href={`/events/${event.slug}`} className="block group">
      <div className="magical-card rounded-2xl overflow-hidden h-full">
        <div className="relative aspect-video overflow-hidden bg-pixie-900">
          {featuredImage ? (
            <img
              src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">🎪</div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-pixie-950/80 via-transparent to-transparent" />
        </div>
        <div className="p-5">
          {formattedDate && (
            <p className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-2 font-body">
              {formattedDate}
            </p>
          )}
          <h3 className="font-display text-xl gold-text font-semibold mb-2 group-hover:text-gold-300 transition-colors">
            {title}
          </h3>
          {event.metadata?.description && (
            <p className="text-pixie-200 text-sm line-clamp-3 font-body">
              {getMetafieldValue(event.metadata.description)}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}