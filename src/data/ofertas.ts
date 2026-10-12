import type { Oferta } from '../types/oferta'

export const ofertasEstrella: Oferta[] = [
  {
    id: 1,
    nombre: 'Huevos',
    descripcion: 'Huevos frescos de campo',
   
    precio: "5x1000",
    imagen: '/imagenes/huevo.jpg',
    emoji: '🥚',
    destacada: true,
  },
  {
    id: 2,
    nombre: 'Hamburguesas',
    descripcion: 'Hamburguesas jugosas de vacuno',
    
    precio: "4x1000",
    imagen: '/imagenes/hamburgesas.jpeg',
    emoji: '🍔',
    destacada: true,
  },
  {
    id: 3,
    nombre: 'Galletas y Mixes',
    descripcion: 'Sufles, chocman, gomitas y más',
    precio: "4x1000",
    imagen: '/imagenes/galletas.jpeg',
    emoji: '🍪',
    destacada: true,
  },
  {
    id: 4,
    nombre: 'Bebidas Fruna 2L',
    descripcion: 'Refrescos Fruna en distintos sabores',
    
    precio: "3x2000",
    imagen: '/imagenes/frunaBebidas.jpeg',
    emoji: '🥤',
    destacada: true,
  },
  {
    id: 5,
    nombre: 'Arroz',
    descripcion: 'Arroz grano largo, bolsa 1kg',
    
    precio: 990,
    imagen: '/imagenes/arroz.jpeg',
    emoji: '🍚',
    destacada: true,
  },
  // TODO: reemplazar por ofertas reales
  {
    id: 6,
    nombre: 'Azúcar',
    descripcion: 'Azúcar blanca, 1kg',
    
    precio: 1000,
    imagen: '/imagenes/azucar.jpeg',
    emoji: '🍬',
    destacada: true,
  },
  // TODO: reemplazar por ofertas reales
  {
    id: 7,
    nombre: 'Agua Nestlé',
    descripcion: 'Agua purificada 1.5L',
    
    precio: 2500,
    imagen: '/imagenes/NestleAgua.jpeg',
    emoji: '💧',
    destacada: true,
  },
  // TODO: reemplazar por ofertas reales
  {
    id: 8,
    nombre: 'Nuggets',
    descripcion: 'Nuggets de pollo crujientes',
    
    precio: 1000,
    imagen: '/imagenes/nugget.jpeg',
    emoji: '🍗',
    destacada: true,
  },
  {
    id: 9,
    nombre: 'Salsas',
    descripcion: 'Variedad de salsas y aderezos',
    precio: "3x1000",
    imagen: '/imagenes/salsas.jpeg',
    emoji: '🫙',
    destacada: true,
  },
  {
    id: 10,
    nombre: 'Tallarines 3x1800',
    descripcion: 'Fideos spaghetti 500g',
    precio: "3x1800",
    imagen: '/imagenes/tallarines.jpeg',
    emoji: '🍝',
    destacada: true,
  }
]