export interface Oferta {
  id: number
  nombre: string
  descripcion?: string
  
  precio: string | number
  imagen: string
  emoji: string
  destacada: boolean
}
