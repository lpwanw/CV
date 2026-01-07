import { Container, SectionTitle, MotionSection, MotionList, MotionItem } from '@/components/common'

const skillIcons = [
  { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg' },
  { name: 'Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
  { name: 'DynamoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' },
  { name: 'Sidekiq', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sidekiq/sidekiq-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'RSpec', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rspec/rspec-original.svg' },
]

export function Skills() {
  return (
    <section id="skills" className="section">
      <Container>
        <MotionSection>
          <SectionTitle>Technical Skills</SectionTitle>
        </MotionSection>

        <MotionList className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-6">
          {skillIcons.map((skill) => (
            <MotionItem
              key={skill.name}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 p-3 bg-bg-secondary rounded-xl border border-slate-700/50 flex items-center justify-center hover:border-primary/50 hover:scale-110 transition-all">
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
            </MotionItem>
          ))}
        </MotionList>
      </Container>
    </section>
  )
}
