import { Link } from "react-router";
import { profile } from "../data/profile";

export default function HomePage() {
  return (
    <>
      <div className="page-trail">you are here: home / my profile</div>
      {/* Grid creates a narrow profile column and a wider content column.
          A CSS media query stacks them on phones in the same reading order. */}
      <div className="profile-grid">
        <aside className="space-y-5" aria-label="Profile details">
          <section className="panel profile-card">
            <h1 tabIndex={-1} className="profile-name">
              {profile.name}
            </h1>
            <p className="profile-quote">
              “There's no such thing as a painless lesson. You can't gain
              anything without losing something first.”
            </p>
            <div className="avatar-tile">
              <img
                src="https://cdn.discordapp.com/avatars/544316543022923777/2e4c8e97998d4e78d389b906dee81610.webp?size=1536"
                alt="Leonel Hernandez"
                className="profile-photo"
              ></img>
            </div>
            <p className="mt-2 text-center text-sm">Hello, World!</p>
            <p className="mt-4 font-bold">{profile.role}</p>
            <p>{profile.school}</p>
            <div className="web-badge mt-4">★ full-stack development</div>
          </section>
          <section className="panel" aria-labelledby="contact-box-title">
            <h2 id="contact-box-title">Contacting Leo</h2>
            <div className="contact-grid">
              <Link to="/contact" className="text-link">
                ✉ Send a message
              </Link>
              <Link to="/github" className="text-link">
                ⌘ View my code
              </Link>
              <Link to="/experience" className="text-link">
                ▤ Experience
              </Link>
              {profile.linkedinUrl && (
                <a href={profile.linkedinUrl} className="text-link">
                  ↗ LinkedIn
                </a>
              )}
            </div>
          </section>
          <section className="panel" aria-labelledby="education-title">
            <h2 id="education-title">Education</h2>
            <dl className="detail-table">
              <div>
                <dt>School</dt>
                <dd>{profile.school}</dd>
              </div>
              <div>
                <dt>Degree</dt>
                <dd>Bachelor’s in Computer Science</dd>
              </div>
              <div>
                <dt>Class of</dt>
                <dd>2029 (expected)</dd>
              </div>
            </dl>
          </section>
          <div className="flex flex-wrap gap-2" aria-label="Site badges">
            <span className="web-badge">made with React</span>
            <span className="web-badge">pixels & personality</span>
          </div>
        </aside>
        <div className="space-y-5 min-w-0">
          <div className="welcome-banner">
            <span>WELCOME TO MY LITTLE CORNER OF THE WEB</span>
            <strong>
              Leo’s Space
              {/* Decorative artwork is hidden from screen readers so the
                  title is still read simply as "Leo’s Space". */}
              <svg
                className="welcome-moon"
                viewBox="0 0 32 32"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M23 3a13 13 0 1 0 6 21A13 13 0 0 1 23 3Z" />
              </svg>
            </strong>
            <p>Computer science. Creative ideas. One project at a time.</p>
          </div>
          <section className="panel" aria-labelledby="about-title">
            <h2 id="about-title">Me</h2>
            <h3 className="section-subtitle">About me</h3>
            <p>
              Hello my name's Leo I am a 2nd year computer science student
              studying at the Univeristy of Central Florida interested in full
              stack development and improving daily. I really enjoy books and
              anime specifically "Full Metal Alchemist" or anything written by
              Brandon Sanderson
            </p>
            <h3 className="section-subtitle mt-5">Interests & learning</h3>
            {/* Tailwind removes default list bullets. list-disc restores them,
                pl-5 leaves room for the markers, and space-y-3 separates items. */}
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <p>
                  I am currently learning and creating full stack development
                  projects.
                </p>
              </li>
              <li>
                <p>
                  I’m interested in full stack development and growing my skills
                  by building software.
                </p>
              </li>
            </ul>
          </section>
          <section className="panel" aria-labelledby="projects-title">
            <h2 id="projects-title">Top projects</h2>
            <p className="mb-4">A little space for the things I’m building.</p>
            <Link className="project-preview" to="/projects">
              <span className="project-pixel" aria-hidden="true">
                &lt;/&gt;
              </span>
              <span>
                <strong>Explore my projects</strong>
                <small>Code, ideas, and lessons along the way →</small>
              </span>
            </Link>
          </section>
          <section className="panel" aria-labelledby="connections-title">
            <h2 id="connections-title">Let’s connect</h2>
            <p>
              Thanks for stopping by! Explore my experience or get in touch.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link className="retro-button" to="/experience">
                View experience
              </Link>
              <Link className="retro-button" to="/contact">
                Get in touch
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
