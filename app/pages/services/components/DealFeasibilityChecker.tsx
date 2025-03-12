"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GeistSans } from "geist/font/sans"

import DetailedUnderwritingRequestDialog from "./DetailedUnderwritingRequestDialog"
import ResultsDialog from "./ResultsDialog"
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from "@/lib/file-validation"

const DealFeasibilityChecker = () => {
  const [email, setEmail] = useState("")
  const [operatingStatementFile, setOperatingStatementFile] = useState<File | null>(null)
  const [rentRollFile, setRentRollFile] = useState<File | null>(null)
  const [documentType, setDocumentType] = useState("")
  const [fileError, setFileError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Client-side file validation
  const validateFileClient = (file: File): boolean => {
    setFileError(null)

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      setFileError(`File size exceeds the maximum allowed size of ${MAX_FILE_SIZE / (1024 * 1024)}MB`)
      return false
    }

    // Check file type
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setFileError(`File type ${file.type} is not allowed. Allowed types: PDF, Excel`)
      return false
    }

    // Check file name for suspicious patterns
    const fileName = file.name.toLowerCase()
    const suspiciousPatterns = [".exe", ".js", ".php", ".asp", ".aspx", ".jsp", ".cgi", ".bat", ".cmd", ".sh"]

    if (suspiciousPatterns.some((pattern) => fileName.includes(pattern))) {
      setFileError("File name contains suspicious patterns")
      return false
    }

    return true
  }

  const handleOperatingStatementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (validateFileClient(file)) {
        setOperatingStatementFile(file)
      } else {
        e.target.value = ""
        setOperatingStatementFile(null)
      }
    }
  }

  const handleRentRollChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (validateFileClient(file)) {
        setRentRollFile(file)
      } else {
        e.target.value = ""
        setRentRollFile(null)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFileError(null)

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setFileError("Invalid email format")
      return
    }

    if (!operatingStatementFile || !rentRollFile || !email || !documentType) {
      setFileError("Please provide all required fields")
      return
    }

    setIsSubmitting(true)

    const formData = new FormData()
    formData.append("email", email)
    formData.append("documentType", documentType)
    formData.append("operatingStatementFile", operatingStatementFile)
    formData.append("rentRollFile", rentRollFile)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()
      if (result.success) {
        alert("Email sent successfully!")
        // Reset form
        setEmail("")
        setDocumentType("")
        setOperatingStatementFile(null)
        setRentRollFile(null)
        // Reset file inputs
        const fileInputs = document.querySelectorAll('input[type="file"]')
        fileInputs.forEach((input: Element) => {
          if (input instanceof HTMLInputElement) {
            input.value = ""
          }
        })
      } else {
        setFileError(`Error: ${result.error}`)
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setFileError("Failed to send email. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }
  const [noi, setNoi] = useState(1000000)
  const [dscr, setDscr] = useState(1.25)
  const [ltv, setLtv] = useState(75)
  const [interestRate, setInterestRate] = useState(6.5)
  const [capRate, setCapRate] = useState(6)
  const [holdPeriod, setHoldPeriod] = useState(5)
  const [exitStrategy, setExitStrategy] = useState("Sell")
  const [underwritingScore, setUnderwritingScore] = useState(0)
  const [riskFlags, setRiskFlags] = useState([])
  const [bestLenderFit, setBestLenderFit] = useState("")
  const [suggestedAdjustments, setSuggestedAdjustments] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [showDetailedRequest, setShowDetailedRequest] = useState(false)

  useEffect(() => {
    analyzeRisk()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Only re-run analyzeRisk when the component mounts

  const analyzeRisk = () => {
    let score = 0
    const flags = []
    let lenderFit = ""
    let adjustments = ""

    // Underwriting Score calculation (more granular)
    if (dscr >= 1.5) score += 30
    else if (dscr >= 1.35) score += 25
    else if (dscr >= 1.25) score += 20
    else if (dscr >= 1.15) score += 15
    else if (dscr >= 1.05) score += 10
    else score += 5

    if (ltv <= 55) score += 30
    else if (ltv <= 65) score += 25
    else if (ltv <= 75) score += 20
    else if (ltv <= 80) score += 15
    else if (ltv <= 85) score += 10
    else score += 5

    if (capRate >= 8) score += 30
    else if (capRate >= 7) score += 25
    else if (capRate >= 6) score += 20
    else if (capRate >= 5) score += 15
    else if (capRate >= 4) score += 10
    else score += 5

    if (interestRate <= 4) score += 30
    else if (interestRate <= 5) score += 25
    else if (interestRate <= 6) score += 20
    else if (interestRate <= 7) score += 15
    else if (interestRate <= 8) score += 10
    else score += 5

    // Additional factors
    if (holdPeriod >= 7) score += 10
    else if (holdPeriod >= 5) score += 7
    else if (holdPeriod >= 3) score += 5
    else score += 3

    if (exitStrategy === "Sell") score += 5
    else score += 3

    // Risk Flags (more detailed)
    if (dscr < 1.1) {
      flags.push({
        type: "high",
        message: "Critical DSCR: High risk of default. Immediate action required.",
      })
    } else if (dscr < 1.2) {
      flags.push({
        type: "high",
        message: "Low DSCR: Significant default risk. Consider increasing NOI or reducing debt.",
      })
    } else if (dscr < 1.25) {
      flags.push({
        type: "medium",
        message: "DSCR below 1.25: Moderate default risk. Monitor closely.",
      })
    } else if (dscr < 1.35) {
      flags.push({
        type: "low",
        message: "DSCR below 1.35: Slight risk. Consider strategies to improve cash flow.",
      })
    }

    if (ltv > 85) {
      flags.push({
        type: "high",
        message: "Extremely High LTV: Very high financing risk. Reconsider deal structure.",
      })
    } else if (ltv > 80) {
      flags.push({
        type: "high",
        message: "High LTV: Increased financing risk. Explore ways to reduce loan amount.",
      })
    } else if (ltv > 75) {
      flags.push({
        type: "medium",
        message: "LTV above 75%: Moderate risk. Consider strategies to improve equity position.",
      })
    } else if (ltv > 70) {
      flags.push({
        type: "low",
        message: "LTV above 70%: Slight risk. Monitor market conditions closely.",
      })
    }

    if (capRate < 4) {
      flags.push({
        type: "high",
        message: "Extremely Low Cap Rate: High risk of overvaluation. Reassess investment viability.",
      })
    } else if (capRate < 5) {
      flags.push({
        type: "high",
        message: "Low Cap Rate: Potential overvaluation. Verify market conditions and growth potential.",
      })
    } else if (capRate < 6) {
      flags.push({
        type: "medium",
        message: "Cap Rate below 6%: Moderate risk. Ensure strong market fundamentals and growth prospects.",
      })
    } else if (capRate < 7) {
      flags.push({
        type: "low",
        message: "Cap Rate below 7%: Slight risk. Compare to market averages for the property type and location.",
      })
    }

    if (interestRate > 8) {
      flags.push({
        type: "high",
        message: "Very High Interest Rate: Significant debt service burden. Explore refinancing options urgently.",
      })
    } else if (interestRate > 7) {
      flags.push({
        type: "high",
        message: "High Interest Rate: Increased debt service burden. Consider rate negotiation or hedging strategies.",
      })
    } else if (interestRate > 6) {
      flags.push({
        type: "medium",
        message: "Interest Rate above 6%: Moderate risk. Evaluate fixed-rate options or interest rate swaps.",
      })
    } else if (interestRate > 5) {
      flags.push({
        type: "low",
        message: "Interest Rate above 5%: Slight risk. Monitor rate trends and consider locking in current rate.",
      })
    }

    if (holdPeriod < 3) {
      flags.push({
        type: "medium",
        message: "Short Hold Period: Increased market timing risk. Ensure robust exit strategy.",
      })
    }

    // Best Lender Fit (more nuanced)
    if (ltv <= 60 && dscr >= 1.4) {
      lenderFit = "Traditional Bank (Excellent Terms)"
    } else if (ltv <= 65 && dscr >= 1.3) {
      lenderFit = "Traditional Bank (Favorable Terms)"
    } else if (ltv <= 70 && dscr >= 1.25) {
      lenderFit = "Agency (Fannie Mae/Freddie Mac)"
    } else if (ltv <= 75 && dscr >= 1.2) {
      lenderFit = "CMBS"
    } else if (ltv <= 80 && dscr >= 1.1) {
      lenderFit = "Debt Fund"
    } else {
      lenderFit = "Bridge Loan / Hard Money Lender"
    }

    // Suggested Adjustments (more detailed)
    if (dscr < 1.25) {
      adjustments += "Increase NOI through operational improvements or reduce loan amount to improve DSCR. "
    }
    if (ltv > 75) {
      adjustments +=
        "Explore options to increase equity contribution or negotiate a lower purchase price to reduce LTV. "
    }
    if (capRate < 6) {
      adjustments +=
        "Conduct a thorough market analysis to justify valuation. Consider properties with higher cap rates or value-add opportunities. "
    }
    if (interestRate > 6) {
      adjustments += "Shop for better loan terms, consider a rate lock, or explore interest rate hedging strategies. "
    }
    if (holdPeriod < 5) {
      adjustments +=
        "Evaluate potential for a longer hold period to mitigate short-term market risks and capitalize on property improvements. "
    }
    if (exitStrategy === "Refinance" && ltv > 70) {
      adjustments +=
        "For a refinance exit, focus on rapid equity build-up or property value appreciation to improve refinancing terms. "
    }

    setUnderwritingScore(score)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setRiskFlags(flags)
    setBestLenderFit(lenderFit)
    setSuggestedAdjustments(adjustments)
  }

  return (
    <Card
      className={`w-full max-w-xl mx-auto mt-32 sm:mt-24 md:mt-16 ${GeistSans.className} bg-white shadow-lg rounded-lg`}
    >
      <CardHeader className="bg-blue-600/20 py-4 rounded-t-lg">
        <CardTitle className="text-lg font-bold text-center text-blue-900">Deal Feasibility & Risk Checker</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="noi" className="text-gray-700">
                  Net Operating Income (NOI)
                </Label>
                <Input
                  id="noi"
                  type="text"
                  value={noi.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "")
                    setNoi(Number(value))
                    analyzeRisk()
                  }}
                  className="text-sm text-gray-700"
                />
              </div>
              <div>
                <Label htmlFor="ltv" className="text-gray-700">
                  Loan-to-Value (LTV) Ratio
                </Label>
                <Input
                  id="ltv"
                  type="number"
                  value={ltv}
                  onChange={(e) => {
                    setLtv(Number(e.target.value))
                    analyzeRisk()
                  }}
                  className="text-sm text-gray-700"
                />
              </div>
              <div>
                <Label htmlFor="capRate" className="text-gray-700">
                  Cap Rate (%)
                </Label>
                <Input
                  id="capRate"
                  type="number"
                  value={capRate}
                  onChange={(e) => {
                    setCapRate(Number(e.target.value))
                    analyzeRisk()
                  }}
                  className="text-sm text-gray-700"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="dscr" className="text-gray-700">
                  Debt Service Coverage Ratio (DSCR)
                </Label>
                <Slider
                  id="dscr"
                  min={0.8}
                  max={2.0}
                  step={0.01}
                  value={[dscr]}
                  onValueChange={(value) => {
                    setDscr(value[0])
                    analyzeRisk()
                  }}
                  className="mt-2"
                />
                <div className="text-xs text-gray-500 mt-1">{dscr.toFixed(2)}</div>
              </div>
              <div>
                <Label htmlFor="interestRate" className="text-gray-700">
                  Interest Rate (%)
                </Label>
                <Select
                  value={interestRate.toString()}
                  onValueChange={(value) => {
                    setInterestRate(Number(value))
                    analyzeRisk()
                  }}
                >
                  <SelectTrigger className="text-sm text-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0].map((rate) => (
                      <SelectItem key={rate} value={rate.toString()}>
                        {rate.toFixed(1)}%
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="holdPeriod" className="text-gray-700">
                  Hold Period (Years)
                </Label>
                <Select
                  value={holdPeriod.toString()}
                  onValueChange={(value) => {
                    setHoldPeriod(Number(value))
                    analyzeRisk()
                  }}
                >
                  <SelectTrigger className="text-sm text-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="flex items-end space-x-4">
            <div className="flex-grow">
              <Label htmlFor="exitStrategy" className="text-gray-700">
                Exit Strategy
              </Label>
              <Select
                value={exitStrategy}
                onValueChange={(value) => {
                  setExitStrategy(value)
                  analyzeRisk()
                }}
              >
                <SelectTrigger className="text-sm text-gray-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Refinance">Refinance</SelectItem>
                  <SelectItem value="Sell">Sell</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              className={`text-sm ${GeistSans.className} bg-blue-600 hover:bg-blue-700 text-white`}
              onClick={() => setShowResults(true)}
            >
              View Results
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-8 border-t pt-6">
          {fileError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{fileError}</span>
            </div>
          )}
          <div className="space-y-2">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                placeholder="yourmail@gmail.com"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="documentType" className="block text-gray-700 font-medium ">
                Full Name
              </label>
              <input
                placeholder="John Doe"
                type="text"
                id="documentType"
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="operatingStatementFile" className="block text-blue-700 font-medium mb-1">
                Operating Statement
              </label>
              <input
                type="file"
                id="operatingStatementFile"
                accept=".pdf, .xls, .xlsx"
                onChange={handleOperatingStatementChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Allowed formats: PDF, Excel (max {MAX_FILE_SIZE / (1024 * 1024)}
                MB)
              </p>
            </div>
            <div>
              <label htmlFor="rentRollFile" className="block text-blue-700 font-medium mb-1">
                Rent Roll
              </label>
              <input
                type="file"
                id="rentRollFile"
                accept=".pdf, .xls, .xlsx"
                onChange={handleRentRollChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Allowed formats: PDF, Excel (max {MAX_FILE_SIZE / (1024 * 1024)}
                MB)
              </p>
            </div>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition duration-200 disabled:opacity-50"
          >
            {isSubmitting ? "Processing..." : "Request Detailed Underwriting"}
          </Button>
        </form>

        <ResultsDialog
          open={showResults}
          onOpenChange={setShowResults}
          underwritingScore={underwritingScore}
          riskFlags={riskFlags}
          bestLenderFit={bestLenderFit}
          suggestedAdjustments={suggestedAdjustments}
        />
        <DetailedUnderwritingRequestDialog open={showDetailedRequest} onOpenChange={setShowDetailedRequest} />
      </CardContent>
    </Card>
  )
}

export default DealFeasibilityChecker




//old

// "use client";
// import { useState, useEffect } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Slider } from "@/components/ui/slider";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { GeistSans } from "geist/font/sans";

// import DetailedUnderwritingRequestDialog from "./DetailedUnderwritingRequestDialog";
// import ResultsDialog from "./ResultsDialog";

// const DealFeasibilityChecker = () => {
//   const [email, setEmail] = useState("");
//   const [operatingStatementFile, setOperatingStatementFile] =
//     useState<File | null>(null);
//   const [rentRollFile, setRentRollFile] = useState<File | null>(null);
//   const [documentType, setDocumentType] = useState("");

//   const handleOperatingStatementChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     if (e.target.files && e.target.files[0]) {
//       setOperatingStatementFile(e.target.files[0]);
//     }
//   };

//   const handleRentRollChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setRentRollFile(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!operatingStatementFile || !rentRollFile || !email) {
//       alert("Please provide an email and select both files.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("email", email);
//     formData.append("documentType", documentType);
//     formData.append("operatingStatementFile", operatingStatementFile);
//     formData.append("rentRollFile", rentRollFile);

//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await response.json();
//       if (result.success) {
//         alert("Email sent successfully!");
//       } else {
//         alert(`Error: ${result.error}`);
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("Failed to send email.");
//     }
//   };
//   const [noi, setNoi] = useState(1000000);
//   const [dscr, setDscr] = useState(1.25);
//   const [ltv, setLtv] = useState(75);
//   const [interestRate, setInterestRate] = useState(6.5);
//   const [capRate, setCapRate] = useState(6);
//   const [holdPeriod, setHoldPeriod] = useState(5);
//   const [exitStrategy, setExitStrategy] = useState("Sell");
//   const [underwritingScore, setUnderwritingScore] = useState(0);
//   const [riskFlags, setRiskFlags] = useState([]);
//   const [bestLenderFit, setBestLenderFit] = useState("");
//   const [suggestedAdjustments, setSuggestedAdjustments] = useState("");
//   const [showResults, setShowResults] = useState(false);
//   const [showDetailedRequest, setShowDetailedRequest] = useState(false);

//   useEffect(() => {
//     analyzeRisk();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []); // Only re-run analyzeRisk when the component mounts

//   const analyzeRisk = () => {
//     let score = 0;
//     const flags = [];
//     let lenderFit = "";
//     let adjustments = "";

//     // Underwriting Score calculation (more granular)
//     if (dscr >= 1.5) score += 30;
//     else if (dscr >= 1.35) score += 25;
//     else if (dscr >= 1.25) score += 20;
//     else if (dscr >= 1.15) score += 15;
//     else if (dscr >= 1.05) score += 10;
//     else score += 5;

//     if (ltv <= 55) score += 30;
//     else if (ltv <= 65) score += 25;
//     else if (ltv <= 75) score += 20;
//     else if (ltv <= 80) score += 15;
//     else if (ltv <= 85) score += 10;
//     else score += 5;

//     if (capRate >= 8) score += 30;
//     else if (capRate >= 7) score += 25;
//     else if (capRate >= 6) score += 20;
//     else if (capRate >= 5) score += 15;
//     else if (capRate >= 4) score += 10;
//     else score += 5;

//     if (interestRate <= 4) score += 30;
//     else if (interestRate <= 5) score += 25;
//     else if (interestRate <= 6) score += 20;
//     else if (interestRate <= 7) score += 15;
//     else if (interestRate <= 8) score += 10;
//     else score += 5;

//     // Additional factors
//     if (holdPeriod >= 7) score += 10;
//     else if (holdPeriod >= 5) score += 7;
//     else if (holdPeriod >= 3) score += 5;
//     else score += 3;

//     if (exitStrategy === "Sell") score += 5;
//     else score += 3;

//     // Risk Flags (more detailed)
//     if (dscr < 1.1) {
//       flags.push({
//         type: "high",
//         message:
//           "Critical DSCR: High risk of default. Immediate action required.",
//       });
//     } else if (dscr < 1.2) {
//       flags.push({
//         type: "high",
//         message:
//           "Low DSCR: Significant default risk. Consider increasing NOI or reducing debt.",
//       });
//     } else if (dscr < 1.25) {
//       flags.push({
//         type: "medium",
//         message: "DSCR below 1.25: Moderate default risk. Monitor closely.",
//       });
//     } else if (dscr < 1.35) {
//       flags.push({
//         type: "low",
//         message:
//           "DSCR below 1.35: Slight risk. Consider strategies to improve cash flow.",
//       });
//     }

//     if (ltv > 85) {
//       flags.push({
//         type: "high",
//         message:
//           "Extremely High LTV: Very high financing risk. Reconsider deal structure.",
//       });
//     } else if (ltv > 80) {
//       flags.push({
//         type: "high",
//         message:
//           "High LTV: Increased financing risk. Explore ways to reduce loan amount.",
//       });
//     } else if (ltv > 75) {
//       flags.push({
//         type: "medium",
//         message:
//           "LTV above 75%: Moderate risk. Consider strategies to improve equity position.",
//       });
//     } else if (ltv > 70) {
//       flags.push({
//         type: "low",
//         message:
//           "LTV above 70%: Slight risk. Monitor market conditions closely.",
//       });
//     }

//     if (capRate < 4) {
//       flags.push({
//         type: "high",
//         message:
//           "Extremely Low Cap Rate: High risk of overvaluation. Reassess investment viability.",
//       });
//     } else if (capRate < 5) {
//       flags.push({
//         type: "high",
//         message:
//           "Low Cap Rate: Potential overvaluation. Verify market conditions and growth potential.",
//       });
//     } else if (capRate < 6) {
//       flags.push({
//         type: "medium",
//         message:
//           "Cap Rate below 6%: Moderate risk. Ensure strong market fundamentals and growth prospects.",
//       });
//     } else if (capRate < 7) {
//       flags.push({
//         type: "low",
//         message:
//           "Cap Rate below 7%: Slight risk. Compare to market averages for the property type and location.",
//       });
//     }

//     if (interestRate > 8) {
//       flags.push({
//         type: "high",
//         message:
//           "Very High Interest Rate: Significant debt service burden. Explore refinancing options urgently.",
//       });
//     } else if (interestRate > 7) {
//       flags.push({
//         type: "high",
//         message:
//           "High Interest Rate: Increased debt service burden. Consider rate negotiation or hedging strategies.",
//       });
//     } else if (interestRate > 6) {
//       flags.push({
//         type: "medium",
//         message:
//           "Interest Rate above 6%: Moderate risk. Evaluate fixed-rate options or interest rate swaps.",
//       });
//     } else if (interestRate > 5) {
//       flags.push({
//         type: "low",
//         message:
//           "Interest Rate above 5%: Slight risk. Monitor rate trends and consider locking in current rate.",
//       });
//     }

//     if (holdPeriod < 3) {
//       flags.push({
//         type: "medium",
//         message:
//           "Short Hold Period: Increased market timing risk. Ensure robust exit strategy.",
//       });
//     }

//     // Best Lender Fit (more nuanced)
//     if (ltv <= 60 && dscr >= 1.4) {
//       lenderFit = "Traditional Bank (Excellent Terms)";
//     } else if (ltv <= 65 && dscr >= 1.3) {
//       lenderFit = "Traditional Bank (Favorable Terms)";
//     } else if (ltv <= 70 && dscr >= 1.25) {
//       lenderFit = "Agency (Fannie Mae/Freddie Mac)";
//     } else if (ltv <= 75 && dscr >= 1.2) {
//       lenderFit = "CMBS";
//     } else if (ltv <= 80 && dscr >= 1.1) {
//       lenderFit = "Debt Fund";
//     } else {
//       lenderFit = "Bridge Loan / Hard Money Lender";
//     }

//     // Suggested Adjustments (more detailed)
//     if (dscr < 1.25) {
//       adjustments +=
//         "Increase NOI through operational improvements or reduce loan amount to improve DSCR. ";
//     }
//     if (ltv > 75) {
//       adjustments +=
//         "Explore options to increase equity contribution or negotiate a lower purchase price to reduce LTV. ";
//     }
//     if (capRate < 6) {
//       adjustments +=
//         "Conduct a thorough market analysis to justify valuation. Consider properties with higher cap rates or value-add opportunities. ";
//     }
//     if (interestRate > 6) {
//       adjustments +=
//         "Shop for better loan terms, consider a rate lock, or explore interest rate hedging strategies. ";
//     }
//     if (holdPeriod < 5) {
//       adjustments +=
//         "Evaluate potential for a longer hold period to mitigate short-term market risks and capitalize on property improvements. ";
//     }
//     if (exitStrategy === "Refinance" && ltv > 70) {
//       adjustments +=
//         "For a refinance exit, focus on rapid equity build-up or property value appreciation to improve refinancing terms. ";
//     }

//     setUnderwritingScore(score);
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-expect-error
//     setRiskFlags(flags);
//     setBestLenderFit(lenderFit);
//     setSuggestedAdjustments(adjustments);
//   };

//   return (
//     <Card
//       className={`w-full max-w-xl mx-auto ${GeistSans.className} bg-white shadow-lg rounded-lg`}
//     >
//       <CardHeader className="bg-blue-600/20 py-4 rounded-t-lg">
//         <CardTitle className="text-lg font-bold text-center text-blue-900">
//           Deal Feasibility & Risk Checker
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="p-6">
//         <div className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="noi" className="text-gray-700">
//                   Net Operating Income (NOI)
//                 </Label>
//                 <Input
//                   id="noi"
//                   type="text"
//                   value={noi.toLocaleString("en-US", {
//                     style: "currency",
//                     currency: "USD",
//                     minimumFractionDigits: 0,
//                     maximumFractionDigits: 0,
//                   })}
//                   onChange={(e) => {
//                     const value = e.target.value.replace(/[^0-9]/g, "");
//                     setNoi(Number(value));
//                     analyzeRisk();
//                   }}
//                   className="text-sm text-gray-700"
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="ltv" className="text-gray-700">
//                   Loan-to-Value (LTV) Ratio
//                 </Label>
//                 <Input
//                   id="ltv"
//                   type="number"
//                   value={ltv}
//                   onChange={(e) => {
//                     setLtv(Number(e.target.value));
//                     analyzeRisk();
//                   }}
//                   className="text-sm text-gray-700"
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="capRate" className="text-gray-700">
//                   Cap Rate (%)
//                 </Label>
//                 <Input
//                   id="capRate"
//                   type="number"
//                   value={capRate}
//                   onChange={(e) => {
//                     setCapRate(Number(e.target.value));
//                     analyzeRisk();
//                   }}
//                   className="text-sm text-gray-700"
//                 />
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="dscr" className="text-gray-700">
//                   Debt Service Coverage Ratio (DSCR)
//                 </Label>
//                 <Slider
//                   id="dscr"
//                   min={0.8}
//                   max={2.0}
//                   step={0.01}
//                   value={[dscr]}
//                   onValueChange={(value) => {
//                     setDscr(value[0]);
//                     analyzeRisk();
//                   }}
//                   className="mt-2"
//                 />
//                 <div className="text-xs text-gray-500 mt-1">
//                   {dscr.toFixed(2)}
//                 </div>
//               </div>
//               <div>
//                 <Label htmlFor="interestRate" className="text-gray-700">
//                   Interest Rate (%)
//                 </Label>
//                 <Select
//                   value={interestRate.toString()}
//                   onValueChange={(value) => {
//                     setInterestRate(Number(value));
//                     analyzeRisk();
//                   }}
//                 >
//                   <SelectTrigger className="text-sm text-gray-700">
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {[
//                       3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5,
//                       9.0,
//                     ].map((rate) => (
//                       <SelectItem key={rate} value={rate.toString()}>
//                         {rate.toFixed(1)}%
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div>
//                 <Label htmlFor="holdPeriod" className="text-gray-700">
//                   Hold Period (Years)
//                 </Label>
//                 <Select
//                   value={holdPeriod.toString()}
//                   onValueChange={(value) => {
//                     setHoldPeriod(Number(value));
//                     analyzeRisk();
//                   }}
//                 >
//                   <SelectTrigger className="text-sm text-gray-700">
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((year) => (
//                       <SelectItem key={year} value={year.toString()}>
//                         {year}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-end space-x-4">
//             <div className="flex-grow">
//               <Label htmlFor="exitStrategy" className="text-gray-700">
//                 Exit Strategy
//               </Label>
//               <Select
//                 value={exitStrategy}
//                 onValueChange={(value) => {
//                   setExitStrategy(value);
//                   analyzeRisk();
//                 }}
//               >
//                 <SelectTrigger className="text-sm text-gray-700">
//                   <SelectValue />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="Refinance">Refinance</SelectItem>
//                   <SelectItem value="Sell">Sell</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <Button
//               className={`text-sm ${GeistSans.className} bg-blue-600 hover:bg-blue-700 text-white`}
//               onClick={() => setShowResults(true)}
//             >
//               View Results
//             </Button>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 font-medium"
//               >
//                 Email:
//               </label>
//               <input
//                 placeholder="yourmail@gmail.com"
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="documentType"
//                 className="block text-gray-700 font-medium "
//               >
//                 Full Name
//               </label>
//               <input
//                 placeholder="John Doe"
//                 type="text"
//                 id="documentType"
//                 value={documentType}
//                 onChange={(e) => setDocumentType(e.target.value)}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="operatingStatementFile"
//                 className="block text-blue-700 font-medium mb-1"
//               >
//                 Operating Statement
//               </label>
//               <input
//                 type="file"
//                 id="operatingStatementFile"
//                 accept=".pdf, .xls, .xlsx"
//                 onChange={handleOperatingStatementChange}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="rentRollFile"
//                 className="block text-blue-700 font-medium mb-1"
//               >
//                 Rent Roll
//               </label>
//               <input
//                 type="file"
//                 id="rentRollFile"
//                 accept=".pdf, .xls, .xlsx"
//                 onChange={handleRentRollChange}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>
//           <Button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition duration-200"
//           >
//             Request Detailed Underwriting
//           </Button>
//         </form>

//         <ResultsDialog
//           open={showResults}
//           onOpenChange={setShowResults}
//           underwritingScore={underwritingScore}
//           riskFlags={riskFlags}
//           bestLenderFit={bestLenderFit}
//           suggestedAdjustments={suggestedAdjustments}
//         />
//         <DetailedUnderwritingRequestDialog
//           open={showDetailedRequest}
//           onOpenChange={setShowDetailedRequest}
//         />
//       </CardContent>
//     </Card>
//   );
// };

// export default DealFeasibilityChecker;
