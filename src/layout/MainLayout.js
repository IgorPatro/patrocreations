import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@emotion/react"
import "./globalStyles.css"

import theme from "layout/theme"
import HomeTemplate from "templates/HomeTemplate"
import SubpageTemplate from "templates/SubpageTemplate"

const MainLayout = ({ template, children }) => (
  <ThemeProvider theme={theme}>
    {template === "home" ? (
      <HomeTemplate>{children}</HomeTemplate>
    ) : (
      <SubpageTemplate>{children}</SubpageTemplate>
    )}
  </ThemeProvider>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  template: PropTypes.string,
}

MainLayout.defaultProps = {
  template: "subpage",
}

export default MainLayout
