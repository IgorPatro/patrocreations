import React from "react"
import PropTypes from "prop-types"
import { css, keyframes } from "@emotion/react"
import { useStaticQuery, graphql } from "gatsby"

import HamburgerButton from "components/HamburgerButton"
import LogoWhite from "assets/logo-white.svg"
import DecorationCircle from "assets/decoration-circle.svg"

const mainStyles = css`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const wrapperStyles = (theme) => css`
  width: calc(100vw - 45px);
  height: calc(100vh - 45px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;

  ${theme.mediaQueries.phone} {
    width: calc(100vw - 55px);
    height: calc(100vh - 55px);
  }

  ${theme.mediaQueries.tablet} {
    width: calc(100vw - 100px);
    height: calc(100vh - 100px);
  }

  ${theme.mediaQueries.bigTablet} {
    width: calc(100vw - 150px);
    height: calc(100vh - 150px);
  }

  ${theme.mediaQueries.huge} {
    width: calc(100vw - 230px);
    height: calc(100vh - 230px);
  }
`

const navigationStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: ${theme.fontFamily.JetBrainsMono};

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

const HomeTemplate = ({ children }) => {
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
          <HamburgerButton />
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

HomeTemplate.propTypes = { children: PropTypes.node.isRequired }

export default HomeTemplate
