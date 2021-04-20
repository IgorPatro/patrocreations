import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { css, keyframes } from "@emotion/react"
import styled from "@emotion/styled"

const loadPortfolioProject = keyframes`
  from {
    transform: translateY(10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const StyledPortfolioProject = styled.a`
  animation: ${loadPortfolioProject} 1s ease-in-out
    ${({ index }) => 1 + index * 0.5}s forwards;
`

const wrapperStyles = (theme) => css`
  font-size: 1.9rem;
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s;
  transform: translateY(10%);
  opacity: 0;

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
  <StyledPortfolioProject
    css={wrapperStyles}
    href={data.url}
    rel="noopener noreferrer nofollow"
    target="_blank"
    index={data.index}
  >
    <Img css={imageStyles} fluid={data.image.fluid} alt={data.image.alt} />
    <h4>{data.hashtag}</h4>
    <h2>{data.title}</h2>
  </StyledPortfolioProject>
)

PortfolioProject.propTypes = {
  data: PropTypes.objectOf(PropTypes.string || PropTypes.object).isRequired,
}

export default PortfolioProject
