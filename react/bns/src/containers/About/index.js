import React from 'react'
import Contact from '../../components/Contact';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header'
import AboutBanner from '../../components/About';
import Gallery from '../../components/gallery';

const About = () => {
  return (
    <>
    <Header />
    <AboutBanner />
    <Gallery />
    <Contact />
    <Footer />
    </>
  )
}

export default About;