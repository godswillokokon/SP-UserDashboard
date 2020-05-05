import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import FadeIn from "styles/FadeIn";

const Container = styled.div`
  span {
    margin-bottom: 30px;
  }
`;

export default function LoadingPage() {
  return (
    <FadeIn>
      <Container>
        <Skeleton width={150} height={50} />
        <Skeleton height={300} />
      </Container>
    </FadeIn>
  );
}
