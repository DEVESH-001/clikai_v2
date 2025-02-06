"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "../ui/switch";

// Define the structure of a pricing plan
interface Plan {
  name: string;
  description: string;
  monthlyPrice?: number;
  price?: string;
  perDealPrice?: number;
  features: string[];
  bestFor: string[];
  cta: string;
  ribbon?: string;
}

// Define the structure and content of each pricing plan
const plans: Plan[] = [
  {
    name: "Self-Service",
    description: "Ideal for 1-4 deals per month",
    monthlyPrice: 49,
    features: [
      "Self-Managed - DIY",
      "Online Video Tutorials",
      "Multifamily only",
      "AI-powered data extraction",
      "Basic financial modeling",
      "Access to InvestAssist",
      "Teams with analysts seeking automated parsing tools",
      "Users eager to master DIY extraction",
      "Budget-conscious users starting with automation",
    ],
    bestFor: [
      "Teams with analysts seeking automated parsing tools",
      "Users eager to master DIY extraction",
      "Clients testing our extraction capabilities before scaling",
      "Budget-conscious users starting with automation",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    description: "Clik Analysts Do It for You",
    monthlyPrice: 99,
    perDealPrice: 30,
    features: [
      "Ideal for 5–20 deals per month",
      "Financial models completed by Clik Analysts",
      "All Asset Classes Included",
      "Advanced AI-driven insights",
      "Priority support",
      "Customers seeking hands-free financial modeling",
      "Teams looking to scale underwriting without hiring",
      "Clients requiring analyst expertise for deal accuracy",
    ],
    bestFor: [
      "Customers seeking hands-free financial modeling",
      "Teams looking to scale underwriting without hiring",
      "Clients requiring analyst expertise for deal accuracy",
      "Users balancing automation with professional support",
    ],
    cta: "Get Started",
    ribbon: "Most Popular",
  },
  {
    name: "Enterprise",
    description: "Complete Automation & Expert Support",
    price: "Custom Pricing",
    features: [
      "Unlimited self-created deals",
      "20 complementary Clik Analyst deals per month",
      "$30 per additional Clik Analyst underwriting",
      "Access to self-service data extraction tools",
      "Custom model integration with unlimited updates",
      "Excel Add-in to sync updates",
      "Comprehensive platform training",
      "All Asset Classes Included",
      "Dedicated account manager",
      "Custom API access for your business",
      "High-volume and complex underwriting",
      "Companies needing scalable, customizable solutions",
      "Power users combining automation and expert support",
    ],
    bestFor: [
      "High-volume and complex underwriting",
      "Companies needing scalable, customizable solutions",
      "Power users combining automation and expert support",
    ],
    cta: "Talk to Us",
  },
];

const featureComparison = [
  {
    feature: "AI-powered data extraction",
    selfService: true,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Financial modeling",
    selfService: "Basic",
    growth: "Advanced",
    enterprise: "Custom",
  },
  {
    feature: "Asset classes",
    selfService: "Multifamily only",
    growth: "All",
    enterprise: "All",
  },
  {
    feature: "Analyst support",
    selfService: false,
    growth: true,
    enterprise: true,
  },
  {
    feature: "API access",
    selfService: false,
    growth: false,
    enterprise: true,
  },
  {
    feature: "Custom integrations",
    selfService: false,
    growth: false,
    enterprise: true,
  },
  {
    feature: "Dedicated account manager",
    selfService: false,
    growth: false,
    enterprise: true,
  },
];

export function PricingSection() {
  // const [dealsPerMonth, setDealsPerMonth] = React.useState(10);
  // const [isYearly, setIsYearly] = React.useState(false);

  // const calculateYearlyPrice = (monthlyPrice: number) => {
  //   return (monthlyPrice * 10).toFixed(0);
  // };

  // const calculateSavings = (monthlyPrice: number) => {
  //   return (
  //     ((monthlyPrice * 12 - monthlyPrice * 10) / (monthlyPrice * 12)) *
  //     100
  //   ).toFixed(0);
  // };



  const [dealsPerMonth, setDealsPerMonth] = React.useState(10);
  const [isYearly, setIsYearly] = React.useState(false);

  const getHighlightedPlan = (deals: number) => {
    if (deals <= 4) return "Self-Service";
    if (deals <= 20) return "Growth";
    return "Enterprise";
  };

  const highlightedPlan = getHighlightedPlan(dealsPerMonth);

  const calculateYearlyPrice = (monthlyPrice: number) => {
    return (monthlyPrice * 10).toFixed(0);
  };

  const calculateSavings = (monthlyPrice: number) => {
    return (
      ((monthlyPrice * 12 - monthlyPrice * 10) / (monthlyPrice * 12)) *
      100
    ).toFixed(0);
  };

  return (
    <section
      id="pricing"
      className="pt-16 pb-24 relative overflow-hidden bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50"
    >
      {/* Abstract background pattern with curvy lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(37, 99, 235, 0.1)" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50"
            stroke="rgba(37, 99, 235, 0.2)"
            fill="none"
            strokeWidth="0.5"
          />
          <path
            d="M0,70 Q25,50 50,70 T100,70 T150,70 T200,70"
            stroke="rgba(37, 99, 235, 0.2)"
            fill="none"
            strokeWidth="0.5"
          />
          <path
            d="M0,30 Q25,50 50,30 T100,30 T150,30 T200,30"
            stroke="rgba(37, 99, 235, 0.2)"
            fill="none"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your business
          </p>
        </div>
        {/* Toggle for Monthly/Yearly Billing */}
        {/* <div className="flex items-center justify-center gap-3 mb-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <span className={`text-sm ${!isYearly ? "font-bold" : ""}`}>
              Monthly
            </span>
            <div>
              <input
                type="checkbox"
                checked={isYearly}
                onChange={handleToggle}
                className="sr-only"
              />
              <div
                className={`relative h-6 w-12 bg-gray-300 rounded-full transition ${
                  isYearly ? "bg-blue-600" : ""
                }`}
              >
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition ${
                    isYearly ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>
            <span className={`text-sm ${isYearly ? "font-bold" : ""}`}>
              Yearly <span className="text-green-600">(Save 17%)</span>
            </span>
          </label>
        </div> */}
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span
            className={`text-lg ${
              !isYearly ? "text-gray-900 font-bold" : "text-gray-600"
            }`}
          >
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="bg-blue-500 data-[state=checked]:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          />
          <span
            className={`text-lg ${
              isYearly ? "text-gray-900 font-bold" : "text-gray-600"
            }`}
          >
            Yearly{" "}
            <span className="text-green-600 text-base font-bold">
              (Save {calculateSavings(49)}%)
            </span>
          </span>
        </div>

        {/* Deals Slider */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-center mb-3 text-lg text-gray-700">
            I need{" "}
            <span className="font-bold text-blue-600">{dealsPerMonth}</span>{" "}
            deals per month
          </p>
          <div className="relative py-4">
            <Slider
              value={[dealsPerMonth]}
              onValueChange={(value) => setDealsPerMonth(value[0])}
              max={40}
              step={1}
              className="relative z-10 [&_.slider-track]:h-2 [&_.slider-track]:bg-gray-200 [&_.slider-range]:bg-blue-500 [&_.slider-thumb]:bg-blue-500 [&_.slider-thumb]:border-2 [&_.slider-thumb]:border-white"
            />
          </div>
          <div className="flex relative px-1 mt-2">
            {[0, 5, 10, 15 ,20, 25, 30, 35, 40].map((value) => (
              <div
                key={value}
                className="absolute text-sm text-gray-600"
                style={{
                  left: `${(value / 40) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <span
                  className={`${
                    value === dealsPerMonth ? "font-bold text-blue-600" : ""
                  }`}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden flex flex-col w-full border rounded-lg ${
                highlightedPlan === plan.name
                  ? "border-4 border-blue-500 shadow-lg bg-white scale-105"
                  : "border border-blue-200 bg-white/80"
              } transition-all duration-300 hover:shadow-xl backdrop-blur-sm mt-8`}
            >
              {/* Ribbon */}
              {plan.ribbon && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {plan.ribbon}
                </div>
              )}
              <div className="p-6 flex flex-col h-full">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {plan.name}
                </h3>
                {/* Description */}
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  {/* Price */}
                  {plan.monthlyPrice ? (
                    <div className="text-4xl font-bold text-gray-900">
                      $
                      {isYearly
                        ? calculateYearlyPrice(plan.monthlyPrice)
                        : plan.monthlyPrice}
                      <span className="text-xl font-normal text-gray-600">
                        /{isYearly ? "year" : "month"}
                      </span>
                      {plan.name === "Self-Service" && (
                        <span className="block text-lg font-normal text-green-600 mt-1">
                          during beta*
                        </span>
                      )}
                      {plan.perDealPrice && (
                        <span className="block text-lg font-normal text-gray-600 mt-1">
                          + ${plan.perDealPrice}/deal
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-gray-900">
                      {plan.price}
                    </div>
                  )}{" "}
                  {isYearly && plan.monthlyPrice && (
                    <p className="text-sm text-green-600 font-semibold mt-2">
                      Save {calculateSavings(plan.monthlyPrice)}%
                    </p>
                  )}
                </div>
                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Call-to-Action Button */}
                <Button
                  className={`w-full ${
                    highlightedPlan === plan.name
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white font-bold py-2 px-4 rounded transition duration-300`}
                >
                  {plan.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-16 max-w-4xl mx-auto bg-white/90 shadow-lg rounded-lg overflow-hidden backdrop-blur-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left text-gray-900">
                  Feature
                </TableHead>
                <TableHead className="text-center text-gray-900">
                  Self-Service
                </TableHead>
                <TableHead className="text-center text-gray-900">
                  Growth
                </TableHead>
                <TableHead className="text-center text-gray-900">
                  Enterprise
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {featureComparison.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-gray-700">
                    {item.feature}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof item.selfService === "boolean" ? (
                      item.selfService ? (
                        <Check className="inline-block text-green-500" />
                      ) : (
                        <X className="inline-block text-red-500" />
                      )
                    ) : (
                      <span className="text-gray-600">{item.selfService}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof item.growth === "boolean" ? (
                      item.growth ? (
                        <Check className="inline-block text-green-500" />
                      ) : (
                        <X className="inline-block text-red-500" />
                      )
                    ) : (
                      <span className="text-gray-600">{item.growth}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof item.enterprise === "boolean" ? (
                      item.enterprise ? (
                        <Check className="inline-block text-green-500" />
                      ) : (
                        <X className="inline-block text-red-500" />
                      )
                    ) : (
                      <span className="text-gray-600">{item.enterprise}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
