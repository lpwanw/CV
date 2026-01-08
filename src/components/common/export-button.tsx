import { useState } from 'react'
import { clsx } from 'clsx'
import { Button } from './button'
import { exportToPDF } from '@/utils/pdf-export'

interface ExportButtonProps {
  filename?: string
  className?: string
}

export function ExportButton({
  filename = 'LePhuongTay-CV.pdf',
  className = '',
}: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async (): Promise<void> => {
    setIsExporting(true)
    try {
      await exportToPDF({ filename })
    } finally {
      setIsExporting(false)
    }
  }

  const handlePrint = (): void => {
    window.print()
  }

  return (
    <div className={clsx('no-print flex gap-2', className)}>
      <Button
        onClick={handleExport}
        disabled={isExporting}
        variant="primary"
        size="md"
        leftIcon={
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
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        }
      >
        {isExporting ? 'Exporting...' : 'Export PDF'}
      </Button>
      <Button
        onClick={handlePrint}
        variant="secondary"
        size="md"
        leftIcon={
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
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
        }
      >
        Print
      </Button>
    </div>
  )
}
