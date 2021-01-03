import React from 'react'
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { FaMapMarkerAlt, FaRegMoon } from "react-icons/fa"
import { ImSun } from "react-icons/im"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import LanguageButton from "./LanguageButton"
import Toggler from "./Toggler"

const Layout = ({ children }) => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  const { title, location, social } =  useSiteMetadata()
  
  return (
    <>
      <Header title={title}>
        <LanguageButton label={t("Layout.Language")} />
        <Toggler
          iconChecked={<FaRegMoon/>}
          iconUnchecked={<ImSun/>}
          onChange={() => {}}
          checked={false}
        />
      </Header>

      <Main>
        {children}
      </Main>

      <Footer
        social={social}
        message={
          <p>
            <FormattedMessage
              id="Layout.Contact"
              values={{a: chunks => (<a href={social.email}>{chunks}</a>)}}
            />
            <br/>
            {t("Layout.Location")} <FaMapMarkerAlt/>&nbsp;
            <a href={"https://www.google.com.ar/maps/place/" + location}>{location}</a>.
          </p>
        }
      />
    </>
  )
}

export default Layout
