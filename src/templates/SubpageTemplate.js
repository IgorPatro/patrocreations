import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/react"

import NavigationBar from "components/NavigationBar"
import Footer from "components/Footer"
import NavigationAside from "components/NavigationAside"

const mainStyles = (theme) => css`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  ${theme.mediaQueries.desktop} {
    display: flex;
  }
`

const innerWrapperStyles = (theme) => css`
  padding: 20px;
  display: flex;
  flex-direction: column;

  ${theme.mediaQueries.phone} {
    padding: 25px 30px 25px;
  }

  ${theme.mediaQueries.tablet} {
    padding: 40px;
  }

  ${theme.mediaQueries.bigTablet} {
    padding: 50px;
  }

  ${theme.mediaQueries.desktop} {
    width: 100%;
    padding: 0px;
    margin-left: 110px;
  }
`

const contentWrapperStyles = (theme) => css`
  margin: 50px 0;

  ${theme.mediaQueries.tablet} {
    margin: 80px 0;
  }

  ${theme.mediaQueries.desktop} {
    margin: 80px 100px;
  }
`

const SubpageTemplate = ({
  children,
  toggleNavigationFunc,
  isNavigationOpen,
}) => (
  <main css={mainStyles}>
    <NavigationAside
      toggleNavigationFunc={toggleNavigationFunc}
      isNavigationOpen={isNavigationOpen}
    />
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
