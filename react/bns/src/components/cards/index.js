import React from 'react';
import { CardGroup, Card, Container,Row } from 'react-bootstrap';
// import Cleaning from '../../assets/images/service-page/banner-img.png';
import Carpet from '../../assets/images/service-page/carpet.png';
import Regular from '../../assets/images/service-page/regular.png';
import EOL from '../../assets/images/service-page/end-of-lease.png';

const Cards = () => {
    return(
    <>
    <section className="cards">
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

            <section className="cleaning-types">
                <article className="cleaning-card"> 
                    <Container>
                        <Row>
                            <CardGroup>
                                {/* <Col md={4}> */}
                                <Card>
                                    <div className="card-wrapper green">     
                                        <Card.Img variant="top" src={Regular} className="img-props"/>
                                        <Card.Body>
                                            <Card.Title>REGULAR CLEANING</Card.Title>
                                            <Card.Body className="p0">Minima eum laudantium nulla temporibus eum. Eaque eum esse pariatur unde aliquid iusto ipsum ducimus pariatur. Consequatur atque et ex ut recusandae soluta. Quaerat sint consectetur voluptatem dolor ut sunt et. Qui vitae dolores officia </Card.Body>
                                        </Card.Body>
                                    </div>
                                </Card>
                                {/* </Col> */}

                                {/* <Col md={4}> */}
                                <Card>
                                    <div className="card-wrapper blue">     
                                        <Card.Img variant="top" src={Carpet} className="img-props" />
                                        <Card.Body>
                                            <Card.Title>CARPET CLEANING</Card.Title>
                                            <Card.Body className="p0">Minima eum laudantium nulla temporibus eum. Eaque eum esse pariatur unde aliquid iusto ipsum ducimus pariatur. Consequatur atque et ex ut recusandae soluta. Quaerat sint consectetur voluptatem dolor ut sunt et. Qui vitae dolores officia </Card.Body>
                                        </Card.Body>
                                    </div>
                                </Card>
                                {/* </Col> */}

                                {/* <Col md={4}> */}
                                <Card>
                                    <div className="card-wrapper red">     
                                        <Card.Img variant="top" src={EOL} className="img-props" />
                                        <Card.Body>
                                            <Card.Title>END OF LEASE CLEANING</Card.Title>
                                            <Card.Body className="p0">Minima eum laudantium nulla temporibus eum. Eaque eum esse pariatur unde aliquid iusto ipsum ducimus pariatur. Consequatur atque et ex ut recusandae soluta. Quaerat sint consectetur voluptatem dolor ut sunt et. Qui vitae dolores officia </Card.Body>
                                        </Card.Body>
                                    </div>
                                </Card>
                                {/* </Col> */}

                            </CardGroup>
                       
                        </Row>
                    </Container>
                </article>
            </section>
        </Container>
    </section>
    </>
    )
}

export default Cards;