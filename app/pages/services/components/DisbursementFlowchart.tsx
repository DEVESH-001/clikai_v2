"use client";

import type React from "react";
import { motion } from "framer-motion";

interface FlowchartBoxProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  step?: number;
}

const FlowchartBox = ({
  children,
  className = "",
  delay = 0,
  step,
}: FlowchartBoxProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`relative bg-[#4B85C7] text-white text-xs md:text-base px-4 py-2 rounded-md ${className}`}
  >
    {step && (
      <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">
        {step}
      </div>
    )}
    {children}
  </motion.div>
);

const ConnectingLine = ({ className = "" }: { className?: string }) => (
  <div className={`bg-[#4B85C7]/30 ${className}`} />
);

export function DisbursementFlowchart() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Title Section */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-[#4B85C7] text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Replacement Reserve Loan Examples
        </h2>
      </div>

      {/* Main Flowchart */}
      <div className="space-y-4 md:space-y-8">
        {/* Loan Types Section */}
        <div className="relative">
          <FlowchartBox className="w-full text-center mb-4 md:mb-8" delay={0.1}>
            Replacement Reserve Loan Examples
          </FlowchartBox>

          {/* Loan Categories with Connecting Lines */}
          <div className="relative">
            {/* Vertical line from top box */}
            <ConnectingLine className="absolute top-0 left-1/2 w-0.5 h-4 md:h-8 -translate-x-1/2" />

            {/* Horizontal line connecting all categories */}
            <ConnectingLine className="absolute top-4 md:top-8 left-1/4 w-1/2 h-0.5" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16 mb-4 md:mb-8">
              {["FANNIE MAE", "FREDDIE MAC", "HUD 232/232(i)"].map(
                (text, index) => (
                  <div key={text} className="relative">
                    {/* Vertical lines to subcategories */}
                    <ConnectingLine className="absolute bottom-0 left-1/2 w-0.5 h-4 md:h-8 translate-y-full -translate-x-1/2" />
                    <FlowchartBox
                      className="text-center"
                      delay={0.2 + index * 0.1}
                    >
                      {text}
                    </FlowchartBox>
                  </div>
                )
              )}
            </div>

            {/* Sub Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16">
              <FlowchartBox className="text-center" delay={0.3}>
                Replacement Reserve
              </FlowchartBox>
              <FlowchartBox className="text-center" delay={0.4}>
                Completion Repair
              </FlowchartBox>
              <FlowchartBox className="text-center" delay={0.5}>
                FHA - LEAN
              </FlowchartBox>
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
          {/* Main Process Steps */}
          <div className="bg-blue-50/50 p-3 rounded-lg self-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-6 md:mt-12">
              {[
                "Disbursement Form Package Checklist",
                "Reserve Disbursement",
                "OFAC Searches",
              ].map((text, index) => (
                <FlowchartBox
                  key={text}
                  delay={0.4 + index * 0.1}
                  step={index + 1}
                >
                  {text}
                </FlowchartBox>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
              {[
                "ACH/Wire Form & Information Searches",
                "Disbursement Worksheet",
                "Exception / Denial Form",
                "Reserve Schedule",
                "All Proofs/Liens",
                "Final Approval and Funds",
              ].map((text, index) => (
                <FlowchartBox
                  key={text}
                  delay={0.7 + index * 0.1}
                  step={index + 4}
                  className="min-h-[4rem] md:min-h-[5rem]"
                >
                  {text}
                </FlowchartBox>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="bg-blue-50/50 p-3 rounded-lg">
            <h3 className="text-[#4B85C7] font-semibold mb-1 text-sm md:text-base">
              Required Documents
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Borrower Worksheet with Borrower Certification",
                "Disbursement Request Form - Exhibit A",
                "All contracts, invoices, work orders & proof of payments",
                "Lien Waiver",
                "ACH / Wire Authorisation Form with Info.",
                "RR Schedule / Template",
              ].map((text, index) => (
                <FlowchartBox key={text} delay={0.6 + index * 0.1}>
                  {text}
                </FlowchartBox>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
