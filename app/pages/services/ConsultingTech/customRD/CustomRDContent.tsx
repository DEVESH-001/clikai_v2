"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { GeistSans } from "geist/font/sans";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { GradientBackground } from "@/components/sections/gradient-background";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Rent Roll Table Component
const RentRollTable = () => {
  const rentRollData = [
    { unit: "101", type: "1BR", sqft: 750, rent: 1500, status: "Occupied" },
    { unit: "102", type: "2BR", sqft: 1000, rent: 2000, status: "Vacant" },
    { unit: "103", type: "Studio", sqft: 500, rent: 1200, status: "Occupied" },
    { unit: "104", type: "1BR", sqft: 800, rent: 1600, status: "Occupied" },
    { unit: "105", type: "2BR", sqft: 1100, rent: 2200, status: "Occupied" },
    { unit: "106", type: "3BR", sqft: 1300, rent: 2500, status: "Occupied" },
  ];

  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <TableHeader className="bg-blue-100">
          <TableRow>
            <TableHead className="text-xs font-semibold text-blue-800">
              Unit
            </TableHead>
            <TableHead className="text-xs font-semibold text-blue-800">
              Type
            </TableHead>
            <TableHead className="text-xs font-semibold text-blue-800">
              Sq Ft
            </TableHead>
            <TableHead className="text-xs font-semibold text-blue-800">
              Rent
            </TableHead>
            <TableHead className="text-xs font-semibold text-blue-800">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rentRollData.map((row, index) => (
            <TableRow
              key={row.unit}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <TableCell className="text-xs py-2">{row.unit}</TableCell>
              <TableCell className="text-xs py-2">{row.type}</TableCell>
              <TableCell className="text-xs py-2">{row.sqft}</TableCell>
              <TableCell className="text-xs py-2">${row.rent}</TableCell>
              <TableCell className="text-xs py-2">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

// Operating Statement Table Component
const OperatingStatementTable = () => {
  const operatingStatementData = [
    {
      category: "Income",
      item: "Rental Income",
      actual: 150000,
      budget: 155000,
      variance: -5000,
      varPercent: -3.23,
    },
    {
      category: "Income",
      item: "Other Income",
      actual: 5000,
      budget: 4500,
      variance: 500,
      varPercent: 11.11,
    },
    {
      category: "Expense",
      item: "Property Management",
      actual: 15000,
      budget: 14000,
      variance: 1000,
      varPercent: 7.14,
    },
    {
      category: "Expense",
      item: "Maintenance",
      actual: 10000,
      budget: 12000,
      variance: -2000,
      varPercent: -16.67,
    },
    {
      category: "Expense",
      item: "Utilities",
      actual: 8000,
      budget: 7500,
      variance: 500,
      varPercent: 6.67,
    },
    {
      category: "NOI",
      item: "Net Operating Income",
      actual: 122000,
      budget: 126000,
      variance: -4000,
      varPercent: -3.17,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <TableHeader className="bg-blue-100">
          <TableRow>
            <TableHead className="text-xs font-semibold text-blue-800">
              Category
            </TableHead>
            <TableHead className="text-xs font-semibold text-blue-800">
              Item
            </TableHead>
            <TableHead className="text-xs font-semibold text-blue-800">
              Actual
            </TableHead>
            <TableHead className="text-xs font-semibold text-blue-800">
              Budget
            </TableHead>
            <TableHead className="text-xs font-semibold text-blue-800">
              Variance
            </TableHead>
            <TableHead className="text-xs font-semibold text-blue-800">
              Var %
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {operatingStatementData.map((row, index) => (
            <TableRow
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <TableCell className="text-xs py-2">{row.category}</TableCell>
              <TableCell className="text-xs py-2">{row.item}</TableCell>
              <TableCell className="text-xs py-2">
                ${row.actual.toLocaleString()}
              </TableCell>
              <TableCell className="text-xs py-2">
                ${row.budget.toLocaleString()}
              </TableCell>
              <TableCell className="text-xs py-2">
                ${row.variance.toLocaleString()}
              </TableCell>
              <TableCell className="text-xs py-2">
                {row.varPercent.toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

// Sales Comps Table Component
const SalesCompsTable = () => {
  const salesCompsData = [
    {
      property: "Property A",
      address: "123 Main St",
      salePrice: 5000000,
      saleDate: "2023-05-15",
      pricePerSqFt: 250,
      capRate: 5.5,
    },
    {
      property: "Property B",
      address: "456 Oak Ave",
      salePrice: 7500000,
      saleDate: "2023-06-22",
      pricePerSqFt: 300,
      capRate: 5.2,
    },
    {
      property: "Property C",
      address: "789 Pine Rd",
      salePrice: 6200000,
      saleDate: "2023-07-10",
      pricePerSqFt: 275,
      capRate: 5.8,
    },
    {
      property: "Property D",
      address: "321 Elm St",
      salePrice: 8100000,
      saleDate: "2023-08-05",
      pricePerSqFt: 325,
      capRate: 5.4,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <TableHeader className="bg-blue-100">
          <TableRow>
            <TableHead className="text-xs font-semibold text-blue-800">
              Property
            </TableHead>
            <TableHead className="text-xs font-semibold text-blue-800">
              Address
            </TableHead>
            <TableHead className="text-xs font-semibold text-blue-800">
              Sale Price
            </TableHead>
            <TableHead className="text-xs font-semibold text-blue-800">
              Sale Date
            </TableHead>
            <TableHead className="text-xs font-semibold text-blue-800">
              Price/SqFt
            </TableHead>
            <TableHead className="text-xs font-semibold text-blue-800">
              Cap Rate
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {salesCompsData.map((row, index) => (
            <TableRow
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <TableCell className="text-xs py-2">{row.property}</TableCell>
              <TableCell className="text-xs py-2">{row.address}</TableCell>
              <TableCell className="text-xs py-2">
                ${row.salePrice.toLocaleString()}
              </TableCell>
              <TableCell className="text-xs py-2">{row.saleDate}</TableCell>
              <TableCell className="text-xs py-2">
                ${row.pricePerSqFt}
              </TableCell>
              <TableCell className="text-xs py-2">{row.capRate}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

// Dashboard Charts Component
const DashboardCharts = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const cashflowData = {
    labels: months,
    datasets: [
      {
        label: "Income",
        data: months.map(() => Math.floor(Math.random() * 50000) + 100000),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Expenses",
        data: months.map(() => Math.floor(Math.random() * 40000) + 60000),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  const leaseExpirationData = {
    labels: months,
    datasets: [
      {
        label: "Lease Expirations",
        data: months.map(() => Math.floor(Math.random() * 10)),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const investorDistributionData = {
    labels: ["Preferred Return", "Profit", "Cashflow"],
    datasets: [
      {
        label: "Distribution",
        data: [30, 50, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Cashflow Overview</h3>
        <div className="h-64">
          <Bar data={cashflowData} options={options} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Lease Expiration</h3>
          <div className="h-48">
            <Bar data={leaseExpirationData} options={options} />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Investor Distribution</h3>
          <div className="h-48">
            <Bar data={investorDistributionData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Use Case Section Component
const UseCaseSection = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: { boxWidth: 10, padding: 5, font: { size: 10 } },
      },
    },
    scales: {
      x: { ticks: { font: { size: 10 } } },
      y: { ticks: { font: { size: 10 } } },
    },
  };

  return (
    <section
      className={`py-8 bg-gradient-to-b from-white to-gray-50 ${GeistSans.className}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Reporting Solutions for Every CRE Stakeholder
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto mb-6">
            Tailored dashboards and insights for different roles in commercial
            real estate
          </p>
        </motion.div>

        <Tabs defaultValue="syndicator" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="syndicator">
              Syndicators & Investors
            </TabsTrigger>
            <TabsTrigger value="asset-manager">Asset Managers</TabsTrigger>
            <TabsTrigger value="property-manager">
              Property Managers
            </TabsTrigger>
          </TabsList>

          {/* Asset Manager Dashboard */}
          <TabsContent value="asset-manager">
            <Card>
              <CardHeader>
                <CardTitle>Asset Manager Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Loan Portfolio Distribution
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Pie
                        data={{
                          labels: [
                            "Agency",
                            "Life Insurance",
                            "CMBS",
                            "Bridge",
                          ],
                          datasets: [
                            {
                              data: [45, 25, 15, 15],
                              backgroundColor: [
                                "rgba(75, 192, 192, 0.8)",
                                "rgba(54, 162, 235, 0.8)",
                                "rgba(255, 159, 64, 0.8)",
                                "rgba(153, 102, 255, 0.8)",
                              ],
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Delinquency Trends
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: ["30 Days", "60 Days", "90+ Days"],
                          datasets: [
                            {
                              label: "Number of Loans",
                              data: [8, 5, 3],
                              backgroundColor: [
                                "rgba(255, 159, 64, 0.8)",
                                "rgba(255, 99, 132, 0.8)",
                                "rgba(139, 0, 0, 0.8)",
                              ],
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">Occupancy Rates</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: [
                            "Multifamily",
                            "Office",
                            "Retail",
                            "Industrial",
                          ],
                          datasets: [
                            {
                              label: "Occupancy Rate (%)",
                              data: [95, 80, 75, 85],
                              backgroundColor: "rgba(54, 162, 235, 0.8)",
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        High-Risk Loans by Geography
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: ["NY", "CA", "TX", "FL"],
                          datasets: [
                            {
                              label: "Number of High-Risk Loans",
                              data: [18, 12, 9, 7],
                              backgroundColor: "rgba(153, 102, 255, 0.8)",
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Monthly Cash Flow
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Line
                        data={{
                          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                          datasets: [
                            {
                              label: "Cash Flow (M)",
                              data: [2.2, 2.5, 2.7, 3.0, 3.3],
                              borderColor: "rgb(75, 192, 192)",
                              tension: 0.1,
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Loan Maturity Distribution
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Doughnut
                        data={{
                          labels: ["<6 Months", "6-12 Months", ">1 Year"],
                          datasets: [
                            {
                              data: [35, 40, 25],
                              backgroundColor: [
                                "rgba(255, 159, 64, 0.8)",
                                "rgba(54, 162, 235, 0.8)",
                                "rgba(75, 192, 192, 0.8)",
                              ],
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>
                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Regulatory Compliance
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Doughnut
                        data={{
                          labels: [
                            "Compliant",
                            "Under Review",
                            "Non-Compliant",
                          ],
                          datasets: [
                            {
                              data: [85, 12, 3],
                              backgroundColor: [
                                "rgba(75, 192, 192, 0.8)",
                                "rgba(255, 205, 86, 0.8)",
                                "rgba(255, 99, 132, 0.8)",
                              ],
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Portfolio Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: [
                            "Performing",
                            "Watch List",
                            "Special Servicing",
                            "REO",
                          ],
                          datasets: [
                            {
                              label: "Loan Volume ($B)",
                              data: [8.5, 1.2, 0.8, 0.5],
                              backgroundColor: [
                                "rgba(75, 192, 192, 0.8)",
                                "rgba(255, 205, 86, 0.8)",
                                "rgba(255, 159, 64, 0.8)",
                                "rgba(255, 99, 132, 0.8)",
                              ],
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Property Manager Dashboard */}
          <TabsContent value="property-manager">
            <Card>
              <CardHeader>
                <CardTitle>Property Manager Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* First row - existing charts */}
                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">Occupancy Rates</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: [
                            "Multifamily",
                            "Office",
                            "Retail",
                            "Industrial",
                          ],
                          datasets: [
                            {
                              label: "Occupancy Rate (%)",
                              data: [92, 85, 78, 88],
                              backgroundColor: "rgba(54, 162, 235, 0.8)",
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Upcoming Lease Expirations
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: ["30 Days", "60 Days", "90 Days"],
                          datasets: [
                            {
                              label: "Number of Leases",
                              data: [20, 15, 10],
                              backgroundColor: "rgba(255, 159, 64, 0.8)",
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Maintenance Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Pie
                        data={{
                          labels: ["Open", "In Progress", "Closed"],
                          datasets: [
                            {
                              data: [29.4, 11.8, 58.8],
                              backgroundColor: [
                                "rgba(255, 99, 132, 0.8)",
                                "rgba(255, 205, 86, 0.8)",
                                "rgba(75, 192, 192, 0.8)",
                              ],
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  {/* Second row - new charts */}
                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Tenant Satisfaction
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Pie
                        data={{
                          labels: ["Happy", "Neutral", "Dissatisfied"],
                          datasets: [
                            {
                              data: [70, 20, 10],
                              backgroundColor: [
                                "rgba(75, 192, 192, 0.8)",
                                "rgba(255, 205, 86, 0.8)",
                                "rgba(255, 99, 132, 0.8)",
                              ],
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Monthly Income vs Expenses
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: [
                            "Multifamily",
                            "Office",
                            "Retail",
                            "Industrial",
                          ],
                          datasets: [
                            {
                              label: "Rent Income",
                              data: [50000, 70000, 30000, 60000],
                              backgroundColor: "rgba(54, 162, 235, 0.8)",
                            },
                            {
                              label: "Operating Expenses",
                              data: [20000, 25000, 15000, 18000],
                              backgroundColor: "rgba(255, 99, 132, 0.8)",
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">Late Payments</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: [
                            "Multifamily",
                            "Office",
                            "Retail",
                            "Industrial",
                          ],
                          datasets: [
                            {
                              label: "Late Payment Rate (%)",
                              data: [5, 8, 2, 6],
                              backgroundColor: "rgba(153, 102, 255, 0.8)",
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  {/* Third row - new charts */}
                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Maintenance Costs
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Line
                        data={{
                          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                          datasets: [
                            {
                              label: "Monthly Costs",
                              data: [12000, 15000, 10000, 14000, 13000],
                              borderColor: "rgb(75, 192, 192)",
                              tension: 0.1,
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        High-Risk Properties
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: [
                            "Multifamily",
                            "Office",
                            "Retail",
                            "Industrial",
                          ],
                          datasets: [
                            {
                              label: "Number of Risk Flags",
                              data: [8, 5, 7, 6],
                              backgroundColor: "rgba(255, 99, 132, 0.8)",
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Lease Renewal Rates
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: [
                            "Multifamily",
                            "Office",
                            "Retail",
                            "Industrial",
                          ],
                          datasets: [
                            {
                              label: "Renewal Rate (%)",
                              data: [80, 75, 70, 78],
                              backgroundColor: "rgba(54, 162, 235, 0.8)",
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>
                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Energy Efficiency
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: [
                            "Building A",
                            "Building B",
                            "Building C",
                            "Building D",
                          ],
                          datasets: [
                            {
                              label: "Energy Score",
                              data: [85, 92, 78, 88],
                              backgroundColor: "rgba(75, 192, 192, 0.8)",
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Tenant Turnover Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Line
                        data={{
                          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                          datasets: [
                            {
                              label: "Turnover Rate (%)",
                              data: [5, 3, 4, 6, 2, 3],
                              borderColor: "rgb(255, 159, 64)",
                              tension: 0.1,
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Maintenance Response Time
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Doughnut
                        data={{
                          labels: ["< 24 hours", "24-48 hours", "> 48 hours"],
                          datasets: [
                            {
                              data: [70, 20, 10],
                              backgroundColor: [
                                "rgba(75, 192, 192, 0.8)",
                                "rgba(255, 205, 86, 0.8)",
                                "rgba(255, 99, 132, 0.8)",
                              ],
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Syndicator Dashboard */}
          <TabsContent value="syndicator">
            <Card>
              <CardHeader>
                <CardTitle>Syndicator & Investor Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* First row */}
                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Investment Distribution
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Pie
                        data={{
                          labels: ["Equity", "Debt", "Preferred Equity"],
                          datasets: [
                            {
                              data: [50, 30, 20],
                              backgroundColor: [
                                "rgba(75, 192, 192, 0.8)",
                                "rgba(54, 162, 235, 0.8)",
                                "rgba(255, 159, 64, 0.8)",
                              ],
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Portfolio Values
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: [
                            "Multifamily",
                            "Office",
                            "Retail",
                            "Industrial",
                          ],
                          datasets: [
                            {
                              label: "Value (M)",
                              data: [10, 7, 5, 8],
                              backgroundColor: "rgba(153, 102, 255, 0.8)",
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Monthly Cash Flow
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Line
                        data={{
                          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                          datasets: [
                            {
                              label: "Cash Flow",
                              data: [20000, 25000, 30000, 35000, 40000],
                              borderColor: "rgb(75, 192, 192)",
                              tension: 0.1,
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  {/* Second row */}
                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">Returns by Type</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: ["Equity", "Debt", "Preferred Equity"],
                          datasets: [
                            {
                              label: "Annual Return (%)",
                              data: [12, 8, 10],
                              backgroundColor: "rgba(255, 159, 64, 0.8)",
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Geographic Exposure
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: ["NY", "CA", "TX", "FL"],
                          datasets: [
                            {
                              label: "Investment Value (M)",
                              data: [4, 3.5, 2.5, 2],
                              backgroundColor: "rgba(54, 162, 235, 0.8)",
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Capital Raising Progress
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: ["Seed Round", "Series A", "Series B"],
                          datasets: [
                            {
                              label: "Progress (%)",
                              data: [70, 80, 90],
                              backgroundColor: "rgba(54, 162, 235, 0.8)",
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  {/* Third row */}
                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Exit Strategy Timeline
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Pie
                        data={{
                          labels: ["<1 Year", "1-3 Years", ">3 Years"],
                          datasets: [
                            {
                              data: [20, 50, 30],
                              backgroundColor: [
                                "rgba(255, 159, 64, 0.8)",
                                "rgba(54, 162, 235, 0.8)",
                                "rgba(75, 192, 192, 0.8)",
                              ],
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Total Portfolio Returns
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-600">
                          $18,000
                        </div>
                        <div className="text-sm text-gray-600 mt-2">
                          Total Returns
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">Risk Exposure</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: [
                            "Multifamily",
                            "Office",
                            "Retail",
                            "Industrial",
                          ],
                          datasets: [
                            {
                              label: "High-Risk Investments",
                              data: [3, 2, 4, 1],
                              backgroundColor: "rgba(255, 99, 132, 0.8)",
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>
                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Investor Satisfaction
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Doughnut
                        data={{
                          labels: [
                            "Very Satisfied",
                            "Satisfied",
                            "Neutral",
                            "Dissatisfied",
                          ],
                          datasets: [
                            {
                              data: [45, 30, 20, 5],
                              backgroundColor: [
                                "rgba(75, 192, 192, 0.8)",
                                "rgba(54, 162, 235, 0.8)",
                                "rgba(255, 205, 86, 0.8)",
                                "rgba(255, 99, 132, 0.8)",
                              ],
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Capital Deployment
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Bar
                        data={{
                          labels: ["Deployed", "Committed", "Available"],
                          datasets: [
                            {
                              label: "Capital ($M)",
                              data: [75, 15, 10],
                              backgroundColor: [
                                "rgba(75, 192, 192, 0.8)",
                                "rgba(54, 162, 235, 0.8)",
                                "rgba(255, 205, 86, 0.8)",
                              ],
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader className="p-3">
                      <CardTitle className="text-sm">
                        Investor Retention Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 h-[200px]">
                      <Pie
                        data={{
                          labels: ["Retained", "New", "Lost"],
                          datasets: [
                            {
                              data: [75, 15, 10],
                              backgroundColor: [
                                "rgba(75, 192, 192, 0.8)",
                                "rgba(255, 205, 86, 0.8)",
                                "rgba(255, 99, 132, 0.8)",
                              ],
                            },
                          ],
                        }}
                        options={chartOptions}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default function CustomReportingDashboardsPage() {
  return (
    <div className={`flex flex-col min-h-screen w-full ${GeistSans.className}`}>
      <main className="flex-grow relative overflow-hidden">
        {/* Background with curvy lines */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-white to-blue-100">
          <svg
            className="absolute w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <motion.path
              fill="rgba(59, 130, 246, 0.1)"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,144C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,144C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,154.7C960,149,1056,171,1152,154.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 20,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 pt-24 pb-12">
          <GradientBackground className=" overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 mt-8"
                >
                  Empower Your Decisions with{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700/90 to-blue-500">
                    Custom <br /> Reporting & Dashboards
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto"
                >
                  Transform raw data into actionable insights with interactive
                  dashboards tailored to your CRE needs.
                  <br />
                  Visualize key metrics, track performance, and drive smarter
                  decision-making.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Button
                    size="lg"
                    className="bg-blue-600 text-white hover:bg-blue-700 rounded-[8px]"
                  >
                    Talk to Us Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>

              <Card className="p-6 bg-white/90 backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <Tabs defaultValue="operating-statement" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="operating-statement">
                          Operating Statement
                        </TabsTrigger>
                        <TabsTrigger value="rent-roll">
                          Rent Roll Extraction
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="rent-roll">
                        <RentRollTable />
                      </TabsContent>
                      <TabsContent value="operating-statement">
                        <OperatingStatementTable />
                      </TabsContent>
                    </Tabs>
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-2">
                        Sales Comps
                      </h3>
                      <SalesCompsTable />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <DashboardCharts />
                  </div>
                </div>
              </Card>
            </div>
          </GradientBackground>
        </section>

        {/* Reporting Solutions Section */}
        <section className="relative z-10 py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <UseCaseSection />
          </div>
        </section>

        {/* Custom Financial Models Section */}
        <section className="relative z-10 py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Custom Financial Models
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tailored Solutions for CRE Insights
              </p>
            </motion.div>

            <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-gray-700 mb-4 text-sm md:text-base">
                      Clik.ai specializes in building custom financial models
                      tailored to your unique CRE requirements. Our models
                      include charts, data visualizations, and in-depth analysis
                      from OS and RR data, delivering actionable insights for
                      data-driven decisions.
                    </p>
                    <p className="text-gray-700 mb-4 text-sm md:text-base">
                      We offer comprehensive slice-and-dice capabilities,
                      developed in collaboration with your team to align with
                      your reporting needs and business goals—all included in
                      the service cost.
                    </p>
                    <Button
                      size="lg"
                      className="bg-blue-600 text-white hover:bg-blue-700 w-full md:w-auto rounded-[8px]"
                    >
                      Talk to Us Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {/* <Card className="shadow-sm">
                      <CardHeader className="p-3">
                        <CardTitle className="text-sm font-medium">
                          Revenue Forecast
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-3">
                        <Line
                          data={{
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                            datasets: [
                              {
                                label: "Actual",
                                data: [65, 59, 80, 81, 56, 55],
                                borderColor: "rgb(75, 192, 192)",
                                tension: 0.1,
                              },
                              {
                                label: "Forecast",
                                data: [70, 62, 85, 83, 59, 58],
                                borderColor: "rgb(255, 99, 132)",
                                tension: 0.1,
                              },
                            ],
                          }}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                              legend: {
                                position: "top" as const,
                                labels: {
                                  boxWidth: 10,
                                  padding: 8,
                                  font: { size: 10 },
                                },
                              },
                            },
                            scales: {
                              x: { ticks: { font: { size: 10 } } },
                              y: { ticks: { font: { size: 10 } } },
                            },
                          }}
                          height={150}
                        />
                      </CardContent>
                    </Card> */}
                    <Card className="shadow-sm">
                      <CardHeader className="p-3">
                        <CardTitle className="text-sm font-medium">
                          Expense Breakdown
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-3">
                        <Bar
                          data={{
                            labels: [
                              "Maintenance",
                              "Utilities",
                              "Insurance",
                              "Property Tax",
                              "Management",
                            ],
                            datasets: [
                              {
                                label: "Expenses",
                                data: [12, 19, 3, 5, 2],
                                backgroundColor: [
                                  "rgba(255, 99, 132, 0.6)",
                                  "rgba(54, 162, 235, 0.6)",
                                  "rgba(255, 206, 86, 0.6)",
                                  "rgba(75, 192, 192, 0.6)",
                                  "rgba(153, 102, 255, 0.6)",
                                ],
                              },
                            ],
                          }}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                              legend: {
                                position: "top" as const,
                                labels: {
                                  boxWidth: 10,
                                  padding: 8,
                                  font: { size: 10 },
                                },
                              },
                            },
                            scales: {
                              x: { ticks: { font: { size: 10 } } },
                              y: { ticks: { font: { size: 10 } } },
                            },
                          }}
                          height={150}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technology Capabilities Section */}
        <section className="relative z-10 py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Technology Capabilities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Leveraging State-of-the-Art Technology
              </p>
            </motion.div>

            <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">
                        Advanced Charting Tools
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Leveraging libraries like Tableau and Power BI for
                        interactive data visualization.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">
                        Custom Salesforce Development
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Building tailored solutions on Salesforce for
                        streamlined CRE workflows.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">
                        Data Integration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Consolidating data from OS, RR, and other financial
                        documents into unified dashboards.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">
                        Automation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Reducing manual effort with automated reporting and
                        analytics workflows.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6 text-center">
                  <Button
                    size="lg"
                    className="bg-blue-600 text-white hover:bg-blue-700 rounded-[8px]"
                  >
                    Explore Our Technology
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-16 bg-gradient-to-br from-[#001F3F] via-blue-900 to-blue-800">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C30,40 70,60 100,0 L100,100 L0,100 Z"
                fill="rgba(255, 255, 255, 0.05)"
              />
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let&apos;s Transform Your CRE Reporting
              </h2>
              <h3 className="text-xl md:text-2xl text-blue-200 mb-6">
                Partner with Clik.ai Today
              </h3>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
                Clik.ai&apos;s custom reporting and dashboard solutions enable
                you to make smarter, faster, and more informed decisions. Ready
                to take your CRE data management to the next level? Contact us
                today for a consultation.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg font-semibold rounded-[8px]"
                >
                  Talk to Us Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
