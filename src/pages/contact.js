import React from "react"
import { css } from "@emotion/react"

import MainLayout from "layout/MainLayout"
import ContactForm from "components/ContactForm"
import SEO from "components/SEO"

const additionalPadding = (theme) => css`
  width: 100%;

  ${theme.mediaQueries.tablet} {
    padding: 0 8%;
  }

  ${theme.mediaQueries.bigTablet} {
    padding: 5% 12%;
  }

  ${theme.mediaQueries.desktop} {
    padding: 0% 15%;
  }

  ${theme.mediaQueries.huge} {
    padding: 5% 20%;
  }

  h1 {
    line-height: 1.2em;

    ${theme.mediaQueries.bigTablet} {
      width: 70%;
    }
  }
`

const ContactPage = () => (
  <>
    <SEO pageName="Contact" />
    <MainLayout>
      <div css={additionalPadding}>
        <h1>Go on and send me a message! Maybe I will read this 😜</h1>
        <ContactForm />
      </div>
    </MainLayout>
  </>
)

export default ContactPage
