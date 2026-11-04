import { useEffect, useState } from "react";

const themes = ["midnight", "classic", "bubblegum"] as const;
// The old key also stored automatic defaults, so we cannot tell whether a
// visitor chose Classic. A new key remembers only deliberate selections.
const themeStorageKey = "portfolio-theme-choice";
// This type accepts only the three strings above, rather than any text.
type Theme = (typeof themes)[number];
function savedTheme(): Theme {
  // Keep a visitor's saved choice. With no valid choice (or blocked storage),
  // use Midnight as the default; ?? supplies a fallback when find returns undefined.
  try {
    return (
      themes.find((theme) => theme === localStorage.getItem(themeStorageKey)) ??
      "midnight"
    );
  } catch {
    return "midnight";
  }
}
export default function ThemeSelector() {
  // State remembers the selection. Updating it re-renders the component.
  const [theme, setTheme] = useState<Theme>(savedTheme);
  useEffect(() => {
    // The attribute activates CSS variables shared by every page.
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  function chooseTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    // Persist only user changes. If storage is blocked, React state still
    // keeps the chosen theme active for the current visit.
    try {
      localStorage.setItem(themeStorageKey, nextTheme);
    } catch {}
  }
  // Daylight is the visible name; keep its internal value "classic" so
  // existing saved preferences and CSS theme colors continue to work.
  return (
    <div className="theme-control">
      <label htmlFor="theme">Theme</label>
      <select
        id="theme"
        value={theme}
        onChange={(event) => chooseTheme(event.target.value as Theme)}
      >
        <option value="midnight">Default</option>
        <option value="classic">Daylight</option>
        <option value="bubblegum">Bubblegum</option>
      </select>
    </div>
  );
}
