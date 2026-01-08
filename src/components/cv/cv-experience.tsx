import { cvData } from '@/data/cv-data'

export function CVExperience() {
  const { professionalExperience, freelanceProjects } = cvData

  return (
    <section className="cv-section mb-2">
      <h2 className="text-lg font-bold border-b border-gray-300 mb-2 pb-1">
        Professional Experience
      </h2>

      {professionalExperience.map((exp, idx) => (
        <div key={idx} className="mb-2 avoid-break">
          <div className="flex justify-between items-start">
            <div>
              <span className="font-semibold text-gray-900">{exp.company}</span>
              {exp.role && (
                <span className="text-gray-600 text-sm ml-2">— {exp.role}</span>
              )}
            </div>
            <span className="text-gray-500 text-sm whitespace-nowrap">
              {exp.period}
            </span>
          </div>
          <p className="text-xs text-emerald-600 mb-1">
            {exp.techStack.join(' • ')}
          </p>
          <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-0.5">
            {exp.highlights.map((h, i) => (
              <li key={i} className="leading-tight">
                {h}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h3 className="text-base font-bold border-b border-gray-300 mb-2 pb-1 mt-3">
        Freelance Projects (Upwork)
      </h3>

      {freelanceProjects.map((project, idx) => (
        <div key={idx} className="mb-2 avoid-break">
          <div className="flex justify-between items-start">
            <div>
              <span className="font-semibold text-gray-900">{project.name}</span>
            </div>
            <span className="text-gray-500 text-sm whitespace-nowrap">
              {project.period}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Role:</span> {project.role}
            {project.client && (
              <>
                {' | '}
                <span className="font-medium">Client:</span> {project.client}
              </>
            )}
          </p>
          <p className="text-xs text-emerald-600 mb-1">
            {project.techStack.join(' • ')}
          </p>
          <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-0.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="leading-tight">
                {h}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
