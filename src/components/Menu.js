import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import config from '../../data/SiteConfig'
import config_es from '../../data/SiteConfig.es'

function getConfig(lang) {
    if( lang === 'es' ) {
        return config_es
    }
    else {
        return config
    }
}

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                {getConfig(props.lang).menuLinks.map(item => (
                    <li><Link onClick={props.onToggleMenu} to={item.link}>{item.name}</Link></li>
                ))}
            </ul>
            <ul className="actions vertical">
                <li><a href="#contact" onClick={props.onToggleMenu} className="button special fit">{props.lang === 'es' ? 'Contacto' : 'Contact'}</a></li>
                <li><a href={props.lang === 'es' ? '/' : '/es/'} className="button fit">{props.lang === 'es' ? 'Go to English Version' : 'Ir a Versión en Español'}</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="#close">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
