import PageHeading from '../components/PageHeading';
import { profile } from '../data/profile';

export default function ContactPage() {
  return (
    <>
      <PageHeading title="Contact" description="Ways to reach me about software engineering opportunities and collaboration." />
      <section className="panel" aria-labelledby="contact-details-title">
        <h2 id="contact-details-title">Contact details</h2>
        {/* A description list pairs labels (dt) with values (dd). It is a
            useful semantic HTML choice for contact information. */}
        <dl className="space-y-5">
          <div>
            <dt className="mb-1 font-medium">Email</dt>
            <dd>{profile.email ? <a className="text-link break-all" href={`mailto:${profile.email}`}>{profile.email}</a> : 'Email address coming soon.'}</dd>
          </div>
          <div>
            <dt className="mb-1 font-medium">LinkedIn</dt>
            <dd>{profile.linkedinUrl ? <a className="text-link" href={profile.linkedinUrl}>Visit my LinkedIn profile</a> : 'LinkedIn profile coming soon.'}</dd>
          </div>
          <div>
            <dt className="mb-1 font-medium">GitHub</dt>
            <dd>{profile.githubUrl ? <a className="text-link" href={profile.githubUrl}>Visit my GitHub profile</a> : 'GitHub profile coming soon.'}</dd>
          </div>
        </dl>
      </section>
    </>
  );
}
