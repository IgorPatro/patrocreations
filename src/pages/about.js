import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/react"

import MainLayout from "layout/MainLayout"
import PageHeader from "components/PageHeader"
import SEO from "components/SEO"
import AboutParagraph from "components/AboutParagraph"

const additionalPadding = (theme) => css`
  width: 100%;
  padding: 0 2%;

  ${theme.mediaQueries.bigTablet} {
    padding: 0 5%;
  }
`

const wrapperStyles = (theme) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  ${theme.mediaQueries.bigTablet} {
    gap: 80px;
    flex-direction: row;
    margin-top: 100px;
  }
`

const contentWrapper = () => css`
  width: 100%;
  max-width: 650px;
`

const imageStyles = () => css`
  width: 100%;
  max-width: 500px;
`

const AboutPage = () => {
  const { datoCmsAboutPage, file } = useStaticQuery(graphql`
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
      file(name: { eq: "igor" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO pageName="About" />
      <MainLayout>
        <PageHeader data={datoCmsAboutPage.pageHeader} />
        <div css={additionalPadding}>
          {/* {datoCmsAboutPage.aboutParagraphs.map((aboutParagraph, index) => (
            <AboutParagraph
              key={aboutParagraph.id}
              content={{ ...aboutParagraph, index }}
            />
          ))} */}
          <div css={wrapperStyles}>
            <div css={contentWrapper}>
              <AboutParagraph
                content={{
                  title: "Hi there!",
                  subtitleNode: {
                    childMarkdownRemark: {
                      html: "<h4>Who <strong>am</strong> I?</h4>",
                    },
                  },
                  contentNode: {
                    childMarkdownRemark: {
                      html: `<p>I'm a passionate <strong>Frontend Developer</strong> and I love building things. Programming is my <strong>greatest passion</strong> as it gives me an enormous amout of joy 😁 </br>
                      Everything started at the Junior High School where I finally made the decision and started learning <strong>web development</strong>.
                      </br> Over the years I have been working with many different people and companies. I  was always wondering how is it to be an entreprenur so I founded <a href="https://modernitycloud.pl">ModernityCloud</a> agency 😍 </p>`,
                    },
                  },
                  index: false,
                }}
              />
            </div>
            <Img
              objectFit="contain"
              css={imageStyles}
              fluid={file.childImageSharp.fluid}
            />
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default AboutPage
