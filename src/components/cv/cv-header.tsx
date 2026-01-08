import { cvData } from '@/data/cv-data'

export function CVHeader() {
  const { name, title, contact, summary } = cvData

  return (
    <header className="cv-header mb-3 border-b border-gray-200 pb-2">
      <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
      <p className="text-lg text-emerald-600 font-medium">{title}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mt-2">
        <span>{contact.phone}</span>
        <span>{contact.email}</span>
        <a
          href={contact.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:underline"
        >
          cv.leewestern.com
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href={contact.upwork}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:underline"
        >
          Upwork
        </a>
      </div>
      <p className="mt-2 text-sm text-gray-700 leading-snug">{summary}</p>
    </header>
  )
}
