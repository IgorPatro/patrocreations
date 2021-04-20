import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"

import MainLayout from "layout/MainLayout"
import SEO from "components/SEO"

const wrapperStyles = (theme) => css`
  min-height: 30vh;
  font-size: 7rem;

  ${theme.mediaQueries.tablet} {
    font-size: 9rem;
    padding: 0 5%;
  }

  ${theme.mediaQueries.huge} {
    padding: 0 10%;
  }

  h1 {
    color: ${theme.colors.blue};
    font-size: inherit;
  }

  h2 {
    font-size: 0.4em;
    margin: 0 0 15px;
  }

  a {
    font-size: 0.2em;
    color: white;
    text-decoration: none;
    background-color: ${theme.colors.blue};
    padding: 5px 10px;
    display: block;
    width: 140px;
    text-align: center;
    transition: color 0.3s, background 0.3s;

    ${theme.mediaQueries.tablet} {
      width: 200px;
      padding: 10px 20px;
    }

    &:hover {
      color: ${theme.colors.blue};
      background-color: white;
    }
  }
`

const NotFoundPage = () => (
  <>
    <SEO pageName="About" />
    <MainLayout>
      <div css={wrapperStyles}>
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to="/">back to home</Link>
      </div>
    </MainLayout>
  </>
)
export default NotFoundPage
