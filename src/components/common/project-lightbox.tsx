import { useState, useEffect } from 'react'
import type { ProjectImage } from '@/types'

interface ProjectLightboxProps {
  images: ProjectImage[]
  thumbnail?: string
  projectName: string
}

export function ProjectLightbox({ images, thumbnail, projectName }: ProjectLightboxProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [LightboxComponent, setLightboxComponent] = useState<React.ComponentType<any> | null>(null)

  useEffect(() => {
    if (open && !LightboxComponent) {
      Promise.all([
        import('yet-another-react-lightbox'),
        import('yet-another-react-lightbox/styles.css'),
      ]).then(([module]) => {
        setLightboxComponent(() => module.default)
      })
    }
  }, [open, LightboxComponent])

  if (!images?.length) return null

  const slides = images.map(img => ({
    src: img.src,
    alt: img.alt,
    title: img.caption,
  }))

  const displayThumbnail = thumbnail || images[0]?.src

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 cursor-pointer group"
        aria-label={`View ${projectName} screenshots`}
      >
        <img
          src={displayThumbnail}
          alt={`${projectName} preview`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium bg-black/50 px-3 py-1 rounded">
            View Screenshots
          </span>
        </div>
      </button>

      {open && LightboxComponent && (
        <LightboxComponent
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          on={{ view: ({ index: i }: { index: number }) => setIndex(i) }}
        />
      )}
    </>
  )
}
