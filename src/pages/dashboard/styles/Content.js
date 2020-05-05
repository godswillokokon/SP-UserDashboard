import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "constants/Colors";

const Content = styled.section`
  overflow-y: auto;
  background: #ffffff;
  padding: 4%;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 0;

  @media only screen and (max-width: 720px) {
    padding-top: 100px;
    overflow-x: hidden;
    padding-left: 16.4375px;
  }
`;

Content.InnerCont = styled.section`
  box-shadow: 0px 4px 10px rgba(81, 92, 111, 0.12);
`;

Content.Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media only screen and (max-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 0;
  }
`;

Content.TitleHeader = styled.div`
  margin-bottom: 40px;
`;

Content.Title = styled.h1`
  color: ${Colors.headerColor};
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  @media only screen and (max-width: 720px) {
    font-size: 20px;
  }
`;

Content.Subtitle = styled.p`
  font-family: "GT Walsheim";
  font-weight: 300;
  color: ${Colors.textColor};
  font-size: 18px;
`;

Content.Back = styled(Link)`
  color: #adadad;
`;

export default Content;
