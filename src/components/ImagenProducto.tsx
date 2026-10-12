import { useState } from 'react'

interface ImagenProductoProps {
  src: string
  alt: string
  emoji: string
  className?: string
  eager?: boolean
}

export default function ImagenProducto({ src, alt, emoji, className = '', eager = false }: ImagenProductoProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100 ${className}`}
        aria-label={alt}
        role="img"
      >
        <span className="text-5xl select-none" aria-hidden="true">{emoji}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      onError={() => setError(true)}
      className={`object-cover ${className}`}
    />
  )
}
