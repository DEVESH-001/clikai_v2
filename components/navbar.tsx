"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { imageUrls } from "@/utils/imageUrls";
import { usePathname, useRouter } from "next/navigation";

const navItemClass =
  "tracking-wider text-sm uppercase font-medium  hover:text-gray-900";

const products = [
  {
    title: "Financial Modeling Suite",
    description: "The ultimate tools for financial performance and analysis",
    items: [
      {
        title: "AutoUW",
        description: "Streamlined underwriting automation",
        href: "/products/autouw",
      },
      {
        title: "InvestAssist",
        description: "Manage investments and syndications with ease",
        href: "/products/InvestAssist",
      },
      {
        title: "SmartExtract",
        description: "API solution for OS/RR Digitisation at Scale",
        href: "/products/SmartExtract",
      },
    ],
  },
  {
    title: "Precision Data Suite",
    description: "Cutting-edge tools for CRE document analysis",
    items: [
      {
        title: "Clarity360 OM",
        description: "Efficient Offering Memorandum extraction",
        href: "/products/clarity360-om",
      },
      {
        title: "Clarity360 Appraisals",
        description: "Fast and accurate appraisal data analysis",
        href: "/products/clarity360-appraisals",
      },
      {
        title: "Clarity360 Insurance",
        description: "Simplified insurance document digitization",
        href: "/products/clarity360-insurance",
      },
    ],
  },
];

