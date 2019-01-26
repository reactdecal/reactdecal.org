import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styles from "./header.module.css"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <div className={styles.container}>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <img src={Logo} className={styles.logo} />
    </Link>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
