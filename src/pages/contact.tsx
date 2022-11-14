import * as React from 'react';
import Layout from '../components/layout-index';
import Seo from '../components/seo';

const ContactPage = () => {
    return (
        <Layout>
            <Seo title="Contact" />
            <div>
                <h1>contact me</h1>
            </div>
            <p className="justify-left flex-auto flex-wrap">
                you can contact me on Discord at Cinder#0965 or on Telegram at <a href="https://t.me/cinderithink"> @cinderithink</a>.
            </p>
        </Layout>
    );
};

export default ContactPage;