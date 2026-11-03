import PageHeading from '../components/PageHeading';
import { profile } from '../data/profile';

export default function AboutPage() {
  return (
    <>
      <PageHeading title="About me" description="My education, interests, and what I’m learning." />
      {/* Unprefixed utilities apply at all widths. md:grid-cols-2 switches to
          two columns on medium screens and larger, keeping phones readable. */}
      <div className="grid gap-6 md:grid-cols-2">
        <section className="panel" aria-labelledby="education-title">
          <h2 id="education-title">Education</h2>
          <p>{profile.role}</p>
          <p>{profile.school}</p>
          <p className="placeholder mt-4">Add your degree, expected graduation date, and relevant coursework.</p>
        </section>
        <section className="panel" aria-labelledby="interests-title">
          <h2 id="interests-title">Interests & learning</h2>
          <p>I’m learning web development and building on my basic HTML and CSS knowledge.</p>
          <p className="placeholder mt-4">Add the areas of software engineering you want to explore and skills you’ve practiced.</p>
        </section>
      </div>
    </>
  );
}
