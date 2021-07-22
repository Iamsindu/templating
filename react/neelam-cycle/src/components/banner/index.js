import React from 'react';

import Bicycle from '../../assests/images/cycle.png';

const Banner = () => (
    <div className="banner">
        <div className="btn--wrapper">
            <a
            className="btn--info"
            href="https://www.facebook.com/sheetalcycles"
            target="_blank"
            rel="noopener noreferrer"
          >
           Let's talk
          </a>
        </div>
        <div className="banner--wrapper">
            <img src={Bicycle} alt="Bicycle" width="604px"  />
         </div>
    </div>
);

export default Banner;