import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Row, Col } from "react-styled-flexboxgrid"

import Layout from "./layout"
import SEO from "./seo"

const IndexPage = () => {
  const { headerImage, github } = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "jamstack-header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      github {
        repository(owner: "jamstack-singapore", name: "Events") {
          issues(last: 20, states: OPEN, labels: ["Talk"]) {
            edges {
              node {
                id
                author {
                  avatarUrl
                  login
                  url
                }
                bodyHTML
                title
                url
              }
            }
          }
        }
      }
    }
  `)

  const latestTalks = github.repository.issues.edges
  return (
    <Layout>
      <SEO title="Home" />
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <Image fluid={headerImage.childImageSharp.fluid} />
          </Col>
        </Row>
        <Row>
          <Col>
            {latestTalks && latestTalks.length > 0 ? (
              <>
                <h2>Our upcoming events</h2>
                {latestTalks.map(({ node }) => {
                  const { title, url } = node
                  return (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {title}
                    </a>
                  )
                })}
              </>
            ) : (
              <>
                <h2>
                  It looks like we don't have any talks lined up at the moment
                  <span role="img" aria-label="thinking emoji">
                    🤔
                  </span>
                </h2>
                <p>
                  If you'd like to speak at one of our events, we're always
                  looking for speakers, create an issue{" "}
                  <a href="https://github.com/jamstack-singapore/Events/issues/new">
                    here
                  </a>
                </p>
              </>
            )}
          </Col>
        </Row>
      </Grid>
    </Layout>
  )
}

export default IndexPage
