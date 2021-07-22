import React from 'react';

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import banner from '../../assets/images/home-page/banner-img.png';

const Banner = () => {
    return (
    <>
    <section className="banner">   
     <Container>
    <figure className="position-relative banner">
               <img src={banner} alt="banner" className="img-fluid" />
               <div>
               <figcaption>
                   <h1>A CLEAN SPACE IS A <br /> CLEAN BUSINESS</h1>
                   <p>100% QUALITY <br/>
                        Get 10% Off on your first service.</p>
                   <Button> Request a quote</Button>
               </figcaption>
               </div>
               </figure> 
        </Container>
    </section>
    </>
    );
}

export default Banner;