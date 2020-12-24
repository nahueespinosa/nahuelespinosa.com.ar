import React from 'react'
import style from "./footer.module.css"
import config from '../../data/SiteConfig'

const Footer = () => (
  <div id="footer" className={style.footer}>
    <div className={style.container}>
      <p>Anyways... Here is my <a href={"mailto:" + config.email}>e-mail</a> if you want to reach out.<br/>
      Current location: <a href={"https://www.google.com.ar/maps/place/" + config.location}>{config.location}</a>.</p>
    </div>
  </div>
)

export default Footer