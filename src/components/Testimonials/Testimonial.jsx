import React, { useContext } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { themeContext } from "../../Context";
import Swing from 'react-reveal/Swing';

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "Fatima's design abilities for my personal blog website definitely stood out. It was extremely astonishing how she was able to design a distinct and captivating interface that precisely reflected my personality"
    },
    {
      img: profilePic2,
      review:
        "The interactive and captivating website Fatima designed for our nonprofit organization completely blew us away. She effectively encapsulated the essence of our objective and assisted us in raising awareness of it",
    },
    {
      img: profilePic3,
      review:
      "Fatima's website for my online portfolio of artwork exceeded my expectations. It helped me establish connections with new clients while showcasing my work in a polished and innovative manner"
    },
    {
      img: profilePic4,
      review:
      "We worked together with Fatima to create a unique analytics dashboard for our company. Her capacity to transform difficult information into understandable images changed the game for us"
    },
  ];
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="t-wrapper" id="testimonial">
      <Swing>
      <h2 className="special-heading" style={{ color: darkMode ? "white" : "" }}>Special-heading</h2>
      </Swing>
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
                <span className="view">{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
