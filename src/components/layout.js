import React from 'react'
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { FaMapMarkerAlt } from "react-icons/fa"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Header from './header'
import Main from './main'
import Footer from './footer'
import LanguageButton from "./language-button"
import Toggler from "./toggler"
import ContextConsumer, { ContextProviderComponent } from "./context"

const Layout = ({ children }) => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  const { siteTitle, location, links } =  useSiteMetadata()
  
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
          <ContextProviderComponent>
            <Header title={siteTitle}>
              <LanguageButton label={t("Layout.Language")} />

              {/* TODO:(nahue): 
                Fix bug, changing language does not load correct theme
                if the theme has changed in the same session.
                Possibly need to reload on every language update.
              */}
              <ContextConsumer>
                {({ set }) => (
                  <Toggler 
                    label={t("Layout.DarkMode")}
                    onChange={() => {
                      const toTheme = theme === 'dark' ? 'light' : 'dark'
                      set({ theme: toTheme })
                      toggleTheme( toTheme )
                    }}
                    checked={theme === 'dark'}
                  />
                )}
              </ContextConsumer>
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
          </ContextProviderComponent>
        )
      }}
    </ThemeToggler>
  )
}

export default Layout
