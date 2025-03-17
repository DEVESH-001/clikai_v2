import type { Metadata } from "next"

// Base configuration for metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://clik.ai"),
  title: {
    template: "%s | Clik.AI",
    default: "Clik.AI - AI Software for Commercial Real Estate",
  },
  description: "Leading AI software for multifamily and commercial real estate investment underwriting.",
  keywords: [
    "commercial real estate software",
    "CRE AI software",
    "real estate underwriting",
    "multifamily investment software",
    "property analysis tools",
    "AI for real estate",
    "commercial property underwriting",
    "real estate investment analysis",
    "automated real estate underwriting",
    "CRE technology",
    "property investment software",
    "real estate data extraction",
    "commercial loan underwriting",
    "real estate financial modeling",
    "property valuation software",
    "real estate analytics platform",
    "CRE investment tools",
    "multifamily underwriting software",
    "real estate due diligence software",
    "property investment analysis",
  ],
  openGraph: {
    type: "website",
    siteName: "Clik.AI",
    images: [
      {
        url: "/opengraph/default.jpg",
        width: 1200,
        height: 630,
        alt: "Clik.AI Default",
      },
    ],
  },
}

// Contact page metadata
export const contactUsMetadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Clik.ai - Leading AI software for multifamily and commercial real estate investment underwriting.",
  keywords: [
    "contact Clik.ai",
    "reach Clik.ai team",
    "Clik.ai support",
    "inquiry Clik.ai",
    "contact commercial real estate software",
    "Clik.ai customer service",
    "real estate software support",
    "CRE software contact",
    "get in touch with Clik.ai",
    "Clik.ai help",
    "Clik.ai information",
    "commercial real estate software support",
    "AI real estate software contact",
    "property underwriting software support",
    "multifamily software contact",
    "real estate technology assistance",
    "Clik.ai sales inquiry",
    "Clik.ai demo request",
    "commercial property software help",
    "real estate AI support",
    "Clik.ai consultation",
    "property analysis software contact",
    "CRE technology support",
    "real estate software inquiry",
    "underwriting software assistance",
  ],
  openGraph: {
    images: [
      {
        url: "/opengraph/contact-us.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Clik.AI",
      },
    ],
  },
}

export const termsAndConditionMetaData: Metadata = {
  title: "Terms and Conditions",
  description: "Clik.ai - Supercharge your way to underwrite commercial real estate.",
  keywords: [
    "Clik.ai terms",
    "Clik.ai conditions",
    "website terms",
    "service terms",
    "legal terms",
    "Clik.ai legal agreement",
    "software terms of use",
    "CRE software terms",
    "real estate software agreement",
    "Clik.ai user agreement",
    "software license terms",
    "terms of service",
    "acceptable use policy",
    "Clik.ai legal terms",
    "software usage terms",
    "commercial real estate software terms",
    "AI software terms",
    "data usage terms",
    "service agreement",
    "user rights and responsibilities",
    "intellectual property rights",
    "software warranty terms",
    "limitation of liability",
    "Clik.ai service conditions",
    "software subscription terms",
  ],
  openGraph: {
    images: "/opengraph/terms.jpg",
  },
}

export const securityMetaData: Metadata = {
  title: "Security",
  description: "Clik.ai - Supercharge your way to underwrite commercial real estate.",
  keywords: [
    "Clik.ai security",
    "data security",
    "website security",
    "platform security",
    "information security",
    "secure real estate software",
    "CRE data protection",
    "AI software security",
    "secure cloud platform",
    "data encryption",
    "secure data handling",
    "cybersecurity measures",
    "real estate data security",
    "secure financial data",
    "property information protection",
    "secure underwriting platform",
    "data privacy protection",
    "secure document handling",
    "financial information security",
    "secure property analysis",
    "data breach prevention",
    "secure client information",
    "GDPR compliance",
    "secure cloud storage",
    "multi-factor authentication",
  ],
  openGraph: {
    images: "/opengraph/security.jpg",
  },
}

