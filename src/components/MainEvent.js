/* eslint-disable jsx-a11y/anchor-is-valid */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import "../styles/event.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MainEvent() {
  const [htmlTag, setHtmlTag] = useState([]);
  const axiosGetData = () => {
    axios
      .get("event.json")
      .then((res) => {
        let arr = [];
        for (let i = 0; i < res.data.total; i++) {
          const obj = res.data["event_" + (i + 1)];
          arr[i] = obj;
        }
        setHtmlTag(arr);
      })
      .catch((error) => {
        console.log("error :", error);
      });
  };
  useEffect(() => {
    axiosGetData();
  }, []);
  return (
    <section className="event">
      <div className="inner">
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
            speed={500}
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
            {htmlTag.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="event-slide-item">
                    <a href={item.url}>
                      <div className="item-img">
                        <img src={item.image} alt="event-img" />
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button className="event-btn slide-btn next">이전</button>
          <button className="event-btn slide-btn prev">다음</button>
        </div>
      </div>
    </section>
  );
}
