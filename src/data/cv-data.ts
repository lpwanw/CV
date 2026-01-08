import cvDataJson from '../../cv-data.json'

export interface CVData {
  name: string
  title: string
  contact: {
    phone: string
    email: string
    website: string
    github: string
    linkedin: string
    upwork: string
  }
  summary: string
  skills: {
    backend: { title: string; items: string[] }
    database: { title: string; items: string[] }
    frontend: { title: string; items: string[] }
    devops: { title: string; items: string[] }
  }
  professionalExperience: Array<{
    company: string
    role: string
    period: string
    techStack: string[]
    highlights: string[]
  }>
  freelanceProjects: Array<{
    name: string
    role: string
    client?: string
    period: string
    techStack: string[]
    highlights: string[]
    liveUrl?: string
  }>
  education: {
    university: string
    degree: string
    period: string
    gpa: string
  }
  activities: Array<{
    title: string
    organization: string
    period: string
    description: string
  }>
}

export const cvData: CVData = cvDataJson as CVData
