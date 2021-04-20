import React from "react"
import PropTypes from "prop-types"
import { css, keyframes } from "@emotion/react"
import { useStaticQuery, graphql } from "gatsby"

import HamburgerButton from "components/HamburgerButton"
import LogoWhite from "assets/logo-white.svg"
import DecorationCircle from "assets/decoration-circle.svg"

const loadTemplate = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const mainStyles = css`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const wrapperStyles = (theme) => css`
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${theme.mediaQueries.phone} {
    padding: 27px;
  }

  ${theme.mediaQueries.tablet} {
    padding: 50px;
  }

  ${theme.mediaQueries.bigTablet} {
    padding: 75px;
  }

  ${theme.mediaQueries.huge} {
    padding: 115px;
  }
`

const navigationStyles = (theme) => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  animation: ${loadTemplate} 1.5s ease-in-out forwards;

  ${theme.mediaQueries.desktop} {
    z-index: 0;
  }
`

const logoStyles = (theme) => css`
  height: 30px;

  ${theme.mediaQueries.tablet} {
    height: 40px;
  }

  ${theme.mediaQueries.bigTablet} {
    height: 50px;
  }
`

const contactStyles = (theme) => css`
  width: 100%;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: ${theme.fontFamily.JetBrainsMono};
  animation: ${loadTemplate} 1.5s ease-in-out forwards;

  ${theme.mediaQueries.phone} {
    font-size: 1.3rem;
  }

  ${theme.mediaQueries.tablet} {
    font-size: 1.6rem;
  }

  ${theme.mediaQueries.bigTablet} {
    font-size: 1.8rem;
  }
`

const socialMediaListStyles = css`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  li {
    margin-top: 5px;

    a {
      color: white;
    }
  }
`

const emailLinkStyles = css`
  color: white;
  text-align: right;
`

const spinCircle = keyframes`
  from {
    transform: translateX(50%) rotate(0deg);
  }
  to {
    transform: translateX(50%) rotate(360deg);
  }
`

const decorationCircleStyles = (theme) => css`
  display: none;
  position: absolute;
  bottom: 13%;
  right: 0;
  max-height: 30%;
  animation: ${spinCircle} 15s linear infinite;
  transform: translateX(50%);
  z-index: -1;

  ${theme.mediaQueries.tablet} {
    display: block;
  }

  ${theme.mediaQueries.desktop} {
    max-height: 40%;
    bottom: -5%;
    right: 5%;
  }
`

const HomeTemplate = ({ children, toggleNavigationFunc, isNavigationOpen }) => {
  const { datoCmsBasicInformation } = useStaticQuery(graphql`
    query HomeTemplateBasicInformationsQuery {
      datoCmsBasicInformation {
        socialMedia {
          linkName
          linkHref
        }
        email
      }
    }
  `)

  return (
    <main css={mainStyles}>
      <div css={wrapperStyles}>
        <div css={navigationStyles}>
          <HamburgerButton
            toggleNavigationFunc={toggleNavigationFunc}
            isNavigationOpen={isNavigationOpen}
          />
          <img src={LogoWhite} alt="Logo strony" css={logoStyles} />
        </div>
        {children}
        <div css={contactStyles}>
          <ul css={socialMediaListStyles}>
            {datoCmsBasicInformation.socialMedia.map((socialMedium) => (
              <li key={socialMedium.linkName}>
                <a
                  href={socialMedium.linkHref}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {socialMedium.linkName}
                </a>
              </li>
            ))}
          </ul>
          <a
            css={emailLinkStyles}
            rel="nofollow"
            href={`mailto: ${datoCmsBasicInformation.email}`}
          >
            write to me at
            <br />
            {datoCmsBasicInformation.email}
          </a>
        </div>
      </div>
      <img
        src={DecorationCircle}
        alt="Decoration circle with all my services"
        css={decorationCircleStyles}
      />
    </main>
  )
}

HomeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  toggleNavigationFunc: PropTypes.func.isRequired,
  isNavigationOpen: PropTypes.bool.isRequired,
}

export default HomeTemplate
