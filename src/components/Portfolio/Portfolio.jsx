import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Port4 from "../../img/Port4.png";
import Port3 from "../../img/Port3.png";
import Port2 from "../../img/Port2.png";
import Port1 from "../../img/Port1.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Port1} width='380px' height='214px' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port2} width='380px' height='214px' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port3} width='380px' height='214px' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port4} width='380px' height='214px' alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
