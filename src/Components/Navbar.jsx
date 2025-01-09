import React, { useState } from "react";
import styled from "styled-components";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { Dropdown, Input, Space, Button } from "antd";

// Profile Items
const items = [
  {
    key: "1",
    label: "Profile",
  },
  {
    key: "2",
    label: "Logout",
    danger: true,
  },
];

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
  background-color: var(--primary-color);
  border: 1px solid black;
  @media (max-width: 768px) {
    padding: 8px 12px;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 20px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CustomSearch = styled(Input)`
  width: 300px;
  margin-right: 16px;

  @media (max-width: 768px) {
    display: none; /* Hide search bar on small screens */
  }
`;

const SearchIcon = styled(Button)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background-color: transparent;
    border: none;
    color: white;

    &:hover {
      color: #f5a623;
    }
  }
`;

const CustomButton = styled(Button)`
  background-color: white;
  color: black;
  border: none;
  margin-right: 20px;

  &:hover {
    background-color: #f5a623 !important;
    color: white !important;
  }

  &:focus {
    background-color: #f5a623 !important;
    color: white !important;
  }

  @media (max-width: 768px) {
    padding: 6px;
    font-size: 14px;
  }
`;

export default function Navbar() {
  const handleSearchClick = () => {
    alert("Search button clicked!");
  };

  return (
    <StyledNavbar>
      <Logo>LOGO</Logo>

      <CustomSearch placeholder="Search..." prefix={<SearchOutlined />} />
      <SearchIcon
        icon={<SearchOutlined style={{ fontSize: "20px" }} />}
        onClick={handleSearchClick}
      />
      <Dropdown
        trigger={["click"]}
        menu={{
          items,
        }}
      >
        <Space>
          <CustomButton icon={<UserOutlined style={{ fontSize: "18px" }} />} />
        </Space>
      </Dropdown>
    </StyledNavbar>
  );
}
