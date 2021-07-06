import React from 'react';

import LogoSheetal from '../../assests/images/LogoSheetal.png';

const Header = () => (
        <div className="logo-wrapper">
            <img src= {LogoSheetal} alt="logo" className="logo" />
        </div>
);

export default Header;