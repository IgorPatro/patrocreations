import * as React from "react"
import { css } from "@emotion/react"
import PropTypes from "prop-types"

const buttonStyles = (theme) => css`
  padding: 0;
  margin: 0;
  width: 40px;
  height: 30px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  outline: none;
  transition: opacity 0.3s;

  ${theme.mediaQueries.tablet} {
    width: 55px;
    height: 40px;
  }

  ${theme.mediaQueries.bigTablet} {
    width: 65px;
    height: 50px;
  }
`

const buttonArmStyles = css`
  width: 100%;
  height: 13%;
  background-color: white;
  position: relative;
  transition: background 0.3s;

  &::before,
  &::after {
    content: "";
    width: 60%;
    height: 100%;
    background-color: white;
    position: absolute;
    transition: all 0.3s;
  }

  &::before {
    top: -250%;
    right: 0;
  }

  &::after {
    bottom: -250%;
    left: 0;
  }

  &.active {
    background-color: transparent;

    &::before {
      width: 100%;
      top: 0;
      right: 0;
      transform: rotate(45deg);
    }

    &::after {
      width: 100%;
      bottom: 0;
      left: 0;
      transform: rotate(-45deg);
    }
  }
`

const HamburgerButton = ({ toggleNavigationFunc, isNavigationOpen }) => (
  <button
    type="button"
    css={buttonStyles}
    onClick={() => toggleNavigationFunc(!isNavigationOpen)}
  >
    <div
      css={buttonArmStyles}
      className={isNavigationOpen ? "active" : "disabled"}
    />
  </button>
)

HamburgerButton.propTypes = {
  toggleNavigationFunc: PropTypes.func.isRequired,
  isNavigationOpen: PropTypes.bool.isRequired,
}

export default HamburgerButton
