import { clsx } from 'clsx'

type BadgeVariant = 'default' | 'primary' | 'backend' | 'frontend' | 'database' | 'devops'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-bg-secondary text-text-secondary',
  primary: 'bg-primary/20 text-primary',
  backend: 'bg-emerald-500/20 text-emerald-400',
  frontend: 'bg-blue-500/20 text-blue-400',
  database: 'bg-amber-500/20 text-amber-400',
  devops: 'bg-purple-500/20 text-purple-400',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