export const descMetaData: Metadata = {
  title: "Disclaimer",
  description: "Clik.ai site disclaimer",
  keywords: [
    "Clik.ai disclaimer",
    "website disclaimer",
    "legal disclaimer",
    "site notice",
    "terms of use",
    "liability disclaimer",
    "software disclaimer",
    "information accuracy disclaimer",
    "content disclaimer",
    "service disclaimer",
    "legal notice",
    "warranty disclaimer",
    "use at own risk",
    "no guarantee disclaimer",
    "financial advice disclaimer",
    "investment disclaimer",
    "real estate software disclaimer",
    "data accuracy disclaimer",
    "third-party content disclaimer",
    "professional advice disclaimer",
    "software performance disclaimer",
    "results disclaimer",
    "forward-looking statements",
    "market conditions disclaimer",
    "investment performance disclaimer",
  ],
  openGraph: {
    images: "/opengraph/disclaimer.jpg",
  },
}

// PRODUCTS
export const AutoUWMetaData: Metadata = {
  title: "AutoUW - Automated Underwriting",
  description:
    "Streamline your underwriting process with AutoUW, our AI-powered tool designed for rapid, accurate underwriting in commercial real estate.",
  keywords: [
    "automated underwriting",
    "commercial real estate underwriting",
    "AI underwriting",
    "CRE underwriting software",
    "multifamily underwriting",
    "property underwriting",
    "underwriting automation",
    "real estate analysis",
    "investment analysis",
    "financial modeling",
    "automated deal analysis",
    "property valuation software",
    "real estate investment underwriting",
    "commercial property analysis",
    "multifamily deal analysis",
    "automated financial modeling",
    "real estate cash flow analysis",
    "property acquisition underwriting",
    "commercial loan underwriting",
    "real estate investment software",
    "property pro forma automation",
    "automated sensitivity analysis",
    "real estate risk assessment",
    "automated property valuation",
    "commercial real estate analysis",
    "multifamily acquisition analysis",
    "automated investment analysis",
    "real estate deal screening",
    "property investment underwriting",
    "automated due diligence",
    "real estate financial analysis",
    "commercial property underwriting",
    "automated rent roll analysis",
    "real estate operating statement analysis",
    "property performance analysis",
    "automated cap rate analysis",
    "real estate IRR calculation",
    "commercial property cash flow",
    "automated NOI analysis",
    "real estate debt service analysis",
  ],
  openGraph: {
    images: [
      {
        url: "/opengraph/autouw.png",
        width: 1200,
        height: 630,
        alt: "AutoUW - Automated Underwriting",
      },
    ],
  },
}

export const InvestAssistMetaData: Metadata = {
  title: "InvestAssist - Investment Assistance",
  description:
    "Empower your investment decisions with InvestAssist, offering data-driven insights and analysis to optimize your CRE investment strategies.",
  keywords: [
    "commercial real estate investment",
    "CRE investment analysis",
    "real estate investment software",
    "investment property analysis",
    "multifamily investment",
    "property investment tools",
    "investment portfolio management",
    "real estate analytics",
    "investment insights",
    "financial analysis",
    "real estate investment strategy",
    "property acquisition analysis",
    "investment decision support",
    "real estate market analysis",
    "property investment performance",
    "investment risk assessment",
    "real estate portfolio optimization",
    "property investment returns",
    "investment opportunity analysis",
    "real estate comparative analysis",
    "property investment metrics",
    "investment scenario modeling",
    "real estate investment forecasting",
    "property investment benchmarking",
    "investment trend analysis",
    "real estate investment dashboard",
    "property investment reporting",
    "investment data visualization",
    "real estate investment intelligence",
    "property investment recommendations",
    "investment deal scoring",
    "real estate investment screening",
    "property investment criteria",
    "investment performance tracking",
    "real estate investment comparison",
    "property investment pipeline",
    "investment deal flow management",
    "real estate investment sourcing",
    "property investment due diligence",
    "investment exit strategy analysis",
  ],
  openGraph: {
    images: "/opengraph/investAssist.png",
  },
}

export const SmartExtractMetaData: Metadata = {
  title: "SmartExtract - Intelligent Data Extraction",
  description:
    "Optimize document processing with SmartExtract, our solution for fast, accurate extraction of critical data from commercial real estate files.",
  keywords: [
    "data extraction",
    "document processing",
    "AI data extraction",
    "CRE data extraction",
    "real estate document processing",
    "rent roll extraction",
    "operating statement extraction",
    "financial document processing",
    "data automation",
    "intelligent data capture",
    "document data extraction",
    "automated data entry",
    "real estate document analysis",
    "property data extraction",
    "financial statement extraction",
    "document intelligence",
    "OCR for real estate",
    "automated document processing",
    "real estate data capture",
    "property financial data extraction",
    "lease data extraction",
    "document digitization",
    "real estate document conversion",
    "property document analysis",
    "financial data automation",
    "document data mining",
    "real estate information extraction",
    "property document processing",
    "financial document analysis",
    "document data recognition",
    "real estate document classification",
    "property data automation",
    "financial information extraction",
    "document text extraction",
    "real estate data processing",
    "property document digitization",
    "financial document intelligence",
    "document data transformation",
    "real estate data structuring",
    "property information capture",
  ],
  openGraph: {
    images: "/opengraph/smartextract.png",
  },
}

