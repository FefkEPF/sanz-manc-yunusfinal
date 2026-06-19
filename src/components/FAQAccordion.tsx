import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { FAQ } from "../types";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Schema.org Script injection equivalent structure (handled via standard JSON-LD conceptually here but rendered securely)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 sm:my-12 px-0" itemScope itemType="https://schema.org/FAQPage">
      {/* Hidden SEO Schema Script */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="h-1 w-12 bg-brand-600 rounded-full"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight text-center" id="sikca-sorulan-sorular">
          Sıkça Sorulan Sorular
        </h2>
        <div className="h-1 w-12 bg-brand-600 rounded-full"></div>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={cn(
                "border rounded-xl transition-all duration-300 bg-white",
                isOpen ? "border-brand-300 shadow-md ring-1 ring-brand-100" : "border-gray-200 hover:border-brand-200"
              )}
              itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
            >
              <button
                type="button"
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-bold text-gray-900 pr-4 text-sm sm:text-base" itemProp="name">{faq.question}</span>
                <ChevronDown className={cn("w-5 h-5 flex-shrink-0 transition-transform duration-300", isOpen ? "text-brand-600 transform rotate-180" : "text-gray-400")} />
              </button>
              
              <div 
                className={cn("px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0")}
                itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
              >
                <div className="w-full h-px bg-gray-100 mb-4"></div>
                <p className="text-gray-600 leading-relaxed font-medium" itemProp="text">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
