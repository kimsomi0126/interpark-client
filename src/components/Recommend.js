/* eslint-disable jsx-a11y/anchor-is-valid */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import "../styles/recommend.css";

export default function Recommend() {
  return (
    <section className="recommend">
      <div className="recommend-inner">
        <div className="title-wrap">
          <h2 className="title">쇼핑 추천</h2>
          <span className="title-txt">
            할인이 쎄다! 지금, 특가 상품을 확인하세요.
          </span>
        </div>
        <div className="recommend-wrap">
          <ul className="recommend-tab tab-list">
            <li>
              <button className="tab-btn on">쎈딜</button>
            </li>
            <li>
              <button className="tab-btn">베스트</button>
            </li>
            <li>
              <button className="tab-btn">블프데이</button>
            </li>
            <li>
              <button className="tab-btn">디지털프라자</button>
            </li>
            <li>
              <a href="" className="tab-btn">
                소담상회
              </a>
            </li>
          </ul>
          <Swiper
            slidesPerView={4}
            slidesPerGroup={4}
            spaceBetween={26}
            speed={300}
            navigation={{
              nextEl: ".recommend-btn.next",
              prevEl: ".recommend-btn.prev",
            }}
            modules={[Navigation]}
            className="recommend-slide"
          >
            <SwiperSlide>
              <div className="recommend-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="../images/r1.jpg" alt="recommend_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-price">
                      <span className="sale-percentage">50%</span>
                      <span>
                        <b>6,900</b>원
                      </span>
                    </div>
                    <div className="item-name">
                      [무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩
                      건조기가능/KC인증
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="recommend-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="../images/r2.jpg" alt="recommend_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-price">
                      <span className="sale-percentage">50%</span>
                      <span>
                        <b>6,900</b>원
                      </span>
                    </div>
                    <div className="item-name">
                      [I*POP] 아이팝 스파클링 워터 플레인 / 아이팝 탄산수 /
                      강탄산 / 진짜 먹는 샘물로 만든 탄산수
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="recommend-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="../images/r3.jpg" alt="recommend_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-price">
                      <span className="sale-percentage">50%</span>
                      <span>
                        <b>6,900</b>원
                      </span>
                    </div>
                    <div className="item-name">
                      [무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩
                      건조기가능/KC인증
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="recommend-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="../images/r4.jpg" alt="recommend_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-price">
                      <span className="sale-percentage">50%</span>
                      <span>
                        <b>6,900</b>원
                      </span>
                    </div>
                    <div className="item-name">
                      [무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩
                      건조기가능/KC인증
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="recommend-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="../images/r5.jpg" alt="recommend_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-price">
                      <span className="sale-percentage">50%</span>
                      <span>
                        <b>6,900</b>원
                      </span>
                    </div>
                    <div className="item-name">
                      [무료배송] GAP/네파키즈 유아 아동양말 특가전 6팩
                      건조기가능/KC인증
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item-more">
                <a href="">
                  <i>
                    <img src="../images/btn_moreProduct.svg" alt="전체보기" />
                  </i>
                  <p>전체보기</p>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          <button className="recommend-btn slide-btn next">이전</button>
          <button className="recommend-btn slide-btn prev">다음</button>
        </div>
        <div className="link-btn">
          <a href="">
            <span>쇼핑 홈 바로가기</span>
          </a>
        </div>
      </div>
    </section>
  );
}
