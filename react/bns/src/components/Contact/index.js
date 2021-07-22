import React from 'react';
import Form from '../Form/index';
import { Container } from 'react-bootstrap';
import Girl from '../../assets/images/home-page/girl.png';

const Contact = () => {
    return(
        <>
        <section className="contact__form">   
        {/* <Container> */}
            <figure className="position-relative contact">
               <img src={Girl} alt="banner" className="img-fluid" />
                <Container className="d-flex">
                        <div className="ml-auto">
                            <figcaption>  
                                <Container>
                                  <Form /> 
                                </Container>
                            </figcaption>
                        </div>
                </Container>
            </figure> 
        {/* </Container> */}
        </section>

        </>
    )
}

export default Contact;