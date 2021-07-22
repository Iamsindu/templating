import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Cleaning from '../../assets/images/service-page/banner-img.png';

const Clean = () => {
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
                                    <span>WE CLEAN INDUSTRIES
                                        <span className="line">.</span>
                                    </span>
                                    <h2>INDUSTRIAL CLEANING</h2>
                                </div>
                            </div>
                        </section>
                        <div className="contents">
                            <p>Minima eum laudantium nulla temporibus eum. Eaque eum esse pariatur unde aliquid iusto ipsum ducimus pariatur. Consequatur atque et ex ut recusandae soluta. Quaerat sint consectetur voluptatem dolor ut sunt et. Qui vitae dolores officia est nihil ipsum ut ullam. Quia est et sint dicta ea aperiam cumque </p>
                            <Button>Request a quote</Button>
                        </div>
                    </Container>
                </Col>
                <Col md={6}>
                    <Container>
                        <div className="img-wrapper">
                            <img src={Cleaning} alt="cleaning banner" width="100%" /> 
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    </article>
    </>
    )
}

export default Clean;