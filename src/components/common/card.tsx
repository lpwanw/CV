import { clsx } from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-bg-secondary rounded-xl border border-slate-700/50 p-6',
        hover && 'transition-all duration-200 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}