export const Clarity360tMetaData: Metadata = {
  title: "Loan Abstract - Document Data Abstraction",
  description:
    "Simplify loan document analysis with Loan Abstract, our tool designed to extract and abstract key data with precision from loan documents.",
  keywords: [
    "loan abstraction",
    "document data abstraction",
    "loan document analysis",
    "AI loan abstraction",
    "CRE loan abstraction",
    "real estate loan analysis",
    "loan data extraction",
    "document intelligence",
    "financial data abstraction",
    "loan portfolio analysis",
    "mortgage document abstraction",
    "loan agreement analysis",
    "commercial loan abstraction",
    "real estate loan data",
    "loan document processing",
    "mortgage data extraction",
    "loan covenant abstraction",
    "real estate loan terms",
    "loan document digitization",
    "mortgage agreement analysis",
    "loan compliance analysis",
    "real estate loan portfolio",
    "loan document management",
    "mortgage data abstraction",
    "loan term extraction",
    "real estate loan servicing",
    "loan document intelligence",
    "mortgage document processing",
    "loan data management",
    "real estate loan administration",
    "loan document classification",
    "mortgage portfolio management",
    "loan data organization",
    "real estate loan monitoring",
    "loan document summarization",
    "mortgage covenant tracking",
    "loan data visualization",
    "real estate loan reporting",
    "loan document comparison",
    "mortgage data management",
  ],
  openGraph: {
    images: "/opengraph/clarity360.png",
  },
}

// SERVICES
export const UnderwritingDDSMetaData: Metadata = {
  title: "Underwriting & Due Diligence Support",
  description:
    "Enhance your underwriting process with expert due diligence support services, ensuring comprehensive analysis and risk mitigation for your deals.",
  keywords: [
    "underwriting support",
    "due diligence services",
    "CRE underwriting",
    "real estate due diligence",
    "commercial loan underwriting",
    "investment risk assessment",
    "property valuation",
    "financial analysis",
    "deal screening",
    "underwriting process",
    "property due diligence",
    "real estate risk analysis",
    "commercial property underwriting",
    "investment deal analysis",
    "property financial review",
    "real estate transaction support",
    "commercial deal underwriting",
    "investment property assessment",
    "property performance analysis",
    "real estate acquisition support",
    "commercial property due diligence",
    "investment underwriting services",
    "property risk evaluation",
    "real estate deal analysis",
    "commercial investment underwriting",
    "property acquisition support",
    "real estate financial underwriting",
    "commercial property assessment",
    "investment property due diligence",
    "property market analysis",
    "real estate investment underwriting",
    "commercial deal assessment",
    "property investment analysis",
    "real estate risk mitigation",
    "commercial property evaluation",
    "investment deal support",
    "property underwriting services",
    "real estate deal screening",
    "commercial investment analysis",
    "property transaction support",
  ],
  openGraph: {
    images: "/opengraph/underwriting-dds.jpg",
  },
}

export const CustomFDMMetaData: Metadata = {
  title: "Custom Financial Models",
  description:
    "Build tailored financial models with our custom development services, designed to address the unique needs of your CRE investments and financing.",
  keywords: [
    "custom financial models",
    "CRE financial modeling",
    "real estate financial models",
    "investment modeling",
    "financial analysis",
    "pro forma analysis",
    "cash flow modeling",
    "scenario planning",
    "sensitivity analysis",
    "financial forecasting",
    "custom investment models",
    "real estate financial analysis",
    "commercial property modeling",
    "investment return modeling",
    "property cash flow analysis",
    "real estate valuation models",
    "commercial investment modeling",
    "property financial forecasting",
    "real estate scenario analysis",
    "commercial property pro forma",
    "investment sensitivity modeling",
    "property financial planning",
    "real estate financial projections",
    "commercial investment analysis",
    "property performance modeling",
    "real estate financial metrics",
    "commercial property valuation",
    "investment financial modeling",
    "property risk modeling",
    "real estate financial assessment",
    "commercial property analysis",
    "investment decision modeling",
    "property acquisition modeling",
    "real estate exit strategy modeling",
    "commercial property performance",
    "investment financial analysis",
    "property development modeling",
    "real estate investment modeling",
    "commercial property forecasting",
    "investment return analysis",
  ],
  openGraph: {
    images: "/opengraph/custom-fdm.jpg",
  },
}

