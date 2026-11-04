import PageHeading from "../components/PageHeading";

// This is a sample content structure, not a claim about completed work.
// Add more objects to this array as you add real projects. TypeScript infers
// (figures out) its shape from these values, including technologies as a list.
const projects = [
  {
    id: "guiding-hands",
    title: "Guiding Hands",
    summary: (
      <>
        Guiding Hands is a
        <strong> gameification of stroke rehabilitation</strong> which
        implements hand gestures used in stroke physical rehabilitation for the
        movement of the playable character dispalyed on a{" "}
        <strong>2D surface via projection.</strong>
      </>
    ),
    technologies: [
      "Google Mediapipe",
      "Orin Jetson Nano",
      "Python",
      "Javascript",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeading
        title="Projects"
        description="A place to share what I build and explain how it works."
      />
      <p className="placeholder mb-5">
        Sample entry — replace with your own work.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="panel">
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <ul aria-label="Technologies" className="my-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded bg-slate-100 px-2 py-1 text-sm"
                >
                  {technology}
                </li>
              ))}
            </ul>
            <p className="placeholder">
              While working with a team of 4 implemented Google Mediapipe
              hardware acceleration running locally on Jetson Orin Nano as well
              as worked on web integration
            </p>
          </article>
        ))}
      </div>
    </>
  );
}
