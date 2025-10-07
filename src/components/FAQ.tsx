import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What are the main benefits of implementing AI automation in business?',
    answer: 'AI automation increases efficiency, reduces operational costs, and eliminates manual tasks, allowing teams to focus on strategic work.'
  },
  {
    question: 'Are your solutions tailored to the specific needs of each company?',
    answer: 'Yes. Every solution is designed around the client\'s existing processes and tools, with the ability to scale as the business grows.'
  },
  {
    question: 'How secure is it to use AI systems with internal company data?',
    answer: 'All solutions follow strict data protection standards (encryption, authentication, and access control) to ensure complete information security.'
  },
  {
    question: 'What is the typical timeline for implementation?',
    answer: 'The timeline depends on project complexity — simple workflows can be deployed within a few days, while advanced integrations require a more detailed planning and testing phase.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-brand/10 border-2 border-cyan-brand rounded-lg mb-6">
            <HelpCircle className="text-cyan-brand" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-cyan-brand">Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our AI automation solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/30 border border-cyan-brand/20 rounded-xl overflow-hidden hover:border-cyan-brand/40 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-8 py-6 flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {faq.question}
                  </h3>
                  <div
                    className={`text-gray-400 leading-relaxed overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
                <div className="flex-shrink-0 pt-1">
                  <ChevronDown
                    className={`text-cyan-brand transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