export const DisbursementPCNAMetaData: Metadata = {
  title: "Disbursement & PCNA Support",
  description:
    "Streamline your financial operations with dedicated disbursement and PCNA support services, ensuring efficient fund management and processing.",
  keywords: [
    "disbursement support",
    "PCNA services",
    "loan administration",
    "fund management",
    "financial operations",
    "payment processing",
    "escrow management",
    "tax compliance",
    "insurance tracking",
    "loan servicing",
    "property condition assessment",
    "real estate disbursement",
    "commercial loan disbursement",
    "investment fund management",
    "property financial operations",
    "real estate payment processing",
    "commercial loan servicing",
    "investment escrow management",
    "property tax compliance",
    "real estate insurance tracking",
    "commercial loan administration",
    "investment fund disbursement",
    "property condition reporting",
    "real estate financial management",
    "commercial property assessment",
    "investment payment processing",
    "property escrow services",
    "real estate tax management",
    "commercial insurance compliance",
    "investment loan servicing",
    "property fund administration",
    "real estate disbursement services",
    "commercial payment processing",
    "investment escrow services",
    "property tax services",
    "real estate insurance services",
    "commercial loan management",
    "investment fund administration",
    "property condition analysis",
    "real estate financial services",
  ],
  openGraph: {
    images: "/opengraph/disbursement-pcna.jpg",
  },
}

export const LeaseAbstractionAuditMetaData: Metadata = {
  title: "Lease Abstraction & Audit",
  description:
    "Improve lease management with our comprehensive lease abstraction and audit services, offering accurate data analysis and compliance checks.",
  keywords: [
    "lease abstraction",
    "lease audit",
    "lease management",
    "CRE lease abstraction",
    "real estate lease audit",
    "lease compliance",
    "rent roll analysis",
    "CAM reconciliation",
    "lease administration",
    "lease accounting",
    "commercial lease abstraction",
    "real estate lease management",
    "property lease audit",
    "lease data extraction",
    "commercial property leases",
    "real estate lease compliance",
    "property rent roll analysis",
    "lease CAM reconciliation",
    "commercial lease administration",
    "real estate lease accounting",
    "property lease abstraction",
    "lease term extraction",
    "commercial lease audit",
    "real estate lease data",
    "property lease compliance",
    "lease rent analysis",
    "commercial CAM reconciliation",
    "real estate lease administration",
    "property lease accounting",
    "lease data management",
    "commercial lease terms",
    "real estate rent roll audit",
    "property CAM analysis",
    "lease compliance audit",
    "commercial lease data",
    "real estate lease extraction",
    "property lease management",
    "lease term analysis",
    "commercial rent roll management",
    "real estate CAM audit",
  ],
  openGraph: {
    images: "/opengraph/lease-abstraction.png",
  },
}

export const LoanDocumentDigitisationMetaData: Metadata = {
  title: "Loan Document Digitisation",
  description:
    "Digitise your loan documents effortlessly with our data digitisation services, ensuring accurate, accessible digital records for CRE portfolios.",
  keywords: [
    "loan document digitization",
    "data digitization services",
    "CRE document digitization",
    "real estate data management",
    "loan portfolio digitization",
    "document scanning",
    "data conversion",
    "digital archiving",
    "document imaging",
    "data accessibility",
    "commercial loan digitization",
    "real estate document management",
    "property loan digitization",
    "loan data conversion",
    "commercial document scanning",
    "real estate digital archiving",
    "property document imaging",
    "loan data accessibility",
    "commercial loan management",
    "real estate document digitization",
    "property loan documents",
    "loan data management",
    "commercial document conversion",
    "real estate loan archiving",
    "property document scanning",
    "loan digital transformation",
    "commercial data accessibility",
    "real estate loan management",
    "property document conversion",
    "loan document management",
    "commercial digital archiving",
    "real estate document scanning",
    "property loan data",
    "loan document conversion",
    "commercial document management",
    "real estate data conversion",
    "property loan archiving",
    "loan document scanning",
    "commercial data management",
    "real estate document accessibility",
  ],
  openGraph: {
    images: "/opengraph/loan-loan-digitisation.png",
  },
}

