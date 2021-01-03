import { createElement } from "react"
import { applyTheme } from "./src/hooks/useTheme"

export const onRenderBody = ({ setPreBodyComponents }) => {
  const script = createElement("script", {
    dangerouslySetInnerHTML: {
      __html: applyTheme,
    },
  })
  setPreBodyComponents([script])
}