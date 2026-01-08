import { PageLayout } from '@/components/layouts/page-layout'
import {
  Hero,
  Skills,
  ExperienceSection,
  Projects,
  EducationSection,
  Contact,
} from '@/components/sections'
import { profile } from '@/data/profile'

export function HomePage() {
  return (
    <PageLayout>
      <Hero profile={profile} />
      <Skills />
      <ExperienceSection experiences={profile.experience} />
      <Projects projects={profile.projects} />
      <EducationSection
        education={profile.education}
        activities={profile.activities}
      />
      <Contact contact={profile.contact} />
    </PageLayout>
  )
}
