import React from "react";
import LogoNeelam from "../../assests/images/LogoNeelam.png";
const Distributor = () =>{
   function topFunction(){
     console.log("hello");
    //  document.body.scrollTop = 00;
     document.documentElement.scrollTop = 0;
   }
  return(
  <div className="dist">
    <span className="dist--heading">Official Neelam Cycles Distributors</span>
    <div className="dist-wrapper">
      <div className="dist-wrapper--logo">
        <img src={LogoNeelam} alt="Logo" className="logo" />
      </div>
      <div className="dist-wrapper--nlm_btn">
        <input type="button" onClick={topFunction} className="btn--visit" value="Visit Site" />
      </div>
    </div>
  </div>
);
}
export default Distributor;