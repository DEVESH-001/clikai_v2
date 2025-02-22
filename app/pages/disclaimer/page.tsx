import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer ",
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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 mt-16">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#42A5F5] mb-12">
          Disclaimer
        </h1>

        <div className="space-y-8 text-gray-600">
          <section>
            <p className="text-lg leading-relaxed mb-6">
              Thank you for visiting our website!
            </p>
            <p className="text-lg leading-relaxed">
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
          </section>

          <section>
            <p className="text-lg leading-relaxed">
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
          </section>

          <section>
            <p className="text-lg leading-relaxed">
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
          </section>

          <section>
            <p className="text-lg leading-relaxed">
              Clik Technologies Inc., its Directors, Shareholders, Employees and
              Business Associates, shall not be responsible for any liabilities,
              losses, damages, costs, claims, charges and expenses whatsoever,
              including, but not limited to third-party, special, indirect,
              economic or consequential loss or damage including loss of profit,
              reputation, business revenue, goodwill or anticipated savings;
              caused by or contributed to by any event including use of Clik
              Technologies Inc. Products, Solutions and Services.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
