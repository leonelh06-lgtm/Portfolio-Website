import PageHeading from '../components/PageHeading';

// Vite serves files in public/ directly. BASE_URL also supports hosting this
// site under a subfolder. The preview is rendered from this PDF; download
// still serves the original document with selectable text and working links.
const resumeUrl = `${import.meta.env.BASE_URL}Leonel-Hernandez-Resume.pdf`;
const previewUrl = `${import.meta.env.BASE_URL}resume-preview.png`;

export default function ResumePage() {
  return (
    <>
      <PageHeading title="Resume" description="My education, skills, and experience, all in one place." />
      <div className="mb-5 flex flex-wrap items-center gap-4">
        {/* A normal anchor requests the file instead of a React route.
            download suggests saving it with this readable filename. */}
        <a className="retro-button" href={resumeUrl} download="Leonel-Hernandez-Resume.pdf">Download PDF</a>
        <a className="text-link" href={resumeUrl} target="_blank" rel="noopener noreferrer">Open PDF in a new tab</a>
      </div>
      <section className="resume-stage" aria-label="Resume preview">
        {/* A high-resolution image shows the page without a PDF toolbar.
            The surrounding link opens the accessible, selectable original. */}
        <a className="resume-paper" href={resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="Open full-size resume PDF in a new tab">
          <img src={previewUrl} width="1391" height="1800" alt="Preview of Leonel Hernandez’s resume. Open the PDF to read selectable text, follow links, or zoom in." />
        </a>
      </section>
    </>
  );
}
