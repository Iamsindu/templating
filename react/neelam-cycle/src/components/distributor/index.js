import React from "react";
import LogoNeelam from "../../assests/images/LogoNeelam.png";
const Distributor = () => {
  return (
    <div className="dist">
      <span className="dist--heading">Official Neelam Cycles Distributors</span>
      <div className="dist-wrapper">
        <div className="dist-wrapper--logo">
          <img src={LogoNeelam} alt="Logo" className="logo" />
        </div>
        <div className="dist-wrapper--nlm_btn">
          {/* <input type="button" onClick={topFunction} className="btn--info" value="Visit Site" /> */}
          <a
            className="btn--info"
            href="https://neelamcyclenepal.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site
          </a>
        </div>
      </div>
    </div>
  );
};
export default Distributor;
