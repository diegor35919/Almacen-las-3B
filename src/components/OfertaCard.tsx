import type { Oferta } from '../types/oferta'
import ImagenProducto from './ImagenProducto'

interface OfertaCardProps {
  oferta: Oferta
}

function formatPrecio(precio: string | number): string {
  if (typeof precio === 'string') return precio
  return `$${precio.toLocaleString('es-CL')}`
}

export default function OfertaCard({ oferta }: OfertaCardProps) {
  const { nombre, descripcion, precio, imagen, emoji } = oferta

  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-square w-full overflow-hidden">
        <ImagenProducto
          src={imagen}
          alt={nombre}
          emoji={emoji}
          className="w-full h-full"
        />
      </div>
      <div className="p-3 flex flex-col gap-1 flex-1">
        <h3 className="font-bold text-gray-900 text-sm leading-snug">{nombre}</h3>
        {descripcion && (
          <p className="text-xs text-gray-500 leading-snug">{descripcion}</p>
        )}
        <div className="mt-auto pt-2 flex items-baseline gap-1.5">
          <span className="text-2xl font-extrabold text-[#E8350F]">{formatPrecio(precio)}</span>
        </div>
      </div>
    </article>
  )
}
