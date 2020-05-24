import React from "react";
import { Link } from "gatsby";

import Home from '../components/Home/Home';

import Layout from "../components/Layout/layout";
import Image from "../components/Layout/image";
import SEO from "../components/Layout/seo";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneVolume, faTags } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Layout/globalStyles.css'
 
library.add(fab, faEnvelope, faPhoneVolume, faTags )






const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
