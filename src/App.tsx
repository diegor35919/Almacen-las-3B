import Hero from './components/Hero'
import OfertaEstrella from './components/OfertaEstrella'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import { ofertasEstrella } from './data/ofertas'
import { CONFIG } from './config'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header mínimo con nombre del local */}
      <header className="bg-[#E8350F] text-white text-center py-2 px-4 text-sm font-semibold tracking-wide">
        🛒 {CONFIG.nombreLocal} — ¡Ofertas de la semana!
      </header>

      <main className="flex-1">
        {/* Sección 1: Hero */}
        <Hero />

        {/* Sección 2: Ofertas Estrella */}
        <section className="max-w-5xl mx-auto px-4 py-10" aria-labelledby="titulo-estrella">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl" aria-hidden="true">⭐</span>
            <h2
              id="titulo-estrella"
              className="text-2xl sm:text-3xl font-extrabold text-gray-900"
            >
              Ofertas Estrella
            </h2>
            <span className="text-3xl" aria-hidden="true">⭐</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {ofertasEstrella.map((oferta) => (
              <OfertaEstrella key={oferta.id} oferta={oferta} />
            ))}
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