export const LoanOnboardingDigitizationMetaData: Metadata = {
  title: "Loan Onboarding & Digitization",
  description:
    "Streamline loan onboarding with our digitization services, designed to simplify data integration and management for improved operational efficiency.",
  keywords: [
    "loan onboarding",
    "loan digitization",
    "loan data integration",
    "CRE loan onboarding",
    "real estate loan digitization",
    "loan document processing",
    "data management",
    "workflow automation",
    "loan origination",
    "financial services",
    "commercial loan onboarding",
    "real estate loan data",
    "property loan digitization",
    "loan integration services",
    "commercial document processing",
    "real estate data management",
    "property loan onboarding",
    "loan workflow automation",
    "commercial loan origination",
    "real estate financial services",
    "property loan processing",
    "loan data management",
    "commercial loan digitization",
    "real estate loan integration",
    "property document processing",
    "loan process automation",
    "commercial data management",
    "real estate loan workflow",
    "property loan origination",
    "loan financial services",
    "commercial loan processing",
    "real estate data integration",
    "property loan management",
    "loan document digitization",
    "commercial workflow automation",
    "real estate loan processing",
    "property data management",
    "loan origination services",
    "commercial loan integration",
    "real estate document digitization",
  ],
  openGraph: {
    images: "/opengraph/loan-onboarding.png",
  },
}

export const SalesforceCustomisationIntegrationMetaData: Metadata = {
  title: "Salesforce Customisation & Integration",
  description:
    "Enhance your CRM with tailored Salesforce customisation and integration services, optimizing your commercial real estate operations and data flow.",
  keywords: [
    "Salesforce customisation",
    "Salesforce integration",
    "CRE Salesforce",
    "real estate CRM",
    "Salesforce consulting",
    "CRM implementation",
    "data integration",
    "workflow automation",
    "Salesforce development",
    "CRM solutions",
    "commercial Salesforce customization",
    "real estate Salesforce integration",
    "property CRM solutions",
    "Salesforce for real estate",
    "commercial CRM implementation",
    "real estate data integration",
    "property workflow automation",
    "Salesforce real estate development",
    "commercial CRM solutions",
    "real estate Salesforce consulting",
    "property CRM customization",
    "Salesforce data integration",
    "commercial workflow automation",
    "real estate CRM implementation",
    "property Salesforce development",
    "Salesforce automation",
    "commercial data integration",
    "real estate workflow solutions",
    "property CRM consulting",
    "Salesforce real estate solutions",
    "commercial CRM development",
    "real estate Salesforce automation",
    "property data management",
    "Salesforce CRM integration",
    "commercial Salesforce solutions",
    "real estate CRM development",
    "property Salesforce consulting",
    "Salesforce workflow automation",
    "commercial CRM customization",
    "real estate data management",
  ],
  openGraph: {
    images: "/opengraph/salesforce-customization.png",
  },
}

export const CustomReportingDashboardsMetaData: Metadata = {
  title: "Custom Reporting & Dashboards",
  description:
    "Transform your data into actionable insights with our custom reporting and dashboard solutions, crafted to support informed decision-making.",
  keywords: [
    "custom reporting",
    "data dashboards",
    "CRE reporting",
    "real estate dashboards",
    "data visualization",
    "business intelligence",
    "performance metrics",
    "data analysis",
    "reporting solutions",
    "data-driven decisions",
    "commercial reporting solutions",
    "real estate data visualization",
    "property performance dashboards",
    "custom business intelligence",
    "commercial metrics reporting",
    "real estate data analysis",
    "property reporting tools",
    "custom decision support",
    "commercial data visualization",
    "real estate performance metrics",
    "property data dashboards",
    "custom analytics solutions",
    "commercial business intelligence",
    "real estate reporting systems",
    "property data analysis",
    "custom performance tracking",
    "commercial data insights",
    "real estate dashboard solutions",
    "property metrics visualization",
    "custom data reporting",
    "commercial analytics dashboards",
    "real estate business intelligence",
    "property performance reporting",
    "custom data visualization",
    "commercial reporting tools",
    "real estate data insights",
    "property dashboard solutions",
    "custom metrics analysis",
    "commercial performance tracking",
    "real estate analytics reporting",
  ],
  openGraph: {
    images: "/opengraph/custom-reporting.png",
  },
}

