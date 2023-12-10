import React from "react";
import "./preloader.css";
import WeedImg from '../assets/logo/Dygranabis-Light-mode.png'

const PreLoader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        {/* copy svg image and past it here */}
       <img src={WeedImg}  style={{width:"90px"}}/>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default PreLoader;