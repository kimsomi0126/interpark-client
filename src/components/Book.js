/* eslint-disable jsx-a11y/anchor-is-valid */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import "../styles/book.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Book() {
  // 숫자 콤마 출력
  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const [htmlTag, setHtmlTag] = useState([]);
  const [activeTab, setActiveTab] = useState("tab-1"); // 초기 활성 탭 설정
  const axiosGetData = () => {
    axios
      .get("book.json")
      .then((res) => {
        const tabButtons = document.querySelectorAll(".book-tab .tab-btn");
        const bookSlide = document.querySelector(".book-slide");
        tabButtons.forEach(function (button, index) {
          const category = button.getAttribute("data-category");
          const cateBtn = res.data[category];
          let arr = [];
          for (let i = 0; i < cateBtn.total; i++) {
            const obj = cateBtn["book_" + (i + 1)];
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
    <section className="book">
      <div className="inner">
        <div className="title-wrap">
          <h2 className="title">오늘의 도서</h2>
          <span className="title-txt">
            지금 읽기 딱 좋은 책, 놓치지 마세요!
          </span>
        </div>
        <div className="book-wrap">
          <ul className="book-tab tab-list">
            <li>
              <button className="tab-btn on" data-category="tab-1">
                MD’s Pick
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-2">
                베스트셀러
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-3">
                신간추천
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-4">
                특가할인
              </button>
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
            breakpoints={{
              1280: {
                slidesPerView: 5,
              },
              767: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation]}
            className="book-slide"
          >
            {htmlTag.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="book-slide-item">
                    <a href={item.url}>
                      <div className="item-img">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="item-info">
                        <div className="item-name">
                          <p className="name">{item.name}</p>
                        </div>
                        <div className="item-price">
                          <span>
                            <b>{numberWithCommas(item.price)}</b>원
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
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
