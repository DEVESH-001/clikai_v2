import { Metadata } from "next";

// Base configuration for metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://clikai-v2.vercel.app/'),
  title: {
    template: '%s | Clik.AI',
    default: 'Clik.AI - AI Software for Commercial Real Estate'
  },
  description: 'Leading AI software for multifamily and commercial real estate investment underwriting.',
  openGraph: {
    type: 'website',
    siteName: 'Clik.AI',
    images: '/opengraph/default.svg',
  }
};

// Contact page metadata
export const contactUsMetadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Clik.ai - Leading AI software for multifamily and commercial real estate investment underwriting.',
  openGraph: {
    images: '/opengraph/contact.png',
  },
};

export const termsAndConditionMetaData: Metadata = {
  title: 'Terms and Conditions',
  description: 'Clik.ai - Supercharge your way to underwrite commercial real estate.',
  openGraph: {
    images: '/opengraph/terms.jpg',
  },
};

export const securityMetaData: Metadata = {
  title: 'Security',
  description: 'Clik.ai - Supercharge your way to underwrite commercial real estate.',
  openGraph: {
    images: '/opengraph/security.jpg',
  },
};

export const descMetaData: Metadata = {
  title: 'Disclaimer',
  description: 'Clik.ai site disclaimer',
  openGraph: {
    images: '/opengraph/disclaimer.jpg',
  },
};

// PRODUCTS
export const AutoUWMetaData: Metadata = {
  title: 'AutoUW - Automated Underwriting',
  description: 'Streamline your underwriting process with AutoUW, our AI-powered tool designed for rapid, accurate underwriting in commercial real estate.',
  openGraph: {
    images: '/opengraph/autouw.jpg',
  },
};

export const InvestAssistMetaData: Metadata = {
  title: 'InvestAssist - Investment Assistance',
  description: 'Empower your investment decisions with InvestAssist, offering data-driven insights and analysis to optimize your CRE investment strategies.',
  openGraph: {
    images: '/opengraph/investassist.jpg',
  },
};

export const SmartExtractMetaData: Metadata = {
  title: 'SmartExtract - Intelligent Data Extraction',
  description: 'Optimize document processing with SmartExtract, our solution for fast, accurate extraction of critical data from commercial real estate files.',
  openGraph: {
    images: '/opengraph/smartextract.jpg',
  },
};

export const Clarity360tMetaData: Metadata = {
  title: 'Loan Abstract - Document Data Abstraction',
  description: 'Simplify loan document analysis with Loan Abstract, our tool designed to extract and abstract key data with precision from loan documents.',
  openGraph: {
    images: '/opengraph/loanabstract.jpg',
  },
};

// SERVICES
export const UnderwritingDDSMetaData: Metadata = {
  title: 'Underwriting & Due Diligence Support',
  description: 'Enhance your underwriting process with expert due diligence support services, ensuring comprehensive analysis and risk mitigation for your deals.',
  openGraph: {
    images: '/opengraph/underwriting-dds.jpg',
  },
};

export const CustomFDMMetaData: Metadata = {
  title: 'Custom Financial Models',
  description: 'Build tailored financial models with our custom development services, designed to address the unique needs of your CRE investments and financing.',
  openGraph: {
    images: '/opengraph/custom-fdm.jpg',
  },
};

export const DisbursementPCNAMetaData: Metadata = {
  title: 'Disbursement & PCNA Support',
  description: 'Streamline your financial operations with dedicated disbursement and PCNA support services, ensuring efficient fund management and processing.',
  openGraph: {
    images: '/opengraph/disbursement-pcna.jpg',
  },
};

export const LeaseAbstractionAuditMetaData: Metadata = {
  title: 'Lease Abstraction & Audit',
  description: 'Improve lease management with our comprehensive lease abstraction and audit services, offering accurate data analysis and compliance checks.',
  openGraph: {
    images: '/opengraph/lease-abstraction.jpg',
  },
};

export const LoanDocumentDigitisationMetaData: Metadata = {
  title: 'Loan Document Digitisation',
  description: 'Digitise your loan documents effortlessly with our data digitisation services, ensuring accurate, accessible digital records for CRE portfolios.',
  openGraph: {
    images: '/opengraph/loan-digitisation.jpg',
  },
};

export const LoanOnboardingDigitizationMetaData: Metadata = {
  title: 'Loan Onboarding & Digitization',
  description: 'Streamline loan onboarding with our digitization services, designed to simplify data integration and management for improved operational efficiency.',
  openGraph: {
    images: '/opengraph/loan-onboarding.jpg',
  },
};

export const SalesforceCustomisationIntegrationMetaData: Metadata = {
  title: 'Salesforce Customisation & Integration',
  description: 'Enhance your CRM with tailored Salesforce customisation and integration services, optimizing your commercial real estate operations and data flow.',
  openGraph: {
    images: '/opengraph/salesforce-integration.jpg',
  },
};

export const CustomReportingDashboardsMetaData: Metadata = {
  title: 'Custom Reporting & Dashboards',
  description: 'Transform your data into actionable insights with our custom reporting and dashboard solutions, crafted to support informed decision-making.',
  openGraph: {
    images: '/opengraph/custom-reporting.jpg',
  },
};

export const CRETechnologyConsultingMetaData: Metadata = {
  title: 'CRE Technology Consulting',
  description: 'Leverage expert CRE technology consulting to drive innovation and operational efficiency, ensuring a competitive edge in the real estate market.',
  openGraph: {
    images: '/opengraph/cre-consulting.jpg',
  },
};

export const WhyClikAIMetaData: Metadata = {
  title: 'Why CLIK.AI – Our Advantage',
  description: 'Discover why industry leaders choose CLIK.AI for advanced CRE solutions, combining innovative technology with unmatched expertise and support.',
  openGraph: {
    images: '/opengraph/why-clikai.jpg',
  },
};

export const PrivacyPolicyMetaData: Metadata = {
  title: 'CLIK.AI Privacy Policy',
  description: 'Review our privacy policy to understand how CLIK.AI protects your data, ensuring transparency and compliance with data protection standards.',
  openGraph: {
    images: '/opengraph/privacy-policy.jpg',
  },
};

export const TermsConditionsMetaData: Metadata = {
  title: 'CLIK.AI Terms & Conditions',
  description: 'Read our terms and conditions to learn about the legal guidelines governing your use of CLIK.AI\'s innovative CRE solutions and services.',
  openGraph: {
    images: '/opengraph/terms-conditions.jpg',
  },
};
