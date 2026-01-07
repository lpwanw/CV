import { Container, SectionTitle, MotionSection } from '@/components/common'

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
    <section id="skills" className="section overflow-hidden">
      <Container>
        <MotionSection>
          <SectionTitle>Technical Skills</SectionTitle>
        </MotionSection>

        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

          {/* Marquee container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee gap-12 py-4">
              {skillIcons.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2 min-w-[80px]"
                >
                  <div className="w-16 h-16 p-3 bg-bg-secondary rounded-xl border border-slate-700/50 flex items-center justify-center hover:border-primary/50 transition-colors">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm text-text-secondary font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex animate-marquee gap-12 py-4" aria-hidden="true">
              {skillIcons.map((skill) => (
                <div
                  key={`${skill.name}-dup`}
                  className="flex flex-col items-center gap-2 min-w-[80px]"
                >
                  <div className="w-16 h-16 p-3 bg-bg-secondary rounded-xl border border-slate-700/50 flex items-center justify-center hover:border-primary/50 transition-colors">
                    <img
                      src={skill.icon}
                      alt=""
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm text-text-secondary font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
