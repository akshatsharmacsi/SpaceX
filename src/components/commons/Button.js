import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.div`
  button {
    background-color: #c5e09b;
    border-radius: 8px;
    font-family: inherit;
    padding: 4px 25px 8px 25px;
    font-size: 24px;
    font-weight: 500;
    text-transform: capitalize;
    cursor: pointer;
    border: none;
    outline: none;
  }
  button.active {
    background-color: #7cba01;
  }

  @media screen and (min-width: 701px) {
    button {
      padding: 2px 20px 6px 20px;
      font-size: 16px;
      border-radius: 5px;
    }
  }
`;

const Button = React.memo((props) => {
  return (
    <ButtonStyles>
      <button
        className={"filter-item" + (props.isActive ? " active" : "")}
        onClick={() => {
          props.onClick(props.value);
        }}
      >
        {props.value}
      </button>
    </ButtonStyles>
  );
});

export default Button;
