/* eslint-disable jsx-a11y/anchor-is-valid */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import "../styles/tour.css";

export default function Tour() {
  return (
    <section className="tour">
      <div className="tour-inner">
        <div className="title-wrap">
          <h2 className="title">투어 특가</h2>
          <span className="title-txt">해외여행은 인터파크다</span>
        </div>
        <div className="tour-wrap">
          <ul className="tour-tab tab-list">
            <li>
              <button className="tab-btn on">망설이면 품절</button>
            </li>
            <li>
              <button className="tab-btn">패키지</button>
            </li>
            <li>
              <button className="tab-btn">국내숙소</button>
            </li>
            <li>
              <button className="tab-btn">해외숙소</button>
            </li>
          </ul>

          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={26}
            speed={300}
            navigation={{
              nextEl: ".tour-btn.next",
              prevEl: ".tour-btn.prev",
            }}
            modules={[Navigation]}
            className="tour-slide"
          >
            <SwiperSlide>
              <div className="tour-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/t1.jpg" alt="tour_img" />
                  </div>
                  <div className="item-info">
                    <span className="tour-badge">방콕</span>
                    <div className="item-name">
                      <span className="benefit">
                        5성급, 차오프라야강 리버뷰
                      </span>
                      <p className="name">밀레니엄 힐튼 방콕</p>
                    </div>
                    <div className="item-price">
                      <span>
                        <b>198,798</b>원~
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tour-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/t2.jpg" alt="tour_img" />
                  </div>
                  <div className="item-info">
                    <span className="tour-badge">국적기직항</span>
                    <div className="item-name">
                      <span className="benefit">
                        5성급, 차오프라야강 리버뷰
                      </span>
                      <p className="name">밀레니엄 힐튼 방콕</p>
                    </div>
                    <div className="item-price">
                      <span>
                        <b>198,798</b>원~
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tour-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/t3.jpg" alt="tour_img" />
                  </div>
                  <div className="item-info">
                    <span className="tour-badge">방콕</span>
                    <div className="item-name">
                      <span className="benefit">
                        5성급, 차오프라야강 리버뷰
                      </span>
                      <p className="name">밀레니엄 힐튼 방콕</p>
                    </div>
                    <div className="item-price">
                      <span>
                        <b>198,798</b>원~
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tour-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/t4.jpg" alt="tour_img" />
                  </div>
                  <div className="item-info">
                    <span className="tour-badge">국적기직항</span>
                    <div className="item-name">
                      <span className="benefit">
                        5성급, 차오프라야강 리버뷰
                      </span>
                      <p className="name">밀레니엄 힐튼 방콕</p>
                    </div>
                    <div className="item-price">
                      <span>
                        <b>198,798</b>원~
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          <button className="tour-btn slide-btn next">이전</button>
          <button className="tour-btn slide-btn prev">다음</button>
        </div>
        <div className="link-btn">
          <a href="">
            <span>투어 홈 바로가기</span>
          </a>
        </div>
      </div>
    </section>
  );
}
