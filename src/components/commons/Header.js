import React from "react";

import styled from "styled-components";

const HeaderStyles = styled.div`
  margin: 25px 0 50px 0;
  padding-left: 10px;
  font-size: 20px;

  @media screen and (min-width: 701px) {
    margin: 0 0 50px 0;
    font-size: 16px;
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <header>
        <h1>SpacEx Launch programs</h1>
      </header>
    </HeaderStyles>  
  );
};
export default Header;
