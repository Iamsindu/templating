import React from 'react';
import { Container } from 'react-bootstrap';

import quote from '../../assets/images/home-page/quote.png';

const Testimonial = () => {
    return(
        <>
        <section className="testimonials">
        <Container>
            <section className="heading">
                <Container>
                    <div className="heading-box">
                        <div className="title">
                            <span>WHAT THEY SAY ABOUT US
                                <span className="line">.</span>
                            </span>
                            <h2>TESTIMONIALS</h2>
                        </div>
                    </div>
                </Container>
            </section>
        </Container>

        <article className="client-testimonials">
            <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <section className="aboutus__bottom--testimonial">
                                <div className="aboutus__bottom--testimonial__img">
                                    <img src={quote} alt="quote" className="aboutus__bottom--testimonial__img--img" />
                                </div>
                                <div className="aboutus__bottom--testimonial__content">
                                    <p>The apostrophe is a punctuation mark, and
                                        sometimes a diacritical mark, in languages
                                        that use the Latin alphabet and some other
                                        alphabets. In English, it is used for three
                                        purposes: The marking of the omission of
                                        one or more letters. </p>
                                    <div className="aboutus__bottom--testimonial__info">
                                        <h4 className="name">Saroj Kunwar</h4>
                                        <span className="role">Designer</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-md-4">
                            <section className="aboutus__bottom--testimonial">
                                <div className="aboutus__bottom--testimonial__img">
                                    <img src={quote} alt="quote" className="aboutus__bottom--testimonial__img--img"/>
                                </div>
                                <div className="aboutus__bottom--testimonial__content">
                                    <p>The apostrophe is a punctuation mark, and
                                        sometimes a diacritical mark, in languages
                                        that use the Latin alphabet and some other
                                        alphabets. In English, it is used for three
                                        purposes: The marking of the omission of
                                        one or more letters. </p>
                                    <div className="aboutus__bottom--testimonial__info">
                                        <h4 className="name">Saroj Kunwar</h4>
                                        <span className="role">Designer</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-md-4">
                            <section className="aboutus__bottom--testimonial">
                                <div className="aboutus__bottom--testimonial__img">
                                    <img src={quote} alt="quote" className="aboutus__bottom--testimonial__img--img" />
                                </div>
                                <div className="aboutus__bottom--testimonial__content">
                                    <p>The apostrophe is a punctuation mark, and
                                        sometimes a diacritical mark, in languages
                                        that use the Latin alphabet and some other
                                        alphabets. In English, it is used for three
                                        purposes: The marking of the omission of
                                        one or more letters.</p>
                                    <div className="aboutus__bottom--testimonial__info">
                                        <h4 className="name">Saroj Kunwar</h4>
                                        <span className="role">Designer</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
        </article>
        </section>
        </>
    )
}

export default Testimonial;