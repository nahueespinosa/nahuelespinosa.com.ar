import React, { useState } from "react"
import styled from "styled-components"
import { FaArrowUp } from "react-icons/fa"

const Arrow = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 0;
  right: 0;
  font-size: 2.5em;
  padding: 0.5em;
  
  z-index: 10;
  display: ${({ show }) => show ? "flex" : "none"};
  color: var(--link-color);
  opacity: 0.5;
`

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  window.addEventListener("scroll", checkScrollTop)

  return (
    <Arrow onClick={scrollTop} show={showScroll}><FaArrowUp/></Arrow>
  )
}

export default ScrollArrow
