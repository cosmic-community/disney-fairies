// app/fairies/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getFairy, getMetafieldValue } from '@/lib/cosmic'

export default async function FairyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const fairy = await getFairy(slug)

  if (!fairy) {
    notFound()
  }

  const portrait = fairy.metadata?.portrait
  const name = getMetafieldValue(fairy.metadata?.name) || fairy.title
  const talentType = getMetafieldValue(fairy.metadata?.talent_type)
  const bio = getMetafieldValue(fairy.metadata?.bio)

  return (
    <div className="sparkle-bg py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link href="/fairies" className="inline-flex items-center text-pixie-200 hover:text-gold-300 font-body mb-8 transition-colors">
          ← Back to Fairies
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="magical-card rounded-3xl overflow-hidden">
            <div className="aspect-[3/4] bg-pixie-900">
              {portrait ? (
                <img
                  src={`${portrait.imgix_url}?w=1200&h=1600&fit=crop&auto=format,compress`}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-9xl">🧚</div>
              )}
            </div>
          </div>

          <div className="lg:py-8">
            {talentType && (
              <div className="inline-block bg-gold-500/20 backdrop-blur-sm border border-gold-500/40 text-gold-300 text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                ✨ {talentType}
              </div>
            )}
            <h1 className="font-display text-4xl md:text-6xl gold-text font-bold mb-6">
              {name}
            </h1>
            {bio && (
              <div className="prose prose-invert max-w-none">
                <p className="text-pixie-100 text-lg leading-relaxed font-body whitespace-pre-line">
                  {bio}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}