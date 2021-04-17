import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { css } from "@emotion/react"

const wrapperStyles = (theme) => css`
  font-size: 1.9rem;
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s;

  ${theme.mediaQueries.tablet} {
    font-size: 2.3rem;
  }

  ${theme.mediaQueries.bigTablet} {
    margin: 0;
  }

  ${theme.mediaQueries.desktop} {
    font-size: 2rem;
  }

  &:hover {
    transform: scale(1.05);

    h2 {
      color: ${theme.colors.blue};
    }

    img {
      filter: grayscale(0);
    }
  }

  h4 {
    font-size: 0.7em;
    color: ${theme.colors.grey};
    font-weight: ${theme.fontWeight.thin};
    font-family: ${theme.fontFamily.JetBrainsMono};
    text-decoration: none;
  }

  h2 {
    font-size: inherit;
    line-height: 2em;
    position: relative;
    display: block;
    display: inline-flex;
    color: white;
    text-decoration: none;
    transition: color 0.3s;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${theme.colors.light};
    }
  }

  img {
    filter: grayscale(50%);
  }
`

const imageStyles = css`
  width: 100%;
  margin-bottom: 5px;
`

const PortfolioProject = ({ data }) => (
  <a
    css={wrapperStyles}
    href={data.url}
    rel="noopener noreferrer nofollow"
    target="_blank"
  >
    <Img css={imageStyles} fluid={data.image.fluid} alt={data.image.alt} />
    <h4>{data.hashtag}</h4>
    <h2>{data.title}</h2>
  </a>
)

PortfolioProject.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default PortfolioProject
