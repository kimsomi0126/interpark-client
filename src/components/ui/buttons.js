import styled from "@emotion/styled";

// 슬라이드 좌측 이동버튼
export const BtSlidePrev = styled.button`
  position: absolute;
  top: 50%;
  width: 4.8rem;
  height: 4.8rem;
  border: 1px solid #e5e1e5;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  z-index: 2;
  background: rgba(255, 255, 255, 0.85);
  font-size: 0;
  border-radius: 50%;
  left: 0;
  transform: translate(-50%, -50%);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 1.8rem;

    background: url(${process.env.PUBLIC_URL + "/images/slider_arrow.svg"})
      no-repeat center/cover;
    transform: rotate(180deg) translate(50%, 50%);
  }
`;
// 슬라이드 우측 이동버튼
export const BtSlideNext = styled.button`
  position: absolute;
  top: 50%;
  width: 4.8rem;
  height: 4.8rem;
  border: 1px solid #e5e1e5;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  z-index: 2;
  background: rgba(255, 255, 255, 0.85);
  font-size: 0;
  border-radius: 50%;
  right: 0;
  transform: translate(50%, -50%);

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 1.8rem;

    background: url(${process.env.PUBLIC_URL + "/images/slider_arrow.svg"})
      no-repeat center/cover;
    transform: translate(-50%, -50%);
  }
`;

export const BtLink = styled.div`
  position: relative;
  margin-top: 2rem;
  text-align: center;
  a {
    position: relative;
    display: inline-block;
    padding: 1.5rem 4rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 1.6rem;
    font-weight: 700;
    border-radius: 5rem;
  }
  span {
    padding-right: 1.5rem;
    background: url(../images/icon_linkArrow.svg) no-repeat right 55%;
  }
`;

export const BtCate = styled.button`
  position: relative;
  display: block;
  padding: 0 2rem;
  border: 1px solid
    ${(props) => (props.active ? "#333" : "rgba(229, 229, 229, 0.8980392157)")};
  background: ${(props) => (props.active ? "#333" : "transparent")};
  font-size: 1.4rem;
  line-height: 4.2rem;
  border-radius: 5rem;
  ${(props) =>
    props.active
      ? `
  font-weight: 700;
  color: #fff;`
      : ""};
`;
