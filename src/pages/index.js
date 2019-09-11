import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "jamstack-header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Image fluid={data.headerImage.childImageSharp.fluid} />

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
