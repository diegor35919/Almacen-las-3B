import { useEffect, useState } from 'react'
import type { HorarioTurno } from '../config'

interface HorarioBadgeProps {
  horario: HorarioTurno[]
}

function parseMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number)
  return (h ?? 0) * 60 + (m ?? 0)
}

function estaAbierto(horario: HorarioTurno[]): boolean {
  const now = new Date()
  const currentMinutes = now.getHours() * 60 + now.getMinutes()
  return horario.some(({ desde, hasta }) => {
    const inicio = parseMinutes(desde)
    const fin = parseMinutes(hasta)
    return currentMinutes >= inicio && currentMinutes <= fin
  })
}

function formatHorario(horario: HorarioTurno[]): string {
  return horario.map(({ desde, hasta }) => `${desde}–${hasta}`).join(' y ')
}

export default function HorarioBadge({ horario }: HorarioBadgeProps) {
  const [abierto, setAbierto] = useState(() => estaAbierto(horario))

  useEffect(() => {
    const id = setInterval(() => {
      setAbierto(estaAbierto(horario))
    }, 60_000)
    return () => clearInterval(id)
  }, [horario])

  return (
    <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-black/40 backdrop-blur-sm text-white text-sm font-medium">
      <span
        className={`inline-block w-2.5 h-2.5 rounded-full ${abierto ? 'bg-green-400' : 'bg-red-400'}`}
        aria-hidden="true"
      />
      <span>{abierto ? 'Abierto ahora' : 'Cerrado'}</span>
      <span className="opacity-75">·</span>
      <span className="opacity-75">{formatHorario(horario)}</span>
    </div>
  )
}
