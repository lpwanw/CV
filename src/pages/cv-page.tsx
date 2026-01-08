import { CVHeader, CVSkills, CVExperience, CVEducation } from '@/components/cv'
import { ExportButton } from '@/components/common/export-button'

export function CVPage() {
  return (
    <div className="min-h-screen bg-bg-primary py-8">
      {/* A4 CV Container */}
      <div
        id="cv-content"
        className="cv-container bg-white text-gray-900 p-8 mx-auto max-w-[210mm]"
      >
        <CVHeader />
        <CVSkills />
        <CVExperience />
        <CVEducation />
      </div>

      {/* Export Controls - Fixed position */}
      <ExportButton
        filename="LePhuongTay-CV.pdf"
        className="fixed bottom-6 right-6"
      />

      {/* Back to Portfolio link */}
      <div className="no-print fixed top-6 left-6">
        <a
          href="/"
          className="text-text-secondary hover:text-primary transition-colors flex items-center gap-2 bg-bg-secondary/80 backdrop-blur-sm px-3 py-2 rounded-lg"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Portfolio
        </a>
      </div>
    </div>
  )
}
