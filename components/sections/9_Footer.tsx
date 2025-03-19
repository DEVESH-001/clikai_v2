"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { CookiePreferencesPopup } from "../cookies/cookie-preference-popup";

// Main Footer component
export function Footer() {
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const handleOpenPreferences = () => {
    setIsPreferencesOpen(true);
  };

  const handleClosePreferences = () => {
    setIsPreferencesOpen(false);
  };

  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
  };

  return (
    <footer className="relative z-[1] bg-[#001F3F] pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-10 text-white">
      <div className="container mx-auto px-4">
        {/* Company information and newsletter signup */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 mb-8 sm:mb-10">
          {/* Left Side */}
          <div>
            <Link href="/" className="inline-block">
              <div className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Clik.ai
              </div>
            </Link>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 max-w-md">
              325 Front St W. Suite 400. Toronto, Ontario M5V 2Y1, CA
            </p>
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-300 mb-3 sm:mb-4">
              Subscribe to our Blogs
            </h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="text-xs sm:text-sm bg-white text-gray-800 rounded-[8px]"
              />
              <Button
                type="submit"
                className="text-xs sm:text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-[8px]"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Products Column */}
          <div className="text-left">
            <div
              className="flex items-center justify-between cursor-pointer sm:cursor-default mb-3 sm:mb-4"
              onClick={toggleProducts}
            >
              <h4 className="font-semibold text-sm md:text-base text-gray-300">
                Products
              </h4>
              <div className="sm:hidden">
                {productsOpen ? (
                  <ChevronUp className="h-4 w-4 text-gray-300" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-300" />
                )}
              </div>
            </div>
            <ul
              className={`space-y-2 sm:space-y-3 text-xs sm:text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                productsOpen
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 sm:max-h-96 sm:opacity-100"
              }`}
            >
              <li>
                <Link
                  href="/pages/products/autouw"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  AutoUW
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/products/InvestAssist"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  InvestAssist
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/products/SmartExtract"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  SmartExtract
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/products/clarity360"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  Clarity360
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column - Adjusted to be left and right aligned */}
          <div className="col-span-1 sm:col-span-2 flex flex-col">
            <div
              className="flex items-center justify-between cursor-pointer sm:cursor-default mb-3 sm:mb-4"
              onClick={toggleServices}
            >
              <h4 className="font-semibold text-sm md:text-base text-gray-300">
                Services
              </h4>
              <div className="sm:hidden">
                {servicesOpen ? (
                  <ChevronUp className="h-4 w-4 text-gray-300" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-300" />
                )}
              </div>
            </div>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-20 overflow-hidden transition-all duration-300 ease-in-out ${
                servicesOpen
                  ? "max-h-[800px] opacity-100"
                  : "max-h-0 opacity-0 sm:max-h-[800px] sm:opacity-100"
              }`}
            >
              {/* Left Services Column */}
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-left">
                <li>
                  <Link
                    href="/pages/services/LoanOrigination/underwritingDDS"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    Underwriting & Due Diligence Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/services/LoanOrigination/customFDM"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    Custom Financial Model Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/services/LoanOrigination/disbursement&PCNA"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    Disbursement & PCNA Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/services/Lease&DataAdministration/Abstraction&Audit"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    Lease Abstraction & Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/products/clarity360"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    Loan Document Data Digitisation
                  </Link>
                </li>
              </ul>
              {/* Right Services Column */}
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-left">
                <li>
                  <Link
                    href="/pages/services/Lease&DataAdministration/LoanOnboarding&DataDigitization"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    Loan Onboarding & Data Digitization
                  </Link>
                </li>

                <li>
                  <Link
                    href="/pages/services/ConsultingTech/salesforce"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    Salesforce Customisation & Integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/services/ConsultingTech/customRD"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    Custom Reporting & Dashboards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/services/ConsultingTech/creTech"
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    CRE Technology Consulting
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col text-left sm:ml-0 md:ml-20">
            <div
              className="flex items-center justify-between cursor-pointer sm:cursor-default mb-3 sm:mb-4"
              onClick={toggleResources}
            >
              <h4 className="font-semibold text-sm md:text-base text-gray-300">
                Resources
              </h4>
              <div className="sm:hidden">
                {resourcesOpen ? (
                  <ChevronUp className="h-4 w-4 text-gray-300" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-300" />
                )}
              </div>
            </div>
            <ul
              className={`space-y-2 sm:space-y-3 text-xs sm:text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                resourcesOpen
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 sm:max-h-96 sm:opacity-100"
              }`}
            >
              <li>
                <Link
                  href="https://clik-ai.gitbook.io/"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="https://clik-ai.gitbook.io/smart-extract-documentation/api-reference/"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="https://knowledgecenter.clik.ai/"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/security/"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/disclaimer"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
              {/* Bug Bounty */}
              {/* <li>
                <Link
                  href="/pages/bug-bounty"
                  className="text-gray-300 hover:text-blue-300"
                >
                  Bug Bounty
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <hr className="border-gray-300 opacity-30 mb-6 sm:mb-8" />
        {/* Copyright, legal links, and social media icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-300 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 mb-2 sm:mb-0">
            <Link
              href="/pages/privacy-policy/"
              className="hover:text-blue-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/pages/terms-and-conditions"
              className="hover:text-blue-300 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/pages/contact-us"
              className="text-gray-300 hover:text-blue-300 transition-colors"
            >
              Contact Us
            </Link>
            <button
              onClick={handleOpenPreferences}
              className="hover:text-blue-300 transition-colors"
            >
              Cookie Preferences
            </button>
          </div>

          <div className="flex items-center justify-center gap-5 my-4 sm:my-0">
            {[
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/company/cliktechnologies/",
                name: "LinkedIn",
              },
              {
                Icon: Facebook,
                href: "https://www.facebook.com/Cliktechnologies",
                name: "Facebook",
              },
              {
                Icon: Twitter,
                href: "https://x.com/clik_ai",
                name: "Twitter",
              },
              {
                Icon: Youtube,
                href: "https://vimeo.com/user145765890",
                name: "YouTube",
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-300 transition-colors"
                aria-label={social.name}
              >
                <social.Icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <div className="text-center sm:text-right pt-2 sm:pt-0">
            © 2025 Clik.ai. All rights reserved
          </div>
        </div>
      </div>
      <CookiePreferencesPopup
        isOpen={isPreferencesOpen}
        onClose={handleClosePreferences}
      />
    </footer>
  );
}

