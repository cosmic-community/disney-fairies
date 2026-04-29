export default function Footer() {
  return (
    <footer className="mt-20 relative">
      <div className="circus-banner h-2" />
      <div className="bg-gradient-to-t from-pixie-950 to-pixie-900/95 border-t border-gold-500/30">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex justify-center gap-3 mb-4 text-2xl">
              <span className="animate-sparkle">✨</span>
              <span className="animate-float">🧚</span>
              <span className="animate-sparkle">✨</span>
            </div>
            <h3 className="font-display gold-text text-xl mb-2">Disney Fairies</h3>
            <p className="text-pixie-200 text-sm font-body max-w-2xl mx-auto">
              Celebrating the magic of Pixie Hollow Games (2011) and the wonder of Tinker Fairies in their special circus costumes for Ringling Bros. and Barnum & Bailey.
            </p>
            <p className="text-pixie-400 text-xs mt-4 font-body">
              The Greatest Show On Earth
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}