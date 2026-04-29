import Link from 'next/link'
import type { Costume } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CostumeCard({ costume }: { costume: Costume }) {
  const costumeImage = costume.metadata?.costume_image
  const name = getMetafieldValue(costume.metadata?.costume_name) || costume.title
  const wornBy = costume.metadata?.worn_by

  return (
    <Link href={`/costumes/${costume.slug}`} className="block group">
      <div className="magical-card rounded-2xl overflow-hidden h-full">
        <div className="relative aspect-[4/5] overflow-hidden bg-pixie-900">
          {costumeImage ? (
            <img
              src={`${costumeImage.imgix_url}?w=600&h=750&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">🎨</div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-pixie-950 via-transparent to-transparent" />
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl gold-text font-semibold mb-1 group-hover:text-gold-300 transition-colors">
            {name}
          </h3>
          {wornBy && (
            <p className="text-pixie-300 text-sm font-body">
              Worn by <span className="text-gold-300 font-medium">{wornBy.title}</span>
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}