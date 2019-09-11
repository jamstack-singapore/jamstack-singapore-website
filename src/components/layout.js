import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Header from "./header"
import Footer from "./footer"
import theme from "../components/theme"
import "./layout.css"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header siteTitle={site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
