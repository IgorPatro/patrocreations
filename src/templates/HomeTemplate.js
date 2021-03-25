import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/react"
import "./globalStyles.css"

const wrapperStyles = css`
  width: calc(100vw - 20px);
  height: calc(100vh - 20px);
  background-color: red;
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
      <div css={navigationStyles}>navigation</div>
      <div>{children}</div>
      <div css={contactStyles}>contact</div>
    </div>
  </>
)

HomeTemplate.propTypes = { children: PropTypes.node.isRequired }

export default HomeTemplate
