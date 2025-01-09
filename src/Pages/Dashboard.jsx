import React from "react";
import Sidebar from "../Components/Sidebar";
import styled from "styled-components";
import SalesTable from "../Components/SalesTable";

export default function Dashboard() {
  const StyledDash = styled.div`
    border: 1px solid black;
    padding: 16px 20px 16px;

    height: 100%;
  `;
  return (
    <StyledDash>
      This DashBoard
      <SalesTable />
    </StyledDash>
  );
}
