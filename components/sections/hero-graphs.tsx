"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

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
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
const unitTypes = ["Studio", "1BR", "2BR", "3BR"];
const leaseStatuses = ["Active", "Notice", "Vacant"];

const getRandomData = (min: number, max: number) =>
  Number((Math.random() * (max - min) + min).toFixed(0));

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

const generateMonthlyRevenue = () =>
  months.map((month) => ({
    month,
    revenue: getRandomData(50000, 100000),
  }));

const generateLeaseExpirations = () =>
  months.map((month) => ({
    month,
    expirations: getRandomData(5, 20),
  }));

const generateCashflowSummary = () => {
  let income = getRandomData(60000, 100000);
  let expenses = getRandomData(40000, 70000);
  return months.map((month) => {
    income = Math.max(
      60000,
      Math.min(100000, income + getRandomData(-10000, 10000))
    );
    expenses = Math.max(
      40000,
      Math.min(70000, expenses + getRandomData(-8000, 8000))
    );
    return { month, income, expenses };
  });
};

const generateInvestorDistribution = () =>
  months.map((month) => ({
    month,
    preferredReturn: getRandomData(10000, 20000),
    returnOfCapital: getRandomData(5000, 15000),
    profitSharing: getRandomData(2000, 10000),
  }));

const generateRentRollAnalysis = () =>
  Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    unitName: `A${Math.floor(i / 5) + 1}-${(i % 5) + 1}0${(i % 5) + 1}`,
    unitType: unitTypes[Math.floor(Math.random() * unitTypes.length)],
    rent: getRandomData(1800, 3500),
    leaseTerm: `${getRandomData(6, 18)} months`,
    status: leaseStatuses[Math.floor(Math.random() * leaseStatuses.length)],
  }));

const generatePropertyComparison = () => [
  {
    property: "Property A",
    noi: getRandomData(500000, 1000000),
    capRate: (getRandomData(500, 800) / 100).toFixed(2),
  },
  {
    property: "Property B",
    noi: getRandomData(500000, 1000000),
    capRate: (getRandomData(500, 800) / 100).toFixed(2),
  },
];

const generateNOITrend = () => {
  let noi = getRandomData(40000, 80000);
  return months.map((month) => {
    const maxDeviation = noi * 0.2;
    const change = getRandomData(-maxDeviation, maxDeviation);
    noi = Math.max(40000, Math.min(80000, noi + change));
    return { month, noi };
  });
};

const generateLoanUnderwriting = () => ({
  ltv: (getRandomData(60, 75) / 100).toFixed(2),
  dscr: (getRandomData(120, 150) / 100).toFixed(2),
  debtYield: (getRandomData(800, 1200) / 100).toFixed(2),
  interestRate: (getRandomData(300, 600) / 100).toFixed(2),
  loanTerm: getRandomData(5, 30),
});

const generateUnitMix = () =>
  unitTypes.map((type) => ({
    name: type,
    value: getRandomData(10, 40),
  }));

const generateOccupancyStatus = () => [
  { name: "Occupied", value: getRandomData(70, 90) },
  { name: "Vacant", value: getRandomData(10, 30) },
];

