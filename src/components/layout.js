import React from 'react'
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { FaMapMarkerAlt } from "react-icons/fa"
import Header from './header'
import Main from './main'
import Footer from './footer'
import LanguageButton from "./language-button"
import Toggler from "./toggler"

const Layout = ({ children, data }) => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  const { siteTitle, location, links } = data
  
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
          <>    
            <Header title={siteTitle}>
              <LanguageButton label={t("Layout.Language")} />
              <Toggler 
                label={t("Layout.DarkMode")}
                onChange={() => {toggleTheme(theme === 'dark' ? 'light' : 'dark')}}
                checked={theme === 'dark'}
              />
            </Header>

            <Main>
              {children}
            </Main>

            <Footer
              links={links}
              message={
                <p>
                  <FormattedMessage
                    id="Layout.Contact"
                    values={{a: chunks => (<a href={links.email}>{chunks}</a>)}}
                  />
                  <br/>
                  {t("Layout.Location")} <FaMapMarkerAlt/>&nbsp;
                  <a href={"https://www.google.com.ar/maps/place/" + location}>{location}</a>.
                </p>
              }
            />
          </>
        )
      }}
    </ThemeToggler>
  )
}

export default Layout
