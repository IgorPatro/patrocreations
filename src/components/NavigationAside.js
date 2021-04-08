import React from "react"
import { css } from "@emotion/react"
import PropTypes from "prop-types"

import HamburgerButton from "components/HamburgerButton"
import LogoWhite from "assets/logo-white.svg"

const navigationAsideStyles = (theme) => css`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 110px;
  padding: 20px;
  border-right: 1px solid ${theme.colors.light};
  color: ${theme.colors.light};
  font-size: 1.3rem;

  ${theme.mediaQueries.desktop} {
    display: flex;
  }

  img {
    height: 30px;
  }

  p {
    font-size: inherit;
    width: 170px;
    transform: rotate(-90deg) translateX(50%);
  }
`

const NavigationAside = ({ toggleNavigationFunc, isNavigationOpen }) => (
  <div css={navigationAsideStyles}>
    <img src={LogoWhite} alt="Logo of the site" />
    <HamburgerButton
      small
      toggleNavigationFunc={toggleNavigationFunc}
      isNavigationOpen={isNavigationOpen}
    />
    <p>
      I am a front-end <br />
      developer by passion
    </p>
  </div>
)

NavigationAside.propTypes = {
  toggleNavigationFunc: PropTypes.func.isRequired,
  isNavigationOpen: PropTypes.bool.isRequired,
}

export default NavigationAside
