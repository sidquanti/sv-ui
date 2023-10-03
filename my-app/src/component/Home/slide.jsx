import React from "react";
import Slider from "infinite-react-carousel";

import cloud_mountains from "../../data/bi1.jpg";
import groups from "../../data/bi2.jpg";
import hills from "../../data/bi3.jpg";
import "./slide.css";

function Slide() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    className: "slide_box",
    dots: true,
    virtualList: true,
    duration: 100,
    arrows:true
  };
  return (
    <div >
      
      <Slider {...settings}>
        <div className="row">
          <img
            src={cloud_mountains}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div>
          <img
            src={groups}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div>
          <img
            src={hills}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
      </Slider>
    </div>
  );
}

export default Slide;
