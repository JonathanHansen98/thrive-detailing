import React from "react";

import Home from '../components/Home/Home';

import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Layout/globalStyles.css'
 






const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
