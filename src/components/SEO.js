import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const SEO = ({ pageName }) => {
  const { site } = useStaticQuery(
    graphql`
      query siteInformationsQuery {
        site {
          siteMetadata {
            description
            title
            author
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang: "pl",
      }}
      title={`${site.siteMetadata.title} - ${pageName} | Igor Patro | Portfolio | Projects | Junior | Front-End Developer`}
    >
      <meta
        name="google-site-verification"
        content="n9sBpBJG06aKLsHnzr5dDcbj-0E5xq9inG8I4Kj3M2I"
      />
      <meta charset="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      <meta name="author" content={site.siteMetadata.author} />
    </Helmet>
  )
}

SEO.propTypes = {
  pageName: PropTypes.string.isRequired,
}

export default SEO
