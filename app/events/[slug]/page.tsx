// app/events/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getEvent, getMetafieldValue } from '@/lib/cosmic'

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = await getEvent(slug)

  if (!event) {
    notFound()
  }

  const featuredImage = event.metadata?.featured_image
  const title = getMetafieldValue(event.metadata?.event_title) || event.title
  const description = getMetafieldValue(event.metadata?.description)
  const eventDate = getMetafieldValue(event.metadata?.event_date)

  const formattedDate = eventDate ? new Date(eventDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : ''

  return (
    <div className="sparkle-bg py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link href="/events" className="inline-flex items-center text-pixie-200 hover:text-gold-300 font-body mb-8 transition-colors">
          ← Back to Events
        </Link>

        <article className="magical-card rounded-3xl overflow-hidden">
          {featuredImage && (
            <div className="aspect-video bg-pixie-900 overflow-hidden">
              <img
                src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-8 md:p-12">
            {formattedDate && (
              <p className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-4 font-body">
                📅 {formattedDate}
              </p>
            )}
            <h1 className="font-display text-3xl md:text-5xl gold-text font-bold mb-6">
              {title}
            </h1>
            {description && (
              <p className="text-pixie-100 text-lg leading-relaxed font-body whitespace-pre-line">
                {description}
              </p>
            )}
          </div>
        </article>
      </div>
    </div>
  )
}