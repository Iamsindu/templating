import React from 'react';
import {Button, Container} from 'react-bootstrap';

const Form = () => {
    return(
        <>
            <div className="contact__form--wrapper">
        <Container >
            <h5>Get a quote</h5>
                <form action="" >
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="name">
                                <label for="name">Name * </label>
                                <input type="text" name="name" id="" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="email">
                                <label for="email">Email * </label>
                                <input type="email" name="email" id="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="phone">
                                <label for="phone">Phone *   </label>
                                <input type="text" name="phone" id="" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="address">
                                <label for="address">Address *</label>
                                <input type="text" name="address" id="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="service">
                                <label for="service">Services </label>
                                <select id="service" name="service">
                                    <option value=""></option>
                                    <option value="australia"> Industrial Cleaning </option>
                                    <option value="canada">Commercial Cleaning</option>
                                    <option value="usa">Residential Cleaning</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="messsage">
                                <label for="message">Message</label>
                                <textarea name="msg" id="" cols="50" rows="4"></textarea>
                            </div>
                        </div>
                    </div>    
                    <div className="contact__form--button">
                        <Button> submit </Button>
                    </div>
                </form>
        </Container>
            </div>
        </>
    )
}

export default Form;