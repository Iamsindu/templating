import React from 'react';

import logo from '../../../assets/images/home-page/logo.png';

import { FaAngleRight, FaMapMarkerAlt, FaPhoneAlt,FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return(
        <>
        <section className="footer" id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                     <div className="footer__wrapper">
                        <div className="footer__wrapper--img">
                             <img src={logo} alt="" />
                        </div>
                        <p>The apostrophe is a punctuation
                            mark, and sometimes a diacritical
                            mark, in languages that use the
                            Latin alphabet and some other
                            alphabets. In English, it is used for
                            three purposes: The marking of the
                            omission of one or more letters</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer__wrapper">
                        <h3>Links</h3>

                        <div className="footer__wrapper--list">
                            <span className="footer__wrapper--list-items">
                                {/* <i className="fa fa-angle-right mt-1" aria-hidden="true"></i> */}
                               <FaAngleRight  className="icon" /> Home
                            </span> <br />
                            <span className="footer__wrapper--list-items">
                                {/* <i className="fa fa-angle-right mt-1" aria-hidden="true"></i> */}
                                <FaAngleRight  className="icon" />Services
                            </span> <br />
                            <span className="footer__wrapper--list-items">
                                {/* <i className="fa fa-angle-right mt-1" aria-hidden="true"></i> */}
                                <FaAngleRight  className="icon" />About
                            </span> <br />
                            <span className="footer__wrapper--list-items">
                                {/* <i className="fa fa-angle-right mt-1" aria-hidden="true"></i> */}
                                <FaAngleRight className="icon" />Contact
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer__wrapper">
                        <h3>Services</h3>
                        <div className="footer__wrapper--list">
                            <span className="footer__wrapper--list-items">
                                {/* <i className="fa fa-angle-right mt-1" aria-hidden="true"></i> */}
                                <FaAngleRight className="icon" />Industrial Cleaning
                            </span> <br />
                            <span className="footer__wrapper--list-items">
                                {/* <i className="fa fa-angle-right mt-1" aria-hidden="true"></i> */}
                                <FaAngleRight className="icon" />Commercial Cleaning
                            </span> <br />
                            <span className="footer__wrapper--list-items">
                                {/* <i className="fa fa-angle-right mt-1" aria-hidden="true"></i> */}
                                <FaAngleRight className="icon" />Residential Cleaning
                            </span> 
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer__wrapper">
                        <h3>Contact</h3>
                        <div className="footer__wrapper--list">
                            <span className="footer__wrapper--list-items">
                              <FaMapMarkerAlt className="mr-13" />  Brisbane, Australia 
                            </span> <br />
                            <span className="footer__wrapper--list-items">
                               <FaPhoneAlt className="mr-13"/> +997 9852255558
                            </span> <br />
                            <span className="footer__wrapper--list-items">
                              <FaEnvelope className="mr-13" />  abc@gmail.com
                            </span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="footer__bottom">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="footer__bottom--wrapper">
                            <span>Copyright @ B&S Cleaning services . 2020 </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </section>
    </>
    )
}

export default Footer;