import { useEffect, useState } from 'react';

const themes = ['classic', 'midnight', 'bubblegum'] as const;
// This type accepts only the three strings above, rather than any text.
type Theme = typeof themes[number];
function savedTheme(): Theme {
  try { return themes.find((theme) => theme === localStorage.getItem('portfolio-theme')) ?? 'classic'; }
  catch { return 'classic'; }
}
export default function ThemeSelector() {
  // State remembers the selection. Updating it re-renders the component.
  const [theme, setTheme] = useState<Theme>(savedTheme);
  useEffect(() => {
    // The attribute activates CSS variables shared by every page.
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch {
      // Privacy settings can block storage; switching still works this visit.
    }
  }, [theme]);
  return <div className="theme-control"><label htmlFor="theme">Theme</label><select id="theme" value={theme} onChange={(event) => setTheme(event.target.value as Theme)}><option value="classic">Classic</option><option value="midnight">Midnight</option><option value="bubblegum">Bubblegum</option></select></div>;
}
