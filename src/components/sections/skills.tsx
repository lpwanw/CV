import { Container, SectionTitle, MotionSection, MotionList, MotionItem } from '@/components/common'

const skillCategories = [
  {
    title: 'Backend & Frameworks',
    skills: [
      { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg' },
      { name: 'Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg' },
      { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' },
    ],
  },
  {
    title: 'Database & Storage',
    skills: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
      { name: 'DynamoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg' },
    ],
  },
  {
    title: 'Frontend & UI',
    skills: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'Hotwire', icon: '/icons/hotwire.svg', tooltip: 'HTML-over-the-wire framework for Rails' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    title: 'AWS Services',
    skills: [
      { name: 'S3', icon: '/icons/aws-s3.svg', tooltip: 'Simple Storage Service' },
      { name: 'EC2', icon: '/icons/aws-ec2.svg', tooltip: 'Elastic Compute Cloud' },
      { name: 'SNS', icon: '/icons/aws-sns.svg', tooltip: 'Simple Notification Service' },
      { name: 'SES', icon: '/icons/aws-ses.svg', tooltip: 'Simple Email Service' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'RSpec', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rspec/rspec-original.svg' },
      { name: 'Claude Code', icon: '/icons/claude.svg', tooltip: 'AI-powered coding assistant by Anthropic' },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section">
      <Container>
        <MotionSection>
          <SectionTitle>Technical Skills</SectionTitle>
        </MotionSection>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <MotionSection key={category.title}>
              <div className="bg-bg-secondary rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-text-primary mb-4">{category.title}</h3>
                <MotionList className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <MotionItem
                      key={skill.name}
                      className="flex flex-col items-center gap-2 group relative"
                    >
                      <div
                        className="w-14 h-14 p-2.5 bg-bg-primary rounded-lg border border-slate-700/50 flex items-center justify-center hover:border-primary/50 hover:scale-110 transition-all"
                        title={skill.tooltip}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-xs text-text-secondary font-medium text-center">
                        {skill.name}
                      </span>
                      {skill.tooltip && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-bg-secondary border border-slate-700 rounded-lg text-xs text-text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          {skill.tooltip}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-700" />
                        </div>
                      )}
                    </MotionItem>
                  ))}
                </MotionList>
              </div>
            </MotionSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
