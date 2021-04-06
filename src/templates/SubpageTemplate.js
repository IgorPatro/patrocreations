import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/react"

import NavigationBar from "components/NavigationBar"
import Footer from "components/Footer"

const mainStyles = css`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`

const innerWrapperStyles = (theme) => css`
  padding: 20px;
  display: flex;
  flex-direction: column;

  ${theme.mediaQueries.tablet} {
    padding: 40px;
  }

  ${theme.mediaQueries.bigTablet} {
    padding: 50px;
  }
`

const contentWrapperStyles = (theme) => css`
  margin: 50px 0;
`

const SubpageTemplate = ({
  children,
  toggleNavigationFunc,
  isNavigationOpen,
}) => (
  <main css={mainStyles}>
    <div css={innerWrapperStyles}>
      <NavigationBar
        toggleNavigationFunc={toggleNavigationFunc}
        isNavigationOpen={isNavigationOpen}
      />
      <div css={contentWrapperStyles}>{children}</div>
      <Footer />
    </div>
  </main>
)

SubpageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  toggleNavigationFunc: PropTypes.func.isRequired,
  isNavigationOpen: PropTypes.bool.isRequired,
}

export default SubpageTemplate
