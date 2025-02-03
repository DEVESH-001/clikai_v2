import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";

export default function TermsAndConditionsPage() {
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
          Terms and Conditions
        </h1>

        <Card className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <p className="text-xl font-semibold">
              IMPORTANT: Carefully read these Terms of Service (this
              &ldquo;Agreement&#34;) before using the Service (as defined below)
            </p>
          </div>

          <div className="p-6 md:p-8 space-y-6 text-gray-700">
            <p>
              This Agreement creates a binding legal agreement between you
              (&rdquo;Customer&rdquo;) and Clik Technologies Inc. with a principal place of
              business at ( &quot;Clik.ai&ldquo;).
            </p>

            <p className="font-semibold text-gray-900">
              BY USING THE SERVICE, YOU IRREVOCABLY ACCEPT THE TERMS AND
              CONDITIONS OF THIS AGREEMENT. You also agree to ensure that anyone
              who uses the Service using your password or login information
              abides by this Agreement.
            </p>

            <p className="font-semibold text-gray-900">
              IF YOU ARE ENTERING THIS AGREEMENT ON BEHALF OF A COMPANY OR OTHER
              LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE THE AUTHORITY TO BIND
              SUCH ENTITY TO THIS AGREEMENT, IN WHICH CASE, THE TERM &rdquo;CUSTOMER&#34;
              WILL REFER TO SUCH ENTITY. IF YOU DO NOT HAVE SUCH AUTHORITY, OR
              IF YOU DO NOT AGREE WITH THIS AGREEMENT, YOU MUST NOT ACCEPT THIS
              AGREEMENT AND MAY NOT USE THE SERVICE.
            </p>

            <p>
              By accepting this Agreement, you agree to be bound by the terms
              and conditions of this Agreement, as well as Clik.ai Privacy
              Policy located at (the &#34;Privacy Policy&#34;), as it may be amended
              from time to time in the future.
            </p>

            <p>
              Clik.ai may update this Agreement or the Privacy Policy at any
              time, without notification to you, and you should review this
              Agreement and the Privacy Policy from time to time by accessing
              the Service. Your continued use of the Service will be deemed
              irrevocable acceptance of any such revisions. Before you continue,
              you should print or save a local copy of this Agreement and the
              Privacy Policy for your records.
            </p>

            <p>
              In order to enter into this Agreement, you must have reached the
              legal age of majority in your jurisdiction of residence, and by
              fully able and competent to enter into the terms, conditions,
              obligations, affirmations, representation and warranties set forth
              in this Agreement, and to abide by and comply with this Agreement.
              It is your responsibility to ensure that you are legally eligible
              to enter into this Agreement under any laws applicable to you. If
              you accept this Agreement, you represent that you have the
              capacity to be bound by it.
            </p>
          </div>
        </Card>

        <div className="space-y-12">
          <Section
            title="1. DEFINITIONS"
            content={[
              {
                term: "1.1 'Confidential Information'",
                definition:
                  "means all information regarding Clik.ai's business, including, without limitation, technical, marketing, financial, employee, planning and other confidential or proprietary information, disclosed under this Agreement, that is clearly identified as confidential or proprietary at the time of disclosure or that Customer knew or should have known, under the circumstances, was considered confidential or proprietary. Confidential Information includes information derived from or concerning the Service, the System or the Documentation and the terms of this Agreement.",
              },
              {
                term: "1.2 'Customer Data'",
                definition:
                  "means any data, information or information contained in any database, template or other similar document submitted by Customer through the Service or provided by Customer to Clik.ai as part of the Service.",
              },
              {
                term: "1.3 'Documentation'",
                definition:
                  "means the designated final user manuals, handbooks, online materials, specifications or forms furnished by Clik.ai that describe the features, functionality or operation of the System.",
              },
              { term: "1.4 'Fees'", definition: "is defined in Section 4." },
              {
                term: "1.5 'Order Form'",
                definition:
                  "means collectively the order documents representing the initial subscription to the Service (and any subsequent modifications to the subscription agreed to between the parties in writing from time to time) that, upon execution, are incorporated in and made a part of this Agreement from time to time.",
              },
              {
                term: "1.6 'Service'",
                definition:
                  "means the on-line service delivered by Clik.ai to Customer using the System, as made available by Clik.ai from time-to-time as specified in the Order Form.",
              },
              {
                term: "1.7 'System'",
                definition:
                  "means the technology, including hardware and software, used by Clik.ai to deliver the Service to Customer in accordance with this Agreement.",
              },
              {
                term: "1.8 'UserID'",
                definition: "is defined in Section 3.1.",
              },
              {
                term: "1.9 'Users'",
                definition:
                  "means Customer's employees, representatives, consultants, contractors or agents who are authorized to use the Service on behalf of Customer and have been supplied user identifications and passwords for this purpose.",
              },
            ]}
          />

          <Section
            title="2. THE SERVICE"
            content={[
              {
                term: "2.1 Subscription to the Service",
                definition:
                  "Conditional on Customer: (a) complying with the provisions of this Agreement, including but not limited to paying the Fees as required by this Agreement; and (b) cooperating with the reasonable requests of Clik.ai, Clik.ai hereby grants to Customer a non-sublicensable, non-transferable, non-exclusive subscription to access and use the Service in accordance with this Agreement solely for Customer's internal business purposes and not for resale or to provide services to third parties. Customer may order the Service under this Agreement by placing written, signed orders on an Order Form. Only the execution of an Order Form by Customer and by Clik.ai constitutes a binding contract between those parties. Customer agrees that its purchase of the subscription is neither contingent upon the delivery of any future functionality or features nor dependent upon any oral or written public comments made by Clik.ai with respect to future functionality or features. For Customer purchasing an evaluation license Clik.ai shall be entitled to, without limiting any of its rights under this Agreement, withdraw from the Service if Customer's use of the Service exceeds a reasonable and proportionate level of utilization required for evaluation purposes.",
              },
              {
                term: "2.2 Support",
                definition:
                  "Subject to the terms of this Agreement, including, without limitation, the payment of the Fees set forth in Section 4 hereof, Clik.ai shall use commercially reasonable efforts to correct any reproducible failure of the Service to substantially conform to its expected operation, provided that Clik.ai will not have an obligation to provide a correction for all such nonconformities.",
              },
              {
                term: "2.3 Internet Security Disclaimer",
                definition:
                  "Customer acknowledges and agrees that Clik.ai exercises no control over, and accepts no responsibility for, any content passing through the Internet or for Internet connectivity outside of Clik.ai's control. Customer acknowledges that the Internet is inherently risky despite reasonable measures being taken, and Customer assumes responsibility for its use of the Service over the Internet.",
              },
              {
                term: "2.4 Limitation, Suspension or Termination of Access",
                definition:
                  "In addition to other rights and remedies of Clik.ai under this Agreement, Clik.ai may suspend, terminate or limit (in Clik.ai's sole discretion) Customer's access to or use of the Service, or any part of it, without notice in order to: (a) prevent damage to, or degradation of the integrity of the System or any of Customer's systems; (b) comply with any law, regulation, court order or other governmental request or order; or (c) otherwise protect Clik.ai from harm to its reputation or business. Clik.ai will use commercially reasonable efforts to notify Customer of a limitation, suspension or termination action as soon as reasonably practicable. In the event of a limitation or suspension, Clik.ai will restore Customer's access to the Service when Clik.ai determines the event has been resolved. Nothing in this Agreement will limit Clik.ai's right to take any action or invoke remedies, or will act as a waiver of Clik.ai's rights in any way with respect to any of the foregoing activities. Clik.ai will not be responsible for any loss or damages of any kind incurred by Customer as a result of any limitation, termination or suspension of the Service under this Section 2.4.",
              },
            ]}
          />

          <Section
            title="3. CUSTOMER'S USE OF THE SERVICE"
            content={[
              {
                term: "3.1 Access and Security Guidelines",
                definition:
                  "Subject to any limitations associated with Customer's subscription account, Customer may set up User accounts by supplying a unique user identification name and password ('UserID') to Clik.ai for each User. Users may only access and use the Service with the specific UserID. Customer is responsible to ensure UserIDs are not shared, and that Users retain the confidentiality of their UserIDs. Customer is responsible for any and all activity occurring under the UserIDs associated with Users. Customer will promptly notify Clik.ai of any actual or suspected unauthorized use of the Service. Clik.ai may require that a UserID be replaced at any time.",
              },
              {
                term: "3.2 Customer Responsibilities and Restrictions",
                definition:
                  "Customer will, at all times, comply with all applicable local, state, federal and foreign laws in using the Service. Without limiting the generality of Section 3.1, Customer agrees that Customer will not, and will not permit any person, including without limitation the Users, to:",
              },
            ]}
          />

          <Card className="bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold mb-4">
              3.2 Customer Responsibilities and Restrictions (continued)
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                use the Service other than as permitted by this Agreement;
              </li>
              <li>
                use the Service to violate, infringe or appropriate any person&apos;s
                privacy rights, publicity rights, defamation rights,
                intellectual property rights, proprietary rights, contractual
                rights or any other legal right;
              </li>
              <li>
                use the Service in a manner that is misleading, deceptive or
                fraudulent or otherwise illegal or promotes illegal activities,
                including engaging in phishing or otherwise obtaining financial
                or other personal information in a misleading manner or for
                fraudulent or misleading purposes;
              </li>
              <li>
                use the Service in a manner that is libelous or defamatory,
                harmful to minors in any way, or that is otherwise threatening,
                abusive, violent, harassing, malicious or harmful to any person
                or entity, or is invasive of another&#39;s privacy;
              </li>
              <li>
                use the Service in a manner that is hateful or discriminatory
                based on race, colour, sex, religion, nationality, ethnic or
                national origin, marital status, disability, sexual orientation
                or age or is otherwise objectionable, as reasonably determined
                by Clik.ai;
              </li>
              <li>
                use the Service to impersonate a Clik.ai employee, or any other
                person, or falsely state or otherwise misrepresent your
                affiliation with any person or entity;
              </li>
              <li>
                if your subscription for or use of the Service involves the use
                of an account for any third party site or service (each, a
                &quot;Third Party Account&ldquo;), directly or indirectly use such Third
                Party Account in a manner that is in contravention of the terms
                of use applicable to such Third Party Account;
              </li>
              <li>
                sublicense or transfer any of Customer&#39;s rights under this
                Agreement, except as otherwise provided in this Agreement, or
                otherwise use the Service for the benefit of a third party or to
                operate a service bureau;
              </li>
              <li>
                copy, modify, alter, change, translate, decrypt, obtain or
                extract the source code of, create derivative works from,
                reverse engineer, reverse assemble, decompile, disassemble or
                reverse compile any part of the Service;
              </li>
              <li>
                use or launch any automated system, including without limitation
                any &quot;robot&quot; or &quot;spider&quot; that accesses the Service;
              </li>
              <li>
                for Customer purchasing an evaluation license, use the Service
                other than for the purpose of evaluating the Service; without
                limiting this restriction, the Customer must not make any &apos;live&rsquo;
                or &apos;production&apos; use of the Service and must not rely upon the
                uninterrupted availability of the Service or related storage; or
              </li>
              <li>
                interfere with, or attempt to interfere with, the Service, the
                System or any other networks or services connected to the
                Service, whether through the use of viruses, bots, worms or any
                other computer code, file or program that interrupts, destroys
                or limits the functionality of any computer software or
                hardware.
              </li>
            </ul>
          </Card>

          <Section
            title="3.3 Customer Data"
            content={[
              {
                term: "",
                definition:
                  "Customer is solely responsible for the Customer Data and will not provide, post or transmit any Customer Data or any other information, data or material that: (a) infringes or violates any intellectual property rights, publicity/privacy rights, law or regulation; or (b) contains any viruses or programming routines intended to damage, surreptitiously intercept or expropriate any system, data or personal information. Clik.ai may take remedial action if Customer Data violates this Section 3.3, however, Clik.ai is under no obligation to review Customer Data for accuracy or potential liability.",
              },
            ]}
          />

          <Section
            title="4. FEES, PAYMENT AND SUSPENSION"
            content={[
              {
                term: "",
                definition:
                  "As consideration for the subscription to the Service, Customer will pay Clik.ai the fees ('Fees') set forth in and in accordance with the Order Form. All Fees will be billed in advance on an annual basis and are due within thirty (30) days of receipt of invoice, unless otherwise agreed to in the Order Form. Overdue amounts shall accrue interest at the rate of 12% per annum, or at the highest legal interest rate, if less. Customer shall reimburse Clik.ai for all expenses (including reasonable attorneys' fees) incurred by Clik.ai to collect any amount that is not paid when due. All Fees owed by Customer in connection with this Agreement are exclusive of, and Customer shall pay, all sales, use, excise and other taxes that may be levied upon Customer in connection with this Agreement, except for employment taxes and taxes based on Clik.ai's net income. Clik.ai reserves the right (in addition to any other rights or remedies Clik.ai may have) to discontinue the Service and suspend all UserIDs and Customer's access to the Service if any Fees set forth in the Order Form are more than thirty (30) days overdue until such amounts are paid in full. Customer shall maintain complete, accurate and up-to-date Customer billing and contact information at all times.",
              },
            ]}
          />

          <Section
            title="5. CONFIDENTIAL INFORMATION"
            content={[
              {
                term: "5.1 Obligation",
                definition:
                  "Customer agrees (a) to hold the Confidential Information in strict confidence, (b) to limit access to the Confidential Information to those of its employees or agents having a need to know and who are bound by confidentiality obligations at least as restrictive as those contained herein, and (c) not to use the Confidential Information for any purpose except as expressly permitted hereunder. Notwithstanding the foregoing, Customer will not be in violation of this Section 5.1 with regard to a disclosure that was in response to a valid order or requirement by a court or other governmental body, provided that Customer gives Clik.ai prior written notice of such disclosure in order to permit Clik.ai to seek confidential treatment of such information.",
              },
              {
                term: "5.2 Exceptions",
                definition:
                  "The restrictions on use and disclosure of Confidential Information set forth above will not apply to any Confidential Information, or portion thereof, which (a) is or becomes a part of the public domain through no act or omission of Customer, (b) was in Customer's lawful possession prior to the disclosure, as shown by Customer's competent written records, (c) is independently developed by Customer without reference to the Confidential Information, as shown by Customer's competent written records, or (d) is lawfully disclosed to Customer by a third party without restriction on disclosure.",
              },
            ]}
          />

          <Section
            title="6. OWNERSHIP"
            content={[
              {
                term: "6.1 System and Technology",
                definition:
                  "Customer acknowledges that Clik.ai retains all right, title and interest in and to the System and all software, materials, formats, interfaces, information, data, content and Clik.ai proprietary information and technology used by Clik.ai or provided to Customer in connection with the Service (the 'Clik.ai Technology'), and that the Clik.ai Technology is protected by intellectual property rights owned by or licensed to Clik.ai. Other than as expressly set forth in this Agreement, no license or other rights in the Clik.ai Technology are granted to the Customer, and all such rights are hereby expressly reserved by Clik.ai. Clik.ai shall have a royalty-free, worldwide, transferable, sublicenseable, irrevocable, perpetual license to use or incorporate into the Service any suggestions, enhancement requests, recommendations or other feedback provided by Customer, including Users, relating to the Service.",
              },
              {
                term: "6.2 Customer Data",
                definition:
                  "Customer retains all right, title and interest in and to the Customer Data. Clik.ai will only use Customer Data to provide the Service under this Agreement. Customer will be solely responsible for providing all Customer Data required for the proper operation of the Service. Customer grants to Clik.ai all necessary licenses in and to such Customer Data solely as necessary for Clik.ai to provide the Service to Customer. Clik.ai will not knowingly use or access any Customer Data unless authorized to do so by Customer and, in such circumstances, Clik.ai will access and use such Customer Data only as required to perform requested services on behalf of Customer.",
              },
            ]}
          />

          <Section
            title="7. TERM AND TERMINATION"
            content={[
              {
                term: "7.1 Term",
                definition:
                  "The term of this Agreement will commence on the Effective Date and will continue indefinitely, unless otherwise agreed to in the Order Form, until terminated by either party as set forth in this Section 7.",
              },
              {
                term: "7.2 Termination for Convenience",
                definition:
                  "Either party may terminate this Agreement for any reason by giving the other party at least thirty (30) days' prior written notice.",
              },
              {
                term: "7.3 Termination for Default",
                definition:
                  "Either party may terminate this Agreement upon written notice if the other party materially breaches this Agreement and does not cure such breach (if curable) within thirty (30) days after written notice of such breach.",
              },
              {
                term: "7.4 Effect of Termination",
                definition:
                  "Upon the termination of this Agreement for any reason, (a) any amounts owed to Clik.ai under this Agreement before such termination will become immediately due and payable; and (b) Customer will return to Clik.ai all property (including any Confidential Information) of Clik.ai in its possession or control. Clik.ai agrees that upon any early termination of this Agreement, Clik.ai will allow the Customer to access, without the right to modify, enhance or add to, the Customer Data (either through on-line access or an off-line mechanism provided by Clik.ai) for up to days after termination. Thereafter, Clik.ai will remove all Customer Data from the System and all Customer access to or use of the System and Service will be immediately suspended. The rights and duties of the parties under Sections 4 through 6, this Section 7.4 and Sections 8 through 11 will survive the termination or expiration of this Agreement.",
              },
            ]}
          />

          <Section
            title="8. DISCLAIMER OF WARRANTIES"
            content={[
              {
                term: "",
                definition:
                  "THE SERVICE AND ANY OTHER PRODUCTS AND SERVICES PROVIDED BY CLIK.AI TO CUSTOMER ARE PROVIDED 'AS IS', 'AS AVAILABLE', WITH ALL FAULTS AND WITHOUT ANY WARRANTIES, REPRESENTATIONS OR CONDITIONS OF ANY KIND. CLIK.AI HEREBY DISCLAIMS ALL EXPRESS, IMPLIED, COLLATERAL OR STATUTORY WARRANTIES, REPRESENTATIONS OR CONDITIONS, WHETHER WRITTEN OR ORAL, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, TITLE, NON-INFRINGEMENT, SECURITY, RELIABILITY, COMPLETENESS, QUIET ENJOYMENT, ACCURACY, QUALITY, INTEGRATION OR FITNESS FOR A PARTICULAR PURPOSE. CLIK.AI DOES NOT WARRANT THAT THE SERVICE WILL OPERATE WITHOUT INTERRUPTION OR BE ERROR FREE. WITHOUT LIMITING THE GENERALITY OF ANY OF THE FOREGOING, CLIK.AI EXPRESSLY DISCLAIMS ANY REPRESENTATION OR WARRANTY THAT ANY DATA OR INFORMATION PROVIDED TO CUSTOMER IN CONNECTION WITH CUSTOMER'S USE OF THE SERVICE (INCLUDING ALERTS AND RECOMMENDATIONS) IS ACCURATE, OR CAN OR SHOULD BE RELIED UPON BY CUSTOMER FOR ANY PURPOSE WHATSOEVER.",
              },
              {
                term: "",
                definition:
                  "CLIK.AI IS NOT RESPONSIBLE FOR THE ACTS OR OMISSIONS OF, OR FOR THE FAILINGS OF, ANY THIRD PARTY PROVIDER OF ANY SERVICE, NETWORK, SOFTWARE OR HARDWARE, INCLUDING BUT NOT LIMITED TO CROWDWORKER PLATFORMS, INTERNET SERVICE PROVIDERS, HOSTING SERVICES UTILIZED BY CLIK.AI, TELECOMMUNICATIONS PROVIDERS, OR ANY SOFTWARE OR HARDWARE NOT PROVIDED BY CLIK.AI.",
              },
              {
                term: "",
                definition:
                  "THE SERVICES ARE OFFERED AND CONTROLLED BY CLIK.AI FROM ITS FACILITIES IN CANADA. CLIK.AI MAKES NO REPRESENTATIONS THAT THE SERVICES ARE APPROPRIATE OR AVAILABLE FOR USE IN OTHER LOCATIONS. THOSE WHO ACCESS OR USE THE SERVICE FROM OTHER JURISDICTIONS DO SO AT THEIR OWN VOLITION ARE RESPONSIBLE FOR COMPLIANCE WITH LOCAL LAW.",
              },
            ]}
          />

          <Section
            title="9. INDEMNITY"
            content={[
              {
                term: "",
                definition:
                  "Customer agrees to indemnify, defend and hold harmless Clik.ai and its affiliates, and each of their respective officers, directors, agents, shareholders, employees and representatives (collectively, the 'Indemnified Parties'), from and against any third party claim, demand, loss, damage, cost or liability (including reasonable attorneys' fees) (collectively and individually, 'Claims') incurred by or made against the Indemnified Parties in connection with any Claims arising out of or relating to this Agreement or the Service, including without limitation in relation to: (a) Customer's use, non-use or misuse of the Service; (b) Customer's violation or alleged violation of this Agreement; (c) Customer's violation of any rights, including intellectual property rights, of a third party and otherwise as set out herein; or (d) an allegation that the Customer Data, or the use of Customer Data pursuant to this Agreement, infringes the intellectual property rights or other rights of a third party or otherwise causes harm to a third party. Clik.ai reserves the right, at Customer's expense, to assume the exclusive defense and control of any matter for which Customer is required to indemnify Clik.ai and Customer agrees to cooperate with Clik.ai's defense of these Claims. Customer agrees to not settle any matter without the prior written consent of Clik.ai. Clik.ai will use reasonable efforts to notify you of any such Claims upon becoming aware of them.",
              },
            ]}
          />

          <Section
            title="10. LIMITATION OF LIABILITY"
            content={[
              {
                term: "",
                definition:
                  "The following provisions have been negotiated by each party, are a fair allocation of risk, are an essential basis of the bargain under this Agreement and shall survive and continue in full force and effect despite any failure of consideration or of an exclusive remedy:",
              },
              {
                term: "10.1 Amount",
                definition:
                  "CLIK.AI'S TOTAL AGGREGATE LIABILITY FROM ANY AND ALL CLAIMS IN CONNECTION WITH OR UNDER THIS AGREEMENT IS LIMITED TO THE TOTAL AMOUNT OF FEES RECEIVED BY CLIK.AI UNDER THIS AGREEMENT IN THE SIX MONTHS IMMEDIATELY PRECEDING THE DATE THE CAUSE OF ACTION FIRST AROSE. FOR GREATER CERTAINTY, THE EXISTENCE OF ONE OR MORE CLAIMS UNDER THIS AGREEMENT WILL NOT INCREASE THIS MAXIMUM LIABILITY AMOUNT. IN NO EVENT SHALL CLIK.AI'S SUPPLIERS HAVE ANY LIABILITY ARISING OUT OF OR IN ANY WAY CONNECTED TO THIS AGREEMENT.",
              },
              {
                term: "10.2 Type",
                definition:
                  "IN NO EVENT SHALL CLIK.AI BE LIABLE TO CUSTOMER FOR ANY (A) SPECIAL, INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES, (B) LOST SAVINGS, PROFIT, DATA, USE OR GOODWILL, (C) BUSINESS INTERRUPTION, EVEN IF NOTIFIED IN ADVANCE OF SUCH POSSIBILITY, OR (D) PERSONAL OR PROPERTY DAMAGE ARISING OUT OF OR IN ANY WAY CONNECTED TO THIS AGREEMENT, REGARDLESS OF CAUSE OF ACTION OR THE THEORY OF LIABILITY, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE, GROSS NEGLIGENCE, FUNDAMENTAL BREACH, BREACH OF A FUNDAMENTAL TERM) OR OTHERWISE. IN NO EVENT SHALL CLIK.AI BE LIABLE FOR PROCUREMENT OR COSTS OF SUBSTITUTE PRODUCTS OR SERVICES.",
              },
              {
                term: "10.3 No Participating in Class Action",
                definition:
                  "CUSTOMER AGREES THAT, WITH RESPECT TO ANY DISPUTE ARISING OUT OF OR RELATING TO THIS AGREEMENT, CUSTOMER HEREBY GIVES UP ITS RIGHT TO PARTICIPATE AS A MEMBER OF A CLASS OF CLAIMANTS IN ANY LAWSUIT INCLUDING BUT NOT LIMITED TO CLASS ACTION LAWSUITS INVOLVING ANY SUCH DISPUTE.",
              },
              {
                term: "10.4 Limitation of Time",
                definition:
                  "Customer agrees that it will not bring a claim under or related to this Agreement more than twelve (12) months from when such claim first arose.",
              },
            ]}
          />

          <Section
            title="11. GENERAL PROVISIONS"
            content={[
              {
                term: "11.1 Publicity",
                definition:
                  "Clik.ai may make public announcements, including but not limited to, press releases and media announcements, of the existence of this Agreement and the relationship between the parties. Customer agrees to allow Clik.ai to use Customer's name in customer lists and other promotional materials describing Customer as a customer of Clik.ai and user of the Service.",
              },
              {
                term: "11.2 Assignment",
                definition:
                  "Customer may not assign this Agreement to a third party without Clik.ai's prior written consent not to be unreasonably withheld, except to a third party that controls, is controlled by or is under common control with Customer. Clik.ai may assign this Agreement or any rights hereunder to any third party without Customer's consent. Any assignment in violation of this Section 11.2 shall be void. Any assignment is conditional upon the assignee agreeing in writing to be bound to the terms of this Agreement which shall be binding upon and inure to the benefit of the parties' successors and permitted assignees.",
              },
              {
                term: "11.3 Choice of Law",
                definition:
                  "This Agreement and any action related thereto shall be governed by and construed in accordance with the laws of the Province of British Columbia and the federal laws of Canada applicable therein, without regard to conflicts of law principles. The U.N. Convention on Contracts for the International Sale of Goods will not apply to this Agreement.",
              },
              {
                term: "11.4 Notices",
                definition:
                  "Any notice or other communication required or permitted under this Agreement and intended to have legal effect must be given in writing: (i) to Clik.ai, by email at or by certified mail at; or (ii) to Customer, by email or by certified mail at the addresses set forth in the Order Form. Notwithstanding the foregoing, each party may change its address from time to time upon written notice to the other party of the new address. Notices will be deemed to have been given upon receipt, or when delivery is refused.",
              },
              {
                term: "11.5 Entire Agreement",
                definition:
                  "This Agreement, including the Order Form, is the entire understanding and agreement of the parties, and supersedes any and all previous and contemporaneous understandings, agreements, proposals or representations, written or oral, between the parties, as to the subject matter hereof. Only a writing signed by both parties may modify it.",
              },
              {
                term: "11.6 Severability and Waiver",
                definition:
                  "In the event that any provision of this Agreement is held to be invalid or unenforceable, the valid or enforceable portion thereof and the remaining provisions of this Agreement will remain in full force and effect. Any waiver or failure to enforce any provision of this Agreement on one occasion will not be deemed a waiver of any other provision or of such provision on any other occasion. All waivers must be in writing. Other than as expressly stated herein, the remedies provided herein are in addition to, and not exclusive of, any other remedies of a party at law or in equity.",
              },
              {
                term: "11.7 Relationship of the Parties",
                definition:
                  "The parties to this Agreement are independent contractors, and no agency, partnership, franchise, joint venture or employee-employer relationship is intended or created by this Agreement.",
              },
            ]}
          />
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-[8px]">
            I Agree to the Terms and Conditions
          </Button>
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  content: { term: string; definition: string }[];
}

function Section({ title, content }: SectionProps) {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <Card className="bg-white/80 backdrop-blur-sm p-6 shadow-lg rounded-xl">
        <div className="space-y-4">
          {content.map((item, index) => (
            <div key={index}>
              {item.term && (
                <h3 className="text-lg font-semibold text-blue-700">
                  {item.term}
                </h3>
              )}
              <p className="text-gray-700">{item.definition}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
