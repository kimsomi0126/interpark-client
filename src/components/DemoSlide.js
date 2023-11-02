import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function DemoSlide() {
  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={5}>
        <SwiperSlide>slide1</SwiperSlide>
        <SwiperSlide>slide2</SwiperSlide>
        <SwiperSlide>slide3</SwiperSlide>
        <SwiperSlide>slide4</SwiperSlide>
        <SwiperSlide>slide5</SwiperSlide>
        <SwiperSlide>slide6</SwiperSlide>
      </Swiper>
    </>
  );
}
