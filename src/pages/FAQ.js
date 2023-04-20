// FAQ (static)
/*
import React from "react";

// TODO: add content, make collapsible? cards, and style
function FAQ() {
    return (
        <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <h3>What API(s) are you using for the site?</h3>
            <p>XYZ </p>
        </div>
    );
}

export default FAQ;

*/
import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const questions = [
    {
      id: 1,
      question: "What is the NIST CSF?",
      answer:
        "The NIST Cybersecurity Framework (CSF) is a set of guidelines and best practices developed by the National Institute of Standards and Technology (NIST) to help organizations manage and reduce cybersecurity risks. The framework provides a common language and methodology for organizations to identify, assess, and prioritize cybersecurity risks, and to develop and implement effective risk management strategies."
    },
    {
      id: 2,
      question: "Who should use the NIST CSF?",
      answer:
        "The NIST CSF is recommended for all types of organizations, including private sector, government, and critical infrastructure."
    },
    {
      id: 3,
      question: "What are the core elements of the NIST CSF?",
      answer:
        "The core elements of the NIST CSF are Identify, Protect, Detect, Respond, and Recover. These elements provide a framework for organizations to manage and improve their cybersecurity posture."
    },
    {
      id: 4,
      question: "Is the NIST CSF mandatory for organizations?",
      answer:
        "No, the NIST CSF is voluntary and intended to be used as a resource for organizations to improve their cybersecurity practices."
    },
    {
      id: 5,
      question: "How can organizations implement the NIST CSF?",
      answer:
        "Organizations can implement the NIST CSF by following the guidelines and best practices outlined in the framework, and by customizing the implementation to their specific needs and requirements."
    },
    {
      id: 6,
      question: "How does the NIST CSF differ from other cybersecurity frameworks and standards?",
      answer:
        "The NIST CSF is a flexible, voluntary framework that provides organizations with a set of guidelines for managing and reducing cybersecurity risks. Unlike other frameworks and standards, the NIST CSF is not prescriptive and does not dictate specific security controls or technologies. Instead, it focuses on risk management and encourages organizations to identify and prioritize their most critical assets and systems."
    },
    {
      id: 7,
      question: "What are some of the benefits of implementing the NIST CSF?",
      answer:
        "Some of the benefits of implementing the NIST CSF include improved risk management, better communication and collaboration among stakeholders, increased visibility into cybersecurity risks and vulnerabilities, and greater alignment with industry best practices. Implementing the NIST CSF can also help organizations comply with regulatory requirements and build customer trust by demonstrating their commitment to cybersecurity."
    },
    {
      id: 8,
      question: "What are some of the challenges organizations may face when implementing the NIST CSF?",
      answer:
        "Some of the challenges organizations may face when implementing the NIST CSF include a lack of resources, difficulty aligning the framework with existing security programs and processes, and resistance from stakeholders who are not familiar with the framework or its benefits. Additionally, some organizations may struggle to customize the framework to fit their unique needs or to keep pace with evolving cybersecurity risks and threats."
    },
    {
      id: 9,
      question: "Can the NIST CSF be customized to fit the unique needs of an organization?",
      answer:
        "Yes, the NIST CSF is designed to be flexible and can be customized to fit the unique needs of any organization. The framework includes a set of core components that can be tailored to meet an organization's specific requirements, such as business objectives, and regulatory compliance obligations. Organizations can also use the framework to prioritize their most critical assets and systems and to develop customized risk management plans."
    }
  ];

  const handleQuestionClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-container">
        <div className='faq-title'>
            <p className='title-faq'>Frequently Asked Questions</p>
        </div>
      {questions.map((item, index) => (
        <div key={item.id}>
          <div className={`faq-item ${index === openIndex ? 'open' : ''}`} onClick={() => handleQuestionClick(index)}>
            <div className="faq-question">{item.question}</div>
            <div className="faq-toggle">
              <i className="fas fa-chevron-down"></i>
              <i className="fas fa-chevron-up"></i>
            </div>
          </div>
          {index === openIndex && (
            <div className="faq-answer">{item.answer}</div>
          )}
          {index !== questions.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}

export default FAQ;