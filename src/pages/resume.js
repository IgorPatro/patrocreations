import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image/withIEPolyfill"
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
  display: flex;
  flex-direction: column;
  gap: 3rem;
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
  gap: 10px;
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
  margin-bottom: 15px;

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
  margin-bottom: 15px;

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

const techWrapper = css``

const logosWrapper = css`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 15px;
`

const techLogo = css`
  width: 100%;
  max-width: 40px;
  max-height: 40px;
`

const ResumePage = () => {
  const data = useStaticQuery(graphql`
    query ResumePageData {
      file(name: { eq: "avatar_2" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      allFile(filter: { name: { regex: "/logo|tech/" } }) {
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

  const calculateDuration = (d1, d2) => {
    let months
    months = (d2.getFullYear() - d1.getFullYear()) * 12
    months -= d1.getMonth()
    months += d2.getMonth()

    const mths = (months <= 0 ? 0 : months) + 1

    return mths >= 12
      ? `${Math.floor(mths / 12)} yr ${mths % 12} mos`
      : `${mths} mos`
  }

  const logos = {
    redvike: data.allFile.edges.find((el) => el.node.name.includes("redvike")),
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
    dreamgame: data.allFile.edges.find((el) =>
      el.node.name.includes("dreamgame")
    ),
    tmb: data.allFile.edges.find((el) => el.node.name.includes("tmb")),
    charterstock: data.allFile.edges.find((el) =>
      el.node.name.includes("charterstock")
    ),
  }

  const techs = data.allFile.edges.filter((el) => el.node.name.includes("tech"))

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
              <h2>Passionate Frontend Engineer 🙏</h2>
            </header>
          </div>

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

          <div css={aboutWrapper}>
            <h1 css={sectionTitle}>About</h1>
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

          <div css={employmentWrapper}>
            <h1 css={sectionTitle}>Work experience</h1>
            <WorkPlace>
              <a
                target="_blank"
                rel="noindex nofollow noreferrer"
                href="https://redvike.com"
              >
                <Img
                  objectFit="contain"
                  className="logo"
                  fluid={logos.redvike.node.childImageSharp.fluid}
                />
              </a>
              <div>
                <div className="company-label">
                  <h3 className="company">Redvike</h3>
                  <span className="company-full-time">
                    {calculateDuration(new Date("2023-06-01"), new Date())}
                  </span>
                </div>

                <div className="positions">
                  <h4 className="position">Frontend Engineer</h4>
                  <span className="dates">June 2023 - Present</span>
                  <ul>
                    <li>
                      Developing interactive and efficient features within an
                      application built on the Next.js, Tailwind, and React
                      Query stack.
                    </li>
                    <li>
                      Collaborated closely with designers and business analysts
                      to develop a long-term vision for projects, ensuring that
                      the end-product not only meets current user needs but is
                      also adaptable to future market trends and requirements.
                    </li>
                    <li>
                      Engaging in active cooperation with Backend Developers to
                      ensure seamless integration and functionality.
                    </li>
                    <li>
                      Designing and implementing a user-centric UI architecture.
                    </li>
                    <li>
                      Estimating tasks with accuracy, considering factors such
                      as project complexity, dependencies, and potential
                      roadblocks, to ensure timely delivery of project
                      components.
                    </li>
                  </ul>
                </div>
              </div>
            </WorkPlace>

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
                  <span className="company-full-time">
                    {calculateDuration(
                      new Date("2022-05-01"),
                      new Date("2023-06.01")
                    )}
                  </span>
                </div>

                <div className="positions">
                  <h4 className="position">Co-Founder</h4>
                  <span className="dates">May 2022 - June 2023</span>
                  <ul>
                    <li>
                      Taking active part in company strategy and planning,
                      including finances, marketing, sales and product
                      development.
                    </li>
                    <li>
                      Building processes, marketing automations and make.com
                      integrations.
                    </li>
                    <li>
                      Improving company website and landing pages with
                      Gatsby.js.
                    </li>
                    <li>Planning marketing strategies and budgets.</li>
                    <li>
                      Managing finances, contracts and documentation of the
                      company.
                    </li>
                  </ul>

                  <h4 className="position">Fullstack Developer</h4>
                  <span className="dates">May 2022 - Dec 2022</span>
                  <ul>
                    <li>
                      Created Cloud architecture for the company, including
                      CI/CD processes, Code Review tools, Developer Experience
                      tools, Project Management tools, Slack workspaces, Google
                      workspaces and other tools.
                    </li>
                    <li>
                      Leading team of 2 developers, UX/UI designer, graphic
                      designer and copywriter across 3 Jamstack projects.
                    </li>
                    <li>
                      Building knowledge library for the company and
                      continuously improving codebase and technologies stack.
                    </li>
                    <li>
                      Closely working with clients and discussing details.
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
                  <span className="company-full-time">
                    {calculateDuration(
                      new Date("2022-12-01"),
                      new Date("2023-05-29")
                    )}
                  </span>
                </div>

                <div className="positions">
                  <h4 className="position">Frontend Developer</h4>
                  <span className="dates">Dec 2022 - May 2023</span>
                  <ul>
                    <li>
                      Building complete React x Redux application with REST API.
                    </li>
                    <li>
                      Closely working with project manager and discussing
                      details of the project and requirements.
                    </li>
                    <li>
                      Constantly improving project management processes and
                      testing new work methodologies and communications
                      techniques.
                    </li>
                    <li>
                      Implementing new technologies and libraries in the
                      project.
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
                  <span className="company-full-time">
                    {calculateDuration(
                      new Date("2021-05-01"),
                      new Date("2022-11-01")
                    )}
                  </span>
                </div>

                <div className="positions">
                  <h4 className="position">Fullstack Developer</h4>
                  <span className="dates">Jul 2022 - Nov 2022</span>
                  <ul>
                    <li>
                      Proposed and implemented a headless content management
                      system that highly reduced the time needed for content
                      editing.
                    </li>
                    <li>
                      Took over the leadership in a 6-person team during a
                      difficult period and managed to complete project tasks
                      within a 2-weeks deadline.
                    </li>
                    <li>
                      Participating in weekly brainstorming sessions and coming
                      up with new features/adjustments to the projects.
                    </li>
                    <li>
                      Cooperating with DevOps Engineers to build and develop
                      proper CI/CD solutions based on AWS and GitLab.
                    </li>
                    <li>
                      Collaborating with the PM and organizing work in the
                      project, determining further development process.
                    </li>
                    <li>Developing Gatsby.js Jamstack project.</li>
                  </ul>

                  <h4 className="position">Team Leader</h4>
                  <span className="dates">Jul 2022 - Nov 2022</span>
                  <ul>
                    <li>
                      Leading Unity Gamedev team of 5 people, including 3
                      developers, 1 artist, 1 designer.
                    </li>
                    <li>Organizing the work in a project</li>
                    <li>
                      Helping developers with technical aspects of the project
                    </li>
                  </ul>

                  <h4 className="position">Junior React Developer</h4>
                  <span className="dates">May 2021 - Jun 2022</span>
                  <ul>
                    <li>
                      {`Created a Stripe payment system that significantly sped up
                      the platform's release.`}
                    </li>
                    <li>
                      Developing a no-code event platform in React (Next.js &
                      Redux) and TypeScript.
                    </li>
                    <li>
                      Created the technical documentation that cut the
                      onboarding time for new developers by 50%.
                    </li>
                    <li>
                      Reviewing the code of team members and providing them
                      feedback.
                    </li>
                    <li>
                      Constantly learning and expanding knowledge about React
                      and TypeScript by reading articles & exchanging knowledge
                      with other developers.
                    </li>
                    <li>Taking part in AWS workshops & Jest workshops.</li>
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
                  <span className="company-full-time">
                    {calculateDuration(
                      new Date("2021-02-01"),
                      new Date("2021-08-01")
                    )}
                  </span>
                </div>

                <div className="positions">
                  <h4 className="position">Frontend Developer</h4>
                  <span className="dates">Feb 2021 - Aug 2021</span>
                  <ul>
                    <li>Designed and built 3 React websites.</li>
                    <li>
                      Actively communicating and discussing projects with
                      customers and providing them with work reports.
                    </li>
                    <li>Cooperating with various companies and freelancers.</li>
                    <li>
                      Implementing Google Analytics and other tracking
                      solutions.
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
                  <span className="company-full-time">
                    {calculateDuration(
                      new Date("2020-04-01"),
                      new Date("2022-05-01")
                    )}
                  </span>
                </div>

                <div className="positions">
                  <h4 className="position">Freelance Web Developer</h4>
                  <span className="dates">Apr 2020 - May 2022</span>
                  <ul>
                    <li>Designing and developing React websites.</li>
                    <li>
                      Optimizing websites to +95/100 points on PageSpeed
                      Insights.
                    </li>
                    <li>
                      Analyzing website traffic and providing UX/UI adjustments
                      to websites.
                    </li>
                  </ul>
                </div>
              </div>
            </WorkPlace>
          </div>

          <div css={employmentWrapper}>
            <h1 css={sectionTitle}>Projects</h1>

            <Project>
              <a
                target="_blank"
                rel="noindex nofollow noreferrer"
                href="https://www.charterstock.com/"
              >
                <Img
                  objectFit="contain"
                  className="logo"
                  fluid={logos.charterstock.node.childImageSharp.fluid}
                />
              </a>
              <div>
                <div className="project-label">
                  <h3 className="project">Charterstock</h3>
                  <span className="project-full-time">6 mos</span>
                </div>

                <div className="description">
                  <p>
                    The platform offers an effortless rental experience,
                    bridging the gap between sea adventurers and an expansive
                    selection of vessels at market-friendly prices. It boasts
                    immediate booking capabilities, fortified payment
                    transactions, and unwavering customer assistance,
                    simplifying the journey from the scenic docks of Ibiza to
                    the open waters.
                  </p>

                  <br />

                  <p>
                    Contribution as a <strong>Frontend Engineer</strong>:
                  </p>

                  <ul>
                    <li>
                      Developing new features/components in Next.js + Tailwind &
                      React Query tech stack.
                    </li>
                    <li>Taking active part UX/UI designing process.</li>
                    <li>
                      Cooperating with Backend Developers and designing API
                      architecture.
                    </li>
                    <li>
                      Estimating tasks to ensure timely delivery of project
                      components.
                    </li>
                    <li>
                      Taking part in business analysis meetsings and discussing
                      project requirements.
                    </li>
                  </ul>
                </div>
              </div>
            </Project>

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
                  <span className="project-full-time">6 mos</span>
                </div>

                <div className="description">
                  <p>
                    First-ever Play-to-Own blockchain gaming concept with
                    Sustainability at its core. The main desire of the team was
                    to reconnect people to nature. Through Alóki play-to-own
                    metaverse, users will entertain, earn and educate themselves
                    about nature and Sustainability. Actions made by players in
                    the game reflect real-world actions. Alóki sanctuary was
                    created to bring positive environmental change and make the
                    world a better place.
                  </p>

                  <br />

                  <p>
                    Contribution as a <strong>Frontend Developer</strong> &{" "}
                    <strong>Team Leader</strong>:
                  </p>

                  <ul>
                    <li>
                      Managing a team of 3 developers and a UX/UI designer.
                    </li>
                    <li>
                      Designing the technical side of the project, planning
                      architecture.
                    </li>
                    <li>
                      Taking part in creating UX/UI and brainstorming sessions
                      with designers.
                    </li>
                    <li>
                      Building Gatsby.js website with Strapi.js headless CMS.
                    </li>
                    <li>
                      Cooperating with DevOps Engineer and planning CI/CD
                      architecture.
                    </li>
                    <li>Actively communicating with a client.</li>
                    <li>
                      Providing help with browser solutions to a game-dev team.
                    </li>
                    <li>
                      Building backend application with newsletter
                      implementation.
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
                  <span className="project-full-time">11 mos</span>
                </div>

                <div className="description">
                  <p>
                    A powerful tool to create online events from scratch using
                    simple components. With the ability to change the size,
                    color, pattern, and arrangement of the elements, the user
                    can easily create a website or an online event. It has a lot
                    of extensions and breathtaking features like 3d Panellum
                    implementations, authentication, drawing blackboard, or live
                    streaming. It allows users even to create a videoconference
                    with a live chat!
                  </p>

                  <br />

                  <p>
                    Contribution as a <strong>React Developer</strong>:
                  </p>

                  <ul>
                    <li>
                      Configuring and implementing Stripe subscription payments.
                    </li>
                    <li>
                      Building perspective component and 360* images viewer
                      (Panellum).
                    </li>
                    <li>
                      Planning and refactoring entire typography on the
                      platform.
                    </li>
                    <li>
                      Designing, developing, and manually testing new
                      features/components.
                    </li>
                    <li>Creating docs for both developers and client.</li>
                    <li>Reviewing the code of team members.</li>
                  </ul>
                </div>
              </div>
            </Project>

            <Project>
              <Img
                objectFit="contain"
                className="logo"
                fluid={logos.dreamgame.node.childImageSharp.fluid}
              />
              <div>
                <div className="project-label">
                  <h3 className="project">DreamGame</h3>
                  <span className="project-full-time">5 mos</span>
                </div>

                <div className="description">
                  <p>
                    Internal game for DreamStorm Studios. The main reason for
                    creating this application was to provide gamification into
                    the company. Employees were able to earn points for
                    completing tasks, and then exchange them for rewards.
                  </p>

                  <br />

                  <p>
                    Contribution as a <strong>Team Leader</strong>:
                  </p>

                  <ul>
                    <li>
                      Leading team of 5 people, including 3 developers, 1
                      artist, 1 designer.
                    </li>
                    <li>Organizing the work in a project.</li>
                    <li>
                      Helping developers with technical aspects of the project.
                    </li>
                  </ul>
                </div>
              </div>
            </Project>

            <Project>
              <Img
                objectFit="contain"
                className="logo"
                fluid={logos.tmb.node.childImageSharp.fluid}
              />
              <div>
                <div className="project-label">
                  <h3 className="project">TMB</h3>
                  <span className="project-full-time">6 mos</span>
                </div>

                <div className="description">
                  <p>
                    A platform for creating and managing services for the
                    printing houes industry. It allows users to manage their
                    orders, create invoices, and manage their clients. It also
                    provides a lot of useful features like a calendar, a chat,
                    and a dashboard. The main goal of the project was to create
                    a platform that would help users to manage their business.
                  </p>

                  <br />

                  <p>
                    Contribution as a <strong>Frontend Developer</strong>:
                  </p>

                  <ul>
                    <li>
                      Improving existing JavaScript codebase and adding new
                      features.
                    </li>
                    <li>
                      Planning CI/CD processes for the project and helping
                      DevOps Engineer with it.
                    </li>
                    <li>Building UX/UI interfaces</li>
                  </ul>
                </div>
              </div>
            </Project>

            <Project>
              <Img
                objectFit="contain"
                className="logo"
                fluid={logos.patrocreations.node.childImageSharp.fluid}
              />
              <div>
                <div className="project-label">
                  <h3 className="project">Freelancing</h3>
                  <span className="project-full-time">2 yr+</span>
                </div>

                <div className="description">
                  <p>
                    As a freelance web developer I was responsible for both
                    designing and building websites. I’m a big Gatsby fanboy so
                    most of those projects were built in this technology. I was
                    testing a lot of methodologies of work, styling libraries
                    and architecture ideas. Across 2+ years of providing
                    services, I have built 7+ websites for many different
                    clients and industries.
                  </p>

                  <br />

                  <p>
                    My best project are listed{" "}
                    <a
                      target="_blank"
                      rel="noindex nofollow noreferrer"
                      href="https://patrocreations.com/portfolio_en.pdf"
                    >
                      <strong>here</strong>
                    </a>
                  </p>
                </div>
              </div>
            </Project>
          </div>

          {/* <div>
            <h1 css={sectionTitle}>Education</h1>

            <p>Doesn&apos;t matter at all 🥱😛</p>
          </div> */}

          <div css={techWrapper}>
            <h1 css={sectionTitle}>Tech Stack</h1>

            <div css={logosWrapper}>
              {techs.map((el) => (
                <Img
                  objectFit="contain"
                  css={techLogo}
                  fluid={el.node.childImageSharp.fluid}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ResumePage
