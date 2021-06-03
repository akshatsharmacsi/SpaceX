import React from "react";
import styled from "styled-components";
const LoaderStyled = styled.div`
  align-items: center;
  background: rgb(255 255 255 / 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;

  .loader {
    font-size: 20px;
    text-align: center;
    border: 5px solid #f3f3f3;
    border-radius: 5%;
    border: 5px solid rgb(95, 95, 240);
    background-color: blue;
    color: white;
    width: 150px;
  }
`;

const Loader = () => {
  return (
    <LoaderStyled>
      <div className="loader">Loading ...</div>
    </LoaderStyled>
  );
};

export default Loader;
