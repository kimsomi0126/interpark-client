/* eslint-disable jsx-a11y/anchor-is-valid */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import "../styles/visual.css";
import { useRef } from "react";

export default function Visual() {
  // 1. swiper 슬라이드 태그를 참조한다.
  const swiperRef = useRef();
  return (
    <section className="visual">
      <div className="visual-inner">
        <Swiper
          slidesPerView={2}
          spaceBetween={24}
          speed={500}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay, Navigation]}
          className="visual-slide"
        >
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img
                  src={process.env.PUBLIC_URL + "/images/v1.png"}
                  alt="visual_1"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="b.html">
                <img
                  src={`${process.env.PUBLIC_URL}/images/v2.png`}
                  alt="visual_2"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="c.html">
                <img
                  src={`${process.env.PUBLIC_URL}/images/v3.jpg`}
                  alt="visual_3"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="d.html">
                <img
                  src={`${process.env.PUBLIC_URL}/images/v4.jpg`}
                  alt="visual_4"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="e.html">
                <img
                  src={`${process.env.PUBLIC_URL}/images/v5.jpg`}
                  alt="visual_5"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="f.html">
                <img
                  src={`${process.env.PUBLIC_URL}/images/v6.jpg`}
                  alt="visual_6"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="g.html">
                <img
                  src={`${process.env.PUBLIC_URL}/images/v7.jpg`}
                  alt="visual_7"
                />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          className="visual-btn slide-btn prev"
          onClick={() => {
            swiperRef.current.slidePrev();
          }}
        >
          이전
        </button>
        <button
          className="visual-btn slide-btn next"
          onClick={() => {
            swiperRef.current.slideNext();
          }}
        >
          다음
        </button>
      </div>
    </section>
  );
}
