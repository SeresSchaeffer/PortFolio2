import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import Kmutnb from "../../img/kmutnb.png";
import Pro from "../../img/Pro.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: Pro,
      head:"Poramee Thuanthong",
      review:
        "I born in 2000's and really like the world of computer programming. I've been studying computers since university. I love learning and have a dream to become a professional developer ",
    },
      
    {
      img: Kmutnb,
      head:"KMUTNB",
      
      review:
        "Bachelor of Engineering Program in Electronics Engineering Technology (Computer) From KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK 1518 Pracharat 1 Road, Wongsawang, Bangsue, Bangkok 10800",
    },
      
   
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>About </span>
        <span>Me </span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.head}</span>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
