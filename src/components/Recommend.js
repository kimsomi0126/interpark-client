/* eslint-disable jsx-a11y/anchor-is-valid */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import "../styles/recommend.css";
import { useEffect, useState } from "react";

import axios from "axios";
import { BtCate, BtLink, BtSlideNext, BtSlidePrev } from "./ui/buttons";
import { SectionTag, InnerArea } from "./ui/layout";
export default function Recommend() {
  // json 데이터 저장 후, 자료가 바뀌면 화면 변경될 변수
  const [htmlTag, setHtmlTag] = useState([]);
  const axiosGetData = () => {
    axios
      .get("recommend.json")
      .then((res) => {
        // 자료 처리
        let arr = [];
        for (let i = 0; i < res.data.total; i++) {
          const obj = res.data["good_" + (i + 1)];
          arr[i] = obj;
        }
        setHtmlTag(arr);
      })
      .catch((error) => {
        console.log("error :", error);
      });
  };
  // const getJsonData = () => {
  //   fetch("recommend.json")
  //     .then((response) => {
  //       // console.log("response :", response);
  //       return response.json();
  //     })
  //     .then((result) => {
  //       // 자료 처리
  //       // console.log("result :", result);
  //       let arr = [];
  //       for (let i = 0; i < result.total; i++) {
  //         const obj = result["good_" + (i + 1)];
  //         arr[i] = obj;
  //       }
  //       setHtmlTag(arr);
  //     })
  //     .catch((error) => {
  //       // 에러발생
  //       console.log("error :", error);
  //     });
  // };

  useEffect(() => {
    //화면 로딩 후 외부데이터 호출
    axiosGetData();
  }, []);

  return (
    <SectionTag>
      <InnerArea>
        <div className="title-wrap">
          <h2 className="title">쇼핑 추천</h2>
          <span className="title-txt">
            할인이 쎄다! 지금, 특가 상품을 확인하세요.
          </span>
        </div>
        <div className="recommend-wrap">
          <ul className="recommend-tab tab-list">
            <li>
              <BtCate active={true} data-category="tab-1">
                쎈딜
              </BtCate>
            </li>
            <li>
              <BtCate data-category="tab-2">베스트</BtCate>
            </li>
            <li>
              <BtCate data-category="tab-3">블프데이</BtCate>
            </li>
            <li>
              <BtCate data-category="tab-4">디지털프라자</BtCate>
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
            breakpoints={{
              1280: {
                slidesPerView: 4,
              },
              767: {
                slidesPerView: 3,
              },
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
                            alt="전체보기"
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
          <BtSlidePrev className="recommend-btn prev">이전</BtSlidePrev>
          <BtSlideNext className="recommend-btn next">다음</BtSlideNext>
        </div>
        <BtLink>
          <a href="">
            <span>쇼핑 홈 바로가기</span>
          </a>
        </BtLink>
      </InnerArea>
    </SectionTag>
  );
}
