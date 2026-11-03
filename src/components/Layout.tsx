import { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import { profile } from '../data/profile';

// An array stores a list. Keeping navigation data together makes adding or
// renaming a link easier than maintaining six separate navigation bars.
const navigation = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/github', label: 'GitHub' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout() {
  const { pathname } = useLocation();

  // A hook lets a component use React features. useEffect runs after rendering;
  // [pathname] means run again when the URL path changes. Client-side navigation
  // doesn't reload the document, so we update its title and focus ourselves.
  useEffect(() => {
    const heading = document.querySelector<HTMLHeadingElement>('main h1');
    document.title = `${heading?.textContent ?? 'Portfolio'} | Student Portfolio`;
    heading?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:p-4">Skip to content</a>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-6">
          <p className="mb-4 font-semibold">{profile.name} / Portfolio</p>
          {/* flex-wrap lets links flow onto another line on narrow screens.
              aria-label names this landmark for screen-reader users. */}
          <nav aria-label="Main navigation" className="flex flex-wrap gap-2">
            {navigation.map(({ to, label }) => (
              // map turns each data item into an element. key gives React a
              // stable identity for each item when a list changes.
              <NavLink key={to} to={to} end={to === '/'}
                className={({ isActive }) => `rounded px-3 py-2 text-sm ${
                  isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                }`}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      {/* flex-1 uses remaining height so short pages still have a low footer.
          Outlet is replaced by the matching page without duplicating Layout. */}
      <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-5 py-10">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 px-5 py-5 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
