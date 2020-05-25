import React from 'react';
import Layout from '../components/Layout/layout';
import Gallery from '../components/Gallery/Gallery';
import { faEnvelope, faPhoneVolume, faTags } from '@fortawesome/free-solid-svg-icons'


const GalleryPage = () => {
    return (
        <Layout>
        <Gallery/>
        </Layout>
    )
};

export default GalleryPage;