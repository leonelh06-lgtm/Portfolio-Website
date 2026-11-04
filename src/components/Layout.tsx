import { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import { profile } from '../data/profile';
import ThemeSelector from './ThemeSelector';

// One list supplies the navigation everywhere. NavLink adds aria-current to
// the active link, which helps screen readers and gives CSS a styling hook.
const navigation = [
  { to: '/', label: 'Home' }, { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' }, { to: '/github', label: 'GitHub' },
  { to: '/resume', label: 'Resume' }, { to: '/contact', label: 'Contact' },
];
export default function Layout() {
  const { pathname } = useLocation();
  // Client-side navigation doesn't reload the document, so update title and
  // move focus to the new heading whenever the URL changes.
  useEffect(() => {
    const heading = document.querySelector<HTMLHeadingElement>('main h1');
    document.title = `${heading?.textContent ?? 'Portfolio'} | Leo’s Space`;
    heading?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header>
        <div className="masthead">
          <div><NavLink to="/" className="site-logo">leo.Space<span>★</span></NavLink><p>a small corner of the internet, by {profile.name}</p></div>
          <ThemeSelector />
        </div>
        <nav aria-label="Main navigation" className="main-nav">
          {navigation.map(({ to, label }) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}
        </nav>
      </header>
      {/* Outlet renders the current page inside this shared site frame. */}
      <main id="main-content" className="site-content"><Outlet /></main>
      <footer className="site-footer"><p>Thanks for visiting my space. Come back soon!</p><p>© {new Date().getFullYear()} {profile.name} · Built with curiosity & a few pixels.</p></footer>
    </div>
  );
}
