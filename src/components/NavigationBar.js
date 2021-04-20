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
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 20px;
  background-color: ${theme.colors.gold};

  ${theme.mediaQueries.tablet} {
    padding: 30px;
  }

  ${theme.mediaQueries.bigTablet} {
    padding: 50px;
  }
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

  ${theme.mediaQueries.bigDesktop} {
    font-size: 1.7rem;
  }

  ${theme.mediaQueries.huge} {
    font-size: 1.8rem;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      margin-left: 20px;

      a {
        color: ${theme.colors.light};
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: ${theme.colors.blue};
        }

        &.active {
          color: ${theme.colors.blue};
        }
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
            <Link to={route.path} activeClassName="active">
              {route.name}
            </Link>
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
