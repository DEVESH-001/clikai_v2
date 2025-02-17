"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Linkedin, Facebook, Twitter, Youtube } from "lucide-react";

interface FooterProps {
  onOpenCookiePreferences: () => void;
}

// Main Footer component
export function Footer({ onOpenCookiePreferences }: FooterProps) {
  return (
    <footer className="relative z-[1] bg-[#001F3F] pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 text-white">
      <div className="container mx-auto px-4">
        {/* Company information and newsletter signup */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left Side */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white">
              <div className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Clik.ai
              </div>
            </Link>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4">
              325 Front St W. Suite 400. Toronto, Ontario M5V 2Y1, CA
            </p>
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-300 mb-3 sm:mb-4">
              Subscribe to our Blogs
            </h3>
            <form className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="mr-2 text-xs sm:text-sm bg-white text-gray-800 rounded-[8px]"
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
          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base text-gray-300 text-center sm:text-left">
              Products
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-center sm:text-left">
              <li>
                <Link
                  href="/products/autouw"
                  className="text-gray-300 hover:text-blue-300"
                >
                  AutoUW
                </Link>
              </li>
              <li>
                <Link
                  href="/products/InvestAssist"
                  className="text-gray-300 hover:text-blue-300"
                >
                  InvestAssist
                </Link>
              </li>
              <li>
                <Link
                  href="/products/SmartExtract"
                  className="text-gray-300 hover:text-blue-300"
                >
                  SmartExtract
                </Link>
              </li>
              <li>
                <Link
                  href="/products/clarity360"
                  className="text-gray-300 hover:text-blue-300"
                >
                  Clarity360
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column - Adjusted to be left and right aligned */}
          <div className="col-span-1 sm:col-span-2 flex flex-col">
            <h4 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base text-gray-300 text-center">
              Services
            </h4>
            <div className="grid grid-cols-2 gap-x-20">
              {/* Left Services Column */}
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-left">
                <li>
                  <Link
                    href="/services/LoanOrigination/underwritingDDS"
                    className="text-gray-300 hover:text-blue-300"
                  >
                    Underwriting & Due Diligence Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/LoanOrigination/customFDM"
                    className="text-gray-300 hover:text-blue-300"
                  >
                    Custom Financial Model Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/LoanOrigination/disbursement&PCNA"
                    className="text-gray-300 hover:text-blue-300"
                  >
                    Disbursement & PCNA Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/Lease&DataAdministration/Abstraction&Audit"
                    className="text-gray-300 hover:text-blue-300"
                  >
                    Lease Abstraction & Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/clarity360"
                    className="text-gray-300 hover:text-blue-300"
                  >
                    Loan Document Data Digitisation
                  </Link>
                </li>
              </ul>
              {/* Right Services Column */}
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-left">
                <li>
                  <Link
                    href="/services/Lease&DataAdministration/LoanOnboarding&DataDigitization"
                    className="text-gray-300 hover:text-blue-300"
                  >
                    Loan Onboarding & Data Digitization
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/ConsultingTech/salesforce"
                    className="text-gray-300 hover:text-blue-300"
                  >
                    Salesforce Customisation & Integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ConsultingTech/customRD"
                    className="text-gray-300 hover:text-blue-300"
                  >
                    Custom Reporting & Dashboards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ConsultingTech/creTech"
                    className="text-gray-300 hover:text-blue-300"
                  >
                    CRE Technology Consulting
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col sm:ml-20">
            <h4 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base text-gray-300 text-left">
              Resources
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-left">
              <li>
                <Link
                  href="https://clik-ai.gitbook.io/"
                  className="text-gray-300 hover:text-blue-300"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="https://clik-ai.gitbook.io/smart-extract-documentation/api-reference/"
                  className="text-gray-300 hover:text-blue-300"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="https://knowledgecenter.clik.ai/"
                  className="text-gray-300 hover:text-blue-300"
                >
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-blue-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-300 mb-6 sm:mb-8" />
        {/* Copyright, legal links, and social media icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-300">
          <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 mb-2 sm:mb-0">
            <Link href="/privacy-policy" className="hover:text-blue-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-blue-300">
              Terms & Conditions
            </Link>
            <Link
              href="/about-us"
              className="text-gray-300 hover:text-blue-300"
            >
              Contact Us
            </Link>
            <button
              onClick={onOpenCookiePreferences}
              className="hover:text-blue-300"
            >
              Cookie Preferences
            </button>
          </div>
          <div className="flex items-center space-x-4">
            {[
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/company/clik-ai",
                name: "LinkedIn",
              },
              {
                Icon: Facebook,
                href: "https://www.facebook.com/clik.ai",
                name: "Facebook",
              },
              {
                Icon: Twitter,
                href: "https://twitter.com/clik_ai",
                name: "Twitter",
              },
              {
                Icon: Youtube,
                href: "https://www.youtube.com/channel/UCxxxxxxxx",
                name: "YouTube",
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-300"
                aria-label={social.name}
              >
                <social.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div>© 2025 Clik.ai. All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}
