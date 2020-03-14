import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Banner from "../components/banner"
import Layout from "../components/layout"

const imagesQuery = graphql`
  query {
    graphQLSgLg: file(relativePath: { eq: "graphql_sg_lg.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const IndexPage = () => {
  const { graphQLSgLg } = useStaticQuery(imagesQuery)
  return (
    <Layout>
      <Container>
        <SEO title="Home" />
        <Banner />
        <Info>
          <H2>April 9th, 7:00pm</H2>
          <H2>Location TBD*</H2>
          <H3>In collaboration with</H3>
          <a href="https://graphql-sg.github.io/" target="blank">
            <H3>GraphQL SG</H3>
          </a>
          <Images>
            <Image fixed={graphQLSgLg.childImageSharp.fixed} />
          </Images>
        </Info>
        <Sub>* Probably online on account of the present life and times</Sub>
      </Container>
    </Layout>
  )
}

export default IndexPage

const Container = styled("div")`
  text-align: center;
  margin-bottom: 2rem;
  a {
    color: inherit;
    text-decoration: underline;
  }
`
const Info = styled("div")`
  padding: 0rem 2rem;
`
const H2 = styled("h2")`
  margin: 4rem 0rem;
  font-size: 4rem;
  font-weight: 900;
  font-style: italic;
  @media (max-width: 600px) {
    font-size: 3rem;
  }
`
const H3 = styled("h3")`
  font-weight: 900;
  font-style: italic;
  font-size: 2rem;
  margin: 0rem;
`
const Images = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0rem;
  @media (max-width: 375px) {
    flex-direction: column;
  }
`
const Sub = styled("p")`
  font-style: italic;
`