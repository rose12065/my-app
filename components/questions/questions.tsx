'use client'
import React, { useState } from 'react';
import styles from './questions.module.css'; // Assuming you're using CSS Modules for styling

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.frequentQuestions}>
      <div className={styles.frequentHead}>
        <p>Frequently asked questions</p>
      </div>
      <div className={styles.questionAccordion}>
        {accordionData.map((item, index) => (
          <div key={index}>
            <button
              className={styles.accordion}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className={styles.toggleIcon}>
                {activeIndex === index ? 'x' : '+'}
              </span>
            </button>
            <div
              className={`${styles.panel} ${
                activeIndex === index ? styles.active : ''
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;

// Sample Data for the Accordion
const accordionData = [
  {
    question: 'What is my eligibility to book a car?',
    answer:
      'You should be of 18 years old above and you must possess a valid driving license.',
  },
  {
    question: 'Can I book for any period of time?',
    answer: 'Yes, you can book for any period of time as per our availability.',
  },
  {
    question: 'Can I book a one-way trip?',
    answer: 'Yes, one-way trips are available depending on your location.',
  },
  {
    question: 'Is there a home delivery option available?',
    answer: 'Yes, we offer home delivery for your convenience.',
  },
  {
    question: 'How can I make the payment?',
    answer: 'You can make the payment via credit card, debit card, or PayPal.',
  },
];
    