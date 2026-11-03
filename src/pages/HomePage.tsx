import { Link } from 'react-router';
import PageHeading from '../components/PageHeading';
import { profile } from '../data/profile';

export default function HomePage() {
  return (
    <>
      {/* A fragment (<>...</>) groups elements without adding an extra div. */}
      <PageHeading title={profile.name} description={profile.role} />
      <section className="panel mb-6" aria-labelledby="intro-title">
        <h2 id="intro-title">Welcome to my portfolio</h2>
        <p>I’m studying computer science and learning how to build software. This portfolio will share my projects, experience, and progress.</p>
        <p className="placeholder mt-4">Personalize this introduction with your interests and the opportunities you’re looking for.</p>
      </section>
      <div className="flex flex-wrap gap-5">
        {/* Use Link for internal navigation: it changes the URL without a full
            page reload. Use a regular <a> for external websites or email. */}
        <Link to="/projects" className="text-link">Explore my projects</Link>
        <Link to="/contact" className="text-link">Get in touch</Link>
      </div>
    </>
  );
}
