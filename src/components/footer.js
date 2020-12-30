import React from "react"
import Style from "./footer.module.css"
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const Footer = ({ location, links }) => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  return (
    <footer className={Style.footer}>
      <div className={Style.container}>
        <div className={Style.info}>
          <p>
            <FormattedMessage
              id="Footer.Contact"
              values={{
                a: chunks => (<a href={links.email}>{chunks}</a>)
              }}
            />
            <br/>
            {t("Footer.Location")} <FaMapMarkerAlt/> <a href={"https://www.google.com.ar/maps/place/" + location}>{location}</a>.
          </p>
        </div>
        <div className={Style.links}>
          <a href={links.twitter} aria-label="Twitter"><FaTwitter className={Style.icon}/></a>
          <a href={links.github} aria-label="GitHub"><FaGithub className={Style.icon}/></a>
          <a href={links.linkedin} aria-label="LinkedIn"><FaLinkedin className={Style.icon}/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
