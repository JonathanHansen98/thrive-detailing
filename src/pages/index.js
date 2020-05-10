import React from "react";
import { Link } from "gatsby";

import Home from '../components/Home/Home';

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
