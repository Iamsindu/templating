import React from 'react';

// import Header from '../../components/header';
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
                    <Col> <Contact/>  </Col>
                    <Col> <Banner />  </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col> <Services />  </Col>
                    <Col> <Distributor />  </Col>
                </Row>
            </Container>
            <Footer /> 
        </div>
    )
}

export default Home;