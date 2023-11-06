import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

export default function Recommend() {
  // 활성 탭을 상태로 관리
  const [activeTab, setActiveTab] = useState("tab-1");
  // 탭 데이터를 상태로 관리
  const [tabData, setTabData] = useState({});
  // 슬라이드에 표시할 데이터를 상태로 관리
  const [htmlTag, setHtmlTag] = useState([]);

  // JSON 데이터를 가져오는 함수
  const getJsonData = () => {
    fetch("recommend2.json")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setTabData(result); // 전체 탭 데이터 설정
        setHtmlTag(result[activeTab]); // 처음 로딩 시 첫 번째 탭 데이터 설정
      })
      .catch((error) => {
        console.log("error :", error);
      });
  };

  useEffect(() => {
    // 페이지 로딩 후 JSON 데이터 가져오기
    getJsonData();
  }, []);

  // 탭 클릭 시 호출되는 함수
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setHtmlTag(tabData[tab]); // 선택한 탭의 데이터로 업데이트
  };

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
            {Object.keys(tabData).map((tab) => (
              <li key={tab}>
                <button
                  // 탭 클릭 시 "on" 클래스 추가, 활성 탭 표시
                  className={`tab-btn ${activeTab === tab ? "on" : ""}`}
                  data-category={tab}
                  onClick={() => handleTabClick(tab)}
                >
                  {tabData[tab].name}
                </button>
              </li>
            ))}

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
            {htmlTag &&
              htmlTag.total &&
              Object.keys(htmlTag).map((goodKey) => {
                if (goodKey.startsWith("good_")) {
                  const goodData = htmlTag[goodKey];
                  return (
                    <SwiperSlide key={goodKey}>
                      <div className="recommend-slide-item">
                        <a href={goodData.url}>
                          <div className="item-img">
                            <img src={goodData.image} alt={goodData.name} />
                          </div>
                          <div className="item-info">
                            <div className="item-price">
                              <span className="sale-percentage">
                                {goodData.discount === 0
                                  ? ""
                                  : goodData.discount + "%"}
                              </span>
                              <span>
                                <b>{goodData.price}</b>원
                              </span>
                            </div>
                            <div className="item-name">{goodData.name}</div>
                          </div>
                        </a>
                      </div>
                    </SwiperSlide>
                  );
                }
                return null;
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
