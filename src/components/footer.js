import React from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const { skyline } = useStaticQuery(graphql`
    {
      skyline: file(relativePath: { eq: "sg-skyline.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <footer>
      <Grid>
        <Row>
          <Col xs={12}>
            <span>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </span>
          </Col>
          <Col xs={12}>
            <Image fluid={skyline.childImageSharp.fluid} />
          </Col>
        </Row>
      </Grid>
    </footer>
  )
}

export default Footer
