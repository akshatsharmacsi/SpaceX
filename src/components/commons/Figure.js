import React from "react";
import styled from "styled-components";

const FigureStyles = styled.figure`
  background: #f2f2f2;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    min-height: 150px;
  }
`;

const Figure = React.memo((props) => {
  return (
    <FigureStyles>
      <figure className="figure-item">
        <img src={props.source} alt={props.name} />
      </figure>
    </FigureStyles>
  );
});

export default Figure;
