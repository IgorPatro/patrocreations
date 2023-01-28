import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import email from "../assets/email.svg"
import phone from "../assets/phone.svg"
import location from "../assets/location.svg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"

const wrapperStyles = css`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #222222;
  line-height: 1.6em;
  font-size: 14px;
  color: #aaaaaa;
  display: flex;
  justify-content: center;
  align-items: center;
`

const resumeWrapper = css`
  max-width: 550px;
`

const introductionWrapper = css`
  display: flex;
  align-items: center;
  gap: 15px;
`

const imageStyles = css`
  width: 70px;
  border-radius: 100%;
`

const header = css`
  display: flex;
  flex-direction: column;
  /* gap: 5px; */

  h1 {
    font-size: 20px;
    font-weight: normal;
    color: #eeeeee;
    line-height: 35px;
  }

  h2 {
    font-size: 14px;
    font-weight: normal;
  }
`

const contactWrapper = css`
  display: flex;
  gap: 10px 20px;
  flex-wrap: wrap;

  a {
    color: #aaaaaa;
    text-decoration: none;
  }
`

const dynamicStyles = (props) => css`
  background: url("${props.background}");
`

const ContactItem = styled("div")`
  color: #aaaaaa;
  position: relative;
  padding-left: 22px;
  display: flex;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 18px;
    height: 18px;
    transform: translateY(-50%);
    ${dynamicStyles};
    background-size: contain;
  }
`

const employmentWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const sectionTitle = css`
  font-size: 14px;
  color: #eeeeee;
  font-weight: normal;
  margin-bottom: 5px;
`

const WorkPlace = styled("div")`
  .company {
    color: #eeeeee;
    font-size: 14px;
    font-weight: normal;
  }
`

const ResumePage = () => {
  const { file } = useStaticQuery(graphql`
    query ResumePageData {
      file(name: { eq: "avatar" }) {
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
      <Helmet
        htmlAttributes={{
          lang: "pl",
        }}
        title="Resume | Igor Patro"
      >
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Check out entire history of my career ☕"
        />
        <meta name="author" content="Igor Patro" />
      </Helmet>
      <section css={wrapperStyles}>
        <div css={resumeWrapper}>
          <div css={introductionWrapper}>
            <Img
              objectFit="contain"
              css={imageStyles}
              fluid={file.childImageSharp.fluid}
            />
            <header css={header}>
              <h1>Igor Patro</h1>
              <h2>Passionate Frontend Developer 🙏</h2>
            </header>
          </div>

          <br />
          <br />

          <div css={contactWrapper}>
            <ContactItem background={location}>
              <span>Rzeszów, Poland</span>
            </ContactItem>
            <ContactItem background={email}>
              <a
                target="_blank"
                rel="noindex nofollow noreferrer"
                href="mailto:i.patro@wp.pl"
              >
                i.patro@wp.pl
              </a>
            </ContactItem>
            <ContactItem background={phone}>
              <a
                target="_blank"
                rel="noindex nofollow noreferrer"
                href="tel:+48785375312"
              >
                +48 785 375 312
              </a>
            </ContactItem>
            <ContactItem background={linkedin}>
              <a
                target="_blank"
                rel="noindex nofollow noreferrer"
                href="https://www.linkedin.com/in/igorpatro/"
              >
                linkedin.com/igorpatro
              </a>
            </ContactItem>
            <ContactItem background={github}>
              <a
                target="_blank"
                rel="noindex nofollow noreferrer"
                href="https://github.com/IgorPatro/"
              >
                github.com/IgorPatro
              </a>
            </ContactItem>
          </div>

          <br />
          <br />

          <h1 css={sectionTitle}>About</h1>

          <p>
            Creating modern applications and blazingly fast websites is my
            passion ⚡ Building beautifully designed layouts gives me enormous
            satisfaction and motivation 💪
          </p>
          <br />
          <p>
            As a React Developer, I have worked in a few different teams and on
            many projects. Team leading is my break from writing code, and it
            gives me a lot of joy 😁
          </p>

          <br />
          <br />

          <h1 css={sectionTitle}>Work experience</h1>

          <div css={employmentWrapper}>
            <WorkPlace>
              <h3 className="company">ModernityCloud</h3>
            </WorkPlace>
            <WorkPlace>
              <h3 className="company">DreamStorm Studios</h3>
            </WorkPlace>
          </div>
        </div>
      </section>
    </>
  )
}

export default ResumePage
