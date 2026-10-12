import { CONFIG } from '../config'

function formatHorario(): string {
  return CONFIG.horario.map(({ desde, hasta }) => `${desde}–${hasta}`).join(' y ')
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Local */}
        <div>
          <h2 className="text-white font-extrabold text-lg mb-2">{CONFIG.nombreLocal}</h2>
          <p className="text-sm leading-relaxed opacity-75">
            Tu minimarket de confianza con las mejores ofertas del barrio.
          </p>
        </div>

        {/* Horario */}
        <div>
          <h3 className="text-white font-bold mb-2">Horario</h3>
          <p className="text-sm leading-relaxed">{formatHorario()}</p>
        </div>

        {/* Dirección y mapa */}
        <div>
          <h3 className="text-white font-bold mb-2">Dirección</h3>
          <p className="text-sm leading-relaxed">{CONFIG.direccion}</p>
          <div className="mt-3 text-sm text-gray-500 border border-dashed border-gray-600 rounded-lg p-3">
            {/* TODO: mapa */}
            <span>📍 Mapa próximamente</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-600">
        © {new Date().getFullYear()} {CONFIG.nombreLocal}. Todos los derechos reservados.
      </div>
    </footer>
  )
}
