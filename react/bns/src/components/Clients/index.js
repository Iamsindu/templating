import React from 'react';
import { Container } from 'react-bootstrap';

import Logos from '../../assets/images/home-page/logos.png';

const Client = ()=> {
    return(
    <>
    <section className="our-clients">
        <Container>
        <section className="heading">
            <Container>
            <div className="heading-box">
                <div class="title">
                    <span>OUR CLIENT LOVE US
                        <span className="line">.</span>
                    </span>
                    <h2>OUR CLIENTS</h2>
                </div>
            </div>
            </Container>
        </section>
        <div className="client-logos">
            <img src={Logos} alt="Client logos" width="100%" />
        </div>
        </Container>
    </section>
    </>
    )
}

export default Client;