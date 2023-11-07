/* eslint-disable jsx-a11y/anchor-is-valid */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import "../styles/ticket.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Ticket() {
  const [htmlTag, setHtmlTag] = useState([]);
  const [activeTab, setActiveTab] = useState("tab-1"); // 초기 활성 탭 설정

  const axiosGetData = () => {
    axios
      .get("ticket.json")
      .then((res) => {
        const tabButtons = document.querySelectorAll(".ticket-tab .tab-btn");
        const bookSlide = document.querySelector(".ticket-slide");
        tabButtons.forEach(function (button, index) {
          const category = button.getAttribute("data-category");
          const cateBtn = res.data[category];
          let arr = [];
          for (let i = 0; i < cateBtn.total; i++) {
            const obj = cateBtn["ticket_" + (i + 1)];
            arr[i] = obj;
          }
          if (category === activeTab) {
            setHtmlTag(arr); // 활성 탭 데이터 설정
          }

          button.addEventListener("click", function () {
            tabButtons.forEach(function (btn) {
              btn.classList.remove("on");
              bookSlide.classList.remove(btn.getAttribute("data-category"));
            });

            button.classList.add("on");
            bookSlide.classList.add(category);

            setHtmlTag(arr);
            setActiveTab(category); // 클릭한 탭을 활성 탭으로 설정
          });
        });
      })
      .catch((error) => {
        console.log("error :", error);
      });
  };

  useEffect(() => {
    axiosGetData();
  }, []);

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
              <button className="tab-btn on" data-category="tab-1">
                뮤지컬
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-2">
                콘서트
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-3">
                스포츠
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-4">
                전시/행사
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-5">
                클래식/무용
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-6">
                아동/가족
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-7">
                연극
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-8">
                레저/캠핑
              </button>
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
            {htmlTag.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  {index === htmlTag.length - 1 ? (
                    <div className="slide-item-more">
                      <a href={item.url}>
                        <i>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/btn_moreProduct.svg"
                            }
                          />
                        </i>
                        <p>전체보기</p>
                      </a>
                    </div>
                  ) : (
                    <div className="recommend-slide-item">
                      <a href={item.url}>
                        <div className="item-img">
                          <img
                            src={process.env.PUBLIC_URL + item.image}
                            alt={item.alt}
                          />
                        </div>
                        <div className="item-info">
                          <div className="item-price">
                            <span className="sale-percentage">
                              {item.discount === 0 ? "" : item.discount + "%"}
                            </span>
                            <span>
                              <b>{item.price}</b>원
                            </span>
                          </div>
                          <div className="item-name">{item.name}</div>
                        </div>
                      </a>
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
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
