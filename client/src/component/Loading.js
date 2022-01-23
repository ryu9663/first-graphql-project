import React from "react";
import styled from "styled-components";
const LoadingWrapper = styled.div`
  margin-top: ${(props) => `${props.height / 2 - 100}px`};
  h1 {
    text-align: center;
  }
  .circle {
    margin-left: auto;
    margin-right: auto;
    width: 40px;
    height: 40px;
    border: 10px solid #fff;
    border-top: 10px solid rgb(176, 233, 168);
    border-radius: 50em;
    transition: all 0.2s;
    animation-name: spinCircle;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes spinCircle {
    from {
      transform: translate(-50%, -50%) rotate(0);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
function Loading() {
  return (
    <LoadingWrapper height={window.innerHeight}>
      <div className="circle"></div>
      <h1>로딩중입니다. </h1>
    </LoadingWrapper>
  );
}

export default Loading;
