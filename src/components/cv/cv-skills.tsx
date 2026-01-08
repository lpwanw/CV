import { cvData } from '@/data/cv-data'

export function CVSkills() {
  const { skills } = cvData

  return (
    <section className="cv-section mb-2 avoid-break">
      <h2 className="text-lg font-bold border-b border-gray-300 mb-2 pb-1">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
        <div>
          <span className="font-medium">{skills.backend.title}:</span>{' '}
          {skills.backend.items.join(', ')}
        </div>
        <div>
          <span className="font-medium">{skills.database.title}:</span>{' '}
          {skills.database.items.join(', ')}
        </div>
        <div>
          <span className="font-medium">{skills.frontend.title}:</span>{' '}
          {skills.frontend.items.join(', ')}
        </div>
        <div>
          <span className="font-medium">{skills.devops.title}:</span>{' '}
          {skills.devops.items.join(', ')}
        </div>
      </div>
    </section>
  )
}
