import { getCostumes } from '@/lib/cosmic'
import CostumeCard from '@/components/CostumeCard'

export const metadata = {
  title: 'Costumes - Disney Fairies',
  description: 'Beautiful circus costumes for Ringling Bros. and Barnum & Bailey'
}

export default async function CostumesPage() {
  const costumes = await getCostumes()

  return (
    <div className="sparkle-bg py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-5xl mb-4 animate-float">🎨</div>
          <h1 className="font-display text-4xl md:text-6xl gold-text font-bold mb-4">
            Circus Costumes
          </h1>
          <p className="text-pixie-200 text-lg max-w-2xl mx-auto font-body">
            Stunning costumes designed for Ringling Bros. and Barnum & Bailey — The Greatest Show On Earth.
          </p>
        </div>

        {costumes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {costumes.map(costume => (
              <CostumeCard key={costume.id} costume={costume} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-pixie-300 font-body">No costumes found yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}