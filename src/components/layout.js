import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import theme from "../components/theme"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
