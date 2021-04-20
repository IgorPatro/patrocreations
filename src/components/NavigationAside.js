/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react"
import { css } from "@emotion/react"
import PropTypes from "prop-types"

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
  border-right: 1px solid ${theme.colors.grey};
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

const menuButtonStyles = (theme) => css`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 25px;
  position: relative;

  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    top: 50%;
    background-color: ${theme.colors.light};
  }

  &::before {
    transform: translateY(150%);
  }

  &::after {
    transform: translateY(-150%);
  }
`

const NavigationAside = ({ toggleNavigationFunc }) => (
  <div css={navigationAsideStyles}>
    <img src={LogoWhite} alt="Logo of the site" />
    <button
      type="button"
      css={menuButtonStyles}
      onClick={() => toggleNavigationFunc(true)}
    />
    <p>
      I am a front-end <br />
      developer by passion
    </p>
  </div>
)

NavigationAside.propTypes = {
  toggleNavigationFunc: PropTypes.func.isRequired,
}

export default NavigationAside
