import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import config from '../../data/SiteConfig'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                {config.menuLinks.map(link => (
                    <li><Link onClick={props.onToggleMenu} to={link.link}>{link.name}</Link></li>
                ))}
            </ul>
            <ul className="actions vertical">
                <li><a href="#contact" onClick={props.onToggleMenu} className="button special fit">Contact</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="#close">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
