import { Navigation, Footer } from '@/components/sections'
import { SkipLink } from '@/components/common'

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-bg-primary">
      <SkipLink />
      <Navigation />
      <main role="main">{children}</main>
      <Footer />
    </div>
  )
}