const services = [
  {
    title: "Loan Servicing & Administration",
    description: "Comprehensive loan management and administrative solutions",
    items: [
      {
        title: "Financial Services & Analysis (FSA)",
        description: "Expert financial analysis and reporting services",
        href: "/services/loan-servicing/fsa",
      },
      {
        title: "Disbursement & PCNA Support",
        description: "Streamlined disbursement and PCNA processing",
        href: "/services/loan-servicing/disbursement",
      },
      {
        title: "Loan On Boarding",
        description: "Seamless migration of historical data",
        href: "/services/loan-servicing/data-migration",
      },
    ],
  },
  {
    title: "Deal Underwriting & Financial Modeling",
    description: "Advanced financial modeling and underwriting solutions",
    items: [
      {
        title: "Cash Flow Modeling & Rent Roll Analysis",
        description: "Detailed cash flow projections and rent roll insights",
        href: "/services/underwriting/cash-flow-modeling",
      },
      {
        title: "Underwriting & Due Diligence Support",
        description: "Comprehensive due diligence and risk assessment",
        href: "/services/underwriting/due-diligence",
      },
      {
        title: "Custom Financial Model Development",
        description: "Tailored financial models for your specific needs",
        href: "/services/DealUnderwriting/CustomFinancialModelDevelopment",
      },
    ],
  },
  {
    title: "Lease & Data Administration",
    description: "Efficient lease management and data processing",
    items: [
      {
        title: "Lease Abstraction & Audit",
        description: "Detailed lease analysis and verification",
        href: "/services/lease-admin/abstraction",
      },
      {
        title: "Appraisal & OM Data Digitization",
        description: "Convert physical documents into digital format",
        href: "/services/lease-admin/digitization",
      },
      {
        title: "Legacy Data Migration",
        description: "Secure transfer of historical lease data",
        href: "/services/lease-admin/migration",
      },
    ],
  },
  {
    title: "Consulting & Technology Solutions",
    description: "Expert consulting and custom technology implementation",
    items: [
      {
        title: "Salesforce Customisation & Integration",
        description: "Tailored Salesforce solutions for your business",
        href: "/services/Consulting/salesforce-customization",
      },
      {
        title: "Custom Reporting & Dashboards",
        description: "Bespoke reporting solutions and analytics",
        href: "/services/Consulting/custom-reporting-dashboards",
      },
      {
        title: "CRE Technology Consulting",
        description: "Strategic technology guidance for CRE",
        href: "/services/Consulting/cre-technology-consulting",
      },
    ],
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToPricing = async (e: React.MouseEvent) => {
    e.preventDefault();

    // navigate to pricing if not on home page
    if (pathname !== "/") {
      router.push("/#pricing");
      return;
    }

    // navigate to pricing if on home page
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm w-full ">
        {/* <div className="container mx-auto px-4 flex h-16 items-center justify-between"> */}
        <div className=" mx-auto px-8 flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={imageUrls.logo || "/placeholder.svg"}
              alt="Clik.ai Logo"
              width={120}
              height={36}
              className="mr-4"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center text-black ">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6 ">
                <NavigationMenuItem value="products">
                  <NavigationMenuTrigger
                    className={`${navItemClass} bg-transparent hover:bg-transparent text-black`}
                  >
                    PRODUCTS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-4 md:p-6 bg-white ">
                      <div className="grid grid-cols-2 gap-4 bg-white ">
                        {products.map((category) => (
                          <div key={category.title} className="space-y-2">
                            <h3 className="text-lg font-semibold text-blue-600">
                              {category.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {category.description}
                            </p>
                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item.title}>
                                  <Link
                                    href={item.href}
                                    className="group flex items-center p-2 rounded-md hover:bg-blue-50 transition-colors"
                                  >
                                    <div>
                                      <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                        {item.title}
                                      </div>
                                      <p className="text-xs text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                    <ChevronRight className="ml-auto w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem value="services">
                  <NavigationMenuTrigger
                    className={`${navItemClass} bg-transparent hover:bg-transparent text-black`}
                  >
                    SERVICES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-4 md:p-6 bg-white">
                      <div className="grid grid-cols-2 gap-6 bg-white">
                        {services.map((category) => (
                          <div key={category.title} className="space-y-2">
                            <h3 className="text-lg font-semibold text-blue-600">
                              {category.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {category.description}
                            </p>
                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item.title}>
                                  <Link
                                    href={item.href}
                                    className="group flex items-center p-2 rounded-md hover:bg-blue-50 transition-colors"
                                  >
                                    <div>
                                      <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                        {item.title}
                                      </div>
                                      <p className="text-xs text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                    <ChevronRight className="ml-auto w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem >
                  <Link
                    href="#pricing"
                    legacyBehavior
                    passHref
                    className="text-black"
                  >
                    <NavigationMenuLink
                      className={`${navItemClass} bg-transparent hover:bg-transparent `}
                      onClick={scrollToPricing}
                    >
                      PRICING
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/why-clik-ai" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navItemClass} bg-transparent hover:bg-transparent `}
                    >
                      WHY CLIK.AI
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions - Aligned with container */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className={`${navItemClass} hover:text-gray-900 text-black`}
            >
              SIGN IN
            </Link>
            <Link href="/get-started">
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-[8px] uppercase font-medium tracking-wider text-sm text-white px-6">
                GET STARTED
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-16 left-0 right-0 bg-white z-50 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {/* Products Dropdown */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className={`flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md ${navItemClass}`}
                >
                  PRODUCTS
                  <ChevronRight
                    className={`w-4 h-4 transform transition-transform ${
                      mobileProductsOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4"
                    >
                      {products.map((category) => (
                        <div key={category.title} className="py-2">
                          <h3 className="text-sm font-semibold text-blue-600 px-3 py-1">
                            {category.title}
                          </h3>
                          {category.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md ${navItemClass}`}
                >
                  SERVICES
                  <ChevronRight
                    className={`w-4 h-4 transform transition-transform ${
                      mobileServicesOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4"
                    >
                      {services.map((category) => (
                        <div key={category.title} className="py-2">
                          <h3 className="text-sm font-semibold text-blue-600 px-3 py-1">
                            {category.title}
                          </h3>
                          {category.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href="/why-clik-ai"
                className={`block px-3 py-2 text-black hover:bg-gray-50 rounded-md ${navItemClass}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                WHY CLIK.AI
              </Link>

              <Link
                href="#pricing"
                onClick={(e) => {
                  scrollToPricing(e);
                  setMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 text-black hover:bg-gray-50 rounded-md ${navItemClass}`}
              >
                PRICING
              </Link>

              <div className="border-t border-gray-200 pt-4 pb-3">
                <Link
                  href="/login"
                  className={`block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md ${navItemClass}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SIGN IN
                </Link>
                <Link
                  href="/get-started"
                  className={`block px-3 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md mt-2 text-center ${navItemClass}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
