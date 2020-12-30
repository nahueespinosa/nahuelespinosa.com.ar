import React from "react"
import Style from "./footer.module.css"
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const t = (text) => { return text }

const Footer = ({ location, links }) => (
  <div id="footer" className={Style.footer}>
    <div className={Style.container}>
      <div className={Style.info}>
        <p>Here is my <a href={links.email}>e-mail</a> if you want to reach out.<br/>
        {t("Footer.Location")} <FaMapMarkerAlt/> <a href={"https://www.google.com.ar/maps/place/" + location}>{location}</a>.</p>
      </div>
      <div className={Style.links}>
        <a href={links.twitter} aria-label="Twitter"><FaTwitter className={Style.icon}/></a>
        <a href={links.github} aria-label="GitHub"><FaGithub className={Style.icon}/></a>
        <a href={links.linkedin} aria-label="LinkedIn"><FaLinkedin className={Style.icon}/></a>
      </div>
    </div>
  </div>
)

export default Footer
