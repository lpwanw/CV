import { cvData } from '@/data/cv-data'

interface ExportOptions {
  filename?: string
}

export async function exportToPDF(options: ExportOptions = {}): Promise<void> {
  const { filename = 'LePhuongTay-CV.pdf' } = options

  // Dynamic import to reduce bundle size
  const { jsPDF } = await import('jspdf')

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })

  const pageWidth = 210
  const pageHeight = 297
  const margin = 15
  const contentWidth = pageWidth - margin * 2
  let y = margin

  // Colors
  const emerald = '#059669'
  const gray900 = '#111827'
  const gray600 = '#4b5563'
  const gray500 = '#6b7280'

  // Helper: add line separator
  const addLine = () => {
    doc.setDrawColor('#d1d5db')
    doc.setLineWidth(0.3)
    doc.line(margin, y, pageWidth - margin, y)
    y += 2
  }

  // Helper: check page break
  const checkPageBreak = (neededSpace: number) => {
    if (y + neededSpace > pageHeight - margin) {
      doc.addPage()
      y = margin
      return true
    }
    return false
  }

  // === HEADER ===
  doc.setFontSize(20)
  doc.setTextColor(gray900)
  doc.setFont('helvetica', 'bold')
  doc.text(cvData.name, margin, y)
  y += 7

  doc.setFontSize(12)
  doc.setTextColor(emerald)
  doc.setFont('helvetica', 'normal')
  doc.text(cvData.title, margin, y)
  y += 6

  // Contact info
  doc.setFontSize(9)
  doc.setTextColor(gray600)
  const contactText = `${cvData.contact.phone}  |  ${cvData.contact.email}  |  cv.leewestern.com  |  GitHub: github.com/lpwanw`
  doc.text(contactText, margin, y)
  y += 4
  const contactText2 = `LinkedIn: linkedin.com/in/lpwanw  |  Upwork: upwork.com/freelancers/~01945da5cf8c50be5d`
  doc.text(contactText2, margin, y)
  y += 5

  // Summary
  doc.setFontSize(9)
  doc.setTextColor(gray600)
  const summaryLines = doc.splitTextToSize(cvData.summary, contentWidth)
  doc.text(summaryLines, margin, y)
  y += summaryLines.length * 3.5 + 8

  // === TECHNICAL SKILLS ===
  doc.setFontSize(12)
  doc.setTextColor(gray900)
  doc.setFont('helvetica', 'bold')
  doc.text('Technical Skills', margin, y)
  y += 1
  addLine()
  y += 3

  const skillCategories = [
    { title: cvData.skills.backend.title, items: cvData.skills.backend.items },
    { title: cvData.skills.database.title, items: cvData.skills.database.items },
    { title: cvData.skills.frontend.title, items: cvData.skills.frontend.items },
    { title: cvData.skills.devops.title, items: cvData.skills.devops.items },
  ]

  skillCategories.forEach((cat) => {
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(gray900)
    doc.text(`${cat.title}: `, margin, y)
    const titleWidth = doc.getTextWidth(`${cat.title}: `)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(gray600)
    const itemsText = cat.items.join(', ')
    const lines = doc.splitTextToSize(itemsText, contentWidth - titleWidth)
    doc.text(lines, margin + titleWidth, y)
    y += lines.length * 4 + 1
  })
  y += 6

  // === PROFESSIONAL EXPERIENCE ===
  doc.setFontSize(12)
  doc.setTextColor(gray900)
  doc.setFont('helvetica', 'bold')
  doc.text('Professional Experience', margin, y)
  y += 1
  addLine()
  y += 3

  cvData.professionalExperience.forEach((exp) => {
    checkPageBreak(30)

    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(gray900)
    doc.text(exp.company, margin, y)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(gray500)
    doc.text(exp.period, pageWidth - margin - doc.getTextWidth(exp.period), y)
    y += 4

    doc.setFontSize(9)
    doc.setTextColor(gray600)
    doc.text(exp.role, margin, y)
    y += 4

    doc.setFontSize(8)
    doc.setTextColor(emerald)
    doc.text(exp.techStack.join(' • '), margin, y)
    y += 4

    doc.setFontSize(9)
    doc.setTextColor(gray600)
    exp.highlights.forEach((h) => {
      checkPageBreak(8)
      doc.text('•', margin, y)
      const lines = doc.splitTextToSize(h, contentWidth - 5)
      doc.text(lines, margin + 4, y)
      y += lines.length * 3.5 + 1
    })
    y += 4
  })

  y += 4

  // === FREELANCE PROJECTS ===
  doc.setFontSize(11)
  doc.setTextColor(gray900)
  doc.setFont('helvetica', 'bold')
  doc.text('Freelance Projects (Upwork)', margin, y)
  y += 1
  addLine()
  y += 3

  cvData.freelanceProjects.forEach((project) => {
    checkPageBreak(30)

    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(gray900)
    doc.text(project.name, margin, y)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(gray500)
    doc.text(project.period, pageWidth - margin - doc.getTextWidth(project.period), y)
    y += 4

    doc.setFontSize(9)
    doc.setTextColor(gray600)
    let roleText = `Role: ${project.role}`
    if (project.client) roleText += ` | Client: ${project.client}`
    doc.text(roleText, margin, y)
    y += 4

    doc.setFontSize(8)
    doc.setTextColor(emerald)
    doc.text(project.techStack.join(' • '), margin, y)
    y += 4

    doc.setFontSize(9)
    doc.setTextColor(gray600)
    project.highlights.forEach((h) => {
      checkPageBreak(8)
      doc.text('•', margin, y)
      const lines = doc.splitTextToSize(h, contentWidth - 5)
      doc.text(lines, margin + 4, y)
      y += lines.length * 3.5 + 1
    })
    y += 4
  })

  y += 4

  // === EDUCATION ===
  checkPageBreak(25)
  doc.setFontSize(12)
  doc.setTextColor(gray900)
  doc.setFont('helvetica', 'bold')
  doc.text('Education', margin, y)
  y += 1
  addLine()
  y += 3

  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(gray900)
  doc.text(cvData.education.university, margin, y)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(gray500)
  doc.text(cvData.education.period, pageWidth - margin - doc.getTextWidth(cvData.education.period), y)
  y += 4

  doc.setFontSize(9)
  doc.setTextColor(gray600)
  doc.text(`${cvData.education.degree} | GPA: ${cvData.education.gpa}`, margin, y)
  y += 8

  // === ADDITIONAL ACTIVITIES ===
  if (cvData.activities.length > 0) {
    checkPageBreak(20)
    doc.setFontSize(11)
    doc.setTextColor(gray900)
    doc.setFont('helvetica', 'bold')
    doc.text('Additional Activities', margin, y)
    y += 1
    addLine()
    y += 3

    cvData.activities.forEach((act) => {
      doc.setFontSize(9)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(gray900)
      doc.text(`${act.title} — ${act.organization}`, margin, y)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(gray500)
      doc.text(act.period, pageWidth - margin - doc.getTextWidth(act.period), y)
      y += 4

      doc.setFontSize(9)
      doc.setTextColor(gray600)
      doc.text(act.description, margin, y)
      y += 5
    })
  }

  // Save PDF - triggers download
  doc.save(filename)
}
