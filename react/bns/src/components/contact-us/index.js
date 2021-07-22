import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt,FaEnvelope } from "react-icons/fa";
import Map from '../../assets/images/contact-us.png';
import Form from '../Form';

const Contactus = () => {
  return (
    <>
    <section className="contact-us">
        <Container>
            <Row>
              <Col md={6}>
                <div className="footer__wrapper--list">
                  <span className="footer__wrapper--list-items">
                    <FaMapMarkerAlt className="mr-13" />  Brisbane, Australia 
                  </span> <br />
                  <span className="footer__wrapper--list-items">
                      <FaPhoneAlt className="mr-13"/> +997 9852255558
                  </span> <br />
                  <span className="footer__wrapper--list-items">
                    <FaEnvelope className="mr-13" />  abc@gmail.com
                  </span> 
                </div>

                <figure>
                    <img src={Map} alt="map" width="100%"/>
                </figure>

              </Col>
              <Col md={6}> 
                    <Form />
              </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Contactus;