export const CRETechnologyConsultingMetaData: Metadata = {
  title: "CRE Technology Consulting",
  description:
    "Leverage expert CRE technology consulting to drive innovation and operational efficiency, ensuring a competitive edge in the real estate market.",
  keywords: [
    "CRE technology consulting",
    "real estate technology",
    "technology consulting",
    "innovation in CRE",
    "operational efficiency",
    "digital transformation",
    "technology strategy",
    "IT consulting",
    "real estate solutions",
    "technology implementation",
    "commercial technology consulting",
    "real estate digital solutions",
    "property technology strategy",
    "CRE innovation consulting",
    "commercial efficiency solutions",
    "real estate digital transformation",
    "property IT consulting",
    "CRE technology implementation",
    "commercial real estate solutions",
    "real estate technology strategy",
    "property innovation consulting",
    "CRE digital solutions",
    "commercial IT consulting",
    "real estate efficiency solutions",
    "property technology implementation",
    "CRE digital transformation",
    "commercial technology strategy",
    "real estate innovation consulting",
    "property digital solutions",
    "CRE efficiency consulting",
    "commercial digital transformation",
    "real estate IT solutions",
    "property technology consulting",
    "CRE solution implementation",
    "commercial innovation strategy",
    "real estate technology consulting",
    "property digital transformation",
    "CRE IT consulting",
    "commercial technology implementation",
    "real estate innovation solutions",
  ],
  openGraph: {
    images: "/opengraph/cre-consulting.png",
  },
}

export const WhyClikAIMetaData: Metadata = {
  title: "Why CLIK.AI – Our Advantage",
  description:
    "Discover why industry leaders choose CLIK.AI for advanced CRE solutions, combining innovative technology with unmatched expertise and support.",
  keywords: [
    "why Clik.ai",
    "Clik.ai advantage",
    "CRE solutions",
    "real estate technology",
    "AI in real estate",
    "innovative solutions",
    "expert support",
    "technology leadership",
    "commercial real estate",
    "multifamily solutions",
    "Clik.ai benefits",
    "real estate AI advantage",
    "property technology solutions",
    "CRE technology benefits",
    "commercial AI solutions",
    "real estate software advantage",
    "property analysis technology",
    "CRE innovation leadership",
    "commercial software benefits",
    "real estate AI technology",
    "property solution advantages",
    "CRE software benefits",
    "commercial technology solutions",
    "real estate automation advantage",
    "property AI benefits",
    "CRE analysis technology",
    "commercial innovation solutions",
    "real estate software benefits",
    "property technology advantage",
    "CRE AI solutions",
    "commercial analysis benefits",
    "real estate technology solutions",
    "property software advantage",
    "CRE automation benefits",
    "commercial AI technology",
    "real estate solution advantages",
    "property innovation benefits",
    "CRE technology solutions",
    "commercial software advantage",
    "real estate AI benefits",
  ],
  openGraph: {
    images: "/opengraph/default2.png",
  },
}

export const PrivacyPolicyMetaData: Metadata = {
  title: "CLIK.AI Privacy Policy",
  description:
    "Review our privacy policy to understand how CLIK.AI protects your data, ensuring transparency and compliance with data protection standards.",
  keywords: [
    "Clik.ai privacy policy",
    "data protection",
    "privacy standards",
    "data security",
    "privacy compliance",
    "user data",
    "information privacy",
    "data handling",
    "privacy practices",
    "data protection policy",
    "Clik.ai data privacy",
    "real estate software privacy",
    "property data protection",
    "CRE data security",
    "commercial privacy policy",
    "real estate data handling",
    "property information privacy",
    "CRE privacy standards",
    "commercial data protection",
    "real estate privacy compliance",
    "property data security",
    "CRE information privacy",
    "commercial privacy practices",
    "real estate data protection",
    "property privacy policy",
    "CRE data handling",
    "commercial information security",
    "real estate privacy standards",
    "property data compliance",
    "CRE privacy practices",
    "commercial data privacy",
    "real estate information handling",
    "property privacy standards",
    "CRE data compliance",
    "commercial privacy policy",
    "real estate data security",
    "property information protection",
    "CRE privacy handling",
    "commercial data standards",
    "real estate privacy protection",
  ],
  openGraph: {
    images: "/opengraph/default2.png",
  },
}

