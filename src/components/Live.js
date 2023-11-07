/* eslint-disable jsx-a11y/anchor-is-valid */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import "../styles/live.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Live() {
  const [htmlTag, setHtmlTag] = useState([]);
  const axiosGetData = () => {
    axios
      .get("live.json")
      .then((res) => {
        let arr = [];
        for (let i = 0; i < res.data.total; i++) {
          const obj = res.data["live_" + (i + 1)];
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
    <section className="live">
      <div className="live-inner">
        <div className="title-wrap">
          <h2 className="title">
            <img src="images/title_live.svg" alt="인터파크 LIVE" />
          </h2>
        </div>
        <div className="live-wrap">
          <Swiper
            slidesPerView={4}
            slidesPerGroup={4}
            spaceBetween={26}
            speed={300}
            navigation={{
              nextEl: ".live-btn.next",
              prevEl: ".live-btn.prev",
            }}
            modules={[Navigation]}
            className="live-slide"
          >
            {htmlTag.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="live-slide-item">
                    <a href={item.live_info.url}>
                      <div
                        className={
                          item.live_info.state === "방송예정"
                            ? "item-img  ready"
                            : "item-img"
                        }
                      >
                        <img
                          src={item.live_info.image}
                          alt={item.live_info.name}
                        />
                      </div>
                      <div className="item-info">
                        <div className="item-title">
                          <span
                            className={
                              item.live_info.state === "LIVE"
                                ? "live-badge on"
                                : "live-badge"
                            }
                          >
                            {item.live_info.state}
                          </span>
                          <p className="name">{item.live_info.name}</p>
                        </div>
                      </div>
                      {item.live_info.state === "방송예정" ? (
                        <div className="item-time">
                          <p>{item.live_time.date}</p>
                          <b>{item.live_time.time}</b>
                        </div>
                      ) : (
                        ""
                      )}
                    </a>
                    {item.live_product.open === true ? (
                      <div className="item-product">
                        <a href={item.live_product.url}>
                          <div className="product-img">
                            <img
                              src={item.live_product.image}
                              alt={item.live_product.name}
                            />
                          </div>
                          <div className="product-info">
                            <div className="item-name">
                              <p className="name">{item.live_product.name}</p>
                            </div>
                            <div className="item-price">
                              <span className="sale-percentage">
                                {item.live_product.discount === 0
                                  ? ""
                                  : item.live_product.discount + "%"}
                              </span>
                              <span>
                                <b>{item.live_product.price}</b>원
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button className="live-btn slide-btn next">이전</button>
          <button className="live-btn slide-btn prev">다음</button>
        </div>
        <div className="link-btn">
          <a href="">
            <span>인터파크 라이브 바로가기</span>
          </a>
        </div>
      </div>
    </section>
  );
}
