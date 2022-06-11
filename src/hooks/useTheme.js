import { useState, useEffect } from "react"

/**
 * Default theme value, supports two types of string values:
 *   "dark" - dark mode
 *   anything else - light mode
 */
const defaultTheme = "light"

/**
 * A helper function to load the selected theme.
 * @param theme - Theme to load
 */
 const loadTheme = (theme) => {
  if (theme === "dark") {
    document.body.classList.add("dark")
  } else {
    document.body.classList.remove("dark")
  }
}

/**
 * A helper function to obtain the initial theme on load.
 * @return Initial theme value
 */
const getInitialTheme = () => {
  const storedTheme = window.localStorage.getItem("theme")
  if (typeof storedTheme === "string") {
    return storedTheme
  }

  const mediaTheme = window.matchMedia("(prefers-color-scheme: dark)")
  if (mediaTheme.matches) {
    return "dark"
  }

  return defaultTheme
}

/**
 * A hook to get and update the current theme for dark mode.
 * @returns [theme, toggleTheme] - [current theme, function to toggle theme]
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme())

  loadTheme(theme)

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(() => (newTheme))
    loadTheme(newTheme)
  }

  useEffect(() => {
    if (window !== undefined) {
      window.localStorage.setItem("theme", theme)
    }
  }, [theme])

  return [theme, toggleTheme]
}

/**
 * An injectable function to load style before the
 * content is displayed (Fixes FoUC)
 */
export const applyTheme = `
(function() {
  try {
    var storedTheme = window.localStorage.getItem("theme")
    var theme = (typeof storedTheme === "string") ? storedTheme : "${defaultTheme}";
    if (theme === "dark") {
      document.body.classList.add("dark");
    }
  } catch(e) {}
})();
`
