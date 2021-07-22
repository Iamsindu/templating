import React from 'react';

import Heading from '../headings';
import { BsArrowRight } from "react-icons/bs";

import indus from '../../assets/images/home-page/indus-clean.png';
import indusCircle from '../../assets/images/home-page/indus.png';
import commer from '../../assets/images/home-page/commer.png';
import commerCircle from '../../assets/images/home-page/hands.png';
import resi from '../../assets/images/home-page/indus-clean.png';
import resiCircle from '../../assets/images/home-page/house.png';

import ellipse from '../../assets/images/home-page/Ellipse.png';

const Service = () => {
    return (
    <>
    <section className="services">
       <Heading />
        
        <article className="services-cards">
            <div className="services__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <section className="services__bottom--border">
                                <div className="services__bottom-card__img">
                                    <img src={indus} alt="" className="services__bottom-card-img" />
                                </div>
                                <div className="image-overlay">
                                    <img src={ellipse} alt="elipse" className="ellipse" />
                                    <img src={indusCircle} alt="" className="services__bottom--img" />
                                </div>
                                
                                <div className="services__bottom--wrapper"> 
                                    <div className="services__bottom-card__content">
                                        <h3>Industrial Cleaning</h3>
                                        <p>Septic tank and drainage cleaning service in
                                            Kathmandu Bhaktapur Lalitpur Kirtipur
                                            Nepal.
                                        </p>
                                    </div>
        
                                    <div className="view__more">
                                        <span>View more </span>
                                          <BsArrowRight/>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-md-4">
                            <section className="services__bottom--border">
                                <div className="services__bottom-card__img">
                                    <img src={commer} alt="" className="services__bottom-card-img" />
                                </div>
                                <div className="image-overlay">
                                    <img src={ellipse} alt="elipse" className="ellipse" />
                                    <img src={commerCircle} alt="" className="services__bottom--img" />
                                </div>
                                
                                <div className="services__bottom--wrapper"> 
                                    <div className="services__bottom-card__content">
                                        <h3>Commercial Cleaning</h3>
                                        <p>Septic tank and drainage cleaning service in
                                            Kathmandu Bhaktapur Lalitpur Kirtipur
                                            Nepal.
                                        </p>
                                    </div>
        
                                    <div className="view__more">
                                        <span>View more </span>
                                          <BsArrowRight/>
                                    </div>
                                </div>
                            </section>
                        </div>    
                        <div className="col-md-4">
                            <section className="services__bottom--border">
                                <div className="services__bottom-card__img">
                                    <img src={resi} alt="" className="services__bottom-card-img" />
                                </div>
                                <div className="image-overlay">
                                    <img src={ellipse} alt="elipse" className="ellipse" />
                                    <img src={resiCircle} alt="" className="services__bottom--img" />
                                </div>
                                
                                <div className="services__bottom--wrapper"> 
                                    <div className="services__bottom-card__content">
                                        <h3>Residential Cleaning</h3>
                                        <p>Septic tank and drainage cleaning service in
                                            Kathmandu Bhaktapur Lalitpur Kirtipur
                                            Nepal.
                                        </p>
                                    </div>
        
                                    <div className="view__more">
                                        <span>View more </span>
                                          <BsArrowRight/>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </section>
    </>
    );
}

export default Service;