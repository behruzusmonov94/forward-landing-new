import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faq: { question: string; answer: string }[] = [
  {
    question: 'What is your return policy?',
    answer:
      'You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.',
  },
  {
    question: 'How do I track my order?',
    answer:
      'Track your order using the link provided in your confirmation email, or log into your account to view tracking details.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.',
  },
  {
    question: 'What if I receive a damaged item?',
    answer:
      'Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.',
  },
];

function FAQ() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start justify-between">
        <h4 className="section-title">
          Frequently Asked <br /> Questions
        </h4>
        <Accordion type="single" defaultValue="question-0" className="max-w-xl">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-lg">{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
