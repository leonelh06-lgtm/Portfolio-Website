import PageHeading from '../components/PageHeading';
import { profile } from '../data/profile';

export default function GitHubPage() {
  return (
    <>
      <PageHeading title="GitHub" description="Source code, repositories, and what I’m building." />
      <section className="panel" aria-labelledby="github-profile-title">
        <h2 id="github-profile-title">My GitHub profile</h2>
        {/* A ternary expression means condition ? showThis : showThat.
            An empty string is falsy, so no placeholder URL becomes a link. */}
        {profile.githubUrl ? (
          <a className="text-link" href={profile.githubUrl}>Visit my GitHub profile</a>
        ) : (
          <p className="placeholder">GitHub profile coming soon.</p>
        )}
        <p className="mt-4">This page will highlight repositories and explain what I learned while building them.</p>
      </section>
      <section className="panel mt-6" aria-labelledby="repositories-title">
        <h2 id="repositories-title">Featured repositories</h2>
        <p className="placeholder">Add repository names, short descriptions, and links when you’re ready to share your code.</p>
      </section>
    </>
  );
}
