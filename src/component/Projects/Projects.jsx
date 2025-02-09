import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Algobourse from "./ProjectsDetails/Algobourse";

import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
  return (
    <>
      <Swiper
      slidesPerView={1}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Algobourse /></SwiperSlide>
        <SwiperSlide><Algobourse /></SwiperSlide>
        <SwiperSlide><Algobourse /></SwiperSlide>
        <SwiperSlide><Algobourse /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Projects;