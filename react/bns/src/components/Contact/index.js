import React from 'react';
import Form from '../Form/index';
import { Container, Row, Col } from 'react-bootstrap';

import Girl from '../../assets/images/home-page/girl.png';
// import rect from '../../assets/images/home-page/rectangle.png';

const Contact = () => {
    return(
        <>
        {/* <section className="contact__form">
        {/* <div className="card"> */}
            {/* <img className="card-img" src={Girl} alt="Card" /> */}
            {/* <div className="card-img-overlay"> */}
                {/* <Container> */}
                {/* <Row> */}
                    {/* <Col md={6}> */}
                        {/* <img src={Girl} alt="irl" /> */}
                    {/* </Col> */}
                    {/* // <Col md={6}> <Form /> </Col> */}
                {/* // </Row> */}
                {/* // </Container> */}
            {/* </div> */}
        {/* </div> */}
        {/* // </section> */}

        <section className="contact__form">   
        {/* <Container> */}
            <figure className="position-relative contact">
               <img src={Girl} alt="banner" className="img-fluid" />
                <Container>
                    <Row>
                        <Col md={6}> <div></div></Col>
                        <Col md={6}>
                            <figcaption>    <Form /> </figcaption>
                        </Col>
                    </Row> 
                </Container>
            </figure> 
        {/* </Container> */}
        </section>

        </>
    )
}

export default Contact;