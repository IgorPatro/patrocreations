import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/react"
import "./globalStyles.css"

import HamburgerButton from "components/templateComponents/HamburgerButton"
import LogoWhite from "assets/logo-white.svg"

const wrapperStyles = css`
  width: calc(100vw - 35px);
  height: calc(100vh - 35px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
`

const navigationStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const logoStyles = css`
  height: 30px;
`

const contactStyles = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`

const HomeTemplate = ({ children }) => (
  <>
    <div css={wrapperStyles}>
      <div css={navigationStyles}>
        <HamburgerButton />
        <img src={LogoWhite} alt="Logo strony" css={logoStyles} />
      </div>
      <div>{children}</div>
      <div css={contactStyles}>contact</div>
    </div>
  </>
)

HomeTemplate.propTypes = { children: PropTypes.node.isRequired }

export default HomeTemplate
