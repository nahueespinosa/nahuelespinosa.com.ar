import React from 'react'
import Switch from 'react-switch'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Style from './dark-toggle.module.css'

const DarkToggle = ({ label }) => {
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
            <div className={Style.toggle}>
              <span>{label}</span>
              <Switch 
                onChange={() =>
                  toggleTheme(theme === 'dark' ? 'light' : 'dark' )
                }
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
            </div>
          )
      }}
    </ThemeToggler>
  )
}

export default DarkToggle
