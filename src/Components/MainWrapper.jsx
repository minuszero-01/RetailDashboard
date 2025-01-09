import React, { Children } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  height: 95vh;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default function MainWrapper({ children }) {
  return (
    <Wrapper>
      <Sidebar />
      <ContentWrapper>
        <Navbar />
        {children}
      </ContentWrapper>
    </Wrapper>
  );
}
