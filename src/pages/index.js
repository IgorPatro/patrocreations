import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { css } from "@emotion/react"

import HomeHeader from "components/HomeHeader"
import MainLayout from "layout/MainLayout"

const indexPageWrapperStyles = (theme) => css`
  width: 100%;

  ${theme.mediaQueries.desktop} {
    display: flex;
    align-items: center;
  }
`

const heroImageStyles = (theme) => css`
  width: 100%;

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
  <MainLayout template="home">
    <div css={indexPageWrapperStyles}>
      <Img css={heroImageStyles} fluid={data.file.childImageSharp.fluid} />
      <HomeHeader />
    </div>
  </MainLayout>
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
