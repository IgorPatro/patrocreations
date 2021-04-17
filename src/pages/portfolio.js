import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/react"

import MainLayout from "layout/MainLayout"
import PageHeader from "components/PageHeader"
import PortfolioProject from "components/PortfolioProject"

const projectsWrapper = (theme) => css`
  width: 100%;
  padding: 0 3%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  margin: 50px 0;

  ${theme.mediaQueries.tablet} {
    padding: 0 7%;
    margin: 100px 0;
    grid-gap: 70px;
  }

  ${theme.mediaQueries.bigTablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
  }

  ${theme.mediaQueries.desktop} {
    grid-gap: 80px;
  }

  ${theme.mediaQueries.huge} {
    padding: 0 10%;
    margin: 140px 0;
    grid-gap: 100px;
  }
`

const PortfolioPage = () => {
  const { datoCmsPortfolioPage } = useStaticQuery(graphql`
    query PortfolioPageData {
      datoCmsPortfolioPage {
        pageHeader {
          hashtag
          headingNode {
            childMarkdownRemark {
              html
            }
          }
          subheading
        }
        portfolioProjects {
          hashtag
          title
          id
          url
          image {
            alt
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  `)

  return (
    <MainLayout>
      <PageHeader data={datoCmsPortfolioPage.pageHeader} />
      <div css={projectsWrapper}>
        {datoCmsPortfolioPage.portfolioProjects.map((project) => (
          <PortfolioProject data={project} key={project.id} />
        ))}
      </div>
    </MainLayout>
  )
}
export default PortfolioPage
