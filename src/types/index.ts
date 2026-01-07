export interface ContactInfo {
  phone: string
  email: string
  github: string
  linkedin: string
  location?: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  tech: string[]
  highlights: string[]
  type: 'fulltime' | 'freelance'
}

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

export interface Project {
  id: string
  name: string
  description: string
  role: string
  client?: string
  period: string
  tech: string[]
  highlights: string[]
  thumbnail?: string
  images?: ProjectImage[]
  liveUrl?: string
  repoUrl?: string
}

export interface Education {
  institution: string
  degree: string
  period: string
  gpa?: string
}

export interface Activity {
  title: string
  organization: string
  description: string
  period: string
}

export interface Profile {
  name: string
  title: string
  summary: string
  contact: ContactInfo
  skills: SkillCategory[]
  experience: Experience[]
  projects: Project[]
  education: Education
  activities: Activity[]
}
