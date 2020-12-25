import React from 'react'
import Style from "./footer.module.css"
import Config from '../../data/SiteConfig'
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => (
  <div id="footer" className={Style.footer}>
    <div className={Style.container}>
      <div className={Style.info}>
        <p>Anyways... Here is my <a href={"mailto:" + Config.email}>e-mail</a> if you want to reach out.<br/>
        Current location: <FaMapMarkerAlt/> <a href={"https://www.google.com.ar/maps/place/" + Config.location}>{Config.location}</a>.</p>
      </div>
      <div className={Style.links}>
        <a href={Config.twitter}><FaTwitter className={Style.icon}/></a>
        <a href={Config.github}><FaGithub className={Style.icon}/></a>
        <a href={Config.linkedin}><FaLinkedin className={Style.icon}/></a>
      </div>
    </div>
  </div>
)

export default Footer