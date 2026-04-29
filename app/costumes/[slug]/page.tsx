// app/costumes/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCostume, getMetafieldValue } from '@/lib/cosmic'

export default async function CostumePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const costume = await getCostume(slug)

  if (!costume) {
    notFound()
  }

  const costumeImage = costume.metadata?.costume_image
  const name = getMetafieldValue(costume.metadata?.costume_name) || costume.title
  const description = getMetafieldValue(costume.metadata?.description)
  const wornBy = costume.metadata?.worn_by
  const gallery = costume.metadata?.gallery || []

  return (
    <div className="sparkle-bg py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link href="/costumes" className="inline-flex items-center text-pixie-200 hover:text-gold-300 font-body mb-8 transition-colors">
          ← Back to Costumes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          <div className="magical-card rounded-3xl overflow-hidden">
            <div className="aspect-[4/5] bg-pixie-900">
              {costumeImage ? (
                <img
                  src={`${costumeImage.imgix_url}?w=1200&h=1500&fit=crop&auto=format,compress`}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-9xl">🎨</div>
              )}
            </div>
          </div>

          <div className="lg:py-8">
            <div className="inline-block circus-banner text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              🎪 Circus Costume
            </div>
            <h1 className="font-display text-4xl md:text-5xl gold-text font-bold mb-6">
              {name}
            </h1>
            {wornBy && (
              <div className="mb-6">
                <p className="text-gold-400 text-sm uppercase tracking-widest mb-2 font-body">Worn By</p>
                <Link
                  href={`/fairies/${wornBy.slug}`}
                  className="inline-flex items-center gap-3 magical-card rounded-2xl p-4 hover:border-gold-400 transition-colors"
                >
                  {wornBy.metadata?.portrait && (
                    <img
                      src={`${wornBy.metadata.portrait.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                      alt={wornBy.title}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gold-400"
                    />
                  )}
                  <span className="font-display text-lg gold-text font-semibold">
                    {wornBy.title}
                  </span>
                </Link>
              </div>
            )}
            {description && (
              <p className="text-pixie-100 text-lg leading-relaxed font-body whitespace-pre-line">
                {description}
              </p>
            )}
          </div>
        </div>

        {gallery && gallery.length > 0 && (
          <div>
            <h2 className="font-display text-3xl gold-text font-bold mb-8 text-center">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((image, index) => (
                <div key={index} className="magical-card rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={`${image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                    alt={`${name} gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}