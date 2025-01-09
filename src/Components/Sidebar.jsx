import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MenuOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import styled from "styled-components";

const { Sider } = Layout;

const NewSider = styled(Sider)`
  height: 100%;
  border: 1px solid black;
  background-color: var(--primary-color);
 
   @media (max-width: 768px) {
     padding-top: 40px; !important;
  }
`;

const NewMenu = styled(Menu)`
  height: 100%;
  border-right: none;
  background-color: var(--primary-color);

  .ant-menu-item {
    color: white; /* Default text color for menu items */
    transition: all 0.3s ease;

    &:hover {
      background-color: var(
        --secondary-color
      ) !important; /* Hover background color */
      color: black; /* Hover text color for better contrast */
    }

    &.ant-menu-item-selected {
      background-color: var(--secondary-color) !important;
      color: black !important;
    }
  }
`;

const HamburgerButton = styled(Button)`
  display: none;
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1000;
  @media (max-width: 768px) {
    display: block;
  }
`;

const items1 = [
  { label: "Dashboard", key: 1, path: "/dashboard" },
  { label: "Reports", key: 2, path: "/reports" },
  { label: "Settings", key: 3, path: "/settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    const { path } = items1.find((item) => item.key == key) || {};
    if (path) {
      navigate(path);
    }
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <HamburgerButton
        type="primary"
        icon={<MenuOutlined />}
        onClick={toggleCollapsed}
      />
      <NewSider
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={200}
        breakpoint="md"
      >
        <NewMenu
          onClick={handleMenuClick}
          mode="inline"
          defaultSelectedKeys={[1]}
          style={{ height: "100%", borderRight: 0 }}
          items={items1}
        ></NewMenu>
      </NewSider>
    </>
  );
}
