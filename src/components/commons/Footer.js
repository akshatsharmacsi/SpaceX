import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  text-align: center;
  margin: 45px 0 10px 0;
  font-size: 22px;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <footer className="app-footer">
        <p>
          <b>Developed by: </b>Akshat Sharma
        </p>
      </footer>
    </FooterStyle>
  );
};
export default Footer;
