import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCreative } from 'swiper/modules';

import Algobourse from "./ProjectsDetails/Algobourse/Algobourse";
import NosLois from "./ProjectsDetails/NosLois/NosLois";
import HoHo from "./ProjectsDetails/HoHo/HoHo";

import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
  return (
    <div style={{backgroundColor: "#3498db"}}>
      <Swiper
      slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
        }}
        speed={1000}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide><Algobourse /></SwiperSlide>
        <SwiperSlide><NosLois /></SwiperSlide>
        <SwiperSlide><HoHo /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Projects;