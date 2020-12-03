import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../Footer/Footer"

import Topbar from "../Topbar/Topbar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div >
      <Topbar />
      <div
        style={{
          minHeight: "90vh",
        }}
      >
        <main>{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
