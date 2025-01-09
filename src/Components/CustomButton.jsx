import React from "react";
import { Button } from "antd";
import styled from "styled-components";

// Define a custom button style using styled-components
const CustomButton = styled(Button)`
  background-color: #3b5998;
  color: white;
  border: none;

  &:hover {
    background-color: #f5a623;
    color: white;
  }

  &:focus,
  &:active {
    background-color: #3b5998;
    color: white;
    border-color: #3b5998;
  }
`;

export default CustomButton;
