import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

afterEach(cleanup);
// jsdom has no visual viewport and cannot scroll. Stub that browser-only side
// effect, while still exercising the real router and rendered page components.
beforeEach(() => { vi.spyOn(window, 'scrollTo').mockImplementation(() => {}); });

// MemoryRouter simulates URLs without a server. These checks protect the main
// visitor journey: navigating between pages and recovering from a bad URL.
describe('portfolio navigation', () => {
  it('opens all six pages from shared navigation and marks the active link', async () => {
    const user = userEvent.setup();
    render(<MemoryRouter><App /></MemoryRouter>);
    const nav = screen.getByRole('navigation', { name: 'Main navigation' });
    const destinations = [
      ['About Me', 'About me'], ['Projects', 'Projects'],
      ['Experience', 'Experience'], ['GitHub', 'GitHub'],
      ['Contact', 'Contact'], ['Home', 'Your Name'],
    ];
    for (const [label, heading] of destinations) {
      const link = within(nav).getByRole('link', { name: label });
      await user.click(link);
      expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(heading);
      expect(link.getAttribute('aria-current')).toBe('page');
    }
  });

  it('does not create pretend contact or GitHub profile links', () => {
    render(<MemoryRouter initialEntries={['/contact']}><App /></MemoryRouter>);
    expect(screen.getByText('Email address coming soon.')).toBeTruthy();
    expect(document.querySelector('a[href^="mailto:"]')).toBeNull();
    expect(document.querySelector('a[href*="github.com/"]')).toBeNull();
  });

  it('offers a working home link for unknown nested URLs', async () => {
    render(<MemoryRouter initialEntries={['/missing/nested']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeTruthy();
    await userEvent.click(screen.getByRole('link', { name: 'Return home' }));
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Your Name');
  });
});
