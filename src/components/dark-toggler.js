import React, { useState } from "react"
import styled, { css } from "styled-components"
import Switch from "react-switch"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Div = styled.div`
  display: flex;
  align-items: center;
`

const Span = styled.span`
  padding: 0 10px;
  white-space: nowrap;
`

const ScaleAnimation = css`
  @keyframes scale {
    from {
      transform: scale(.5, .5);
      z-index: 10;
      opacity: 0.5
    }
    to {
      transform: scale(30, 30);
      opacity: 1;
    }
  }

 animation: scale var(--theme-animation-time) cubic-bezier(.36, .11, .89, .32);
`

const Circle = styled.div`
  border-radius: 50%;
  background-color: var(--background-color);
  width: 150px;
  height: 150px;
  position: absolute;
  opacity: 0;
  z-index: -1;

  ${props => (
    props.className === 'light' ||
    props.className === 'dark'
  ) && ScaleAnimation}
`

const DarkToggler = ({ label }) => {
  const [expand, setExpand] = useState(0)

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
          // Don't render anything at compile time. Deferring rendering until we
          // know which theme to use on the client avoids incorrect initial
          // state being displayed.
          if (theme == null) {
            return null
          }
          return (
            <Div>
              <Circle className={expand}/>
              <Span>{label}</Span>
              <Switch 
                onChange={() => {
                  const newTheme = (theme === 'dark') ? 'light' : 'dark'
                  toggleTheme(newTheme)
                  setExpand(newTheme)
                }}
                checked={theme === 'dark'}
                height={20}
                width={40}
                handleDiameter={25}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                aria-label="Dark Mode"
              />
            </Div>
          )
      }}
    </ThemeToggler>
  )
}

export default DarkToggler
