/* eslint-disable jsx-a11y/anchor-is-valid */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import "../styles/ticket.css";

export default function Ticket() {
  return (
    <section className="ticket">
      <div className="ticket-inner">
        <div className="title-wrap">
          <h2 className="title">티켓 랭킹</h2>
          <span className="title-txt">오늘 뭐볼까? 지금 HOT한 공연</span>
        </div>
        <div className="ticket-wrap">
          <ul className="ticket-tab tab-list">
            <li>
              <button className="tab-btn on">뮤지컬</button>
            </li>
            <li>
              <button className="tab-btn">콘서트</button>
            </li>
            <li>
              <button className="tab-btn">스포츠</button>
            </li>
            <li>
              <button className="tab-btn">전시/행사</button>
            </li>
            <li>
              <button className="tab-btn">클래식/무용</button>
            </li>
            <li>
              <button className="tab-btn">아동/가족</button>
            </li>
            <li>
              <button className="tab-btn">연극</button>
            </li>
            <li>
              <button className="tab-btn">레저/캠핑</button>
            </li>
          </ul>

          <Swiper
            slidesPerView={4}
            slidesPerGroup={4}
            spaceBetween={26}
            speed={300}
            navigation={{
              nextEl: ".ticket-btn.next",
              prevEl: ".ticket-btn.prev",
            }}
            modules={[Navigation]}
            className="ticket-slide"
          >
            <SwiperSlide>
              <div className="ticket-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/tk1.gif" alt="ticket_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-name">
                      <p className="name">뮤지컬 레미제라블</p>
                      <p className="place">예술의전당 CJ 토월극장</p>
                      <p className="duration">2023.12.19 - 2024.02.25</p>
                    </div>
                    <div className="ticket-badge">
                      <span className="blue-badge">좌석우위</span>
                      <span className="red-badge">단독판매</span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ticket-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/tk2.gif" alt="ticket_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-name">
                      <p className="name">뮤지컬 레미제라블</p>
                      <p className="place">예술의전당 CJ 토월극장</p>
                      <p className="duration">2023.12.19 - 2024.02.25</p>
                    </div>
                    <div className="ticket-badge">
                      <span className="blue-badge">좌석우위</span>
                      <span className="red-badge">단독판매</span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ticket-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/tk3.gif" alt="ticket_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-name">
                      <p className="name">뮤지컬 레미제라블</p>
                      <p className="place">예술의전당 CJ 토월극장</p>
                      <p className="duration">2023.12.19 - 2024.02.25</p>
                    </div>
                    <div className="ticket-badge">
                      <span className="blue-badge">좌석우위</span>
                      <span className="red-badge">단독판매</span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ticket-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/tk4.gif" alt="ticket_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-name">
                      <p className="name">뮤지컬 레미제라블</p>
                      <p className="place">예술의전당 CJ 토월극장</p>
                      <p className="duration">2023.12.19 - 2024.02.25</p>
                    </div>
                    <div className="ticket-badge">
                      <span className="blue-badge">좌석우위</span>
                      <span className="red-badge">단독판매</span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ticket-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/tk5.gif" alt="ticket_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-name">
                      <p className="name">뮤지컬 레미제라블</p>
                      <p className="place">예술의전당 CJ 토월극장</p>
                      <p className="duration">2023.12.19 - 2024.02.25</p>
                    </div>
                    <div className="ticket-badge">
                      <span className="blue-badge">좌석우위</span>
                      <span className="red-badge">단독판매</span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ticket-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/tk1.gif" alt="ticket_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-name">
                      <p className="name">뮤지컬 레미제라블</p>
                      <p className="place">예술의전당 CJ 토월극장</p>
                      <p className="duration">2023.12.19 - 2024.02.25</p>
                    </div>
                    <div className="ticket-badge">
                      <span className="blue-badge">좌석우위</span>
                      <span className="red-badge">단독판매</span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ticket-slide-item">
                <a href="">
                  <div className="item-img">
                    <img src="images/tk2.gif" alt="ticket_img" />
                  </div>
                  <div className="item-info">
                    <div className="item-name">
                      <p className="name">뮤지컬 레미제라블</p>
                      <p className="place">예술의전당 CJ 토월극장</p>
                      <p className="duration">2023.12.19 - 2024.02.25</p>
                    </div>
                    <div className="ticket-badge">
                      <span className="blue-badge">좌석우위</span>
                      <span className="red-badge">단독판매</span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item-more">
                <a href="">
                  <i>
                    <img src="images/btn_moreProduct.svg" alt="전체보기" />
                  </i>
                  <p>전체보기</p>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          <button className="ticket-btn slide-btn next">이전</button>
          <button className="ticket-btn slide-btn prev">다음</button>
        </div>
        <div className="link-btn">
          <a href="">
            <span>티켓 홈 바로가기</span>
          </a>
        </div>
      </div>
    </section>
  );
}
