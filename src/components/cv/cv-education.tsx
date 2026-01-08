import { cvData } from '@/data/cv-data'

export function CVEducation() {
  const { education, activities } = cvData

  return (
    <section className="cv-section mb-2 avoid-break page-break-before">
      <h2 className="text-lg font-bold border-b border-gray-300 mb-2 pb-1">
        Education
      </h2>

      <div className="mb-3">
        <div className="flex justify-between items-start">
          <span className="font-semibold text-gray-900">
            {education.university}
          </span>
          <span className="text-gray-500 text-sm">{education.period}</span>
        </div>
        <p className="text-sm text-gray-700">
          {education.degree} | GPA: {education.gpa}
        </p>
      </div>

      {activities.length > 0 && (
        <>
          <h3 className="text-base font-bold border-b border-gray-300 mb-2 pb-1 mt-3">
            Additional Activities
          </h3>
          {activities.map((act, idx) => (
            <div key={idx} className="mb-2">
              <div className="flex justify-between items-start">
                <span className="font-medium text-sm text-gray-900">
                  {act.title} — {act.organization}
                </span>
                <span className="text-gray-500 text-xs">{act.period}</span>
              </div>
              <p className="text-xs text-gray-600">{act.description}</p>
            </div>
          ))}
        </>
      )}
    </section>
  )
}
