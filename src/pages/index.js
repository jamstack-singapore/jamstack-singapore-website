import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Grid, Row, Col } from "react-styled-flexboxgrid"

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
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <Image fluid={data.headerImage.childImageSharp.fluid} />
          </Col>
        </Row>
      </Grid>
    </Layout>
  )
}

export default IndexPage
