/* eslint-disable jsx-a11y/anchor-is-valid */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import "../styles/visual.css";
import { useEffect, useRef, useState } from "react";

// axios 모듈(js.파일) 가져오기
import axios from "axios";

export default function Visual() {
  // 1. swiper 슬라이드 태그를 참조한다.
  const swiperRef = useRef();

  // 외부데이터 연동 (axios 활용)
  const axiosGetData = function () {
    axios
      .get("visual.json")
      .then(function (res) {
        makeVisualSlide(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 2. 외부데이터 연동 (fetch)
  /* 
  fetch("데이터파일") : 데이터파일 가져옴
  .then(function(){}) : json 파일로 바꿈
  .then(function(){}) : 데이터 확인
  .catch(function(){}); : 오류났을때 실행
  */
  // const fetchGetData = () => {
  //   fetch("visual.json")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       // 자료 출력
  //       makeVisualSlide(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // 리액트용 변수(state) : 컴포넌트에 출력할 JSX
  // const [변수명, set변수명] = useState(값);
  let [visualHtml, setVisualHtml] = useState([]);

  // 슬라이드 내용 채우기
  const makeVisualSlide = (_data) => {
    const visualRes = _data;
    let visualArray = [];
    for (let i = 0; i < visualRes.total; i++) {
      visualArray[i] = visualRes["visual_" + (i + 1)];
    }
    setVisualHtml(visualArray);
  };

  // 화면(컴포넌트)이 랜더링 되면 데이터 호출 및 배치
  /* useEffect(); 활용
    : 네트워크 연동, 외부데이터 호출 (✅)
    : html 제어
    : window 제어
    : window.addEventListener / window.removeEventListener 작성
    : 컴포넌트가 삭제될때
    : ... 
  */
  useEffect(() => {
    // 랜더링 : visual.json 데이터 호출 실행
    axiosGetData();

    return () => {
      // 삭제 (Clean Up 함수)
    };
  }, []);

  return (
    <section className="visual">
      <div className="visual-inner">
        <Swiper
          slidesPerView={2}
          spaceBetween={24}
          speed={500}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay, Navigation]}
          className="visual-slide"
        >
          {visualHtml.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="visual-slide-item">
                  <a href={item.url}>
                    <img
                      src={process.env.PUBLIC_URL + item.file}
                      alt={item.alt}
                    />
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="visual-btn slide-btn prev"
          onClick={() => {
            swiperRef.current.slidePrev();
          }}
        >
          이전
        </button>
        <button
          className="visual-btn slide-btn next"
          onClick={() => {
            swiperRef.current.slideNext();
          }}
        >
          다음
        </button>
      </div>
    </section>
  );
}
