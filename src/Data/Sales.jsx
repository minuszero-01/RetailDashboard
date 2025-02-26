export const salesData = [
  {
    key: "1",
    date: "2025-01-01",
    product: "Smartphone",
    region: "North",
    unitsSold: 50,
    revenue: 15000,
  },
  {
    key: "2",
    date: "2025-01-02",
    product: "Laptop",
    region: "East",
    unitsSold: 20,
    revenue: 22000,
  },
  {
    key: "3",
    date: "2025-01-03",
    product: "Television",
    region: "West",
    unitsSold: 15,
    revenue: 12000,
  },
  {
    key: "4",
    date: "2025-01-04",
    product: "Smartwatch",
    region: "South",
    unitsSold: 100,
    revenue: 8000,
  },
  {
    key: "5",
    date: "2025-01-05",
    product: "Headphones",
    region: "Central",
    unitsSold: 60,
    revenue: 6000,
  },
  {
    key: "6",
    date: "2025-01-06",
    product: "Camera",
    region: "North",
    unitsSold: 25,
    revenue: 18000,
  },
  {
    key: "7",
    date: "2025-01-07",
    product: "Tablet",
    region: "East",
    unitsSold: 40,
    revenue: 14000,
  },
  {
    key: "8",
    date: "2025-01-08",
    product: "Refrigerator",
    region: "West",
    unitsSold: 10,
    revenue: 25000,
  },
  {
    key: "9",
    date: "2025-01-09",
    product: "Air Conditioner",
    region: "South",
    unitsSold: 5,
    revenue: 30000,
  },
  {
    key: "10",
    date: "2025-01-10",
    product: "Microwave",
    region: "Central",
    unitsSold: 35,
    revenue: 7000,
  },
  {
    key: "11",
    date: "2025-01-11",
    product: "Gaming Console",
    region: "North",
    unitsSold: 30,
    revenue: 24000,
  },
  {
    key: "12",
    date: "2025-01-12",
    product: "Speakers",
    region: "East",
    unitsSold: 50,
    revenue: 10000,
  },
  {
    key: "13",
    date: "2025-01-13",
    product: "Smart Bulb",
    region: "West",
    unitsSold: 120,
    revenue: 4800,
  },
  {
    key: "14",
    date: "2025-01-14",
    product: "Washing Machine",
    region: "South",
    unitsSold: 8,
    revenue: 16000,
  },
  {
    key: "15",
    date: "2025-01-15",
    product: "Printer",
    region: "Central",
    unitsSold: 15,
    revenue: 7500,
  },
  {
    key: "16",
    date: "2025-01-16",
    product: "Desktop PC",
    region: "North",
    unitsSold: 18,
    revenue: 30000,
  },
  {
    key: "17",
    date: "2025-01-17",
    product: "Vacuum Cleaner",
    region: "East",
    unitsSold: 22,
    revenue: 11000,
  },
  {
    key: "18",
    date: "2025-01-18",
    product: "Smart Thermostat",
    region: "West",
    unitsSold: 7,
    revenue: 10500,
  },
  {
    key: "19",
    date: "2025-01-19",
    product: "Router",
    region: "South",
    unitsSold: 55,
    revenue: 5500,
  },
  {
    key: "20",
    date: "2025-01-20",
    product: "Security Camera",
    region: "Central",
    unitsSold: 30,
    revenue: 15000,
  },
  {
    key: "21",
    date: "2025-01-21",
    product: "Dishwasher",
    region: "North",
    unitsSold: 6,
    revenue: 24000,
  },
  {
    key: "22",
    date: "2025-01-22",
    product: "Monitor",
    region: "East",
    unitsSold: 27,
    revenue: 13500,
  },
  {
    key: "23",
    date: "2025-01-23",
    product: "Electric Kettle",
    region: "West",
    unitsSold: 90,
    revenue: 4500,
  },
  {
    key: "24",
    date: "2025-01-24",
    product: "Home Theater System",
    region: "South",
    unitsSold: 12,
    revenue: 12000,
  },
  {
    key: "25",
    date: "2025-01-25",
    product: "Blender",
    region: "Central",
    unitsSold: 40,
    revenue: 8000,
  },
  {
    key: "26",
    date: "2025-01-26",
    product: "Hair Dryer",
    region: "North",
    unitsSold: 70,
    revenue: 7000,
  },
  {
    key: "27",
    date: "2025-01-27",
    product: "Projector",
    region: "East",
    unitsSold: 10,
    revenue: 20000,
  },
  {
    key: "28",
    date: "2025-01-28",
    product: "Coffee Maker",
    region: "West",
    unitsSold: 45,
    revenue: 9000,
  },
  {
    key: "29",
    date: "2025-01-29",
    product: "Rice Cooker",
    region: "South",
    unitsSold: 60,
    revenue: 7200,
  },
  {
    key: "30",
    date: "2025-01-30",
    product: "Smart Lock",
    region: "Central",
    unitsSold: 20,
    revenue: 16000,
  },
];

export const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    sorter: (a, b) => new Date(a.date) - new Date(b.date),
  },
  {
    title: "Product Name",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Region",
    dataIndex: "region",
    key: "region",
    filters: [
      { text: "North", value: "North" },
      { text: "East", value: "East" },
      { text: "West", value: "West" },
      { text: "South", value: "South" },
      { text: "Central", value: "Central" },
    ],
    onFilter: (value, record) => record.region === value,
  },
  {
    title: "Units Sold",
    dataIndex: "unitsSold",
    key: "unitsSold",
    sorter: (a, b) => a.unitsSold - b.unitsSold,
  },
  {
    title: "Total Revenue",
    dataIndex: "revenue",
    key: "revenue",
    sorter: (a, b) => a.revenue - b.revenue,
    render: (text) => (
      <span style={{ fontWeight: text > 10000 ? "bold" : "normal" }}>
        ${text.toLocaleString()}
      </span>
    ),
  },
];
