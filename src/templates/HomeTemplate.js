import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/react"
import { useStaticQuery, graphql } from "gatsby"

import HamburgerButton from "components/templateComponents/HamburgerButton"
import LogoWhite from "assets/logo-white.svg"

const wrapperStyles = css`
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
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

const logoStyles = css`
  height: 30px;
`

const contactStyles = (theme) => css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: ${theme.fontFamily.JetBrainsMono};
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
    <>
      <div css={wrapperStyles}>
        <div css={navigationStyles}>
          <HamburgerButton />
          <img src={LogoWhite} alt="Logo strony" css={logoStyles} />
        </div>
        <div>{children}</div>
        <div css={contactStyles}>
          <ul css={socialMediaListStyles}>
            {datoCmsBasicInformation.socialMedia.map((socialMedium) => (
              <li>
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
    </>
  )
}

HomeTemplate.propTypes = { children: PropTypes.node.isRequired }

export default HomeTemplate
