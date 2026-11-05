import PageHeading from "../components/PageHeading";
import { experience } from "../data/experience";

export default function ExperiencePage() {
  return (
    <>
      <PageHeading
        title="Experience"
        description="Work, collaboration, and learning beyond individual projects."
      />
      {/* Each item becomes a themed panel. Stable IDs connect the accessible
          section label to its heading and help React track individual entries. */}
      <div className="space-y-6">
        {experience.map((entry) => (
          <section key={entry.id} className="panel experience-card" aria-labelledby={`${entry.id}-title`}>
            <h2 id={`${entry.id}-title`}>{entry.role}</h2>
            <div className="experience-meta">
              <div>
                <p className="font-bold">{entry.organization}</p>
                {/* && only renders a location when one was provided. */}
                {entry.location && <p className="muted-text text-sm">{entry.location}</p>}
              </div>
              <p className="experience-dates">{entry.dates}</p>
            </div>
            <p className="experience-category">{entry.category}</p>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              {entry.highlights.map((highlight) => (
                <li key={highlight}><p>{highlight}</p></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
