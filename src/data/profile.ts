import type { Profile } from '@/types'

export const profile: Profile = {
  name: 'Le Phuong Tay',
  title: 'Full-Stack Ruby on Rails Engineer',
  summary: 'Full-Stack Ruby on Rails Engineer with 4+ years building scalable SaaS applications. Specialized in architecting workflow engines, integrating AI capabilities, and delivering end-to-end solutions from database design to production deployment. Targeting Senior/Lead Engineer role within 3 years through deep technical expertise and team leadership.',
  contact: {
    phone: '+84 393 203 261',
    email: 'lp.wanw@gmail.com',
    github: 'lpwanw',
    linkedin: 'lpwanw',
  },
  skills: [
    {
      title: 'Backend & Frameworks',
      skills: ['Ruby on Rails', 'Ruby', 'GraphQL', 'Sidekiq'],
    },
    {
      title: 'Database & Storage',
      skills: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Redis'],
    },
    {
      title: 'Frontend & UI',
      skills: ['JavaScript', 'Hotwire', 'Tailwind CSS'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'AWS', 'Git', 'RSpec'],
    },
  ],
  experience: [
    {
      id: 'tinypulse',
      company: 'TINYpulse by WebMD Health Services',
      role: 'Full-Stack Developer',
      period: 'Feb 2024 - Present',
      type: 'fulltime',
      tech: ['Ruby on Rails', 'ReactJS', 'PostgreSQL', 'Microservices', 'Redis'],
      highlights: [
        'Develop new features for employee engagement platform using Rails + React microservices architecture',
        'Optimize application performance through code refactoring and database query optimization',
        'Resolve technical debt improving system maintainability and test coverage',
        'Collaborate with cross-functional team on full-stack development initiatives',
      ],
    },
    {
      id: 'sun-inc',
      company: 'SUN* INC. (Japanese Tech Company)',
      role: 'Software Engineer',
      period: 'Nov 2021 - Jan 2024',
      type: 'fulltime',
      tech: ['Ruby on Rails', 'NodeJS', 'TypeScript', 'MySQL', 'DynamoDB', 'AWS', 'OAuth'],
      highlights: [
        'Led development of healthcare applications for Japanese clients, extending project from 2 months to 1 year',
        'Mentored team of 4 developers; managed task assignments and conducted code reviews',
        'Integrated third-party APIs (Fitbit, Google Fit, Amazon Gift Cards) for health monitoring features',
        'Designed efficient database structures for MySQL and DynamoDB single-table design',
        'Implemented OAuth authentication and RESTful APIs for secure integrations',
      ],
    },
  ],
  projects: [
    {
      id: 'novalexi',
      name: 'Novalexi - IP Management SaaS Platform',
      description: 'Complete Intellectual Property management SaaS built from scratch for Arabic organization.',
      role: 'Solo Backend Developer (End-to-End)',
      client: 'Arabic Organization',
      period: '2024 - Present',
      tech: ['Ruby on Rails', 'PostgreSQL', 'AWS S3', 'SendGrid', 'AI (ruby_llm)'],
      highlights: [
        'Architected and built complete Intellectual Property management SaaS from scratch',
        'Designed Workflow Engine with hydration templates for complex automation pipelines',
        'Integrated AI capabilities using ruby_llm enabling intelligent chat and data analysis',
        'Implemented file management (S3) and transactional email system (SendGrid)',
        'Planning multi-tenant SaaS expansion architecture',
      ],
      thumbnail: '/images/projects/novalexi/thumbnail.jpg',
      images: [
        {
          src: '/images/projects/novalexi/workflow-engine.jpg',
          alt: 'Workflow engine with hydration templates',
          caption: 'Workflow Engine',
        },
        {
          src: '/images/projects/novalexi/ip-management.jpg',
          alt: 'IP management dashboard',
          caption: 'IP Management',
        },
      ],
    },
    {
      id: 'feedback-robot',
      name: 'Feedback Robot - AI-Powered Customer Feedback Platform',
      description: 'All-in-one customer feedback platform with AI-powered survey creation, automated sentiment analysis, and workflow automation.',
      role: 'Backend Developer - Automation & Radar Features',
      period: '2023 - 2024',
      tech: ['Ruby on Rails', 'PostgreSQL', 'Webhooks', 'REST APIs', 'Third-party Integrations'],
      highlights: [
        'Built Automation feature: Workflow Engine with custom triggers, conditions, and actions for automated feedback processing',
        'Developed Radar feature: Review aggregation system pulling data from multiple platforms (Google, Facebook, Yelp) for cross-platform sentiment analysis',
        'Implemented webhook integrations for real-time event processing and third-party triggers',
        'Designed flexible automation rules supporting conditional logic and multi-step workflows',
      ],
      thumbnail: '/images/projects/feedback-robot/thumbnail.png',
      images: [

        {
          src: '/images/projects/feedback-robot/automation-feature.png',
          alt: 'Workflow automation builder with triggers and actions',
          caption: 'Automation Feature',
        },
        {
          src: '/images/projects/feedback-robot/radar-feature.png',
          alt: 'Review aggregation from Google, Facebook, and Yelp',
          caption: 'Radar Feature',
        },
        {
          src: '/images/projects/feedback-robot/dashboard-overview.png',
          alt: 'Feedback Robot dashboard with survey responses',
          caption: 'Dashboard Overview',
        }
      ],
      liveUrl: 'https://www.feedbackrobot.com/',
    },
  ],
  education: {
    institution: 'Saigon University',
    degree: "Bachelor's in Information Technology",
    period: 'Oct 2018 - May 2023',
    gpa: '3.0',
  },
  activities: [
    {
      title: 'Programming Instructor',
      organization: 'MindX Technology School',
      description: 'Taught foundational programming to 50+ students (kids & teens level)',
      period: '2020 - 2023',
    },
  ],
}
