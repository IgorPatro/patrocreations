import React from "react"
import { css } from "@emotion/react"

import MainLayout from "layout/MainLayout"
import PageHeader from "components/PageHeader"
import SEO from "components/SEO"
import ServiceTile from "../components/ServiceTile"

const additionalPadding = (theme) => css`
  width: 100%;
  padding: 0 2%;
  display: flex;
  justify-content: center;

  ${theme.mediaQueries.bigTablet} {
    padding: 0 5%;
  }
`

const wrapperStyles = (theme) => css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  max-width: 1000px;
  margin-top: 30px;
  margin-bottom: 30px;

  ${theme.mediaQueries.bigTablet} {
    margin-top: 70px;
    margin-bottom: 70px;
  }
`

const smallServicesWrapper = (theme) => css`
  max-width: 110rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${theme.mediaQueries.bigTablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

const ServicesPage = () => {
  const HEADER = [
    {
      hashtag: "#services",
      headingNode: {
        childMarkdownRemark: {
          html:
            "<h1>What can I <strong>do</strong> for <br/> you and <strong>your company</strong> </h1>",
        },
      },
      subheading: "my services and skills",
    },
  ]

  return (
    <>
      <SEO pageName="Services" />
      <MainLayout>
        <PageHeader data={HEADER} />
        <div css={additionalPadding}>
          <div css={wrapperStyles}>
            <ServiceTile
              title="Web Development"
              buttonText="Check portfolio"
              buttonUrl="/portfolio"
              features={[
                "Latest web technologies",
                "High-performance solutions",
                "User-friendly design",
              ]}
              huge
              index={0}
            >
              I craft modern, high-performance websites and web applications
              tailored to your needs. Using cutting-edge technologies like
              React.js, Node.js, and TypeScript, I ensure seamless user
              experiences, fast loading times, and full scalability. Whether you
              need a sleek landing page or a complex enterprise system, I bring
              your vision to life.
            </ServiceTile>
            <div css={smallServicesWrapper}>
              <ServiceTile
                title="Mobile Development"
                buttonText="Be mobile"
                buttonUrl="/contact"
                features={[
                  "Native & cross-platform solutions",
                  "Optimized for speed & security",
                  "Seamless backend integrations",
                ]}
                index={1}
              >
                From idea to execution, I build mobile apps that stand out.
                Whether it’s iOS or Android, I develop smooth, intuitive
                applications that engage users and deliver outstanding
                performance. My approach ensures seamless integration, security,
                and a top-tier user experience.
              </ServiceTile>
              <ServiceTile
                title="Design"
                buttonText="Make it beautiful"
                buttonUrl="/contact"
                features={[
                  "Unique & custom designs",
                  "User-focused UI/UX",
                  "Branding that makes an impact",
                ]}
                index={2}
              >
                Creativity meets functionality. I create stunning visuals and
                brand identities from scratch, ensuring that your business
                stands out. Whether it’s UI/UX, web design, or complete
                branding, I focus on delivering designs that are not only
                beautiful but also highly effective.
              </ServiceTile>
              <ServiceTile
                title="IT Audits"
                buttonText="Scan my company"
                buttonUrl="/contact"
                features={[
                  "Comprehensive system analysis",
                  "Security & performance evaluation",
                  " Optimization & future-proofing",
                ]}
                index={3}
              >
                I uncover inefficiencies and optimize your IT infrastructure
                with expert audits. I analyze security, system performance, and
                workflow automation to ensure your technology supports your
                business goals efficiently and securely.
              </ServiceTile>
              <ServiceTile
                title="Custom Development"
                buttonText="Contact me"
                buttonUrl="/contact"
                features={[
                  "Fully customized solutions",
                  "No-code & automation expert",
                  "Scalable & future-ready development",
                ]}
                index={4}
              >
                If you can dream it, I can build it. I specialize in tailor-made
                software solutions across any technology—traditional coding and
                no-code platforms like Zapier and Make.com. From workflow
                automation to full-scale applications, I deliver efficient,
                scalable, and innovative solutions for your business.
              </ServiceTile>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default ServicesPage
