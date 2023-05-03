import "../style/Reaveal.css";
import styled, { keyframes } from "styled-components";

const hideWhiteBlocks = () => keyframes`
0%{
    opacity: 1;
    height: 35vh;
}
100%{
    opacity: 0;
    height: 0vh;
}
`;

const WhiteBlock = styled.div`
  position: absolute;
  background-color: white;
  margin-right: 100%;
  width: 110%;
  height: 35vh;
  animation: ${hideWhiteBlocks} 1.5s forwards;
  animation-delay: 4s;
  /* border: 1px solid grey; */
`;

function NameReaveal() {
  return (
    <div className="nameContainer">
      <p className="name"> Maignan Guillaume</p>
      <WhiteBlock />
    </div>
  );
}
export default NameReaveal;
