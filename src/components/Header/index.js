import React from "react";
import styled from "styled-components";
import { AdyenLogo } from "../AdyenLogo";

export const Header = () => (
  <HeaderContainer>
    <Heading1>
      <StyledAdyenLogo style={{ color: "hotpink" }} />
      <SubHeading>Currency convertor</SubHeading>
    </Heading1>
  </HeaderContainer>
);

const StyledAdyenLogo = styled(AdyenLogo)`
  min-height: 4rem;
  height: 5vw;
  width: 35vw;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Heading1 = styled.h1`
  color: #0abf53;
`;

const SubHeading = styled.strong`
  text-transform: uppercase;
  letter-spacing: 0.03rem;
  display: block;
  font-size: 1.6rem;
  text-align: center;
  margin-top: 0rem;
`;
