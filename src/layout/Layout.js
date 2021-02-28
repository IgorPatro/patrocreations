/* eslint-disable jsx-a11y/heading-has-content */
import React from "react"
import PropTypes from "prop-types"
import "./globalStyles.scss"

const Layout = ({ children }) => <h1>{children}</h1>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
