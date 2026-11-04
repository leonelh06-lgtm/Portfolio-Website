import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';
import { profile } from './data/profile';

afterEach(cleanup);
// jsdom has no visual viewport and cannot scroll. Stub that browser-only side
// effect, while still exercising the real router and rendered page components.
beforeEach(() => { vi.spyOn(window, 'scrollTo').mockImplementation(() => {}); });

// MemoryRouter simulates URLs without a server. These checks protect the main
// visitor journey: navigating between pages and recovering from a bad URL.
describe('portfolio navigation', () => {
  it('opens all pages from shared navigation and marks the active link', async () => {
    const user = userEvent.setup();
    render(<MemoryRouter><App /></MemoryRouter>);
    const nav = screen.getByRole('navigation', { name: 'Main navigation' });
    const destinations = [
      ['Projects', 'Projects'],
      ['Experience', 'Experience'], ['GitHub', 'GitHub'],
      ['Resume', 'Resume'],
      ['Contact', 'Contact'], ['Home', profile.name],
    ];
    for (const [label, heading] of destinations) {
      const link = within(nav).getByRole('link', { name: label });
      await user.click(link);
      expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(heading);
      expect(link.getAttribute('aria-current')).toBe('page');
    }
  });

  it('offers a PDF preview and a download of the same resume', () => {
    render(<MemoryRouter initialEntries={['/resume']}><App /></MemoryRouter>);
    const download = screen.getByRole('link', { name: 'Download PDF' });
    expect(download.getAttribute('download')).toBe('Leonel-Hernandez-Resume.pdf');
    expect(screen.getByRole('img', { name: /Preview of Leonel/ }).getAttribute('src')).toBe('/resume-preview.png');
    expect(screen.getByRole('link', { name: 'Open full-size resume PDF in a new tab' }).getAttribute('href')).toBe(download.getAttribute('href'));
    expect(screen.getByRole('link', { name: 'Open PDF in a new tab' }).getAttribute('href')).toBe(download.getAttribute('href'));
  });

  it('uses the configured contact details', () => {
    render(<MemoryRouter initialEntries={['/contact']}><App /></MemoryRouter>);
    expect(screen.getByRole('link', { name: profile.email }).getAttribute('href')).toBe(`mailto:${profile.email}`);
  });

  it('offers a working home link for unknown nested URLs', async () => {
    render(<MemoryRouter initialEntries={['/missing/nested']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeTruthy();
    await userEvent.click(screen.getByRole('link', { name: 'Return home' }));
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(profile.name);
  });

  it('redirects the old about URL to Home with education intact', () => {
    render(<MemoryRouter initialEntries={['/about']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(profile.name);
    expect(screen.getByText(/2029/)).toBeTruthy();
    expect(screen.queryByRole('link', { name: 'About Me' })).toBeNull();
  });

  it('starts in Midnight even when the old site automatically saved Classic', () => {
    localStorage.clear();
    localStorage.setItem('portfolio-theme', 'classic');
    render(<MemoryRouter><App /></MemoryRouter>);
    expect((screen.getByLabelText('Theme') as HTMLSelectElement).value).toBe('midnight');
    expect(document.documentElement.dataset.theme).toBe('midnight');
  });

  it('switches themes and remembers the choice after remount', async () => {
    localStorage.clear();
    const view = render(<MemoryRouter><App /></MemoryRouter>);
    await userEvent.selectOptions(screen.getByLabelText('Theme'), 'classic');
    expect(document.documentElement.dataset.theme).toBe('classic');
    view.unmount();
    render(<MemoryRouter><App /></MemoryRouter>);
    expect((screen.getByLabelText('Theme') as HTMLSelectElement).value).toBe('classic');
    await userEvent.selectOptions(screen.getByLabelText('Theme'), 'bubblegum');
    expect(document.documentElement.dataset.theme).toBe('bubblegum');
  });
});
