import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Gallery1 from '../../assets/images/about-us/gallery-1.png';
import Gallery2 from '../../assets/images/about-us/gallery-2.png';
import Gallery3 from '../../assets/images/about-us/gallery-3.png';
import Gallery4 from '../../assets/images/about-us/gallery-4.png';
import Gallery5 from '../../assets/images/about-us/gallery-5.png';
import Gallery6 from '../../assets/images/about-us/gallery-6.png';

const Gallery = () => {
    return(
        <>
        <section className="gallery">
            <Container>
                 <section className="heading">
                    <div className="heading-box">
                        <div class="title">
                            <span>WHAT WE CLEAN
                                <span className="line">.</span>
                            </span>
                            <h2>CLEANING TYPES</h2>
                        </div>
                    </div>
                </section>

                <section className="gallery-photos">
                    {/* <Container> */}
                        <Row className="flex-gap">
                            <Col md={4}>
                                <figure>
                                    <img src ={Gallery1} alt="gallery-1" className="image"/>
                                </figure>
                            </Col>
                            <Col md={4}>
                                <figure>
                                    <img src ={Gallery2} alt="gallery-2" className="image"/>
                                </figure>
                            </Col>
                            <Col md={4}>
                                <figure>
                                    <img src ={Gallery3} alt="gallery-3" className="image"/>
                                </figure>
                            </Col>
                        </Row>
                        <Row className="flex-gap">
                            <Col md={4}>
                                <figure>
                                    <img src ={Gallery4} alt="gallery-4" className="image"/>
                                </figure>
                            </Col>
                            <Col md={4}>
                                <figure>
                                    <img src ={Gallery5} alt="gallery-5" className="image"/>
                                </figure>
                            </Col>
                            <Col md={4}>
                                <figure>
                                    <img src ={Gallery6} alt="gallery-6" className="image"/>
                                </figure>
                            </Col>
                        </Row>
                    {/* </Container> */}

                </section>
            </Container>
        </section>
        </>
    )
}

export default Gallery;