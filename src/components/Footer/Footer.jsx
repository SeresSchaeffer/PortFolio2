import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Poramee.tar@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.facebook.com/peetarza" target="_blank" > <Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/SeresSchaeffer" target="_blank" ><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
