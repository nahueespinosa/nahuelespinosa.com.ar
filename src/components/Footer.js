import React from 'react'

import config from '../../data/SiteConfig'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="copyright">
                <li>{config.copyright}</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
