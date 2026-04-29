import Link from 'next/link'
import type { Fairy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function FairyCard({ fairy }: { fairy: Fairy }) {
  const portrait = fairy.metadata?.portrait
  const talentType = getMetafieldValue(fairy.metadata?.talent_type)
  const name = getMetafieldValue(fairy.metadata?.name) || fairy.title

  return (
    <Link href={`/fairies/${fairy.slug}`} className="block group">
      <div className="magical-card rounded-2xl overflow-hidden h-full">
        <div className="relative aspect-[3/4] overflow-hidden bg-pixie-900">
          {portrait ? (
            <img
              src={`${portrait.imgix_url}?w=600&h=800&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">🧚</div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-pixie-950 via-transparent to-transparent" />
          {talentType && (
            <div className="absolute top-3 right-3 bg-gold-500/90 backdrop-blur-sm text-pixie-950 text-xs font-bold px-3 py-1 rounded-full">
              {talentType}
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl gold-text font-semibold mb-1 group-hover:text-gold-300 transition-colors">
            {name}
          </h3>
          {fairy.metadata?.bio && (
            <p className="text-pixie-200 text-sm line-clamp-2 font-body">
              {getMetafieldValue(fairy.metadata.bio)}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}