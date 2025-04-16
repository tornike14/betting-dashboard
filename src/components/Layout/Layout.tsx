import React from "react";
import Header from "../Layout/Header";
import { LayoutProps } from "../../types/components/layoutT";
import { Container, MainContent } from "./Layout.styles";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <MainContent>{children}</MainContent>
    </Container>
  );
};

export default Layout;
