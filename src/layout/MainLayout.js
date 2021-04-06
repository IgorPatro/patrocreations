/* eslint-disable import/no-named-as-default-member */
import * as React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@emotion/react"
import "./globalStyles.css"

import theme from "layout/theme"
import HomeTemplate from "templates/HomeTemplate"
import SubpageTemplate from "templates/SubpageTemplate"
import Navigation from "components/Navigation"

const MainLayout = ({ template, children }) => {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false)

  return (
    <ThemeProvider theme={theme}>
      {template === "home" ? (
        <HomeTemplate
          toggleNavigationFunc={setIsNavigationOpen}
          isNavigationOpen={isNavigationOpen}
        >
          {children}
        </HomeTemplate>
      ) : (
        <SubpageTemplate
          toggleNavigationFunc={setIsNavigationOpen}
          isNavigationOpen={isNavigationOpen}
        >
          {children}
        </SubpageTemplate>
      )}
      <Navigation
        isNavigationOpen={isNavigationOpen}
        turnOffNavigationFunc={() => setIsNavigationOpen(false)}
      />
    </ThemeProvider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  template: PropTypes.string,
}

MainLayout.defaultProps = {
  template: "subpage",
}

export default MainLayout
