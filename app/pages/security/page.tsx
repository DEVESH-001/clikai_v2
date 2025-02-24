import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security ",
  description:
    "Learn about Clik.ai's commitment to security and privacy, including our SOC 2 compliance and security standards.",
  openGraph: {
    title: "Security | Clik.ai",
    description:
      "Learn about Clik.ai's commitment to security and privacy, including our SOC 2 compliance and security standards.",
    url: "https://www.clik.ai/security",
    siteName: "Clik.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security | Clik.ai",
    description:
      "Learn about Clik.ai's commitment to security and privacy, including our SOC 2 compliance and security standards.",
  },
};

export default function SecurityPage() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #e8f0fe 50%, #fce7f6 100%)",
      }}
    >
      {/* Background blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-[500px] h-[500px] bg-pink-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <section className="px-4 md:px-16 mt-24">
        <h1 className="text-4xl md:text-7xl font-bold text-[#42A5F5]">
          Security
        </h1>
      </section>
      {/* Content */}
      <div className="relative container mx-auto px-4 py-24">
        {/* Hero Section */}

        {/* Security at Clik Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3F3D56] mb-6">
            Security at Clik
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            At Clik.ai, we consider privacy and security at the core of our
            platform and foundational requirements for all new feature
            development. Earning the trust of our users and keeping that trust
            is our top priority; so we hold ourselves to the highest privacy and
            security standards.
          </p>
          <div className="flex justify-center mb-8">
            <Image
              src="/images/Assets/Security.png"
              alt="Security at Clik"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3F3D56] mb-6">
            SOC 2 compliance
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Clik has undergone a Service Organization Controls audit (SOC 2 Type
            1). Please contact your account manager or security@clik.ai to
            request Clik&apos;s most recent report.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3F3D56] mb-6">
            Network and system security
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Clik supports encrypted data transfer using HTTPS with high-grade encryption. Data transfer between AWS processing nodes and the storage in AWS is also protected with an encryption.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            All the Clik servers are located in AWS data centers in the US that
            are SOC 1, SOC 2 and ISO 27001 certified. AWS data centers have
            round-the-clock security, automatic fire detection, suppression,
            fully redundant power systems, and strict access controls.
          </p>
        </section>

        {/* Service Reliability Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3F3D56] mb-6">
            Service reliability and durability
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Clik utilizes industry-leading Amazon Web Services (AWS) hosted
            infrastructure. Backups are geo-redundantly replicated across
            multiple availability zones for data durability. Clik maintains
            business continuity and disaster recovery plans. Components of the
            disaster recovery plan include multiple site operations playbooks,
            which are regularly reviewed and rehearsed. Clik implements
            extensive service monitoring, and our operations team is on call
            24x7.
          </p>
        </section>

        {/* Organizational Security Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3F3D56] mb-6">
            Organizational and information security
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Access to the service by Clik employees is controlled and logged.
            Whilst there are several access levels, only a limited number of
            employees have access to the part of the system containing
            confidential data. The Information security policy is also reviewed
            and updated from time to time.
          </p>
        </section>

        {/* Data Privacy Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3F3D56] mb-6">
            Data privacy and portability
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Your data is yours. Clik does not sell or rent any customer
            information or information provided to the service. For more
            information, please review our{" "}
            <Link
              href="/privacy-policy"
              className="text-blue-500 hover:text-blue-600 underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3F3D56] mb-8">
            Data Usage FAQ
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#3F3D56] mb-3">
                Does Clik use the documents I upload?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Clik does not use any of your content (such as documents and
                labels) for any purpose except to provide you with the extracted
                information from those documents.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#3F3D56] mb-3">
                Will Clik share the Document I Upload?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Clik will not make the document that you have uploaded available
                to public, or share it with anyone else, except to provide you
                with the extracted information from those documents.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#3F3D56] mb-3">
                Will the document I upload to the Clik, the results or other
                information about the request itself, be stored on Clik servers?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                We don&apos;t store or access your data
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Clik is not a storage service; it&apos;s for extraction and
                processing only. Documents and results are deleted in 2 ways
                only:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600 text-lg leading-relaxed">
                <li>
                  User can delete them immediately after processing using the
                  delete function in the context menu. So, you are in full
                  control of your data.
                </li>
                <li>
                  If the data is not deleted by users, an automated procedure
                  will remove all the documents within 24 hours (for processed
                  documents) and within 72 hours (for unprocessed documents)
                  from our servers.
                </li>
              </ul>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                When user uploads the document to the platform, we store that
                document for a short period of time in order to perform the
                extraction and return the results to you. The stored document is
                typically deleted in a few hours. Clik also stores the documents
                on S3 storage but the user can delete that document anytime and
                all the information regarding that document will be deleted
                instantly.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                A limited number of authorized Clik personnel may review this
                document for the sole purpose of reproducing and fixing the
                issue this document has caused. In such cases the original
                document will also be deleted, and only a derivative document,
                without any personal/confidential data, can be used to fix the
                issue.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#3F3D56] mb-3">
                Does Clik use my data for improvement?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Currently, Clik does not use the content you send to train and
                improve our Clik features such as its machine perception model.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#3F3D56] mb-3">
                Does Clik claim ownership of the content I upload?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Clik does not claim any ownership in any of the content
                (Documents or Images) that you transmit to the Clik.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
