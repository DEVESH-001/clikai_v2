import type { Metadata } from "next";
import Link from "next/link";
import { Shield, AlertTriangle, CheckCircle, AlertOctagon } from "lucide-react";

export const metadata: Metadata = {
  title: "Bug Bounty Program | Clik.ai",
  description:
    "Clik.ai's Bug Bounty Program rewards security researchers for identifying and responsibly disclosing vulnerabilities in our systems.",
};

export default function BugBountyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Shield className="h-10 w-10 text-blue-500 mr-4" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Bug Bounty Program
            </h1>
          </div>

          {/* Introduction */}
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700 mb-6">
              At Clik.ai, we are committed to ensuring the security of our
              platform and user data. We recognize the critical role that
              independent security researchers play in identifying and
              responsibly disclosing vulnerabilities. Our Bug Bounty Program is
              designed to reward researchers for their efforts in helping us
              maintain a secure environment.
            </p>
          </div>

          {/* Program Overview */}
          <div className="bg-blue-50 rounded-lg p-6 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Program Overview
            </h2>
            <p className="text-gray-700">
              Our Bug Bounty Program encourages security researchers to identify
              and report vulnerabilities in our systems. By participating, you
              contribute to the continuous improvement of our security measures
              while being recognized and rewarded for your efforts.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Scope */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Scope</h2>
              <p className="text-gray-700">
                The program covers vulnerabilities in Clik.ai&apos;s web
                applications, APIs, and related services. Specific assets
                included in the program are listed in our official bounty scope
                documentation. Vulnerabilities in third-party services not
                controlled by Clik.ai are considered out of scope.
              </p>
            </div>

            {/* Eligibility */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Eligibility
              </h2>
              <p className="text-gray-700 mb-4">
                To participate in the Bug Bounty Program, you must:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Adhere to responsible disclosure practices.</li>
                <li>
                  Be at least 18 years old or have parental/guardian consent.
                </li>
                <li>
                  Not be an employee of Clik.ai or an immediate family member of
                  an employee.
                </li>
              </ul>
            </div>
          </div>

          {/* Responsible Disclosure Guidelines */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Responsible Disclosure Guidelines
            </h2>
            <p className="text-gray-700 mb-4">
              We encourage researchers to follow these guidelines when reporting
              vulnerabilities:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                Report vulnerabilities exclusively through our designated
                disclosure channel.
              </li>
              <li>
                Do not exploit or publicly disclose vulnerabilities before they
                are resolved.
              </li>
              <li>
                Avoid actions that could harm users or systems, such as DDoS
                attacks or brute force testing.
              </li>
              <li>
                If sensitive user data is discovered, report it immediately and
                do not access or share it.
              </li>
            </ul>
          </div>

          {/* Reward Criteria */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Reward Criteria
            </h2>
            <p className="text-gray-700 mb-6">
              Rewards are based on the severity, impact, and exploitability of
              the reported vulnerability. The classification is as follows:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">
                      Severity
                    </th>
                    <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b flex items-center">
                      <AlertOctagon className="h-5 w-5 text-red-600 mr-2" />
                      <span className="font-medium">Critical</span>
                    </td>
                    <td className="py-3 px-4 border-b text-gray-700">
                      High-impact vulnerabilities leading to data breaches or
                      full system compromise.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b flex items-center">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                      <span className="font-medium">High</span>
                    </td>
                    <td className="py-3 px-4 border-b text-gray-700">
                      Vulnerabilities that allow unauthorized access or
                      privilege escalation.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b flex items-center">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="font-medium">Medium</span>
                    </td>
                    <td className="py-3 px-4 border-b text-gray-700">
                      Issues that require user interaction or have limited
                      impact.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="font-medium">Low</span>
                    </td>
                    <td className="py-3 px-4 border-b text-gray-700">
                      Minor security issues with minimal risk.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mt-4 italic">
              Clik.ai reserves the right to determine the final reward amount at
              its discretion.
            </p>
          </div>

          {/* Out of Scope Vulnerabilities */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Out of Scope Vulnerabilities
            </h2>
            <p className="text-gray-700 mb-4">
              The following types of issues are generally not eligible for
              rewards:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Issues requiring physical access to hardware.</li>
              <li>Social engineering attacks, including phishing attempts.</li>
              <li>
                Vulnerabilities in outdated browsers or operating systems beyond
                vendor support.
              </li>
              <li>Spam, email spoofing, or best practice recommendations.</li>
              <li>Findings from automated scans without manual validation.</li>
            </ul>
          </div>

          {/* Legal Considerations and Program Changes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Legal Considerations
              </h2>
              <p className="text-gray-700">
                By participating in the Bug Bounty Program, you agree to comply
                with all applicable laws and regulations. Unauthorized access,
                data destruction, or intentional service disruption will be
                considered a violation of legal and ethical standards.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Program Changes
              </h2>
              <p className="text-gray-700">
                Clik.ai reserves the right to modify or terminate the Bug Bounty
                Program at any time. Any changes will be communicated through
                our official channels.
              </p>
            </div>
          </div>

          {/* How to Report */}
          <div className="bg-blue-50 rounded-lg p-8 mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to Report a Vulnerability
            </h2>
            <p className="text-gray-700 mb-6">
              To report a vulnerability or ask questions about the program,
              please contact our security team at:
            </p>
            <a
              href="mailto:security@clik.ai"
              className="text-xl font-medium text-blue-600 hover:text-blue-800"
            >
              security@clik.ai
            </a>
          </div>

          {/* Our Commitment */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-700">
              We are dedicated to maintaining a secure environment for our users
              and value the contributions of the security research community.
              Thank you for helping us make Clik.ai safer!
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
