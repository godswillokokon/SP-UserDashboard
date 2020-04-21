import styled, { css } from "styled-components";
import Colors from "../constants/Colors";
import { Link } from "react-router-dom";

const ButtonBlock = styled.button`
  font-family: "GT Walsheim";
  background-color: #100463;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  min-width: 120px;
  width: fit-content !important;
  height: 50px;
  color: #fff;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 30px;
  font-weight: 500;
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `}
  ${(props) =>
    props.center &&
    css`
      margin: 0 auto;
    `}
  ${(props) =>
    props.round &&
    css`
      border-radius: 30px;
    `}
  ${(props) =>
    props.loading &&
    css`
      opacity: 0.5;
      cursor: wait;
    `}
  ${(props) =>
    props.link &&
    css`
      color: ${Colors.ligtherpurple};
      background: none;
      border: none;
      box-shadow: none;
    `}
  ${(props) =>
    props.outline &&
    css`
      color: ${Colors.ligtherpurple};
      background: none;
      border: 1px solid ${Colors.ligtherpurple};
      box-shadow: none;
    `}
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100% !important;
    `}
  ${(props) =>
    props.long &&
    css`
      min-width: 180px;
    `}
  ${(props) =>
    props.yellow &&
    css`
      background-color: #ffca58;
      color: ${Colors.purple};
    `}
  ${(props) =>
    props.grey &&
    css`
      background-color: #ebebeb;
      color: #000;
      ${(props) =>
        props.outline &&
        css`
          color: #707070;
          background: none;
          border: 1px solid #707070;
          box-shadow: none;
        `}
    `}
  ${(props) =>
    props.success &&
    css`
      background-color: #7bc476;
      color: #fff;
    `}
  ${(props) =>
    props.danger &&
    css`
      background-color: #d65550;
      color: #fff;
    `}
  ${(props) =>
    props.info &&
    css`
      background-color: #5c9ad2;
      color: #fff;
    `}
  ${(props) =>
    props.warning &&
    css`
      background-color: #e38d33;
      color: #fff;
    `}
  ${(props) =>
    props.black &&
    css`
      background-color: #000;
      color: #fff;
      ${(props) =>
        props.outline &&
        css`
          color: #000;
          background: none;
          border: 1px solid #707070;
          box-shadow: none;
        `}
      ${(props) =>
        props.link &&
        css`
          color: #000;
          background: none;
          border: none;
          box-shadow: none;
        `}
    `}
  ${(props) =>
    props.small &&
    css`
      padding: 0 10px;
      font-size: 14px;
      min-width: 60px;
      height: 35px;
      ${(props) =>
        props.round &&
        css`
          border-radius: 30px;
        `}
    `}
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #D3D3D3;
  }
  @media only screen and (max-width: 720px) {
    ${(props) =>
      props.largeMobile &&
      css`
        font-size: 15px;
        width: 100% !important;
      `}
  }
`;

ButtonBlock.Link = ButtonBlock.withComponent(Link);

export default ButtonBlock;
