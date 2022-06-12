import React from 'react'
import styled from 'styled-components'
import {useIntl, FormattedMessage} from 'gatsby-plugin-intl'
import {FaMapMarkerAlt, FaRegMoon, FaMoon} from 'react-icons/fa'
import {RiSunFill, RiSunLine} from 'react-icons/ri'
import {useSiteMetadata} from '../hooks/useSiteMetadata'
import {ThemeConsumer} from './ThemeContext'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import LanguageButton from './LanguageButton'
import Toggler from './Toggler'

const Wrapper = styled.div`
  min-height: 100vh;
`

const Layout = ({children}) => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({id})

  const {title, location, social} = useSiteMetadata()

  return (
    <>
      <Wrapper>
        <Header title={title}>
          <LanguageButton label={t('Layout.Language')} />
          <ThemeConsumer>
            {(state) => state === undefined ? <></> : (
              <Toggler
                icon={state.theme === 'dark' ? <RiSunLine/> : <FaRegMoon/>}
                iconHovered={state.theme === 'dark' ? <RiSunFill/> : <FaMoon/>}
                onChange={() => {
                  state.toggleTheme()
                }}
                checked={state.theme === 'dark'}
              />
            )}
          </ThemeConsumer>
        </Header>
        <Main>
          {children}
        </Main>
      </Wrapper>
      <Footer
        social={social}
        message={
          <p>
            <FormattedMessage
              id="Layout.Contact"
              values={{a: (chunks) => (<a href={social.email}>{chunks}</a>)}}
            />
            <br/>
            {t('Layout.Location')} <FaMapMarkerAlt/>&nbsp;
            <a href={'https://www.google.com.ar/maps/place/' + location}>{location}</a>.
          </p>
        }
      />
    </>
  )
}

export default Layout
