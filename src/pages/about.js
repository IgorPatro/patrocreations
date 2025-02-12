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
      file(name: { eq: "igor_coffee" }) {
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
                      html: `<p>I'm a <strong>developer</strong> who has been <strong>passionate</strong> about programming since childhood 🙏 Over the years, I've had the <strong>opportunity</strong> to work on projects across the <strong>US</strong>, <strong>Spain</strong>, and <strong>Costa Rica</strong>, constantly pushing the boundaries of web development ❤️ I specialize in cutting-edge technologies and build <strong>high-performance</strong> applications that combine speed, scalability, and seamless <strong>user experiences</strong>. Coding isn’t just my job — it’s my <strong>passion</strong>. When I’m not crafting top-tier digital solutions, you’ll find me <strong>exploring</strong> new places ✈️ or enjoying a great cup of <strong>coffee</strong> ☕.</p>`,
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