export const TermsConditionsMetaData: Metadata = {
  title: "CLIK.AI Terms & Conditions",
  description:
    "Read our terms and conditions to learn about the legal guidelines governing your use of CLIK.AI's innovative CRE solutions and services.",
  keywords: [
    "Clik.ai terms and conditions",
    "terms of service",
    "legal guidelines",
    "website terms",
    "service terms",
    "user agreement",
    "terms of use",
    "legal compliance",
    "site policies",
    "service agreement",
    "Clik.ai legal terms",
    "real estate software terms",
    "property service conditions",
    "CRE legal guidelines",
    "commercial terms of service",
    "real estate user agreement",
    "property terms of use",
    "CRE legal compliance",
    "commercial site policies",
    "real estate service agreement",
    "property legal terms",
    "CRE software terms",
    "commercial service conditions",
    "real estate legal guidelines",
    "property terms of service",
    "CRE user agreement",
    "commercial terms of use",
    "real estate legal compliance",
    "property site policies",
    "CRE service agreement",
    "commercial legal terms",
    "real estate service conditions",
    "property legal guidelines",
    "CRE terms of service",
    "commercial user agreement",
    "real estate terms of use",
    "property legal compliance",
    "CRE site policies",
    "commercial service agreement",
  ],
  openGraph: {
    images: "/opengraph/default2.png",
  },
}















//old
// import { Metadata } from "next";

// // Base configuration for metadata
// export const metadata: Metadata = {
//   metadataBase: new URL("https://clik.ai"),
//   title: {
//     template: "%s | Clik.AI",
//     default: "Clik.AI - AI Software for Commercial Real Estate",
//   },
//   description:
//     "Leading AI software for multifamily and commercial real estate investment underwriting.",
//   openGraph: {
//     type: "website",
//     siteName: "Clik.AI",
//     images: [
//       {
//         url: "/opengraph/default.jpg",
//         width: 1200,
//         height: 630, 
//         alt: "Clik.AI Default",
//       },
//     ],
//   },
// };

// // Contact page metadata
// export const contactUsMetadata: Metadata = {
//   title: "Contact Us",
//   description:
//     "Get in touch with Clik.ai - Leading AI software for multifamily and commercial real estate investment underwriting.",
//   openGraph: {
//     images: [
//       {
//         url: "/opengraph/contact-us.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Contact Clik.AI",
//       },
//     ],
//   },
// };

// export const termsAndConditionMetaData: Metadata = {
//   title: "Terms and Conditions",
//   description:
//     "Clik.ai - Supercharge your way to underwrite commercial real estate.",
//   openGraph: {
//     images: "/opengraph/terms.jpg",
//   },
// };

// export const securityMetaData: Metadata = {
//   title: "Security",
//   description:
//     "Clik.ai - Supercharge your way to underwrite commercial real estate.",
//   openGraph: {
//     images: "/opengraph/security.jpg",
//   },
// };

// export const descMetaData: Metadata = {
//   title: "Disclaimer",
//   description: "Clik.ai site disclaimer",
//   openGraph: {
//     images: "/opengraph/disclaimer.jpg",
//   },
// };

// // PRODUCTS
// export const AutoUWMetaData: Metadata = {
//   title: "AutoUW - Automated Underwriting",
//   description:
//     "Streamline your underwriting process with AutoUW, our AI-powered tool designed for rapid, accurate underwriting in commercial real estate.",
//   openGraph: {
//     images: [
//       {
//         url: "/opengraph/autouw.png",
//         width: 1200,
//         height: 630,
//         alt: "AutoUW - Automated Underwriting",
//       },
//     ],
//   },
// };

// export const InvestAssistMetaData: Metadata = {
//   title: "InvestAssist - Investment Assistance",
//   description:
//     "Empower your investment decisions with InvestAssist, offering data-driven insights and analysis to optimize your CRE investment strategies.",
//   openGraph: {
//     images: "/opengraph/investAssist.png",
//   },
// };

// export const SmartExtractMetaData: Metadata = {
//   title: "SmartExtract - Intelligent Data Extraction",
//   description:
//     "Optimize document processing with SmartExtract, our solution for fast, accurate extraction of critical data from commercial real estate files.",
//   openGraph: {
//     images: "/opengraph/smartextract.png",
//   },
// };

