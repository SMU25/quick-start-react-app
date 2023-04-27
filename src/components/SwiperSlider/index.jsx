import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { DEFAULT_SETTINGS } from "./constants";

export const SwiperSlider = ({ items = [], customSettings }) => {
  const settings = customSettings || DEFAULT_SETTINGS;

  return (
    <Swiper {...settings}>
      {items?.map((item) => (
        <SwiperSlide className="" key={item.key}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
