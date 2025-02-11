import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import Algobourse from "./ProjectsDetails/Algobourse/Algobourse";

import 'swiper/css';
import 'swiper/css/pagination';
import NosLois from "./ProjectsDetails/NosLois/NosLois";

const Projects = () => {
  return (
    <>
      <Swiper
      slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
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
      </Swiper>
    </>
  );
}

export default Projects;