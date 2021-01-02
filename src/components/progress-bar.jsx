import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Bar = styled.div`
  position: sticky;
  top: 0;

  height: ${({value}) => value < 1 ? '0' : '3px'};
  background-color: var(--low-contrast-color);

  /* Expand div to 100% of screen */
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
`

const Progress = styled.div`
  background-color: var(--link-color);
  width: ${({value}) => value}%;
  height: 100%;
`

const ProgressBar = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0)

  const scrollListener = () => {
    if (target === undefined || !target.current) {
      return;
    }

    const element = target.current
    const totalHeight = element.clientHeight - element.offsetTop - (window.innerHeight)
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

    if (totalHeight < window.innerHeight) {
      return setReadingProgress(0)
    }

    if (windowScrollTop === 0) {
      return setReadingProgress(0)
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100)
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100)
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  })

  return <Bar value={readingProgress}><Progress value={readingProgress}/></Bar>
}

export default ProgressBar
