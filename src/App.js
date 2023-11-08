import "./styles/index.css";
import Book from "./components/Book";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Live from "./components/Live";
import MainEvent from "./components/MainEvent";
import Ticket from "./components/Ticket";
import Tour from "./components/Tour";
import Visual from "./components/Visual";
import Recommend2 from "./components/Recommend2";
import Recommend from "./components/Recommend";

function App() {
  return (
    <div className="wrap">
      {/* <!-- 상단 영역 --> */}
      <Header />
      {/* <!-- 메인 영역 --> */}
      <div className="main">
        <Visual />
        <Recommend />
        {/* <Recommend2 /> */}
        <Tour />
        <Ticket />
        <Live />
        <Book />
        <MainEvent />
      </div>
      {/* <!-- 하단 영역 --> */}
      <Footer />
    </div>
  );
}

export default App;
