import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Disclaimer | Clik.ai",
  description:
    "Legal disclaimer and terms of use for Clik.ai website and services.",
  openGraph: {
    title: "Disclaimer | Clik.ai",
    description:
      "Legal disclaimer and terms of use for Clik.ai website and services.",
    url: "https://www.clik.ai/disclaimer",
    siteName: "Clik.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Clik.ai",
    description:
      "Legal disclaimer and terms of use for Clik.ai website and services.",
  },
};

export default function DisclaimerPage() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-indigo-50 ${GeistSans.className}`}
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-purple-100/20 to-indigo-100/20"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Disclaimer
        </h1>

        <Card className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <p className="text-xl font-semibold">
              IMPORTANT: Please read this disclaimer carefully before using our
              website and services
            </p>
          </div>

          <div className="p-6 md:p-8 space-y-6 text-gray-700">
            <p>Thank you for visiting our website!</p>

            <p>
              Unless noted otherwise, all the content within http://clik.ai/ is
              the sole property of Clik Technologies Inc., third-party rights
              are acknowledged wherever applicable. You may print any articles
              or content as permissible from the website, strictly meant for
              your personal use only. The website content cannot be reproduced
              in any manner, for any purpose whatsoever, without explicit
              written permission of Clik Technologies Inc. Any reproduction or
              editing by any means - mechanical or electronic, without the
              explicit written permission of Clik Technologies Inc. is
              particularly prohibited.
            </p>

            <p>
              Clik Technologies Inc. does not guarantee and will not be liable
              for any claims whatsoever with regard to the comments and content
              on the website. Further, it does not guarantee that all content,
              images and material appearing on the website are not infringing
              any registered or non-registered copyrights. Any infringement of
              any nature, if cited, is purely unintentional and without prior
              knowledge of Clik Technologies Inc. If pointed out, any
              infringement will be corrected by Clik Technologies Inc. after
              conducting proper verification with notification to the original
              owner of the information.
            </p>

            <p>
              All specifications, functionalities, features, skill sets and
              technology platforms are subject to change without prior notice.
              Certain services & solutions are dependent on country specific
              laws. All final deliveries are strictly as per accepted contracts
              only and may differ from time to time. Readers of the website,
              public at large and prospective clients own the responsibility of
              verifying the information given here to their satisfaction prior
              to using the information in any manner and/or signing any contract
              with Clik Technologies Inc.
            </p>

            <p>
              Clik Technologies Inc., its Directors, Shareholders, Employees and
              Business Associates, shall not be responsible for any liabilities,
              losses, damages, costs, claims, charges and expenses whatsoever,
              including, but not limited to third-party, special, indirect,
              economic or consequential loss or damage including loss of profit,
              reputation, business revenue, goodwill or anticipated savings;
              caused by or contributed to by any event including use of Clik
              Technologies Inc. Products, Solutions and Services.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
