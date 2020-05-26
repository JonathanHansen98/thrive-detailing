
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from '../Footer/Footer'

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
    <>
      <Topbar/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '100%',
          padding: ``,
        }}
      >
        <main>{children}</main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
