import React from "react";
import styled from "styled-components";

const ProgramInfoStyles = styled.div`
  .program-info {
    display: flex;
    align-content: center;
    margin-bottom: 12px;
  }
  .program-info.type-list {
    display: block;
  }
  .info-label {
    font-size: 20px;
  }
  .type-list .info-label {
    font-size: 22px;
  }
  .info-value {
    color: #474f98;
    margin-left: 5px;
    font-size: 20px;
  }
  .type-list .info-value {
    margin-left: 30px;
    font-size: 22px;
  }

  @media screen and (min-width: 701px) {
    .info-label,
    .info-value {
      font-size: 16px;
    }
    .type-list .info-label,
    .type-list .info-value {
      font-size: 18px;
    }
  }
`;

const ProgramInfo = React.memo((props) => {
  const isValueArray = Array.isArray(props.value);
  const detailValue = isValueArray ? (
    <ul className="info-value">
      {props.value.length ? (
        props.value.map((data) => <li key={data}>{data}</li>)
      ) : (
        <li>NA</li>
      )}
    </ul>
  ) : (
    <p className="info-value">{props.value ? props.value + "" : "NA"}</p>
  );

  return (
    <ProgramInfoStyles>
      <div className={"program-info" + (isValueArray ? " type-list" : "")}>
        <p className="info-label">{props.label}:</p>
        {detailValue}
      </div>
    </ProgramInfoStyles>
  );
});

export default ProgramInfo;
