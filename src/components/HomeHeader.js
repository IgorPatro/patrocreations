import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { css, keyframes } from "@emotion/react"

const loadHeading = keyframes`
  from {
    transform: translateY(10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const headerWrapperStyles = (theme) => css`
  font-size: 3rem;
  margin-top: 1.2em;
  width: 90%;
  transform: translateY(10%);
  opacity: 0;
  animation: ${loadHeading} 1s ease-in-out 1s forwards;

  ${theme.mediaQueries.phone} {
    font-size: 3.3rem;
  }

  ${theme.mediaQueries.tablet} {
    font-size: 5rem;
    width: 70%;
    margin-top: 1.5em;
  }

  ${theme.mediaQueries.bigTablet} {
    font-size: 6rem;
  }

  ${theme.mediaQueries.desktop} {
    width: 45%;
    order: 1;
    margin-top: 0;
  }
`

const headingOneStyles = css`
  color: white;
  font-size: inherit;
  margin-bottom: 0.3em;
`

const headingTwoContainerStyles = (theme) => css`
  color: white;
  font-weight: ${theme.fontWeight.medium};
  font-size: 0.45em;

  ${theme.mediaQueries.desktop} {
    font-size: 0.4em;
  }

  h2 {
    font-weight: inherit;
    line-height: 1.1em;

    ${theme.mediaQueries.desktop} {
      line-height: 1.3em;
    }

    strong {
      font-weight: inherit;
      color: ${theme.colors.blue};
    }
  }
`

const HomeHeader = () => {
  const { datoCmsHomePage } = useStaticQuery(graphql`
    query HomeHeaderData {
      datoCmsHomePage {
        welcomeTitle
        welcomeContentNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  return (
    <div css={headerWrapperStyles}>
      <h1 css={headingOneStyles}>{datoCmsHomePage.welcomeTitle}</h1>
      <div
        css={headingTwoContainerStyles}
        dangerouslySetInnerHTML={{
          __html: datoCmsHomePage.welcomeContentNode.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

export default HomeHeader
