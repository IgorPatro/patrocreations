import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import theme from "layout/theme"
import email from "assets/email.svg"
import phone from "assets/phone.svg"
import location from "assets/location.svg"
import github from "assets/github.svg"
import linkedin from "assets/linkedin.svg"
import "layout/globalStyles.css"

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
  padding: 20px;

  ${theme.mediaQueries.tablet} {
    padding: 70px 0 100px;
  }
`

const resumeWrapper = css`
  max-width: 650px;
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
  gap: 7px 20px;
  flex-wrap: wrap;
  max-width: 550px;

  a {
    color: #aaaaaa;
    text-decoration: none;
  }
`

const aboutWrapper = css`
  max-width: 550px;
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
  font-size: 15px;
  color: #eeeeee;
  font-weight: normal;
  margin-bottom: 5px;
`

const WorkPlace = styled("div")`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  margin-top: 10px;

  .logo {
    width: 100%;
    aspect-ratio: 1/1;
  }

  .company-label {
    height: 40px;

    .company {
      color: #eeeeee;
      font-size: 14px;
      font-weight: normal;
      line-height: 20px;
    }

    .company-full-time {
      color: #aaaaaa;
      font-size: 13px;
      font-weight: normal;
    }
  }

  .positions {
    color: #aaaaaa;
    margin-left: -40px;

    ${theme.mediaQueries.tablet} {
      margin: 0;
    }

    .position {
      font-size: 14px;
      font-weight: normal;
      color: #eeeeee;
      margin-top: 15px;
    }

    .dates {
      font-size: 13px;
      font-weight: normal;
    }

    ul {
      padding: 0 0 0 20px;
      font-size: 13px;
    }
  }
`

const Project = styled("div")`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  margin-top: 10px;

  .logo {
    width: 100%;
    aspect-ratio: 1/1;
  }

  .project-label {
    height: 40px;

    .project {
      color: #eeeeee;
      font-size: 14px;
      font-weight: normal;
      line-height: 20px;
    }

    .project-full-time {
      color: #aaaaaa;
      font-size: 13px;
      font-weight: normal;
    }
  }

  .description {
    font-size: 13px;
    margin-top: 15px;
    margin-left: -40px;

    ${theme.mediaQueries.tablet} {
      margin-left: 0;
    }

    ul {
      padding: 0 0 0 20px;
      font-size: 13px;
    }

    strong {
      color: #eeeeee;
      font-weight: normal;
    }
  }
