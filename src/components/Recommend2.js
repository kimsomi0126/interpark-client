import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Recommend2() {
  const [htmlTag, setHtmlTag] = useState([]);
  const [activeTab, setActiveTab] = useState("tab-1"); // 초기 활성 탭 설정

  const axiosGetData = () => {
    axios
      .get("Recommend2.json")
      .then((res) => {
        const tabButtons = document.querySelectorAll(".recommend-tab .tab-btn");
        const bookSlide = document.querySelector(".recommend-slide");
        tabButtons.forEach(function (button, index) {
          const category = button.getAttribute("data-category");
          const cateBtn = res.data[category];
          console.log(cateBtn.total);
          let arr = [];
          for (let i = 0; i < cateBtn.total; i++) {
            const obj = cateBtn["good_" + (i + 1)];
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
              <button className="tab-btn on" data-category="tab-1">
                쎈딜
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-2">
                베스트
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-3">
                블프데이
              </button>
            </li>
            <li>
              <button className="tab-btn" data-category="tab-4">
                디지털프라자
              </button>
            </li>
            <li>
              <a href="" className="tab-btn" data-category="tab-5">
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
