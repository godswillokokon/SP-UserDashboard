import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as NotFoundSvg } from "assets/img/404.svg";
import Button from "components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 100px;
  text-align: center;
  box-sizing: border-box;
  p {
    color: #000;
  }
  svg {
    width: 100%;
    height: 400px;
  }
  & > * {
    margin: 10px 0;
  }
  @media only screen and (max-width: 720px) {
    svg {
      width: 100%;
      height: 200px;
    }
  }
`;

export default function NotFound() {
  const history = useHistory();
  return (
    <div>
      <Container>
        <NotFoundSvg />
        <h2>Oops!</h2>
        <p>
          We searched far and wide, deep and high and sadly, the page you’re
          looking for wasn’t found.
        </p>
        <Button onClick={() => history.push("/")}>Back to home</Button>
      </Container>
    </div>
  );
}
