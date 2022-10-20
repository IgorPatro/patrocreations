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
      title={`${site.siteMetadata.title} - ${pageName} | Igor Patro | Portfolio | Projects | Frontend Developer`}
    >
      <meta
        name="google-site-verification"
        content="n9sBpBJG06aKLsHnzr5dDcbj-0E5xq9inG8I4Kj3M2I"
      />
      <meta name="ahrefs-site-verification" content="2aa182d1893218335a5d875d8fb99907cf6f2c744b00dce51e6d450d1d35ae25" />
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
