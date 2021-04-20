/* eslint-disable import/no-named-as-default-member */
import * as React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@emotion/react"
import { CookiesProvider, useCookies } from "react-cookie"
import "./globalStyles.css"

import theme from "layout/theme"
import HomeTemplate from "templates/HomeTemplate"
import SubpageTemplate from "templates/SubpageTemplate"
import Navigation from "components/Navigation"
import CookiesNotification from "components/CookiesNotification"

const MainLayout = ({ template, children }) => {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false)

  const [areCookiesAccepted, setAreCookiesAccepted] = React.useState(true)
  const [cookies, setCookie] = useCookies(["areCookiesAccepted"])

  const acceptCookies = () => {
    const date = new Date()
    date.setDate(date.getDate() + 7)

    setCookie("areCookiesAccepted", true, { expires: date })

    setAreCookiesAccepted(true)
  }

  React.useEffect(() => {
    if (typeof window !== "undefined" && !cookies.areCookiesAccepted) {
      setAreCookiesAccepted(false)
    }
  }, [cookies.areCookiesAccepted])

  return (
    <CookiesProvider>
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
        <CookiesNotification
          areCookiesAccepted={areCookiesAccepted}
          acceptCookiesFunc={acceptCookies}
        />
      </ThemeProvider>
    </CookiesProvider>
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
