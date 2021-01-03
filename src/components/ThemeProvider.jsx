import React, { createContext } from "react"
import { useTheme } from "../hooks/useTheme.js"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useTheme()
  
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
		</ThemeContext.Provider>
	)
}

export const ThemeConsumer = ({ children }) => {
  return (
    <ThemeContext.Consumer>
      {children}
    </ThemeContext.Consumer>
  )
}