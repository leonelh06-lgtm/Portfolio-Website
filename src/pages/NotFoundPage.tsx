import { Link } from 'react-router';
import PageHeading from '../components/PageHeading';

export default function NotFoundPage() {
  return (
    <>
      <PageHeading title="Page not found" description="There isn’t a page at this address." />
      <Link to="/" className="text-link">Return home</Link>
    </>
  );
}
