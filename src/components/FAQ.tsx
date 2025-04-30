import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface FAQItemProps {
  question: string;
  answer: string;
  delay?: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedSection delay={delay}>
      <div className="border-b border-gray-200 py-4">
        <button
          className="flex justify-between items-center w-full text-left"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
          <ChevronDown
            className={`h-5 w-5 text-gray-500 transition-transform ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </button>
        <div
          className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <p className="pb-2">{answer}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "🕒 Wie viele Fahrstunden benötige ich für den Führerschein in Winterthur?",
      answer: "Die Anzahl der benötigten Fahrstunden variiert je nach Vorkenntnissen und Lernfortschritt. Im Durchschnitt benötigen Fahrschüler in Winterthur zwischen 15-20 Fahrstunden. Wir bei Spend's Fahrschule passen die Ausbildung individuell an Ihre Bedürfnisse an."
    },
    {
      question: "🎯 Wie läuft die praktische Fahrprüfung in Winterthur ab?",
      answer: "Die praktische Fahrprüfung in Winterthur wird vom Strassenverkehrsamt durchgeführt. Wir bereiten Sie intensiv auf die Prüfung vor, inklusive der typischen Prüfungsrouten in Winterthur. Die Prüfung dauert etwa 45 Minuten und umfasst verschiedene Verkehrssituationen."
    },
    {
      question: "📅 Wie oft sollte ich Fahrstunden nehmen?",
      answer: "Am besten 1–2 Mal pro Woche, damit Sie regelmässig Fortschritte machen. Am besten wenn möglich auch privat viel üben mit Familie oder Freunden, um die Fahrstunden zu verinnerlichen."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Häufig gestellte Fragen zu Spend's Fahrschule Winterthur
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen zur Fahrausbildung 
            bei Spend's Fahrschule in Winterthur.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 