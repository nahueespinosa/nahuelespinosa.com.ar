import { useState, useEffect } from "react"

/**
 * A hook to get and update the current theme for dark mode
 * @returns [theme, toggleTheme] - [current theme, function to toggle theme]
 */
export const useTheme = () => {
  const storedTheme = window !== undefined && window.localStorage.getItem("theme")
  const [ theme, setTheme ] = useState(storedTheme || "light")
  const toggleTheme = () => {
    if (theme !== "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }

    setTheme(prevTheme => {
      return prevTheme === "light" ? "dark" : "light"
    })
  }

  useEffect(() => {
    if (window !== undefined) {
      window.localStorage.setItem("theme", theme)
    }
  }, [theme])

  return [theme, toggleTheme]
}