// export const Clarity360tMetaData: Metadata = {
//   title: "Loan Abstract - Document Data Abstraction",
//   description:
//     "Simplify loan document analysis with Loan Abstract, our tool designed to extract and abstract key data with precision from loan documents.",
//   openGraph: {
//     images: "/opengraph/clarity360.png",
//   },
// };

// // SERVICES
// export const UnderwritingDDSMetaData: Metadata = {
//   title: "Underwriting & Due Diligence Support",
//   description:
//     "Enhance your underwriting process with expert due diligence support services, ensuring comprehensive analysis and risk mitigation for your deals.",
//   openGraph: {
//     images: "/opengraph/underwriting-dds.jpg",
//   },
// };

// export const CustomFDMMetaData: Metadata = {
//   title: "Custom Financial Models",
//   description:
//     "Build tailored financial models with our custom development services, designed to address the unique needs of your CRE investments and financing.",
//   openGraph: {
//     images: "/opengraph/custom-fdm.jpg",
//   },
// };

// export const DisbursementPCNAMetaData: Metadata = {
//   title: "Disbursement & PCNA Support",
//   description:
//     "Streamline your financial operations with dedicated disbursement and PCNA support services, ensuring efficient fund management and processing.",
//   openGraph: {
//     images: "/opengraph/disbursement-pcna.jpg",
//   },
// };

// export const LeaseAbstractionAuditMetaData: Metadata = {
//   title: "Lease Abstraction & Audit",
//   description:
//     "Improve lease management with our comprehensive lease abstraction and audit services, offering accurate data analysis and compliance checks.",
//   openGraph: {
//     images: "/opengraph/lease-abstraction.png",
//   },
// };

// export const LoanDocumentDigitisationMetaData: Metadata = {
//   title: "Loan Document Digitisation",
//   description:
//     "Digitise your loan documents effortlessly with our data digitisation services, ensuring accurate, accessible digital records for CRE portfolios.",
//   openGraph: {
//     images: "/opengraph/loan-loan-digitisation.png",
//   },
// };

// export const LoanOnboardingDigitizationMetaData: Metadata = {
//   title: "Loan Onboarding & Digitization",
//   description:
//     "Streamline loan onboarding with our digitization services, designed to simplify data integration and management for improved operational efficiency.",
//   openGraph: {
//     images: "/opengraph/loan-onboarding.png",
//   },
// };

// export const SalesforceCustomisationIntegrationMetaData: Metadata = {
//   title: "Salesforce Customisation & Integration",
//   description:
//     "Enhance your CRM with tailored Salesforce customisation and integration services, optimizing your commercial real estate operations and data flow.",
//   openGraph: {
//     images: "/opengraph/salesforce-customization.png",
//   },
// };

// export const CustomReportingDashboardsMetaData: Metadata = {
//   title: "Custom Reporting & Dashboards",
//   description:
//     "Transform your data into actionable insights with our custom reporting and dashboard solutions, crafted to support informed decision-making.",
//   openGraph: {
//     images: "/opengraph/custom-reporting.png",
//   },
// };

// export const CRETechnologyConsultingMetaData: Metadata = {
//   title: "CRE Technology Consulting",
//   description:
//     "Leverage expert CRE technology consulting to drive innovation and operational efficiency, ensuring a competitive edge in the real estate market.",
//   openGraph: {
//     images: "/opengraph/cre-consulting.png",
//   },
// };

// export const WhyClikAIMetaData: Metadata = {
//   title: "Why CLIK.AI – Our Advantage",
//   description:
//     "Discover why industry leaders choose CLIK.AI for advanced CRE solutions, combining innovative technology with unmatched expertise and support.",
//   openGraph: {
//     images: "/opengraph/default2.png",
//   },
// };

// export const PrivacyPolicyMetaData: Metadata = {
//   title: "CLIK.AI Privacy Policy",
//   description:
//     "Review our privacy policy to understand how CLIK.AI protects your data, ensuring transparency and compliance with data protection standards.",
//   openGraph: {
//     images: "/opengraph/default2.png",
//   },
// };

// export const TermsConditionsMetaData: Metadata = {
//   title: "CLIK.AI Terms & Conditions",
//   description:
//     "Read our terms and conditions to learn about the legal guidelines governing your use of CLIK.AI's innovative CRE solutions and services.",
//   openGraph: {
//     images: "/opengraph/default2.png",
//   },
// };
