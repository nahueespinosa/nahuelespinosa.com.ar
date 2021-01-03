import { useState, useEffect } from "react"

/**
 * A hook to get and update the current theme for dark mode.
 * @returns [theme, toggleTheme] - [current theme, function to toggle theme]
 */
export const useTheme = () => {
  const [ theme, setTheme ] = useState(getInitialTheme())

  loadTheme(theme)

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"

    // Set state variable
    setTheme(() => (newTheme))

    // Load theme
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

  // If the user has explicitly chosen light or dark, use it
  if (typeof storedTheme !== "undefined") {
    return storedTheme
  }

  // Check media query
  const mediaTheme = window.matchMedia("(prefers-color-scheme: dark)")

  if (typeof mediaTheme !== "undefined") {
    return mediaTheme.matches ? "dark" : "light"
  }

  // Default to light
  return "light"
}

/**
 * An injectable function to load style before the
 * content is displayed (Fixes FoUC)
 */
export const applyTheme = `
(function() {
  try {
    var theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark");
    }
  } catch(e) {}
})();
`