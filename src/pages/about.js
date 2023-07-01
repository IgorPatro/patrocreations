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
      file(name: { eq: "igor_rome" }) {
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
                  title: "Hi!",
                  subtitleNode: {
                    childMarkdownRemark: {
                      html: "<h4>Who <strong>am</strong> I?</h4>",
                    },
                  },
                  contentNode: {
                    childMarkdownRemark: {
                      html: `<p>I'm a developer who thrives on <strong>challenges</strong> 🙏 From an early age, I found <strong>joy</strong> in building things. Early in my <strong>career</strong>, I’ve built a lot of <strong>websites</strong> (some of which you can view here). However, I quickly desired to build more <strong>complex</strong> projects within larger <strong>teams</strong>. That's how my journey with <strong><a target="_blank" href="https://dreamstormstudios.com">DreamStorm Studios</a></strong> ❤️ began. Over the years, I worked across various <strong>teams</strong> and multiple projects. I also tried building my first organized company (<a target="_blank" href="https://modernitycloud.pl">ModernityCloud</a>). Currently, I work as a <strong>Frontend Engineer</strong> at <a target="_blank" href="https://redvike.com">Redvike</a>. In my spare time, I leverage the <strong>experience</strong> I've gained throughout my career to build <strong>top-notch</strong> websites! I also love <strong>travelling</strong> ✈️`,
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
