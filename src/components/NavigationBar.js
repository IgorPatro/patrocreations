import React from "react"
import { css } from "@emotion/react"
import PropTypes from "prop-types"

import HamburgerButton from "components/HamburgerButton"
import LogoWhite from "assets/logo-white.svg"

const navigationBarStyles = (theme) => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;

  ${theme.mediaQueries.desktop} {
    z-index: 0;
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

const NavigationBar = ({ toggleNavigationFunc, isNavigationOpen }) => (
  <div css={navigationBarStyles}>
    <img css={logoStyles} src={LogoWhite} alt="Logo strony" />
    <HamburgerButton
      toggleNavigationFunc={toggleNavigationFunc}
      isNavigationOpen={isNavigationOpen}
    />
  </div>
)

NavigationBar.propTypes = {
  toggleNavigationFunc: PropTypes.func.isRequired,
  isNavigationOpen: PropTypes.bool.isRequired,
}

export default NavigationBar
