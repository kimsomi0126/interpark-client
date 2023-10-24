function App() {
  return (
    <div className="wrap">
      {/* <!-- 상단 영역 --> */}
      <header className="header">
        {/* <!-- 레이아웃 : div --> */}
        <div className="header-inner">
          <div className="header-top">
            <div className="header-top-left">
              <h1 className="h-logo">
                <a href="index.html">
                  <img src="/images/logo.svg" alt="로고" />
                  인터파크
                </a>
              </h1>
              <div className="header-search">
                <div className="search-wrap">
                  <form action="" className="search-form">
                    <label htmlFor="h_search">검색</label>
                    <input
                      type="text"
                      placeholder="검색어를 입력해주세요."
                      className="search_word"
                      id="h_search"
                    />
                    <input type="button" value="검색" className="search-bt" />
                  </form>
                </div>
                <div className="search-pop">
                  <form action="" className="search-form">
                    <label htmlFor="h_search">검색</label>
                    <input
                      type="text"
                      placeholder="검색어를 입력해주세요."
                      className="search_word"
                      id="h_search"
                    />
                    <input type="button" value="검색" className="search-bt" />
                  </form>
                  <div className="search-rank">
                    <div className="rank-top">
                      <h2>실시간 검색어</h2>
                      <span className="rank-date">2023.10.23 16:00 기준</span>
                    </div>
                    <div className="rank-bottom">
                      <ul>
                        <li>
                          <a href="#">
                            <p>검색어1</p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <p>검색어2</p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <p>검색어3</p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <p>검색어4</p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <p>검색어5</p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <p>검색어6</p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <p>검색어6</p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <p>검색어6</p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <p>검색어6</p>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <p>검색어6</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-top-right">
              <ul className="menber-menu">
                <li>
                  <a href="#">로그인</a>
                </li>
                <li>
                  <a href="#">회원가입</a>
                </li>
                <li>
                  <button id="mypage-bt" className="mypage-btn">
                    마이페이지
                  </button>
                  <div className="mypage-pop">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="header-icon">
                            <img src="/images/icon_tour.png" alt="투어 MY" />
                          </i>
                          투어 MY
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="header-icon">
                            <img src="/images/icon_ticket.png" alt="티켓 MY" />
                          </i>
                          티켓 MY
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="header-icon">
                            <img
                              src="/images/icon_shopping.png"
                              alt="쇼핑 MY"
                            />
                          </i>
                          쇼핑 MY
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="header-icon">
                            <img src="/images/icon_book.png" alt="도서 MY" />
                          </i>
                          도서 MY
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-bottom">
            {/* <!-- 상단 카테고리 --> */}
            <ul className="header-cate">
              <li>
                <a href="#">
                  <i className="header-icon">
                    <img src="/images/icon_tour.png" alt="투어" />
                  </i>
                  <span>투어</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="header-icon">
                    {" "}
                    <img src="/images/icon_ticket.png" alt="티켓" />
                  </i>
                  <span>티켓</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="header-icon">
                    <img src="/images/icon_shopping.png" alt="쇼핑" />
                  </i>
                  <span>쇼핑</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="header-icon">
                    <img src="/images/icon_book.png" alt="도서" />
                  </i>
                  <span>도서</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="header-icon">
                    <img src="/images/icon_triple.png" alt="트리플" />
                  </i>
                  <span>트리플</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon-hot">
                  <i className="header-icon">
                    <img src="/images/icon_special.png" alt="여행초특가" />
                  </i>
                  <span>여행초특가</span>
                </a>
              </li>
            </ul>
            {/* <!-- 오늘의 이벤트 메뉴 --> */}
            <ul className="header-today-menu">
              <li>
                <a href="#">
                  <i className="header-icon">
                    <img src="/images/icon_gnb_nol.png" alt="항공 즉시할인" />
                  </i>
                  <span>항공 즉시할인</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* <!-- 메인 영역 --> */}
      <div className="main"></div>
      {/* <!-- 하단 영역 --> */}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