export function HeroGraphs() {
  const [topGraphIndex, setTopGraphIndex] = useState(0);
  const [bottomLeftGraphIndex, setBottomLeftGraphIndex] = useState(0);
  const [bottomRightGraphIndex, setBottomRightGraphIndex] = useState(1);
  const [data] = useState({
    monthlyRevenue: generateMonthlyRevenue(),
    leaseExpirations: generateLeaseExpirations(),
    cashflowSummary: generateCashflowSummary(),
    investorDistribution: generateInvestorDistribution(),
    rentRollAnalysis: generateRentRollAnalysis(),
    propertyComparison: generatePropertyComparison(),
    noiTrend: generateNOITrend(),
    loanUnderwriting: generateLoanUnderwriting(),
    unitMix: generateUnitMix(),
    occupancyStatus: generateOccupancyStatus(),
  });

  useEffect(() => {
    const graphRotationInterval = setInterval(() => {
      setTopGraphIndex((prevIndex) => (prevIndex + 1) % 5);
      setBottomLeftGraphIndex((prevIndex) => (prevIndex + 1) % 5);
      setBottomRightGraphIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 7000);

    return () => {
      clearInterval(graphRotationInterval);
    };
  }, []);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            family: "'Geist', sans-serif",
          },
          color: "rgba(0, 0, 0, 0.8)",
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "'Geist', sans-serif",
          },
          color: "rgba(0, 0, 0, 0.8)",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        ticks: {
          font: {
            family: "'Geist', sans-serif",
          },
          color: "rgba(0, 0, 0, 0.8)",
          display: false,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };

  const renderTopGraph = () => {
    switch (topGraphIndex) {
      case 0:
        return (
          <Bar
            data={{
              labels: data.monthlyRevenue.map((item) => item.month),
              datasets: [
                {
                  label: "Revenue",
                  data: data.monthlyRevenue.map((item) => item.revenue),
                  backgroundColor: "rgba(59, 130, 246, 0.8)",
                },
              ],
            }}
            options={chartOptions}
          />
        );
      case 1:
        return (
          <Bar
            data={{
              labels: data.leaseExpirations.map((item) => item.month),
              datasets: [
                {
                  label: "Expirations",
                  data: data.leaseExpirations.map((item) => item.expirations),
                  backgroundColor: "rgba(16, 185, 129, 0.8)",
                },
              ],
            }}
            options={chartOptions}
          />
        );
      case 2:
        return (
          <Line
            data={{
              labels: data.cashflowSummary.map((item) => item.month),
              datasets: [
                {
                  label: "Income",
                  data: data.cashflowSummary.map((item) => item.income),
                  borderColor: "rgb(59, 130, 246)",
                  backgroundColor: "rgba(59, 130, 246, 0.8)",
                },
                {
                  label: "Expenses",
                  data: data.cashflowSummary.map((item) => item.expenses),
                  borderColor: "rgb(239, 68, 68)",
                  backgroundColor: "rgba(239, 68, 68, 0.8)",
                },
              ],
            }}
            options={chartOptions}
          />
        );
      case 3:
        return (
          <Bar
            data={{
              labels: data.investorDistribution.map((item) => item.month),
              datasets: [
                {
                  label: "Preferred Return",
                  data: data.investorDistribution.map(
                    (item) => item.preferredReturn
                  ),
                  backgroundColor: "rgba(59, 130, 246, 0.8)",
                },
                {
                  label: "Return of Capital",
                  data: data.investorDistribution.map(
                    (item) => item.returnOfCapital
                  ),
                  backgroundColor: "rgba(16, 185, 129, 0.8)",
                },
                {
                  label: "Profit Sharing",
                  data: data.investorDistribution.map(
                    (item) => item.profitSharing
                  ),
                  backgroundColor: "rgba(245, 158, 11, 0.8)",
                },
              ],
            }}
            options={{
              ...chartOptions,
              scales: {
                x: {
                  stacked: true,
                },
                y: {
                  stacked: true,
                },
              },
            }}
          />
        );
      case 4:
        return (
          <ScrollArea className="h-[300px]">
            <Table>
              <TableHeader className="bg-blue-100 sticky top-0">
                <TableRow>
                  <TableHead className="w-[100px] text-[12px] font-semibold py-2 text-blue-800 font-sans">
                    Unit Name
                  </TableHead>
                  <TableHead className="w-[100px] text-[12px] font-semibold py-2 text-blue-800 font-sans">
                    Unit Type
                  </TableHead>
                  <TableHead className="w-[100px] text-[12px] font-semibold py-2 text-blue-800 font-sans">
                    Rent
                  </TableHead>
                  <TableHead className="w-[120px] text-[12px] font-semibold py-2 text-blue-800 font-sans">
                    Lease Term
                  </TableHead>
                  <TableHead className="w-[100px] text-[12px] font-semibold py-2 text-blue-800 font-sans">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.rentRollAnalysis.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="text-[12px] py-1">
                      {row.unitName}
                    </TableCell>
                    <TableCell className="text-[12px] py-1">
                      {row.unitType}
                    </TableCell>
                    <TableCell className="text-[12px] py-1">
                      {formatCurrency(row.rent)}
                    </TableCell>
                    <TableCell className="text-[12px] py-1">
                      {row.leaseTerm}
                    </TableCell>
                    <TableCell className="text-[12px] py-1">
                      {row.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        );
    }
  };

  const renderBottomGraph = (index: number) => {
    switch (index) {
      case 0:
        return (
          <Bar
            data={{
              labels: data.propertyComparison.map((item) => item.property),
              datasets: [
                {
                  type: "bar" as const,
                  label: "NOI",
                  data: data.propertyComparison.map((item) => item.noi),
                  backgroundColor: "rgba(59, 130, 246, 0.8)",
                  yAxisID: "y",
                },
                {
                  type: "bar" as const,
                  label: "Cap Rate",
                  data: data.propertyComparison.map((item) =>
                    Number.parseFloat(item.capRate)
                  ),
                  borderColor: "rgb(16, 185, 129)",
                  backgroundColor: "rgba(16, 185, 129, 0.8)",
                  yAxisID: "y1",
                },
              ],
            }}
            options={{
              ...chartOptions,
              scales: {
                y: {
                  type: "linear" as const,
                  display: true,
                  position: "left" as const,
                  title: {
                    display: true,
                    text: "NOI",
                  },
                  ticks: {
                    display: false,
                  },
                },
                y1: {
                  type: "linear" as const,
                  display: true,
                  position: "right" as const,
                  grid: {
                    drawOnChartArea: false,
                  },
                  title: {
                    display: true,
                    text: "Cap Rate (%)",
                  },
                  ticks: {
                    callback: (value) => value + "%",
                    display: false,
                  },
                },
              },
            }}
          />
        );
      case 1:
        return (
          <Line
            data={{
              labels: data.noiTrend.map((item) => item.month),
              datasets: [
                {
                  label: "NOI",
                  data: data.noiTrend.map((item) => item.noi),
                  borderColor: "rgb(59, 130, 246)",
                  backgroundColor: "rgba(59, 130, 246, 0.8)",
                },
              ],
            }}
            options={chartOptions}
          />
        );
      case 2:
        return (
          <Table>
            <TableHeader className="bg-blue-100">
              <TableRow>
                <TableHead className="text-[12px] font-semibold py-2 text-blue-800 font-sans">
                  Metric
                </TableHead>
                <TableHead className="text-[12px] font-semibold py-2 text-blue-800 font-sans">
                  Value
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-[12px] py-1">LTV</TableCell>
                <TableCell className="text-[12px] py-1">
                  {data.loanUnderwriting.ltv}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-[12px] py-1">DSCR</TableCell>
                <TableCell className="text-[12px] py-1">
                  {data.loanUnderwriting.dscr}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-[12px] py-1">Debt Yield</TableCell>
                <TableCell className="text-[12px] py-1">
                  {data.loanUnderwriting.debtYield}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-[12px] py-1">
                  Interest Rate
                </TableCell>
                <TableCell className="text-[12px] py-1">
                  {data.loanUnderwriting.interestRate}%
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-[12px] py-1">Loan Term</TableCell>
                <TableCell className="text-[12px] py-1">
                  {data.loanUnderwriting.loanTerm} years
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        );
      case 3:
        return (
          <Pie
            data={{
              labels: data.unitMix.map((item) => item.name),
              datasets: [
                {
                  data: data.unitMix.map((item) => item.value),
                  backgroundColor: COLORS,
                },
              ],
            }}
            options={chartOptions}
          />
        );
      case 4:
        return (
          <Pie
            data={{
              labels: data.occupancyStatus.map((item) => item.name),
              datasets: [
                {
                  data: data.occupancyStatus.map((item) => item.value),
                  backgroundColor: COLORS.slice(0, 2),
                },
              ],
            }}
            options={chartOptions}
          />
        );
    }
  };

  return (
    <div className="grid grid-rows-[auto_auto] gap-1 h-full">
      <Card className="shadow-lg rounded-[8px] overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-0.5 space-y-0">
          <CardTitle className="text-sm font-bold px-2 py-2">
            {topGraphIndex === 0 && "Monthly Revenue"}
            {topGraphIndex === 1 && "Lease Expirations"}
            {topGraphIndex === 2 && "Cashflow Summary"}
            {topGraphIndex === 3 && "Investor Distribution Schedule"}
            {topGraphIndex === 4 && "Rent Roll Analysis"}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 h-[200px]">{renderTopGraph()}</CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-6 mt-6 px-3">
        <Card className="shadow-lg rounded-[8px] overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-0.5 space-y-0">
            <CardTitle className="text-sm font-bold px-2 py-2">
              {bottomLeftGraphIndex === 0 && "Property Comparison Report"}
              {bottomLeftGraphIndex === 1 && "NOI Trend"}
              {bottomLeftGraphIndex === 2 && "Loan Underwriting Report"}
              {bottomLeftGraphIndex === 3 && "Unit Mix"}
              {bottomLeftGraphIndex === 4 && "Occupancy Status"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 h-[200px]">
            {renderBottomGraph(bottomLeftGraphIndex)}
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-[8px] overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/80 backdrop-blur-sm ">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-0.5 space-y-0">
            <CardTitle className="text-sm font-bold px-2 py-2">
              {bottomRightGraphIndex === 0 && "Property Comparison Report"}
              {bottomRightGraphIndex === 1 && "NOI Trend"}
              {bottomRightGraphIndex === 2 && "Loan Underwriting Report"}
              {bottomRightGraphIndex === 3 && "Unit Mix"}
              {bottomRightGraphIndex === 4 && "Occupancy Status"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 h-[200px]">
            {renderBottomGraph(bottomRightGraphIndex)}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
