import PageHeading from '../components/PageHeading';

// This is a sample content structure, not a claim about completed work.
// Add more objects to this array as you add real projects. TypeScript infers
// (figures out) its shape from these values, including technologies as a list.
const projects = [{
  id: 'first-project',
  title: 'Your first project',
  summary: 'Replace this with the problem your project solves and who it helps.',
  technologies: ['Language or framework', 'Another tool'],
}];

export default function ProjectsPage() {
  return (
    <>
      <PageHeading title="Projects" description="A place to share what I build and explain how it works." />
      <p className="placeholder mb-5">Sample entry — replace with your own work.</p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="panel">
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <ul aria-label="Technologies" className="my-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li key={technology} className="rounded bg-slate-100 px-2 py-1 text-sm">{technology}</li>
              ))}
            </ul>
            <p className="placeholder">Add your contribution, a challenge you solved, and links to the repository or demo.</p>
          </article>
        ))}
      </div>
    </>
  );
}
