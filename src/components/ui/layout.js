import styled from "@emotion/styled";

export const SectionTag = styled.section`
  position: relative;
  margin-top: ${(props) => (props.mt ? props.mt + "rem" : "0px")};
`;

export const InnerArea = styled.div`
  position: relative;
  max-width: 128rem;
  margin: 0 auto;
  margin-bottom: 9rem;
`;

export const SlideItem = styled.div`
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border-radius: 1rem;
`;
