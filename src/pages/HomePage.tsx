import { Link } from 'react-router';
import { profile } from '../data/profile';

export default function HomePage() {
  return (
    <>
      <div className="page-trail">you are here: home / my profile</div>
      {/* Grid creates a narrow profile column and a wider content column.
          A CSS media query stacks them on phones in the same reading order. */}
      <div className="profile-grid">
        <aside className="space-y-5" aria-label="Profile details">
          <section className="panel profile-card">
            <h1 tabIndex={-1} className="profile-name">{profile.name}</h1>
            <p className="profile-quote">“Learning, building, improving daily.”</p>
            <div className="avatar-tile" aria-hidden="true"><span>LH</span><small>hello, world!</small></div>
            <p className="mt-4 font-bold">{profile.role}</p>
            <p>{profile.school}</p>
            <div className="web-badge mt-4">★ full-stack curious</div>
          </section>
          <section className="panel" aria-labelledby="contact-box-title">
            <h2 id="contact-box-title">Contacting Leo</h2>
            <div className="contact-grid">
              <Link to="/contact" className="text-link">✉ Send a message</Link>
              <Link to="/github" className="text-link">⌘ View my code</Link>
              <Link to="/experience" className="text-link">▤ Experience</Link>
              {profile.linkedinUrl && <a href={profile.linkedinUrl} className="text-link">↗ LinkedIn</a>}
            </div>
          </section>
          <section className="panel" aria-labelledby="education-title">
            <h2 id="education-title">Education</h2>
            <dl className="detail-table">
              <div><dt>School</dt><dd>{profile.school}</dd></div>
              <div><dt>Degree</dt><dd>Bachelor’s in Computer Science</dd></div>
              <div><dt>Class of</dt><dd>2029 (expected)</dd></div>
            </dl>
          </section>
          <div className="flex flex-wrap gap-2" aria-label="Site badges"><span className="web-badge">made with React</span><span className="web-badge">pixels & personality</span></div>
        </aside>
        <div className="space-y-5 min-w-0">
          <div className="welcome-banner"><span>WELCOME TO MY LITTLE CORNER OF THE WEB</span><strong>Leo’s space ★</strong><p>Computer science. Creative ideas. One project at a time.</p></div>
          <section className="panel" aria-labelledby="about-title">
            <h2 id="about-title">Leo’s blurbs</h2>
            <h3 className="section-subtitle">About me</h3>
            <p>Hello my name's Leo I am a 2nd year computer science student interested in full stack development and improving daily.</p>
            <h3 className="section-subtitle mt-5">Interests & learning</h3>
            <p>I’m learning web development and building on my basic HTML and CSS knowledge.</p>
            <p className="mt-3">I’m interested in full stack development and growing my skills by building software.</p>
          </section>
          <section className="panel" aria-labelledby="projects-title">
            <h2 id="projects-title">Top projects</h2>
            <p className="mb-4">A little space for the things I’m building.</p>
            <Link className="project-preview" to="/projects"><span className="project-pixel" aria-hidden="true">&lt;/&gt;</span><span><strong>Explore my projects</strong><small>Code, ideas, and lessons along the way →</small></span></Link>
          </section>
          <section className="panel" aria-labelledby="connections-title">
            <h2 id="connections-title">Let’s connect</h2>
            <p>Thanks for stopping by! Explore my experience or get in touch.</p>
            <div className="mt-4 flex flex-wrap gap-4"><Link className="retro-button" to="/experience">View experience</Link><Link className="retro-button" to="/contact">Get in touch</Link></div>
          </section>
        </div>
      </div>
    </>
  );
}
