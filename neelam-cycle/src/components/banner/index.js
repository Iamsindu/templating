import React from 'react';

import Bicycle from '../../assests/images/cycle.png';

const Banner = () => (
    <div className="banner">
        <div className="btn--wrapper">
            <input type="button" className="btn--info" value="Let's talk"/>
        </div>
        <div className="banner--wrapper">
            <img src={Bicycle} alt="Bicycle" width="604px"  />
         </div>
    </div>
);

export default Banner;