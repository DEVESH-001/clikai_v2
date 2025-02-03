import { Card } from "@/components/ui/card";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";

export default function PrivacyPolicyPage() {
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

        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">Last Update: January 5, 2025</p>

        <Card className="bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-lg rounded-xl space-y-8">
          <section>
            <p className="text-gray-700">
              This privacy policy (the &quot;<b>Privacy Policy</b>&quot; or &quot;<b>Policy</b>
              &quot;) sets out the terms and conditions under which you may access or
              download content that we offer on the website located at
              https://clik.ai/ (the &quot;<b>Website</b>&quot;), and use our services and
              other features of the Website (collectively, the &quot;<b>Services</b>
              &quot;). This Policy applies to all users of the Website and the
              Services and is incorporated into and made a part of the Terms of
              Service. &#34;We&quot;, &#34;us&quot; or &#34;our&ldquo; is defined as{" "}
              <b>Clik Technologies Inc</b>. (&quot;<b>Clik</b>&quot;) and its affiliates,
              officers, agents, partners, and employees. Where applicable, &quot;you&quot;
              or &#34;your&quot; is defined as an individual user of the Website and/or
              Services. Your use of the Website and Services means that you
              accept, and agree to abide by, all provisions of this Privacy
              Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Application of This Policy
            </h2>
            <p className="text-gray-700">
              We have created this Privacy Policy to explain the type of
              information gathered from your visit to and use of the Website and
              Services and how such information may be used. This Privacy Policy
              will be continuously assessed against new technologies, business
              practices and our users&apos; needs. Please check this Privacy Policy
              from time to time for updates by checking the date of the &quot;Last
              Update&quot; at the top of this page. We will post any Privacy Policy
              changes on this page and, if the changes are significant, we will
              provide a more prominent notice (including, for certain Services,
              email notification of Privacy Policy changes). You acknowledge and
              agree that your access to our Website and your use of the Services
              following any posted changes to the Privacy Policy indicate your
              acceptance of such changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What is Personal Information?
            </h2>
            <p className="text-gray-700">
              This policy complies with Canada&apos;s Personal Information Protection
              and Electronic Documents Act (&quot;
              <b>PIPEDA</b>&quot;). In this Privacy Policy, &quot;
              <b>Personal Information</b>&quot; means information that identifies or
              can be used to identify a living individual, including, without
              limitation, your name, address, e-mail address, country of
              residence, and other information when such information is combined
              with other information. Personal Information does not include
              business contact information and also does not include &quot;
              <b>aggregate</b>&quot; information, which is data we collect about and
              through the use of our Website and the Services and may include
              anonymized data which does not identify any individuals. Our
              Privacy Policy does not restrict or limit our collection and use
              of aggregate information or other types of non-personal
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent</h2>
            <p className="text-gray-700">
              By accessing the Website and using the Services, you fully
              understand, accept, and voluntarily consent to the collection,
              use, retention and disclosure of Personal Information in
              accordance with this Privacy Policy. It is always your choice
              whether or not you provide us with your Personal Information;
              however, a decision to withhold Personal Information may restrict
              or prevent us from providing you certain features of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Collection of Personal Information
            </h2>
            <p className="text-gray-700">
              Certain features of the Services require you to first complete a
              registration process and establish an account (&quot;<b>Account</b>&quot;).
              In doing so, you will be required to provide basic information
              such as your first and last name, valid email address and
              establish a password (&quot;<b>Account Information</b>&quot;). We will
              retain Account Information and associate it with your Account. You
              are responsible for updating and maintaining the truth and
              accuracy of the Personal Information you provide to us relating to
              your Account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We collect Personal Information by fair and lawful means and limit
              the collection of Personal Information to what is necessary for
              the purpose for which it was collected. You acknowledge that we
              may use Personal Information that you voluntarily disclose to us
              to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Process your transactions</li>
              <li>
                Respond to your request for products or services offered through
                the Website
              </li>
              <li>Enhance products or services to better suit your needs</li>
              <li>
                Notify you about products, services, and other opportunities we
                think will be of interest to you, at all times in compliance
                with applicable laws
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Disclosure of Your Personal Information
            </h2>
            <p className="text-gray-700 mb-4">
              Except as otherwise disclosed to you, we will not sell or rent
              your Personal Information to any other party and will only use and
              disclose your Personal Information for the purposes for which it
              was collected as described in this Privacy Policy. However, you
              agree that we may disclose your Personal Information in the
              circumstances set out below:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                We may disclose your Personal Information with your prior
                consent
              </li>
              <li>
                We may be required by law to disclose Personal Information
                without your consent in the event of emergency situations or
                when required by government or other legal authority
              </li>
              <li>
                We also disclose Personal Information to third parties in
                connection with a corporate re-organization, merger or
                amalgamation, or the sale of all or substantially all of our
                assets
              </li>
              <li>
                We may share your Personal Information with service providers
                who perform certain of the Services on our behalf
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Collection of Non-Personal Information
            </h2>
            <p className="text-gray-700">
              You acknowledge and agree that from time to time we may collect
              non-personal information from your use of the Services, which may
              include, without limitation, server log files, computer type, IP
              addresses, or areas of a site being clicked on most frequently, OS
              version, Internet browser, and Internet browser version, in order
              to help us better deliver the Services and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 mb-4">
              We and our service providers use cookies and similar tracking
              technologies to help us deliver a better service and user
              experience. These technologies help us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Understand and save your preferences for future visits</li>
              <li>
                Compile aggregate data about site traffic and site interactions
              </li>
              <li>Improve our website and services</li>
              <li>Deliver more relevant advertising</li>
            </ul>
            <p className="text-gray-700 mt-4">
              You can choose to have your computer warn you each time a cookie
              is being sent, or you can choose to turn off all cookies through
              your browser settings. If you disable cookies, some features of
              our Services may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy or concerns
              about how we manage your personal information, please contact us
              by email at{" "}
              <a
                href="mailto:privacy@clik.ai"
                className="text-blue-600 hover:text-blue-800"
              >
                privacy@clik.ai
              </a>{" "}
              or by mail addressed to:
            </p>
            <p className="mt-4 text-gray-700">
              Clik Technologies Inc.
              <br />
              325 Front Street West, Suite 400
              <br />
              Toronto, Ontario M5V 2Y1
              <br />
              Canada
            </p>
          </section>
        </Card>
      </div>
    </div>
  );
}
