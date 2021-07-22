import React from 'react';

import {ImPhone} from 'react-icons/im';
import { MdLocationOn } from 'react-icons/md';

import Header from '../header';

const Contact = () => (
    <div className="contact">
        <Header />
        <div className="tagline">
            <span>स्वस्थ जिउनका लागी, मेहनती
                   हातका लागी, <b> शित्तल साईकल </b>
            </span>
        </div>
        <div className="contact--add">
            <span>
                <MdLocationOn className="mr"/>
                Kalikanagar, Butwal </span> <br />
            <span>
                <ImPhone className="mr" />
                 986-7112719 </span>
        </div>
        {/* <input type="button" className="btn--info" value="Let's talk"/> */}
    </div>
)

export default Contact;