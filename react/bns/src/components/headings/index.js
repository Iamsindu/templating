import React from 'react';
import { Container } from 'react-bootstrap';

const Heading = () => {
    return (
    <>
    <section className="heading">
        <Container>
        <div className="heading-box">
                <div class="title">
                    <span>WHAT WE OFFER 
                        <span className="line">.</span>
                    </span>
                    <h2>OUR SERVICES</h2>
                </div>
        </div>
        </Container>
    </section>
    </>
    );
}

export default Heading;