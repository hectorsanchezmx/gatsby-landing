import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './header.scss'
import logo from './module-logo.png'

const Header = ({ menu }) => (
  <header>
    <div className="wrapper">
      <div className="logo"><img src={logo}/></div>
      <div className="navigation">
        { menu.map((item) => {
          return (
            <Link className="navigation__item" to={ item.link }>{ item.text }</Link>
          )
        })}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  menu: PropTypes.node.isRequired,
}

Header.defaultProps = {
}

export default Header
