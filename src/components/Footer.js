import React from 'react'

import config from '../../data/SiteConfig'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href={config.github} className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href={config.linkedin} className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy;2020, Nahuel Espinosa</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
