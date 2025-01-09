import React, { useState } from "react";
import { Table, Input, DatePicker, Space, Select } from "antd";
import styled from "styled-components";
import { salesData, columns } from "../Data/Sales";

const { Search } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;

const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: var(--secondary-color);
    color: white;
  }

  .ant-table-tbody > tr > td {
    color: black;

    :onhover {
      color: black !important;
    }
  }

  .ant-pagination-item-active {
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
  }
`;

const FilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap-: 4px;
  }
`;

export default function SalesTable() {
  const [filteredData, setFilteredData] = useState(salesData);

  // Handle search by product name
  const handleSearch = (value) => {
    const filtered = salesData.filter((item) =>
      item.product.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Handle date range filter
  const handleDateChange = (dates) => {
    if (!dates || dates.length === 0) {
      setFilteredData(salesData); // Reset to full data if no date is selected
      return;
    }

    const [start, end] = dates;
    const filtered = salesData.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= start.toDate() && itemDate <= end.toDate();
    });
    setFilteredData(filtered);
  };

  // Handle region dropdown filter
  const handleRegionChange = (value) => {
    const filtered = salesData.filter((item) => {
      const matchesRegion = !value || item.region === value;

      return matchesRegion;
    });
    setFilteredData(filtered);
  };

  return (
    <div style={{ padding: "24px" }}>
      <FilterDiv>
        <Search
          placeholder="Search by product name..."
          allowClear
          enterButton="Search"
          onSearch={handleSearch}
          style={{ maxWidth: "300px" }}
        />

        <Space direction="vertical" size={12}>
          <RangePicker onChange={handleDateChange} />
        </Space>

        <Select
          placeholder="Filter by region"
          style={{ width: 200 }}
          onChange={handleRegionChange}
          allowClear
        >
          <Option value="North">North</Option>
          <Option value="East">East</Option>
          <Option value="West">West</Option>
          <Option value="South">South</Option>
        </Select>
      </FilterDiv>

      <StyledTable
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}
