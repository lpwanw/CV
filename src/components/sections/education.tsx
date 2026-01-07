import { Container, SectionTitle, Card, MotionSection, MotionList, MotionItem } from '@/components/common'
import type { Education, Activity } from '@/types'

interface EducationProps {
  education: Education
  activities: Activity[]
}

export function EducationSection({ education, activities }: EducationProps) {
  return (
    <section id="education" className="section bg-bg-primary/50">
      <Container>
        <MotionSection>
          <SectionTitle>Education</SectionTitle>
        </MotionSection>

        <MotionSection delay={0.2}>
          <Card className="mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-text-primary">{education.institution}</h3>
                <p className="text-text-secondary">{education.degree}</p>
                {education.gpa && (
                  <p className="text-sm text-primary mt-1">GPA: {education.gpa}</p>
                )}
              </div>
              <span className="text-text-secondary text-sm whitespace-nowrap">
                {education.period}
              </span>
            </div>
          </Card>
        </MotionSection>

        {activities.length > 0 && (
          <>
            <MotionSection delay={0.3}>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Additional Activities</h3>
            </MotionSection>
            <MotionList className="space-y-4">
              {activities.map((activity, i) => (
                <MotionItem key={i}>
                  <Card>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-text-primary">{activity.title}</h4>
                        <p className="text-primary font-medium">{activity.organization}</p>
                        <p className="text-text-secondary mt-2">{activity.description}</p>
                      </div>
                      <span className="text-text-secondary text-sm whitespace-nowrap">
                        {activity.period}
                      </span>
                    </div>
                  </Card>
                </MotionItem>
              ))}
            </MotionList>
          </>
        )}
      </Container>
    </section>
  )
}
