/* eslint-disable jsx-a11y/anchor-is-valid */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import "../styles/tour.css";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Tour() {
  // 숫자 콤마 출력
  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const [htmlTag, setHtmlTag] = useState([]);
  const [activeTab, setActiveTab] = useState("tab-1"); // 초기 활성 탭 설정

  const axiosGetData = () => {
    axios
      .get("tour.json")
      .then((res) => {
        const tabButtons = document.querySelectorAll(".tour-tab .tab-btn");
        const bookSlide = document.querySelector(".tour-slide");
        tabButtons.forEach(function (button, index) {
          const category = button.getAttribute("data-category");
          const cateBtn = res.data[category];
          let arr = [];
          for (let i = 0; i < cateBtn.total; i++) {
            const obj = cateBtn["tour_" + (i + 1)];
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              <button className="tab-btn on" data-category="tab-1">
                망설이면 품절
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-2">
                패키지
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-3">
                국내숙소
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-4">
                해외숙소
              </button>
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
            {htmlTag.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="tour-slide-item">
                    <a href={item.url}>
                      <div className="item-img">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="item-info">
                        {item.cate === "" ? (
                          ""
                        ) : (
                          <span className="tour-badge">{item.cate}</span>
                        )}
                        <div className="item-name">
                          <span className="benefit">{item.benefit}</span>
                          <p className="name">{item.name}</p>
                        </div>
                        <div className="item-price">
                          <span>
                            <b>{numberWithCommas(item.price)}</b>원~
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
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
