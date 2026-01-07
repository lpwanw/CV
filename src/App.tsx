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

function App() {
  return (
    <PageLayout>
      <Hero profile={profile} />
      <Skills skills={profile.skills} />
      <ExperienceSection experiences={profile.experience} />
      <Projects projects={profile.projects} />
      <EducationSection education={profile.education} activities={profile.activities} />
      <Contact contact={profile.contact} />
    </PageLayout>
  )
}

export default App
