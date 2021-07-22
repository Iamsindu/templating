import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Company from '../../assets/images/about-us/about-banner.png';

const AboutBanner = () => {
    return(
    <>
    <article className="indus-cleaning">
        <Container >
            <Row>
                <Col md={6}>
                    <Container>
                        <section className="heading">
                            <div className="heading-box">
                                <div class="title">
                                    <span>WHO WE ARE
                                        <span className="line">.</span>
                                    </span>
                                    <h2>OUR COMPANY</h2>
                                </div>
                            </div>
                        </section>
                        <div className="contents">
                            <p>Minima eum laudantium nulla temporibus eum. Eaque eum esse pariatur unde aliquid iusto ipsum ducimus pariatur. Consequatur atque et ex ut recusandae soluta. Quaerat sint consectetur voluptatem dolor ut sunt et. Qui vitae dolores officia est nihil ipsum ut ullam. Quia est et sint dicta ea aperiam cumque 

Consequatur atque et ex ut recusandae soluta. Quaerat sint consectetur voluptatem dolor ut sunt et. Qui vitae dolores officia est nihil ipsum ut ullam. Quia est et sint dicta ea aperiam cumque aliquid.Consequatur atque et ex ut recusandae soluta.

Quaerat sint consectetur voluptatem dolor ut sunt et. Qui vitae dolores officia est nihil ipsum ut ullam. Quia est et sint dicta ea aperiam cumque aliquid. </p>
                            {/* <Button>Request a quote</Button> */}
                        </div>
                    </Container>
                </Col>
                <Col md={6}>
                    <Container>
                        <div className="img-wrapper">
                            <img src={Company} alt="cleaning banner" width="100%" /> 
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    </article>
    </>
    )
}

export default AboutBanner;