import { Container, SectionTitle, Badge, MotionSection, MotionList, MotionItem } from '@/components/common'
import type { SkillCategory } from '@/types'

interface SkillsProps {
  skills: SkillCategory[]
}

const categoryVariants: Record<string, 'backend' | 'frontend' | 'database' | 'devops' | 'default'> = {
  'Backend & Frameworks': 'backend',
  'Database & Storage': 'database',
  'Frontend & UI': 'frontend',
  'DevOps & Tools': 'devops',
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="section">
      <Container>
        <MotionSection>
          <SectionTitle>Technical Skills</SectionTitle>
        </MotionSection>

        <MotionList className="grid md:grid-cols-2 gap-6">
          {skills.map((category) => (
            <MotionItem
              key={category.title}
              className="bg-bg-secondary rounded-xl p-6 border border-slate-700/50"
            >
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant={categoryVariants[category.title] || 'default'}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </MotionItem>
          ))}
        </MotionList>
      </Container>
    </section>
  )
}
