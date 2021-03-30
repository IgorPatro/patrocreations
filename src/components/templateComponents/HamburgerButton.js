import * as React from "react"
import { css } from "@emotion/react"

const buttonStyles = css`
  padding: 0;
  margin: 0;
  width: 40px;
  height: 30px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
`

const buttonArmStyles = css`
  width: 100%;
  height: 15%;
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
    top: -200%;
    right: 0;
  }

  &::after {
    bottom: -200%;
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

const HamburgerButton = () => {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false)

  return (
    <button
      type="button"
      css={buttonStyles}
      onClick={() => setIsNavigationOpen(!isNavigationOpen)}
    >
      <div css={buttonArmStyles} className={isNavigationOpen && "active"} />
    </button>
  )
}

export default HamburgerButton
