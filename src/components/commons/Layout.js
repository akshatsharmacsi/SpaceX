import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import styled from "styled-components";
const LayoutStyles = styled.div`
  display: grid;
  grid-gap: 20px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: minmax(auto, 20%) minmax(auto, 80%);
  }

  @media screen and (min-width: 701px) and (max-width: 1023px) {
    grid-template-columns: minmax(auto, 30%) minmax(auto, 70%);
  }
`;

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <LayoutStyles>{this.props.children}</LayoutStyles>
        <Footer />
      </>
    );
  }
}

export default Layout;