`

const ResumePage = () => {
  const data = useStaticQuery(graphql`
    query ResumePageData {
      file(name: { eq: "avatar" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      allFile(filter: { name: { regex: "/logo/" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const logos = {
    gorillas: data.allFile.edges.find((el) =>
      el.node.name.includes("gorillas")
    ),
    modernity: data.allFile.edges.find((el) =>
      el.node.name.includes("modernity")
    ),
    dreamstorm: data.allFile.edges.find((el) =>
      el.node.name.includes("dreamstorm")
    ),
    patrocreations: data.allFile.edges.find((el) =>
      el.node.name.includes("patrocreations")
    ),
    skyagency: data.allFile.edges.find((el) =>
      el.node.name.includes("skyagency")
    ),
    aloki: data.allFile.edges.find((el) => el.node.name.includes("aloki")),
    labz: data.allFile.edges.find((el) => el.node.name.includes("labz")),
  }

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
              fluid={data.file.childImageSharp.fluid}
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

          <div css={aboutWrapper}>
            <p>
              Creating modern applications and blazingly fast websites is my
              passion ⚡ Building beautifully designed layouts gives me enormous
              satisfaction and motivation 💪
            </p>
            <br />
            <p>
              As a React Developer, I have worked in a few different teams and
              on many projects. Team leading is my break from writing code, and
              it gives me a lot of joy 😁
            </p>
          </div>

          <br />
          <br />

          <h1 css={sectionTitle}>Work experience</h1>

          <div css={employmentWrapper}>
            <WorkPlace>
              <a
                target="_blank"
                rel="noindex nofollow noreferrer"
                href="https://modernitycloud.pl/"
              >
                <Img
                  objectFit="contain"
                  className="logo"
                  fluid={logos.modernity.node.childImageSharp.fluid}
                />
              </a>
              <div>
                <div className="company-label">
                  <h3 className="company">ModernityCloud</h3>
                  <span className="company-full-time">10 mos</span>
                </div>

                <div className="positions">
                  <h4 className="position">Co-Founder</h4>
                  <span className="dates">May 2022 - Present</span>
                  <ul>
                    <li>
                      Created long-term vision of the project, finance plans,
                      strategies and got the first investor to start the
                      development process.
                    </li>
                    <li>
                      Created Cloud architecture for the company, including
                      CI/CD processes, Code Review tools, Developer Experience
                      tools, Project Management tools, Slack workspaces, Google
                      workspaces and other tools.
                    </li>
                    <li>
                      Leading team of 2 developers, UX/UI designer, 2 marketing
                      specialists and copywriter.
                    </li>
                    <li>
                      Built codebase needed for Next.js Web Client application,
                      Nest.js Backend application, Next.js Admin & CMS Manager
                      Application, React Native Client Application with complete
                      CI/CD solutions and Turborepo Packages.
                    </li>
                    <li>Planning marketing strategies and budgets.</li>
                  </ul>

                  <h4 className="position">Lead Web Developer</h4>
                  <span className="dates">May 2022 - Present</span>
                  <ul>
                    <li>
                      Proposed and implemented company technology upgrade
                      including Typescript, React 18, Next.js, Server State
                      Management, CI/CD processes, Git flow and Code reviews.
                    </li>
                    <li>
                      Constantly improving project management processes and
                      testing new work methodologies and communications
                      techniques.
                    </li>
                    <li>
                      Building complete React/Typescript/Nest applications.
                    </li>
                    <li>
                      Building processes, marketing automations and make.com
                      integrations.
                    </li>
                  </ul>
                </div>
              </div>
            </WorkPlace>

            <WorkPlace>
              <a
                target="_blank"
                rel="noindex nofollow noreferrer"
                href="https://gorillas.dev/"
              >
                <Img
                  objectFit="contain"
                  className="logo"
                  fluid={logos.gorillas.node.childImageSharp.fluid}
                />
              </a>
              <div>
                <div className="company-label">
                  <h3 className="company">Gorillas.dev</h3>
                  <span className="company-full-time">3 mos</span>
                </div>

                <div className="positions">
                  <h4 className="position">React Developer</h4>
                  <span className="dates">Dec 2022 - Present</span>
                  <ul>
                    <li>
                      Created long-term vision of the project, finance plans,
                      strategies and got the first investor to start the
                      development process.
                    </li>
                    <li>
                      Created Cloud architecture for the company, including
                      CI/CD processes, Code Review tools, Developer Experience
                      tools, Project Management tools, Slack workspaces, Google
                      workspaces and other tools.
                    </li>
                    <li>
                      Leading team of 2 developers, UX/UI designer, 2 marketing
                      specialists and copywriter.
                    </li>
                    <li>
                      Built codebase needed for Next.js Web Client application,
                      Nest.js Backend application, Next.js Admin & CMS Manager
                      Application, React Native Client Application with complete
                      CI/CD solutions and Turborepo Packages.
                    </li>
                    <li>Planning marketing strategies and budgets.</li>
                  </ul>

                  <h4 className="position">Lead Web Developer</h4>
                  <span className="dates">May 2022 - Present</span>
                  <ul>
                    <li>
                      Proposed and implemented company technology upgrade
                      including Typescript, React 18, Next.js, Server State
                      Management, CI/CD processes, Git flow and Code reviews.
                    </li>
                    <li>
                      Constantly improving project management processes and
                      testing new work methodologies and communications
                      techniques.
                    </li>
                    <li>
                      Building complete React/Typescript/Nest applications.
                    </li>
                    <li>
                      Building processes, marketing automations and make.com
                      integrations.
                    </li>
                  </ul>
                </div>
              </div>
            </WorkPlace>

            <WorkPlace>
              <a
                target="_blank"
                rel="noindex nofollow noreferrer"
                href="https://dreamstormstudios.com/"
              >
                <Img
                  objectFit="contain"
                  className="logo"
                  fluid={logos.dreamstorm.node.childImageSharp.fluid}
                />
              </a>
              <div>
                <div className="company-label">
                  <h3 className="company">DreamStorm Studios</h3>
                  <span className="company-full-time">1 yr 7 mos</span>
                </div>

                <div className="positions">
                  <h4 className="position">React Developer</h4>
                  <span className="dates">Dec 2022 - Present</span>
                  <ul>
                    <li>
                      Created long-term vision of the project, finance plans,
                      strategies and got the first investor to start the
                      development process.
                    </li>
                    <li>
                      Created Cloud architecture for the company, including
                      CI/CD processes, Code Review tools, Developer Experience
                      tools, Project Management tools, Slack workspaces, Google
                      workspaces and other tools.
                    </li>
                    <li>
                      Leading team of 2 developers, UX/UI designer, 2 marketing
                      specialists and copywriter.
                    </li>
                    <li>
                      Built codebase needed for Next.js Web Client application,
                      Nest.js Backend application, Next.js Admin & CMS Manager
                      Application, React Native Client Application with complete
                      CI/CD solutions and Turborepo Packages.
                    </li>
                    <li>Planning marketing strategies and budgets.</li>
                  </ul>

                  <h4 className="position">Lead Web Developer</h4>
                  <span className="dates">May 2022 - Present</span>
                  <ul>
                    <li>
                      Proposed and implemented company technology upgrade
                      including Typescript, React 18, Next.js, Server State
                      Management, CI/CD processes, Git flow and Code reviews.
                    </li>
                    <li>
                      Constantly improving project management processes and
                      testing new work methodologies and communications
                      techniques.
                    </li>
                    <li>
                      Building complete React/Typescript/Nest applications.
                    </li>
                    <li>
                      Building processes, marketing automations and make.com
                      integrations.
                    </li>
                  </ul>
                </div>
              </div>
            </WorkPlace>

            <WorkPlace>
              <a
                target="_blank"
                rel="noindex nofollow noreferrer"
                href="https://patrocreations.com/"
              >
                <Img
                  objectFit="contain"
                  className="logo"
                  fluid={logos.patrocreations.node.childImageSharp.fluid}
                />
              </a>
              <div>
                <div className="company-label">
                  <h3 className="company">Patrocreations</h3>
                  <span className="company-full-time">3 mos</span>
                </div>

                <div className="positions">
                  <h4 className="position">React Developer</h4>
                  <span className="dates">Dec 2022 - Present</span>
                  <ul>
                    <li>
                      Created long-term vision of the project, finance plans,
                      strategies and got the first investor to start the
                      development process.
                    </li>
                    <li>
                      Created Cloud architecture for the company, including
                      CI/CD processes, Code Review tools, Developer Experience
                      tools, Project Management tools, Slack workspaces, Google
                      workspaces and other tools.
                    </li>
                    <li>
                      Leading team of 2 developers, UX/UI designer, 2 marketing
                      specialists and copywriter.
                    </li>
                    <li>
                      Built codebase needed for Next.js Web Client application,
                      Nest.js Backend application, Next.js Admin & CMS Manager
                      Application, React Native Client Application with complete
                      CI/CD solutions and Turborepo Packages.
                    </li>
                    <li>Planning marketing strategies and budgets.</li>
                  </ul>
                </div>
              </div>
            </WorkPlace>

            <WorkPlace>
              <a
                target="_blank"
                rel="noindex nofollow noreferrer"
                href="https://skyagency360.pl/"
              >
                <Img
                  objectFit="contain"
                  className="logo"
                  fluid={logos.skyagency.node.childImageSharp.fluid}
                />
              </a>
              <div>
                <div className="company-label">
                  <h3 className="company">SkyAgency 360</h3>
                  <span className="company-full-time">3 mos</span>
                </div>

                <div className="positions">
                  <h4 className="position">React Developer</h4>
                  <span className="dates">Dec 2022 - Present</span>
                  <ul>
                    <li>
                      Created long-term vision of the project, finance plans,
                      strategies and got the first investor to start the
                      development process.
                    </li>
                    <li>
                      Created Cloud architecture for the company, including
                      CI/CD processes, Code Review tools, Developer Experience
                      tools, Project Management tools, Slack workspaces, Google
                      workspaces and other tools.
                    </li>
                    <li>
                      Leading team of 2 developers, UX/UI designer, 2 marketing
                      specialists and copywriter.
                    </li>
                    <li>
                      Built codebase needed for Next.js Web Client application,
                      Nest.js Backend application, Next.js Admin & CMS Manager
                      Application, React Native Client Application with complete
                      CI/CD solutions and Turborepo Packages.
                    </li>
                    <li>Planning marketing strategies and budgets.</li>
                  </ul>
                </div>
              </div>
            </WorkPlace>
          </div>

          <br />
          <br />

          <h1 css={sectionTitle}>Projects</h1>
          <div css={employmentWrapper}>
            <Project>
              <a
                target="_blank"
                rel="noindex nofollow noreferrer"
                href="https://aloki.io/"
              >
                <Img
                  objectFit="contain"
                  className="logo"
                  fluid={logos.aloki.node.childImageSharp.fluid}
                />
              </a>
              <div>
                <div className="project-label">
                  <h3 className="project">Alóki</h3>
                  <span className="project-full-time">3 mos</span>
                </div>

                <div className="description">
                  <p>
                    Alóki is an inspiring Web3 game project with the goal of
                    creating an incredible community around Costa Rican nature
                    and culture, while also providing a meaningful and
                    environmentally friendly investment opportunity.
                  </p>

                  <br />

                  <p>
                    Contribution as <strong>Frontend Developer:</strong>
                  </p>

                  <ul>
                    <li>
                      Created long-term vision of the project, finance plans,
                    </li>
                    <li>
                      Created Cloud architecture for the company, including
                      CI/CD processes, Code Review tools, Developer Experience
                    </li>
                  </ul>
                </div>
              </div>
            </Project>

            <Project>
              <a
                target="_blank"
                rel="noindex nofollow noreferrer"
                href="https://thelabz.com/"
              >
                <Img
                  objectFit="contain"
                  className="logo"
                  fluid={logos.labz.node.childImageSharp.fluid}
                />
              </a>
              <div>
                <div className="project-label">
                  <h3 className="project">The Labz Event Designer</h3>
                  <span className="project-full-time">1 yr</span>
                </div>

                <div className="description">
                  <p>
                    Organizing an online event has never been easier! Be it
                    business or entertainment, The Labz offers versatile,
                    customizable elements to create a branded experience. You
                    can create your own event even if you have had nothing to do
                    with programming or graphic design!
                  </p>

                  <br />

                  <p>
                    Contribution as <strong>Frontend Developer:</strong>
                  </p>

                  <ul>
                    <li>
                      Created long-term vision of the project, finance plans,
                    </li>
                    <li>
                      Created Cloud architecture for the company, including
                      CI/CD processes, Code Review tools, Developer Experience
                    </li>
                  </ul>
                </div>
              </div>
            </Project>
          </div>
        </div>
      </section>
    </>
  )
}

export default ResumePage
