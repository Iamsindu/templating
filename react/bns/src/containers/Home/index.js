import React from 'react'

// import { Container } from 'react-bootstrap';

import Banner from '../../components/Banner';
import Client from '../../components/Clients';
import Service from '../../components/Service';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Testimonial from '../../components/Testimonials';
import Contact from '../../components/Contact';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Service />
      <Client />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;