import React, { useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import styled from "styled-components";
import { salesData } from "../Data/Sales";
import { Table, Input, DatePicker, Space, Select } from "antd";

const { RangePicker } = DatePicker;
const { Option } = Select;

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Styled container for charts
const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 32px;
  padding: 24px;
  align-items: center;
`;

const ChartWrapper = styled.div`
  max-width: 700px;
`;

const ChartTitle = styled.h3`
  text-align: center;
  margin-bottom: 16px;
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

export default function Reports() {
  const [filteredData, setFilteredData] = useState(salesData);

  // filter by date
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

  // Line Chart
  const lineData = {
    labels: Array.from(new Set(filteredData.map((item) => item.date))), // Unique dates
    datasets: [
      {
        label: "Daily Revenue ($)",
        data: filteredData.map((item) => item.revenue),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  // Bar Chart
  const barData = {
    labels: Array.from(new Set(filteredData.map((item) => item.product))), // Unique products
    datasets: [
      {
        label: "Units Sold",
        data: filteredData.reduce((acc, item) => {
          acc[item.product] = (acc[item.product] || 0) + item.unitsSold;
          return acc;
        }, {}),
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart
  const regions = Array.from(new Set(filteredData.map((item) => item.region))); // Unique regions
  const regionRevenue = regions.map((region) =>
    filteredData
      .filter((item) => item.region === region)
      .reduce((acc, curr) => acc + curr.revenue, 0)
  );

  const pieData = {
    labels: regions,
    datasets: [
      {
        label: "Sales Distribution by Region",
        data: regionRevenue,
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div style={{ padding: "16px 20px 16px" }}>
      <FilterDiv>
        <Space direction="vertical" size={12}>
          <div style={{ fontSize: "16px", marginBottom: "4px" }}>
            Filter Using Date
          </div>
          <RangePicker onChange={handleDateChange} />
        </Space>
        <div>
          <div style={{ fontSize: "16px", marginBottom: "16px" }}>
            Filter Using Date
          </div>
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
        </div>
      </FilterDiv>

      <ChartsContainer>
        {/* Line Chart */}
        <ChartWrapper>
          <ChartTitle>Daily Revenue Trends</ChartTitle>
          <Line
            data={lineData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: { position: "top" },
              },
            }}
          />
        </ChartWrapper>

        {/* Bar Chart */}
        <ChartWrapper>
          <ChartTitle>Product-Wise Units Sold</ChartTitle>
          <Bar
            data={barData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: { position: "top" },
              },
            }}
          />
        </ChartWrapper>

        {/* Pie Chart */}
        <ChartWrapper>
          <ChartTitle>Sales Distribution by Region</ChartTitle>
          <Pie
            data={pieData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: { position: "bottom" },
              },
            }}
          />
        </ChartWrapper>
      </ChartsContainer>
    </div>
  );
}
