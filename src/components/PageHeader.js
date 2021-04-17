import React from "react"
import { css } from "@emotion/react"
import PropTypes from "prop-types"

const pageHeaderStyles = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 50px;

  ${theme.mediaQueries.phone} {
    font-size: 2.3rem;
  }

  ${theme.mediaQueries.tablet} {
    font-size: 2.8rem;
  }

  ${theme.mediaQueries.bigTablet} {
    font-size: 3.4rem;
  }

  ${theme.mediaQueries.desktop} {
    font-size: 2.9rem;
  }

  ${theme.mediaQueries.huge} {
    font-size: 3.2rem;
  }

  h3 {
    text-align: center;
    font-family: ${theme.fontFamily.JetBrainsMono};
    color: ${theme.colors.grey};
    font-size: 0.6em;
    font-weight: ${theme.fontWeight.regular};
  }

  h1 {
    text-align: center;
    font-weight: ${theme.fontWeight.bold};
    font-size: inherit;
    margin: 8px 0;

    ${theme.mediaQueries.bigTablet} {
      margin: 15px 0;
    }

    strong {
      color: ${theme.colors.blue};
    }
  }
`

const PageHeader = ({ data }) => (
  <div css={pageHeaderStyles}>
    <h3>{data[0].hashtag}</h3>
    <div
      dangerouslySetInnerHTML={{
        __html: data[0].headingNode.childMarkdownRemark.html,
      }}
    />
    <h3>{data[0].subheading}</h3>
  </div>
)

PageHeader.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PageHeader
