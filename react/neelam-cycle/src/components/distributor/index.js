import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import LogoNeelam from '../../assests/images/LogoNeelam.png';

const Distributor = () => (
    <div className="dist">
        <span className="dist--heading">Official Neelam Cycles  Distributors</span>
        <Container>
                <Row>
                    <Col> 
                        <div className="dist--logo">
                            <img src={LogoNeelam} alt="Logo" className="logo"/>
                        </div>
                    </Col>
                    <Col> 
                        <input type="button" className="btn--visit" value="Visit Site"/>
                    </Col>
                </Row>
            </Container>
    </div>
);

export default Distributor;