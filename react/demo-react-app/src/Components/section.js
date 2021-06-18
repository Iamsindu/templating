import React from 'react';
import '../Styles/app.css';

import { Header } from './header';
import { Footer } from './footer';
import { Link } from 'react-router-dom';

import whyuslogo from '../Assets/Images/Whyuslogo.svg';
import icon1 from '../Assets/Images/icon1.png';
import icon2 from '../Assets/Images/icon2.png';
import icon3 from '../Assets/Images/icon3.png';
import icon4 from '../Assets/Images/icon4.png';
import icon5 from '../Assets/Images/icon5.png';

import service1 from '../Assets/Images/service1.jpg';
import service2 from '../Assets/Images/service2.png';
import service3 from '../Assets/Images/service3.png';
import service4 from '../Assets/Images/service4.png';
import service5 from '../Assets/Images/service5.png';
import service6 from '../Assets/Images/service6.png';

import client1 from '../Assets/Images/client1.jpg';
import client2 from '../Assets/Images/client2.jpg';
import client3 from '../Assets/Images/client3.png';
import client4 from '../Assets/Images/client4.jpg';
import client5 from '../Assets/Images/client5.png';
import client6 from '../Assets/Images/client6.jpg';
import client7 from '../Assets/Images/client7.png';
import client8 from '../Assets/Images/client8.jpg';

export const HeroSection = () => (
    <div className="first--section">
        <Header />
    </div>
)

export const WhyUsSection = () => (
    <div className="second--section">
        <div className="whyus-heading">
            Why Choose     
            <span className="blue">&nbsp;Us</span> ?
        </div>
        <div className="whyus-design">
            <div className="design">
                <img src={whyuslogo} alt="design"/>
            </div>
            <div className="whyus">
                <div className="whyus-list">
                    <div className="whyus-icon">
                        <img src={icon1} alt="icon1" />
                    </div>
                    <div className="whyus-content">
                        <div className="whyus-title">Digital Innovations</div>
                        <div className="whyus-desc">Innovation leads to productivity</div>
                    </div>
                </div>

                <div className="whyus-list">
                    <div className="whyus-icon">
                        <img src={icon2} alt="icon2" />
                    </div>
                    <div className="whyus-content">
                        <div className="whyus-title">Passionate Approach</div>
                        <div className="whyus-desc">Innovation leads to productivity</div>
                    </div>
                </div>

                <div className="whyus-list">
                    <div className="whyus-icon">
                        <img src={icon3} alt="icon3" />
                    </div>
                    <div className="whyus-content">
                        <div className="whyus-title">Transparent Business Model</div>
                        <div className="whyus-desc">We are open-minded to endure your business with our technical</div>
                    </div>
                </div>  

                <div className="whyus-list">
                    <div className="whyus-icon">
                        <img src={icon4} alt="icon4" />
                    </div>
                    <div className="whyus-content">
                        <div className="whyus-title">Quality & Affordable Services</div>
                        <div className="whyus-desc">We give value for money</div>
                    </div>
                </div>
                
                <div className="whyus-list">
                    <div className="whyus-icon">
                        <img src={icon5} alt="icon5" />
                    </div>
                    <div className="whyus-content">
                        <div className="whyus-title">Great Support</div>
                        <div className="whyus-desc">We are known for excellent customer support</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="whyus-gap"></div>
    </div>
)

export const ServiceSection = () => (
    <div className="third--section">
        <div className="services-heading">
        What We <span className="pink">Do?</span>
        </div>
        <div className="services-card">
            <div className="card-container">
                <div className="card"> 
                    <div className="card-icon">
                        <img src={service1} alt="cardicon1" />
                    </div>
                    <div className="card-title">Web Development</div>
                    <div className="card-desc">We help businesses by delivering robust and brainstorming web development solutions</div>
                </div>
                
                <div className="card"> 
                    <div className="card-icon">
                        <img src={service2} alt="cardicon2" />
                    </div>
                    <div className="card-title mt-10">Mobile Development</div>
                    <div className="card-desc">Providing innovative app development solutions for better business experience.</div>
                </div>

                <div className="card"> 
                    <div className="card-icon">
                        <img src={service3} alt="cardicon3" />
                    </div>
                    <div className="card-title mt-5">Web Hosting and Domain Registration</div>
                    <div className="card-desc">We provide Web Hosting for small static websites to big dynamic portals which is feasible for you.</div>
                </div>
            </div>
            <div className="card-container">
                <div className="card"> 
                    <div className="card-icon">
                        <img src={service4} alt="cardicon4" />
                    </div>
                    <div className="card-title mt-10">SEO Management</div>
                    <div className="card-desc">Drive valuable web traffic to your website through an organic search for long-term benefits.</div>
                </div>
                
                <div className="card"> 
                    <div className="card-icon">
                        <img src={service5} alt="cardicon5" />
                    </div>
                    <div className="card-title mt-14">Digital Marketing</div>
                    <div className="card-desc">We encompass all the digital marketing strategies to cover a wide range of marketing activities, SEO, such as social media, email etc</div>
                </div>

                <div className="card"> 
                    <div className="card-icon">
                        <img src={service6} alt="cardicon6" />
                    </div>
                    <div className="card-title mt-14">Software Consulting</div>
                    <div className="card-desc">Business problem evaluation of cost, integration, features, scalability and finally End to End product development.</div>
                </div>
            </div>
        </div>
    </div>
)

export const ClientSection = () => (
    <div className="fourth--section">
        <div className="client-heading">
            Our Clients
        </div>
        <div className="client-container">
            <div className="client-box">
                <div className="client">
                    <div className="client-logo">
                        <img src={client1} alt="client1" width="100px" />
                    </div>
                    <div className="client-name">Hotel and Resturant Association Rupandehi</div>
                </div>
                <div className="client">
                    <div className="client-logo">
                        <img src={client2} alt="client2" width="100px" />
                    </div>
                    <div className="client-name">Butwal Chamber Of Commerce And Industry</div>
                </div>
                <div className="client">
                    <div className="client-logo">
                        <img src={client3} alt="client3" width="100px" />
                    </div>
                    <div className="client-name">Trishapt Trading Pvt. Ltd</div>
                </div>
                <div className="client">
                    <div className="client-logo">
                        <img src={client4} alt="client4" width="100px" className="m-50" />
                    </div>
                    <div className="client-name"> Chautari Resturant</div>
                </div>
            </div>
            <div className="client-box">
                <div className="client">
                    <div className="client-logo">
                        <img src={client5} alt="client5" width="100px" />
                    </div>
                    <div className="client-name"> Radio Dhurkot </div>
                </div>
                <div className="client">
                    <div className="client-logo">
                        <img src={client6} alt="client6" width="100px" />
                    </div>
                    <div className="client-name"> Rapid Cleaning &  Facility Services </div>
                </div>
                <div className="client">
                    <div className="client-logo">
                        <img src={client7} alt="client7" width="100px" />
                    </div>
                    <div className="client-name"> Kintsugi Sushi Bar And Grill </div>
                </div>
                <div className="client">
                    <div className="client-logo">
                        <img src={client8} alt="client8" width="100px" />
                    </div>
                    <div className="client-name"> Real Dreams Education Consultancy </div>
                </div>

            </div>
        </div>
    </div>
)

export const ButtonSection = () => (
    <div className="fifth--section">
        <div className="button-container">
            <p>Get in touch</p>
            <Link to="https://www.facebook.com/buddhainnovations/">
                <button>Ping Us.</button>
            </Link>
        </div>
    </div>
)

export const FooterSection = () => (
    <div className="footer-section">
        <Footer />
    </div>
)