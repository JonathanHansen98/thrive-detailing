import React from 'react';
import Layout from '../components/Layout/layout';
import Contact from '../components/Contact/Contact'
import { faEnvelope, faPhoneVolume, faTags } from '@fortawesome/free-solid-svg-icons'


const ContactPage = () => {
    return (
        <Layout>
        <Contact></Contact>
        </Layout>
    )
};

export default ContactPage;