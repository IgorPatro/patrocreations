import React from "react"
import PropTypes from "prop-types"
import { css, keyframes } from "@emotion/react"
import { Link } from "gatsby"
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

const StyledServiceTile = styled.div`
  animation: ${loadPortfolioProject} 1s ease-in-out
    ${({ index }) => 1 + index * 0.5}s forwards;
`

const serviceTileWrapper = (theme) => css`
  padding: 2rem;
  border: 1px solid #202020;
  border-radius: 0.5rem;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  max-width: 50rem;
  transform: translateY(10%);
  opacity: 0;

  ${theme.mediaQueries.tablet} {
    padding: 3rem;
  }

  ${theme.mediaQueries.bigTablet} {
    max-width: none;
  }

  &:hover {
    border: 1px solid ${theme.colors.blue};
  }
`

const serviceTileWrapperHuge = (theme) => css`
  padding: 2rem;
  border: 1px solid #202020;
  border-radius: 0.5rem;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  max-width: 50rem;
  transform: translateY(10%);
  opacity: 0;

  ${theme.mediaQueries.tablet} {
    padding: 3rem;
  }

  ${theme.mediaQueries.bigTablet} {
    max-width: none;
    flex-direction: row;
    align-items: center;
    gap: 6rem;
  }

  &:hover {
    border: 1px solid ${theme.colors.blue};
  }
`

const serviceTileInnerWrapper = () => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
`

const header = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  max-width: 50rem;

  ${theme.mediaQueries.desktop} {
    max-width: 60rem;
  }
`

const headingOne = () => css`
  font-size: 2.1rem;
  max-width: 80%;
`

const link = (theme) => css`
  background-color: ${theme.colors.blue};
  color: white;
  border: none;
  border-radius: 100px;
  font-family: ${theme.fontFamily.JetBrainsMono};
  padding: 13px 30px;
  font-size: 1.6rem;
  transition: color 0.3s, background 0.3s;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${theme.colors.blue};
    background-color: white;
  }
`

const paragraph = () => css`
  font-size: 1.6rem;
  color: #818181;
  line-height: 1.9em;
`

const list = () => css`
  font-size: 1.6rem;
  color: #818181;
  line-height: 1.9em;
  padding: 0 0 0 2.5rem;
  list-style: none;
`

const listItem = (theme) => css`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -2rem;
    color: red;
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${theme.colors.blue};
    border-radius: 100%;
  }
`

const ServiceTile = ({
  huge,
  title,
  children,
  features,
  buttonUrl,
  buttonText,
  index,
}) => (
  <StyledServiceTile
    index={index}
    css={huge ? serviceTileWrapperHuge : serviceTileWrapper}
  >
    <header css={header}>
      <h1 css={headingOne}>{title}</h1>
      <p css={paragraph}>{children}</p>
    </header>
    <div css={serviceTileInnerWrapper}>
      <ul css={list}>
        {features.map((feature) => (
          <li css={listItem} key={feature}>
            {feature}
          </li>
        ))}
      </ul>
      <Link css={link} to={buttonUrl}>
        {buttonText}
      </Link>
    </div>
  </StyledServiceTile>
)

ServiceTile.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  huge: PropTypes.bool,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
}

ServiceTile.defaultProps = {
  huge: false,
}

export default ServiceTile
