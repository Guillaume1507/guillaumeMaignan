import styled, { keyframes } from "styled-components";
import "../style/Reaveal.css";
const hideWhiteBlocks = () => keyframes`
0%{
    opacity: 1;
    height: 35vh;
}
100%{
    opacity: 0;
    height: 35vh;
}
`;

const WhiteBlock = styled.div`
  position: absolute;
  background-color: white;
  margin-right: 100%;
  width: 120%;
  height: 35vh;
  animation: ${hideWhiteBlocks} 0.5s linear forwards;
  animation-delay: 2s;
  /* border: 1px solid grey; */
`;

function TitleReaveal() {
  return (
    <div className="titleContainer">
      <p className="title"> Full stack Developer</p>
      <WhiteBlock />
    </div>
  );
}

export default TitleReaveal;
