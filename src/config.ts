export interface HorarioTurno {
  desde: string
  hasta: string
}

export interface AppConfig {
  nombreLocal: string
  whatsapp: string
  mensajeWhatsapp: string
  direccion: string
  horario: HorarioTurno[]
}

export const CONFIG: AppConfig = {
  nombreLocal: 'Almacen las 3B',
  whatsapp: '56974280171',
  mensajeWhatsapp: 'Hola, vengo de la página web y me interesa una oferta',
  direccion: 'Almirante Latorre 10461, San Ramón, Santiago',
  horario: [
    { desde: 'Abrimos desde 09:00', hasta: '14:30' },
    { desde: '16:00', hasta: '22:00' },
  ],
}
