import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import routes from "data/routes"

const navigationWrapperStyles = css`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  padding: 80px 20px 20px;
  z-index: 10;
`

const getAfterContent = ({ afterContent }) => ({
  content: `"${afterContent}"`,
})

const navigationListItemStyles = (theme) => css`
  line-height: 1.5em;
  text-decoration: underline;
  position: relative;
  font-size: 1.4rem;

  &::after {
    position: absolute;
    top: 0;
    left: 100px;
    color: ${theme.colors.grey};
    font-family: ${theme.fontFamily.JetBrainsMono};
  }
`

const NavigationListItem = styled.li`
  &::after {
    ${getAfterContent}
  }
`

const Navigation = () => (
  <div css={navigationWrapperStyles}>
    <ul
      css={css`
        list-style: none;
      `}
    >
      {routes.map((route) => (
        <NavigationListItem
          css={navigationListItemStyles}
          afterContent={route.description}
        >
          {route.name}
        </NavigationListItem>
      ))}
    </ul>
  </div>
)

export default Navigation
