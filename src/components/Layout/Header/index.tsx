import React from "react";
import { HeaderWrapper, LogoImage, LiteBadge } from "./Header.styles";
import logo from "../../../assets/svgs/gamdom-logo.svg";
import { Flex } from "../../../styles/commonComponents";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Flex align="center" gap="0.5rem">
        <a href="/">
          <LogoImage src={logo} alt="Gamdom Logo" />
        </a>
        <LiteBadge>Lite</LiteBadge>
      </Flex>
    </HeaderWrapper>
  );
};

export default Header;
