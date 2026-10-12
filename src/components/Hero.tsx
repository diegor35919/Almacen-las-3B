import HorarioBadge from './HorarioBadge'
import { CONFIG } from '../config'

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden"
      aria-label="Oferta principal del minimarket"
    >
      {/* Imagen de fondo */}
      <img
        src="/imagenes/kiloPan.jpeg"
        alt="Kilo de pan fresco"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" aria-hidden="true" />

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-6 py-10 max-w-2xl mx-auto">
        <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-orange-300 mb-3">
          🎉 Oferta especial
        </p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Por la compra de 1 kilo de pan, lleva 20% de dcto en cualquier tipo de cecina
        </h1>
        <div className="flex justify-center">
          <HorarioBadge horario={CONFIG.horario} />
        </div>
      </div>
    </section>
  )
}
