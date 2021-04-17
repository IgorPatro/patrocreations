import React from "react"
import { css, keyframes } from "@emotion/react"
import { useStaticQuery, graphql } from "gatsby"

import DecorationCircle from "assets/decoration-circle.svg"

const footerStyles = (theme) => css`
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  ${theme.mediaQueries.tablet} {
    font-size: 3.3rem;
  }

  ${theme.mediaQueries.bigTablet} {
    font-size: 3.7rem;
    padding: 0 0 30px 30px;
  }

  ${theme.mediaQueries.desktop} {
    margin: 0 20px 80px 100px;
    font-size: 3.2rem;
    padding: 0;
  }

  ${theme.mediaQueries.bigDesktop} {
    margin: 0 50px 100px 150px;
    font-size: 3.7rem;
  }

  ${theme.mediaQueries.huge} {
    margin: 0 50px 120px 200px;
    font-size: 4rem;
  }

  h5 {
    font-size: inherit;
    margin-bottom: 20px;

    ${theme.mediaQueries.tablet} {
      margin-bottom: 30px;
    }
  }

  p {
    font-size: 0.45em;
    font-weight: ${theme.fontWeight.medium};
    margin-bottom: 5px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 0.6em;
    font-weight: ${theme.fontWeight.bold};
  }
`

const footerLinksStyles = (theme) => css`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-size: inherit;

  ${theme.mediaQueries.phone} {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px 20px;
    margin-top: 30px;
  }

  ${theme.mediaQueries.tablet} {
    grid-gap: 25px 0px;
    margin-top: 40px;
  }

  ${theme.mediaQueries.bigDesktop} {
    width: 900px;
  }

  ${theme.mediaQueries.huge} {
    width: 1000px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
    font-size: inherit;

    ${theme.mediaQueries.phone} {
      margin: 0;
    }

    a,
    address,
    p {
      font-size: 0.5em;
      color: ${theme.colors.light};
      font-weight: ${theme.fontWeight.medium};
      font-style: normal;
      line-height: 1.1em;

      ${theme.mediaQueries.bigDesktop} {
        font-size: 0.4em;
      }
    }
  }
`

const spinCircle = keyframes`
  from {
    transform: translate(60%, -50%) rotate(0deg);
  }
  to {
    transform: translate(60%, -50%) rotate(360deg);
  }
`

const decorationCircleStyles = (theme) => css`
  display: none;
  position: absolute;
  top: 50%;
  right: 0%;
  animation: ${spinCircle} 15s linear infinite;
  height: 100%;

  ${theme.mediaQueries.tablet} {
    display: block;
  }

  ${theme.mediaQueries.bigDesktop} {
    height: 120%;
  }
`

const Footer = () => {
  const { datoCmsBasicInformation } = useStaticQuery(graphql`
    query FooterBasicInformationsQuery {
      datoCmsBasicInformation {
        socialMedia {
          linkName
          linkHref
          linkFooterDescription
        }
        email
        city
      }
    }
  `)

  const footerLinksData = [
    ...datoCmsBasicInformation.socialMedia,
    {
      linkName: "city",
      linkContent: datoCmsBasicInformation.city,
      link: false,
      linkFooterDescription: "My city to meet",
    },
  ]

  return (
    <footer css={footerStyles}>
      <h5>Let&apos;s work together.</h5>
      <p>My business & private email</p>
      <a href={`mailto:${datoCmsBasicInformation.email}`}>
        {datoCmsBasicInformation.email}
      </a>
      <div css={footerLinksStyles}>
        {footerLinksData.map((footerLink) =>
          footerLink.link === false ? (
            <div key={footerLink.linkName}>
              <p>{footerLink.linkFooterDescription}</p>
              <address>{footerLink.linkContent}</address>
            </div>
          ) : (
            <div key={footerLink.linkName}>
              <p>{footerLink.linkFooterDescription}</p>
              <a
                href={footerLink.linkHref}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {footerLink.linkName}
              </a>
            </div>
          )
        )}
      </div>
      <img
        css={decorationCircleStyles}
        src={DecorationCircle}
        alt="Decoration footer circle"
      />
    </footer>
  )
}

export default Footer
