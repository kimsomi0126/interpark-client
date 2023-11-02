/* eslint-disable jsx-a11y/anchor-is-valid */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import "../styles/live.css";

export default function Live() {
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
            <SwiperSlide>
              <div className="live-slide-item">
                <a href="">
                  <div className="item-img ready">
                    <img src="images/live1_bg.jpg" alt="live_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-title">
                      <span className="live-badge">방송예정</span>
                      <p className="name">전라도 특집 여수/전주/광주</p>
                    </div>
                    <div className="item-time">
                      <p>10월 27일 (금)</p>
                      <b>11:00</b>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="live-slide-item">
                <a href="">
                  <div className="item-img ready">
                    <img src="images/live2_bg.jpg" alt="live_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-title">
                      <span className="live-badge">방송예정</span>
                      <p className="name">전라도 특집 여수/전주/광주</p>
                    </div>
                    <div className="item-time">
                      <p>10월 27일 (금)</p>
                      <b>11:00</b>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="live-slide-item">
                <a href="">
                  <div className="item-img ready">
                    <img src="images/live3_bg.jpg" alt="live_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-title">
                      <span className="live-badge">방송예정</span>
                      <p className="name">전라도 특집 여수/전주/광주</p>
                    </div>
                    <div className="item-time">
                      <p>10월 27일 (금)</p>
                      <b>11:00</b>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="live-slide-item">
                <a href="">
                  <div className="item-img ">
                    <img src="images/live4_bg.jpg" alt="live_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-title">
                      <span className="live-badge on">LIVE</span>
                      <p className="name">전라도 특집 여수/전주/광주</p>
                    </div>
                  </div>
                </a>
                <div className="item-product">
                  <a href="">
                    <div className="product-img">
                      <img src="images/live4.png" alt="" />
                    </div>
                    <div className="product-info">
                      <div className="item-name">
                        <p className="name">전라도 특집 여수/전주/광주</p>
                      </div>
                      <div className="item-price">
                        <span className="sale-percentage">50%</span>
                        <span>
                          <b>6,900</b>원
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="live-slide-item">
                <a href="">
                  <div className="item-img ">
                    <img src="images/live5_bg.jpg" alt="live_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-title">
                      <span className="live-badge">VOD</span>
                      <p className="name">전라도 특집 여수/전주/광주</p>
                    </div>
                  </div>
                </a>
                <div className="item-product">
                  <a href="">
                    <div className="product-img">
                      <img src="images/live5.jpg" alt="" />
                    </div>
                    <div className="product-info">
                      <div className="item-name">
                        <p className="name">전라도 특집 여수/전주/광주</p>
                      </div>
                      <div className="item-price">
                        <span className="sale-percentage">50%</span>
                        <span>
                          <b>6,900</b>원
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="live-slide-item">
                <a href="">
                  <div className="item-img ">
                    <img src="images/live1_bg.jpg" alt="live_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-title">
                      <span className="live-badge">VOD</span>
                      <p className="name">전라도 특집 여수/전주/광주</p>
                    </div>
                  </div>
                </a>
                <div className="item-product">
                  <a href="">
                    <div className="product-img">
                      <img src="images/live1.png" alt="" />
                    </div>
                    <div className="product-info">
                      <div className="item-name">
                        <p className="name">전라도 특집 여수/전주/광주</p>
                      </div>
                      <div className="item-price">
                        <span className="sale-percentage">50%</span>
                        <span>
                          <b>6,900</b>원
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="live-slide-item">
                <a href="">
                  <div className="item-img ">
                    <img src="images/live2_bg.jpg" alt="live_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-title">
                      <span className="live-badge">VOD</span>
                      <p className="name">전라도 특집 여수/전주/광주</p>
                    </div>
                  </div>
                </a>

                <div className="item-product">
                  <a href="">
                    <div className="product-img">
                      <img src="images/live2.jpg" alt="" />
                    </div>
                    <div className="product-info">
                      <div className="item-name">
                        <p className="name">전라도 특집 여수/전주/광주</p>
                      </div>
                      <div className="item-price">
                        <span className="sale-percentage">50%</span>
                        <span>
                          <b>6,900</b>원
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="live-slide-item">
                <a href="">
                  <div className="item-img ">
                    <img src="images/liveBg.jpg" alt="live_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-title">
                      <span className="live-badge">VOD</span>
                      <p className="name">전라도 특집 여수/전주/광주</p>
                    </div>
                  </div>
                </a>
                <div className="item-product">
                  <a href="">
                    <div className="product-img">
                      <img src="images/live3.jpg" alt="" />
                    </div>
                    <div className="product-info">
                      <div className="item-name">
                        <p className="name">전라도 특집 여수/전주/광주</p>
                      </div>
                      <div className="item-price">
                        <span className="sale-percentage">50%</span>
                        <span>
                          <b>6,900</b>원
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </SwiperSlide>
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
