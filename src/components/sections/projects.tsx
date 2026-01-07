import { Container, SectionTitle, Card, Badge, MotionSection, MotionList, MotionItem, ProjectLightbox } from '@/components/common'
import type { Project } from '@/types'

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section">
      <Container>
        <MotionSection>
          <SectionTitle>Freelance Projects</SectionTitle>
        </MotionSection>

        <MotionList className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <MotionItem key={project.id}>
              <Card hover className="flex flex-col h-full">
                {project.images && project.images.length > 0 && (
                  <ProjectLightbox
                    images={project.images}
                    thumbnail={project.thumbnail}
                    projectName={project.name}
                  />
                )}

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-text-primary">{project.name}</h3>
                    <span className="text-sm text-text-secondary whitespace-nowrap ml-2">
                      {project.period}
                    </span>
                  </div>

                  {project.client && (
                    <p className="text-sm text-text-secondary mb-2">
                      <span className="font-medium">Client:</span> {project.client}
                    </p>
                  )}

                  <p className="text-sm text-primary font-medium mb-3">{project.role}</p>
                  <p className="text-text-secondary mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="primary">{tech}</Badge>
                    ))}
                  </div>

                  <ul className="space-y-1 text-sm text-text-secondary">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {(project.liveUrl || project.repoUrl) && (
                  <div className="flex gap-4 mt-4 pt-4 border-t border-slate-700/50">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Visit Website
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        Source
                      </a>
                    )}
                  </div>
                )}
              </Card>
            </MotionItem>
          ))}
        </MotionList>
      </Container>
    </section>
  )
}
