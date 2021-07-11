import React from 'react';

import Banner from '../../components/banner';
import Footer from '../../components/footer';
import Contact from '../../components/contact'; 
import Services from '../../components/services';
import Distributor from '../../components/distributor';

import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return ( 
        <div className="home-wrapper">
            <Container>
                <Row>
                    <Col md={6} sm={12} > <Contact/>  </Col>
                    <Col md={6} sm={12} > <Banner />  </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={6} sm={12} > <Services />  </Col>
                    <Col md={6} sm={12}> <Distributor />  </Col>
                </Row>
            </Container>
                 <Footer /> 
        </div>
    )
}

export default Home;