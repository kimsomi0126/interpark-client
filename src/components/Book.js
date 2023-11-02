/* eslint-disable jsx-a11y/anchor-is-valid */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import "../styles/book.css";

export default function Book() {
  return (
    <section className="book">
      <div className="book-inner">
        <div className="title-wrap">
          <h2 className="title">오늘의 도서</h2>
          <span className="title-txt">
            지금 읽기 딱 좋은 책, 놓치지 마세요!
          </span>
        </div>
        <div className="book-wrap">
          <ul className="book-tab tab-list">
            <li>
              <button className="tab-btn on">MD’s Pick</button>
            </li>
            <li>
              <button className="tab-btn">베스트셀러</button>
            </li>
            <li>
              <button className="tab-btn">신간추천</button>
            </li>
            <li>
              <button className="tab-btn">특가할인</button>
            </li>
          </ul>

          <Swiper
            slidesPerView={5}
            slidesPerGroup={5}
            spaceBetween={26}
            speed={300}
            navigation={{
              nextEl: ".book-btn.next",
              prevEl: ".book-btn.prev",
            }}
            modules={[Navigation]}
            className="book-slide"
          >
            <SwiperSlide>
              <div className="book-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/b1.jpg" alt="book_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-name">
                      <p className="name">이은경쌤의 사자성어 속담 일력365</p>
                    </div>
                    <div className="item-price">
                      <span>
                        <b>19,800</b>원
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="book-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/b2.jpg" alt="book_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-name">
                      <p className="name">이은경쌤의 사자성어 속담 일력365</p>
                    </div>
                    <div className="item-price">
                      <span>
                        <b>19,800</b>원
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="book-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/b3.jpg" alt="book_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-name">
                      <p className="name">이은경쌤의 사자성어 속담 일력365</p>
                    </div>
                    <div className="item-price">
                      <span>
                        <b>19,800</b>원
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="book-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/b4.jpg" alt="book_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-name">
                      <p className="name">이은경쌤의 사자성어 속담 일력365</p>
                    </div>
                    <div className="item-price">
                      <span>
                        <b>19,800</b>원
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="book-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/b5.jpg" alt="book_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-name">
                      <p className="name">이은경쌤의 사자성어 속담 일력365</p>
                    </div>
                    <div className="item-price">
                      <span>
                        <b>19,800</b>원
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="book-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/b6.jpg" alt="book_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-name">
                      <p className="name">이은경쌤의 사자성어 속담 일력365</p>
                    </div>
                    <div className="item-price">
                      <span>
                        <b>19,800</b>원
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          <button className="book-btn slide-btn next">이전</button>
          <button className="book-btn slide-btn prev">다음</button>
        </div>
        <div className="link-btn">
          <a href="">
            <span>도서 홈 바로가기</span>
          </a>
        </div>
      </div>
    </section>
  );
}
