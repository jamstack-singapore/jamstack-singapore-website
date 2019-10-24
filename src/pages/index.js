import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Banner from "../components/banner"
import Layout from "../components/layout"

const imagesQuery = graphql`
  query {
    stripeSm: file(relativePath: { eq: "stripe.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    stripeLg: file(relativePath: { eq: "stripe.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    rkSm: file(relativePath: { eq: "rk.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    rkLg: file(relativePath: { eq: "rk.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const IndexPage = () => {
  const { stripeSm, stripeLg, rkSm, rkLg } = useStaticQuery(imagesQuery)
  const stripe = [
    stripeSm.childImageSharp.fixed,
    {
      ...stripeLg.childImageSharp.fixed,
      media: `(min-width: 375px)`,
    },
  ]
  const rk = [
    rkSm.childImageSharp.fixed,
    {
      ...rkLg.childImageSharp.fixed,
      media: `(min-width: 375px)`,
    },
  ]
  return (
    <Layout>
      <Container>
        <SEO title="Home" />
        <Banner />
        <Info>
          <H2>Arriving December 5th, 7:00pm at</H2>
          <a href="https://twitter.com/StripeSingapore" target="blank">
            <H2>Stripe Singapore</H2>
          </a>
          <H3>In collaboration with</H3>
          <a href="https://reactknowledgeable.org/meetups/5" target="blank">
            <H3>React Knowledgeable</H3>
          </a>
          <Images>
            <a
              href="https://stripe.com/jobs/search?t=design%2Cengineering%2Coperations%2Cproduct-and-technical&l=singapore"
              target="blank"
            >
              <Image fixed={stripe} />
            </a>
            <Image fixed={rk} />
          </Images>
        </Info>
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
