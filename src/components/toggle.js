import React from 'react'
import Style from './toggle.module.css'

export default function Toggle() {
  const lightText = 'light mode ⚪'
  const darkText = 'dark mode ⚫'

  return (
    <button
      id='dark-mode-button'
      className={Style.button}
      onClick={(event) => {
        const theme =
          typeof window !== 'undefined' && localStorage.getItem('theme')

        if (theme === 'dark') {
          typeof window !== 'undefined' && localStorage.removeItem('theme')
          const link = document.querySelectorAll('#dark-mode')

          if (link) {
            link.forEach((el) => el.remove())
            event.target.textContent = darkText
          }
        } else {
          typeof window !== 'undefined' && localStorage.setItem('theme', 'dark')
          event.target.textContent = lightText

          const head = document.getElementsByTagName('head')[0]
          const link = document.createElement('link')

          link.rel = 'stylesheet'
          link.id = 'dark-mode'
          link.href = '../dark.css'

          head.appendChild(link)
        }
      }}
    >
      {typeof window !== 'undefined' &&
      localStorage.getItem('theme') === 'dark'
      ? lightText
      : darkText}
    </button>
  )
}
