import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Faqs from '../sections/Faqs';
import Downloads from '../sections/Downloads';
import Documentation from '../sections/Documentation';
import Usefullinks from '../sections/UsefulLinks';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Faqs />
    <Downloads />
    <Documentation />
    <Usefullinks />
    <Footer />
  </Layout>
);

export default IndexPage;
