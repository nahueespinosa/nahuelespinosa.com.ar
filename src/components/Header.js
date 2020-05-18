import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to={ props.lang === 'es' ? '/es/' : '/'} className="logo"><strong>Nahuel</strong> <span>Espinosa</span></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="#menu">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
