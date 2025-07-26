import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How often will I the newsletter updates?",
      answer: "Secure GenAI is delivered every Monday morning with the latest threat intelligence, research findings, and security updates."
    },
    {
      question: "Is this newsletter free for researchers and practitioners?",
      answer: "Yes, Secure GenAI is completely free. We believe critical safety information should be accessible to all AI practitioners."
    },
    {
      question: "How do you ensure the security of subscriber data?",
      answer: "We use enterprise-grade encryption and follow strict data protection protocols. Your information is never shared with third parties."
    },
    {
      question: "What type of AI safety content do you cover?",
      answer: "We cover security vulnerabilities, safety frameworks, regulatory updates, research breakthroughs, and implementation guides for responsible AI."
    },
    {
      question: "Who contributes to the newsletter content?",
      answer: "Our content comes from leading AI safety researchers, security professionals, policy experts, and practitioners from top institutions worldwide."
    },
    {
      question: "Can I contribute research findings or suggest topics?",
      answer: "Absolutely! We welcome contributions from the AI safety community. Reply to any newsletter or contact us with your research or topic suggestions."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Common Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Secure GenAI
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 bg-gray-50 animate-fade-in">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;