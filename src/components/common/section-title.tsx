import { clsx } from 'clsx'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={clsx(
        'text-3xl font-bold text-text-primary mb-8',
        className
      )}
    >
      <span className="relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
      </span>
    </h2>
  )
}
