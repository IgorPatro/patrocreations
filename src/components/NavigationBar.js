import React from "react"
import { css } from "@emotion/react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import HamburgerButton from "components/HamburgerButton"
import LogoWhite from "assets/logo-white.svg"
import routes from "data/routes"

const displayByWindowSize = (
  displayMethodForPhones,
  displayMethodForDesktops,
  theme
) => css`
  display: ${displayMethodForPhones};

  ${theme.mediaQueries.desktop} {
    display: ${displayMethodForDesktops};
  }
`

const navigationBarStyles = (theme) => css`
  width: 100%;
  z-index: 20;

  ${theme.mediaQueries.desktop} {
    z-index: 0;
  }
`

const phoneVersionStyles = (theme) => css`
  ${displayByWindowSize("flex", "none", theme)}
  justify-content: space-between;
  align-items: center;
`

const logoStyles = (theme) => css`
  height: 30px;

  ${theme.mediaQueries.tablet} {
    height: 40px;
  }

  ${theme.mediaQueries.bigTablet} {
    height: 50px;
  }
`

const desktopVersionStyles = (theme) => css`
  ${displayByWindowSize("none", "flex", theme)}

  justify-content: flex-end;
  font-size: 1.5rem;
  padding: 30px;

  ul {
    display: flex;
    list-style: none;

    li {
      margin-left: 20px;

      a {
        color: ${theme.colors.light};
        text-decoration: none;
      }
    }
  }
`

const NavigationBar = ({ toggleNavigationFunc, isNavigationOpen }) => (
  <div css={navigationBarStyles}>
    <div css={phoneVersionStyles}>
      <img css={logoStyles} src={LogoWhite} alt="Logo strony" />
      <HamburgerButton
        toggleNavigationFunc={toggleNavigationFunc}
        isNavigationOpen={isNavigationOpen}
      />
    </div>
    <div css={desktopVersionStyles}>
      <ul>
        {routes.map((route) => (
          <li key={route.name}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

NavigationBar.propTypes = {
  toggleNavigationFunc: PropTypes.func.isRequired,
  isNavigationOpen: PropTypes.bool.isRequired,
}

export default NavigationBar
