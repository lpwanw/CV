import { Container, SectionTitle, Card, Badge, MotionSection, MotionList, MotionItem } from '@/components/common'
import type { Experience } from '@/types'

interface ExperienceProps {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="section bg-bg-primary/50">
      <Container>
        <MotionSection>
          <SectionTitle>Professional Experience</SectionTitle>
        </MotionSection>

        <MotionList className="space-y-6">
          {experiences.map((exp) => (
            <MotionItem key={exp.id}>
              <Card hover>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{exp.company}</h3>
                    <p className="text-primary font-medium">{exp.role}</p>
                  </div>
                  <span className="text-text-secondary text-sm whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tech.map((tech) => (
                    <Badge key={tech} variant="primary">{tech}</Badge>
                  ))}
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="text-primary mt-1.5 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            </MotionItem>
          ))}
        </MotionList>
      </Container>
    </section>
  )
}
