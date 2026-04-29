import { getFairies } from '@/lib/cosmic'
import FairyCard from '@/components/FairyCard'

export const metadata = {
  title: 'Fairies - Disney Fairies',
  description: 'Meet all the Tinker Fairies of Pixie Hollow'
}

export default async function FairiesPage() {
  const fairies = await getFairies()

  return (
    <div className="sparkle-bg py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-5xl mb-4 animate-float">🧚</div>
          <h1 className="font-display text-4xl md:text-6xl gold-text font-bold mb-4">
            The Tinker Fairies
          </h1>
          <p className="text-pixie-200 text-lg max-w-2xl mx-auto font-body">
            Meet the magical fairies of Pixie Hollow, each with their own unique talents and stories.
          </p>
        </div>

        {fairies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fairies.map(fairy => (
              <FairyCard key={fairy.id} fairy={fairy} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-pixie-300 font-body">No fairies found yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}