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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { imageUrls } from "@/utils/imageUrls";

const navItemClass = "tracking-wider text-sm uppercase font-medium";

// Updated Products structure
const products = [
  {
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
      {
        title: "Clarity360 ",
        description: "Cutting-edge tools for CRE document analysis",
        href: "/products/clarity360",
      },
    ],
  },
];

// Updated Services Menu
const services = [
  {
    title: "Loan Origination & Servicing",
    // description: "Comprehensive loan management and administrative solutions",
    items: [
      {
        title: "Underwriting & Due Diligence Support",
        description: "Expert financial analysis and reporting services",
        href: "/services/LoanOrigination/underwritingDDS",
      },
      {
        title: "Custom Financial Model Development",
        description: "Seamless migration of historical data",
        href: "/services/LoanOrigination/customFDM",
      },
      {
        title: "Disbursement & PCNA Support",
        description: "Streamlined disbursement and PCNA processing",
        href: "/services/LoanOrigination/disbursement&PCNA",
      },
    ],
  },

  {
    title: "Lease & Data Administration",
    items: [
      {
        title: "Lease Abstraction & Audit",
        description: "Detailed lease analysis and verification",
      },
      {
        title: "Appraisal & OM Data Digitization",
        description: "Convert physical documents into digital format",
      },
      {
        title: "Loan Onboarding & Data Digitization",
        description: "Secure transfer of historical lease data",
        href: "/services/Lease&DataAdministration/LoanOnboarding&DataDigitization",
      },
    ],
  },
  {
    title: "Consulting & Technology Solutions",
    items: [
      {
        title: "Salesforce Customisation & Integration",
        description: "Tailored Salesforce solutions for your business",
        href: "/services/ConsultingTech/salesforce",
      },
      {
        title: "Custom Reporting & Dashboards",
        description: "Bespoke reporting solutions and analytics",
        href: "/services/ConsultingTech/customRD",
      },
      {
        title: "CRE Technology Consulting",
        description: "Strategic technology guidance for CRE",
        href: "/services/ConsultingTech/creTech",
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

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        {/* Update container class for consistent padding */}
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={imageUrls.logo || "/placeholder.svg"}
                alt="Clik.ai Logo"
                width={100}
                height={80}
                priority
                className=" h-8 sm:h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavigationMenu className="hidden lg:flex flex-1 justify-center">
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem value="products">
                  <NavigationMenuTrigger className={navItemClass}>
                    PRODUCTS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[330px] p-2 md:p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {products.map((category) => (
                          <>
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
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem value="services">
                  <NavigationMenuTrigger className={navItemClass}>
                    SERVICES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-4 md:p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {services.map((category) => (
                          <div key={category.title} className="space-y-2">
                            <h3 className="text-lg font-semibold text-blue-600">
                              {category.title}
                            </h3>
                            {/* <p className="text-sm text-gray-600 mb-2">
                              {category.description}
                            </p> */}
                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item.title}>
                                  <Link
                                    href={item.href || "#"}
                                    className="group flex items-center justify-between p-2 rounded-md hover:bg-blue-50 transition-colors"
                                  >
                                    <div>
                                      <div className="text-sm font-medium text-gray-900">
                                        {item.title}
                                      </div>
                                      <p className="text-xs text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
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

                <NavigationMenuItem>
                  <Link href="/#pricing" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} ${navItemClass}`}
                    >
                      PRICING
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/why-clik-ai" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} ${navItemClass}`}
                    >
                      WHY CLIK.AI
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className={`${navigationMenuTriggerStyle()} ${navItemClass}`}
            >
              SIGN IN
            </Link>
            <Link href="/get-started">
              <Button
                className={`bg-blue-600 text-white hover:bg-blue-700 ${navItemClass}`}
              >
                GET STARTED
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-16 left-0 right-0 bg-white z-50 shadow-lg max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <div className="relative">
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className={`flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md ${navItemClass}`}
                >
                  PRODUCTS
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileProductsOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {products.map((category) => (
                      <>
                        {category.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md ${navItemClass}`}
                >
                  SERVICES
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 mt-2 space-y-4">
                    {services.map((category) => (
                      <div key={category.title} className="mb-4">
                        <h3 className="text-sm font-semibold text-blue-600 mb-1">
                          {category.title}
                        </h3>
                        {/* <p className="text-xs text-gray-600 mb-2">
                          {category.description}
                        </p> */}
                        {category.items.map((item) => (
                          <div key={item.title} className="mb-2">
                            <Link
                              href={item.href || "#"}
                              className="block px-3 py-2 text-sm text-gray-900 hover:text-blue-600"
                            >
                              <div className="font-medium">{item.title}</div>
                              <p className="text-xs text-gray-500">
                                {item.description}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/#pricing"
                className={`block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md ${navItemClass}`}
              >
                PRICING
              </Link>
              <Link
                href="/why-clik-ai"
                className={`block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md ${navItemClass}`}
              >
                WHY CLIK.AI
              </Link>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <Link
                  href="/login"
                  className={`block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md ${navItemClass}`}
                >
                  SIGN IN
                </Link>
                <Link
                  href="/get-started"
                  className={`block px-3 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md mt-2 ${navItemClass}`}
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
