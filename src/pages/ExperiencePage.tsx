import PageHeading from '../components/PageHeading';

export default function ExperiencePage() {
  return (
    <>
      <PageHeading title="Experience" description="Work, collaboration, and learning beyond individual projects." />
      <section className="panel" aria-labelledby="experience-title">
        <p className="placeholder mb-3">Sample entry — replace with real experience.</p>
        <h2 id="experience-title">Role or activity title</h2>
        <p className="text-slate-600">Organization · Start date – End date</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Describe what you contributed and who you worked with.</li>
          <li>Explain a skill you practiced or a problem you helped solve.</li>
        </ul>
      </section>
      <p className="placeholder mt-5">You can include internships, part-time jobs, clubs, volunteering, hackathons, or coursework with a team.</p>
    </>
  );
}
