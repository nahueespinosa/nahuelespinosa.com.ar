import React from "react"
import { ThemeProvider } from "./src/components/ThemeContext"

require("./src/styles/global.css")

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      {element}
    </ThemeProvider>
  )
}
