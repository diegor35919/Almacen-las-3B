# Prompt: Web de ofertas para Minimarket (una sola pasada)

## Instrucción principal
Crea una web completa de ofertas para un minimarket, **creando los archivos directamente en disco** (no me pegues el código en el chat).

- Trabaja **solo** dentro de `/home/diego/Desktop/webAlmacen/`. No toques nada fuera de esa carpeta.
- Si la carpeta ya contiene `imagenes/`, **no la borres ni sobrescribas**; muévela o cópiala a `public/imagenes/`.
- Toma las decisiones tú, sin hacerme preguntas. Si algo falta, usa los valores por defecto indicados abajo.

## Stack (versiones fijas)
- React + Vite + TypeScript (`npm create vite@latest . -- --template react-ts`).
- **Tailwind CSS v4** con el plugin oficial `@tailwindcss/vite`. En `index.css` usa `@import "tailwindcss";` y define la paleta con `@theme`. **No** uses `tailwind.config.js` ni `postcss`.
- **Sin librerías extra**: nada de react-router, framer-motion, iconos externos, etc. Íconos con emojis o SVG inline.
- Una sola página (single page), sin backend, sin base de datos, sin tests.

## Estructura de carpetas (respétala tal cual)
```
webAlmacen/
├─ public/
│  └─ imagenes/              # kiloPan.jpeg, huevos.jpeg, hamburguesas.jpeg, ...
└─ src/
   ├─ components/
   │  ├─ Hero.tsx
   │  ├─ OfertaEstrella.tsx
   │  ├─ OfertaCard.tsx
   │  ├─ ImagenProducto.tsx   # <img> con fallback (ver "Imágenes")
   │  ├─ HorarioBadge.tsx
   │  ├─ Footer.tsx
   │  └─ WhatsAppButton.tsx
   ├─ data/
   │  └─ ofertas.ts           # arrays: ofertasEstrella y otrasOfertas
   ├─ config.ts               # TODOS los datos editables del local
   ├─ types/
   │  └─ oferta.ts
   ├─ App.tsx
   ├─ main.tsx
   └─ index.css
```

## `src/config.ts` (un solo lugar para editar datos del negocio)
Exporta una constante `CONFIG` con:
- `nombreLocal`: `"Minimarket"` (placeholder).
- `whatsapp`: `"56900000000"` (número ficticio, sin `+`).
- `mensajeWhatsapp`: `"Hola, vengo de la página web y me interesa una oferta"`.
- `direccion`: `"Dirección del local, Comuna, Ciudad"` (placeholder).
- `horario`: `[{ desde: "09:00", hasta: "14:30" }, { desde: "16:00", hasta: "22:00" }]`.

El enlace de WhatsApp debe construirse así: `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`.

## Diseño
- **Mobile-first estricto**: diseña primero para ~375 px y escala con `sm:`/`lg:`.
- Cuadrícula: 1–2 columnas en móvil; **3–4 columnas en `lg`** para las ofertas normales.
- Componentes tipo tarjeta (esquinas redondeadas, sombra suave, precio grande y legible).
- Paleta moderna y llamativa, definida en `@theme`: color principal **rojo/naranja vibrante** (ej. `#E8350F` / `#FF7A1A`), fondo claro cálido, texto oscuro con buen contraste.
- Botones y áreas táctiles de al menos 44 px de alto.
- Sin animaciones pesadas; solo transiciones CSS simples (hover/active).

## Contenido

### 1. Hero (prioridad visual alta)
- Imagen `/imagenes/kiloPan.jpeg` como fondo (con overlay oscuro/degradado para que el texto se lea) o junto al texto.
- Texto principal, tal cual: **"Por la compra de 1 kilo de pan, lleva 20% de dcto en cualquier tipo de cecina"**.
- Debajo, el `HorarioBadge`.

### 2. Ofertas Estrella (destacadas por sobre las demás)
Sección propia con título llamativo y tarjetas **más grandes** que las normales (imagen grande, precio enorme, etiqueta "OFERTA ESTRELLA" o similar):

| Producto | Oferta | Imagen |
|---|---|---|
| Huevos | 5 x $1.000 | `huevos.jpeg` |
| Hamburguesas | 4 x $1.000 | `hamburguesas.jpeg` |
| Galletas o Mixes (sufles, chocman, gomitas, etc.) | 4 x $1.000 | `galletas.jpeg` |
| Bebidas Fruna 2L | 3 x $2.000 | `fruna.jpeg` |

### 3. Otras Ofertas
Cuadrícula estándar debajo de las estrellas. Genera **6 productos de ejemplo** claramente marcados con `// TODO: reemplazar por ofertas reales` en `ofertas.ts`. Imágenes: `otra1.jpeg` … `otra6.jpeg`.

## Imágenes
- Todas se referencian como `/imagenes/archivo.jpeg` (carpeta `public/imagenes/`).
- Archivo real que ya existe: `kiloPan.jpeg`. Los demás nombres son asumidos.
- `ImagenProducto.tsx` debe usar `onError` para mostrar un **placeholder** (fondo degradado con el emoji del producto) cuando el archivo no exista. **No descargues imágenes de internet.**
- Todas las `<img>` con `alt` descriptivo, `loading="lazy"` (excepto la del Hero) y proporción fija (`aspect-square` o `aspect-[4/3]`) para evitar saltos de layout.

## Información del local
- **Header o Hero:** `HorarioBadge` que lee `CONFIG.horario`, compara con la hora actual del navegador y muestra **"Abierto ahora"** (verde) o **"Cerrado"** (rojo), más el texto del horario: `9:00–14:30 y 16:00–22:00`.
- **Botón flotante de WhatsApp:** fijo abajo a la derecha, verde, ícono SVG inline, `aria-label="Contactar por WhatsApp"`, abre en pestaña nueva con `rel="noopener noreferrer"`.
- **Footer:** nombre del local, horario, dirección (`CONFIG.direccion`) y un espacio visible para un mapa/enlace futuro (`{/* TODO: mapa */}`).

## Calidad mínima exigida
- TypeScript estricto, sin `any`.
- Tipo `Oferta`: `{ id, nombre, descripcion?, cantidad, precio, imagen, emoji, destacada }`.
- Accesibilidad básica: contraste suficiente, `alt`, `aria-label`, jerarquía de títulos (`h1` único en el Hero).
- Meta tags en `index.html`: `lang="es"`, `viewport`, `title` y `description` del minimarket.

## Verificación (obligatoria antes de terminar)
1. Ejecuta `npm install`.
2. Ejecuta `npm run build` y **corrige cualquier error** hasta que compile sin errores de TypeScript.
3. No dejes el servidor de desarrollo corriendo.

## Formato de la respuesta final (para ahorrar tokens)
Responde **solo** con:
1. El árbol de archivos final (corto).
2. Los comandos para correrlo (`cd ... && npm run dev`).
3. Una lista de máximo 5 líneas con lo que debo cambiar yo (teléfono, dirección, imágenes, ofertas reales).

**No** expliques el código, **no** repitas el contenido de los archivos.
Lo que si puedes es agregar son sugerencias adicionales.
