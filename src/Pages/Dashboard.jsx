import React from "react";
import Sidebar from "../Components/Sidebar";
import styled from "styled-components";
import SalesTable from "../Components/SalesTable";

export default function Dashboard() {
  const StyledDash = styled.div`
    padding: 16px 20px 16px;
    height: 100%;
  `;
  return (
    <StyledDash>
      <SalesTable />
    </StyledDash>
  );
}
