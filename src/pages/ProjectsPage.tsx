import PageHeading from "../components/PageHeading";
import { featuredProjects } from "../data/featuredProjects";

// Add an object for each project. The photos array controls gallery order:
// setup first, keyboard second, and Jetson close-up third.
const projects = [
  {
    id: "guiding-hands",
    title: "Guiding Hands",
    // Property names are case-sensitive: this must match project.githubUrl below.
    githubUrl: "https://github.com/leonelh06-lgtm/Knight-Hacks-IX",
    photos: [
      {
        // Reuse Home's image path so replacing the featured photo updates both.
        src: featuredProjects[0].image,
        alt: 'Guiding Hands projector and whiteboard setup',
        width: featuredProjects[0].imageWidth,
        height: featuredProjects[0].imageHeight,
      },
      {
        src: '/projects/guiding-hands-keyboard.jpg',
        alt: 'Hands at a keyboard beside the connected Jetson development setup',
        width: 6000,
        height: 4000,
      },
      {
        src: '/projects/guiding-hands-jetson.jpg',
        alt: 'Close-up of the Jetson Orin Nano with its fan and connected cables',
        width: 6000,
        height: 4000,
      },
    ],
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
      "Python",
      "Javascript",
      "Orin Jetson Nano",
      "Google Mediapipe",
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

      <div className="grid gap-6">
        {projects.map((project) => (
          <article key={project.id} className="panel">
            <h2>{project.title}</h2>
            {/* map preserves the array order. Each photo opens at full size;
                contain in CSS shows the whole image without cropping it. */}
            <div className="project-gallery" role="group" aria-label={`${project.title} photos`}>
              {project.photos.map((photo) => (
                <a key={photo.src} href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size photo: ${photo.alt} (new tab)`}>
                  <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" />
                </a>
              ))}
            </div>
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
            {/* Only display the link when this project has a repository URL. */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link mt-4 inline-block"
              >
                View on GitHub ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
