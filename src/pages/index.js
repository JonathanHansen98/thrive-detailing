import React from "react";
import '../components/Layout/font/Montserrat-Regular.otf'
import Home from '../components/Home/Home';
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Layout/globalStyles.css'
 






const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
