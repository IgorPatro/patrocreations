import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/react"

import MainLayout from "layout/MainLayout"
import PageHeader from "components/PageHeader"
import AboutParagraph from "components/AboutParagraph"

const additionalPadding = (theme) => css`
  width: 100%;
  padding: 0 5%;

  ${theme.mediaQueries.bigTablet} {
    padding: 0 10%;
  }

  ${theme.mediaQueries.huge} {
    padding: 0 15%;
  }
`

const AboutPage = () => {
  const { datoCmsAboutPage } = useStaticQuery(graphql`
    query AboutPageData {
      datoCmsAboutPage {
        pageHeader {
          hashtag
          headingNode {
            childMarkdownRemark {
              html
            }
          }
          subheading
        }
        aboutParagraphs {
          contentNode {
            childMarkdownRemark {
              html
            }
          }
          subtitleNode {
            childMarkdownRemark {
              html
            }
          }
          title
          id
        }
      }
    }
  `)

  return (
    <MainLayout>
      <PageHeader data={datoCmsAboutPage.pageHeader} />
      <div css={additionalPadding}>
        {datoCmsAboutPage.aboutParagraphs.map((aboutParagraph, index) => (
          <AboutParagraph
            key={aboutParagraph.id}
            content={{ ...aboutParagraph, index }}
          />
        ))}
      </div>
    </MainLayout>
  )
}
export default AboutPage
