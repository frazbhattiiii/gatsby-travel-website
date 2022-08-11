
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header           from "./Header"
import { GlobalStyles } from "./styles/GlobalStyles";

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyles/>
      <Header />
        <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
