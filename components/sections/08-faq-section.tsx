import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GeistSans } from "geist/font/sans"

const faqs = [
  {
    question: "How does Clik.ai's pricing model work?",
    answer:
      "Our pricing is flexible and based on your needs. We offer three main plans: Self-Service starting at $49/month for 1-4 deals, Small Business at $99/month plus $30 per deal for 5-20 deals, and Enterprise with custom pricing for unlimited deals. Annual subscriptions receive a 17% discount.",
  },
  {
    question: "What types of documents can Clik.ai process?",
    answer:
      "Clik.ai can process a wide range of commercial real estate documents including Operating Statements, Rent Rolls, Offering Memorandums (OMs), Appraisals, and Insurance documents. Our AI technology extracts and analyzes data from these documents automatically.",
  },
  {
    question: "How accurate is the automated data extraction?",
    answer:
      "Our AI-powered extraction technology achieves high accuracy rates. For the Small Business and Enterprise plans, our expert analysts review the extracted data to ensure maximum accuracy. All outputs are validated against industry standards and client-specific requirements.",
  },
  {
    question: "Can I customize the financial models to match my company's format?",
    answer:
      "Yes, especially with our Enterprise plan, we offer custom model integration with unlimited updates. We can adapt our outputs to match your existing templates or create new ones that align with your specific needs and workflows.",
  },
  {
    question: "What kind of support is included with each plan?",
    answer:
      "Support varies by plan. Self-Service includes online video tutorials, Small Business provides access to Clik Analysts for deal processing, and Enterprise offers comprehensive platform training and dedicated support for custom integrations.",
  },
  {
    question: "How quickly can I get started with Clik.ai?",
    answer:
      "You can start immediately with our Self-Service plan. For Small Business and Enterprise plans, we provide quick onboarding and training to ensure your team can effectively use all features. Most clients are fully operational within a few days.",
  },
  {
    question: "Do you support different types of commercial real estate assets?",
    answer:
      "Yes, we support multiple asset classes including multifamily, retail, office, and more. Our Small Business and Enterprise plans include analysis capabilities for all asset classes, while Self-Service focuses on multifamily properties.",
  },
  {
    question: "Can Clik.ai integrate with other software systems?",
    answer:
      "Yes, particularly with our Enterprise plan, we offer integration capabilities with various CRE platforms and tools. This includes Excel Add-ins for data syncing and custom API integrations for seamless workflow automation.",
  },
  {
    question: "What security measures are in place to protect our data?",
    answer:
      "We maintain strict security protocols to protect your sensitive financial data. Our platform employs industry-standard encryption, secure data storage, and regular security audits to ensure your information remains confidential.",
  },
  {
    question: "Can I switch between plans as my needs change?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time to match your business needs. Our flexible pricing structure allows you to scale your usage up or down based on your deal volume and requirements.",
  },
]

export function FAQSection() {
  return (
    <section
      className={`bg-gradient-to-b from-indigo-50 via-purple-50 to-blue-50 py-12 md:py-16 ${GeistSans.className}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-base md:text-lg text-gray-700">
            Find answers to common questions about Clik.ai&apos;s services and features
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

