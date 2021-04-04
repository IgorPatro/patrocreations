/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react"
import { css, keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import routes from "data/routes"
import DecorationCircle from "assets/decoration-circle.svg"

const navigationWrapperStyles = (theme) => css`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  padding: 100px 30px 30px;
  z-index: 10;
  transform: translateX(-100%);
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.5rem;
  overflow: hidden;

  ${theme.mediaQueries.phone} {
    font-size: 1.6rem;
    padding: 120px 40px 40px;
  }

  ${theme.mediaQueries.tablet} {
    font-size: 2rem;
    padding: 170px 60px 60px;
  }

  ${theme.mediaQueries.bigTablet} {
    font-size: 2.2rem;
    padding: 220px 90px 90px;
  }

  ${theme.mediaQueries.desktop} {
    font-size: 1.8rem;
    padding: 90px;
  }

  &.active {
    transform: translateX(0);
  }
`

const cancelNavigationButtonStyles = (theme) => css`
  display: none;
  position: relative;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  margin-bottom: 50px;

  ${theme.mediaQueries.desktop} {
    display: block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 4px;
    background-color: white;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`

const listStyles = css`
  list-style: none;
`

const getAfterContent = ({ afterContent }) => ({
  content: `"${afterContent}"`,
})

const listItemStyles = (theme) => css`
  line-height: 1.5em;
  text-decoration: underline;
  position: relative;

  a {
    color: white;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 100px;
    color: ${theme.colors.grey};
    font-family: ${theme.fontFamily.JetBrainsMono};

    ${theme.mediaQueries.tablet} {
      left: 150px;
    }
  }
`

const ListItem = styled.li`
  &::after {
    ${getAfterContent}
  }
`

const spinCircle = keyframes`
  from {
    transform: translate(35%, 35%) rotate(0deg);
  }
  to {
    transform: translate(35%, 35%) rotate(360deg);
  }
`

const decorationCircleStyles = (theme) => css`
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  animation: ${spinCircle} 15s linear infinite;

  ${theme.mediaQueries.tablet} {
    display: block;
  }

  ${theme.mediaQueries.desktop} {
    top: -35%;
  }
`

const emailLinkStyles = (theme) => css`
  display: none;
  position: absolute;
  bottom: 90px;
  right: 90px;
  color: white;

  ${theme.mediaQueries.desktop} {
    display: block;
  }
`

const Navigation = ({ isNavigationOpen, turnOffNavigationFunc }) => {
  const { datoCmsBasicInformation } = useStaticQuery(graphql`
    query NavigationBasicInformationsQuery {
      datoCmsBasicInformation {
        socialMedia {
          linkName
          linkHref
          linkDescription
        }
        email
      }
    }
  `)

  return (
    <div
      css={navigationWrapperStyles}
      className={isNavigationOpen ? "active" : "disabled"}
    >
      <div>
        <button
          type="button"
          css={cancelNavigationButtonStyles}
          onClick={turnOffNavigationFunc}
        />
        <ul css={listStyles}>
          {routes.map((route) => (
            <ListItem css={listItemStyles} afterContent={route.description}>
              <Link to={route.path}>{route.name}</Link>
            </ListItem>
          ))}
        </ul>
      </div>
      <ul css={listStyles}>
        {datoCmsBasicInformation.socialMedia.map((socialMedium) => (
          <ListItem
            css={listItemStyles}
            afterContent={socialMedium.linkDescription}
          >
            <a
              href={socialMedium.linkHref}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {socialMedium.linkName}
            </a>
          </ListItem>
        ))}
      </ul>
      <a
        css={emailLinkStyles}
        rel="nofollow"
        href={`mailto: ${datoCmsBasicInformation.email}`}
      >
        {datoCmsBasicInformation.email}
      </a>
      <img
        src={DecorationCircle}
        alt="decoration circle in navigation menu"
        css={decorationCircleStyles}
      />
    </div>
  )
}

Navigation.propTypes = {
  isNavigationOpen: PropTypes.bool.isRequired,
  turnOffNavigationFunc: PropTypes.func.isRequired,
}

export default Navigation
