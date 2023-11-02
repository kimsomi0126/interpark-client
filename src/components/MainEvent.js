/* eslint-disable jsx-a11y/anchor-is-valid */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import "../styles/event.css";

export default function MainEvent() {
  return (
    <section className="event">
      <div className="event-inner">
        <div className="title-wrap">
          <h2 className="title">이벤트</h2>
          <span className="title-txt">
            인터파크에서 할인혜택을 꼭 챙기세요.
          </span>
        </div>
        <div className="event-wrap">
          <Swiper
            slidesPerView={4}
            slidesPerGroup={4}
            spaceBetween={26}
            speed={400}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".event-btn.next",
              prevEl: ".event-btn.prev",
            }}
            modules={[Autoplay, Navigation]}
            className="event-slide"
          >
            <SwiperSlide>
              <div className="event-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/e1.png" alt="event-img" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="event-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/e2.jpg" alt="event-img" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="event-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/e1.png" alt="event-img" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="event-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/e2.jpg" alt="event-img" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="event-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/e1.png" alt="event-img" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="event-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/e2.jpg" alt="event-img" />
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          <button className="event-btn slide-btn next">이전</button>
          <button className="event-btn slide-btn prev">다음</button>
        </div>
      </div>
    </section>
  );
}
