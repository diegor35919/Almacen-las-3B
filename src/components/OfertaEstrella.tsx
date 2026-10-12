import type { Oferta } from '../types/oferta'
import ImagenProducto from './ImagenProducto'

interface OfertaEstrellaProps {
  oferta: Oferta
}

function formatPrecio(precio: number): string {
  return `$${precio.toLocaleString('es-CL')}`
}

export default function OfertaEstrella({ oferta }: OfertaEstrellaProps) {
  const { nombre, descripcion, cantidad, precio, imagen, emoji } = oferta

  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl relative">
      {/* Etiqueta estrella */}
      <div className="absolute top-3 left-3 z-10 bg-[#E8350F] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
        ⭐ Oferta Estrella
      </div>

      {/* Imagen grande */}
      <div className="aspect-[4/3] w-full overflow-hidden">
        <ImagenProducto
          src={imagen}
          alt={nombre}
          emoji={emoji}
          className="w-full h-full"
        />
      </div>

      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <h3 className="font-extrabold text-gray-900 text-base sm:text-lg leading-snug">{nombre}</h3>
        {descripcion && (
          <p className="text-sm text-gray-500">{descripcion}</p>
        )}

        <div className="mt-auto pt-3 flex items-end gap-2 flex-wrap">
          <span className="text-4xl sm:text-5xl font-black text-[#E8350F] leading-none">
            {formatPrecio(precio)}
          </span>
          {cantidad > 1 && (
            <span className="text-sm font-bold text-white bg-[#FF7A1A] px-2.5 py-1 rounded-full self-center">
              {cantidad} unidades
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
