import { useState, useEffect } from "react"

/**
 * A hook to get and update the current theme for dark mode.
 * @returns [theme, toggleTheme] - [current theme, function to toggle theme]
 */
export const useTheme = () => {
  const storedTheme = window !== undefined && window.localStorage.getItem("theme")
  const [ theme, setTheme ] = useState(storedTheme || "light")

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
 * @param {*} theme - Theme to load
 */
const loadTheme = (theme) => {
  if (theme === "dark") {
    document.body.classList.add("dark")
  } else {
    document.body.classList.remove("dark")
  }
}
