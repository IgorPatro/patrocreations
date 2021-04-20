import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { css, keyframes } from "@emotion/react"

import HomeHeader from "components/HomeHeader"
import SEO from "components/SEO"
import MainLayout from "layout/MainLayout"

const loadImage = keyframes`
  from {
    transform: translateX(10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const indexPageWrapperStyles = (theme) => css`
  width: 100%;

  ${theme.mediaQueries.desktop} {
    display: flex;
    align-items: center;
  }
`

const heroImageStyles = (theme) => css`
  width: 100%;
  opacity: 0;
  transform: translateX(10%);
  animation: ${loadImage} 1s ease-in-out 2s forwards;

  ${theme.mediaQueries.tablet} {
    width: 80%;
    margin: auto;
  }

  ${theme.mediaQueries.desktop} {
    margin: 0;
    width: 45%;
    order: 2;
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO pageName="Home" />
    <MainLayout template="home">
      <div css={indexPageWrapperStyles}>
        <Img css={heroImageStyles} fluid={data.file.childImageSharp.fluid} />
        <HomeHeader />
      </div>
    </MainLayout>
  </>
)

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export const query = graphql`
  query homeHeroImage {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
