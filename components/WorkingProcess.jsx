"use client";

import Image from "next/image";
import { useState } from "react";

const FAQItem = ({ question, answer, number }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div
        className={`px-10 py-8 cursor-pointer ${
          isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
        } mt-8 rounded-3xl border-t-2 border-l-2 border-r-2 border-b-4 border-black`}
      >
        {/* Header Section */}
        <div
          className="flex items-center justify-between gap-4"
          onClick={toggleOpen}
        >
          {/* Left Section: Number and Question */}
          <span className="flex gap-4 items-center">
            <h3 className="font-medium text-4xl">{number}</h3>
            <h3 className="font-medium text-lg md:text-xl">{question}</h3>
          </span>
  
          {/* Right Section: Icon */}
          {isOpen ? (
            <Image
              src="/images/minus.png"
              alt="Minus icon"
              width={32}
              height={32}
              className="ml-auto"
            />
          ) : (
            <Image
              src="/images/plus.png"
              alt="Plus icon"
              width={32}
              height={32}
              className="ml-auto"
            />
          )}
        </div>
  
        {/* Line and Answer */}
        {isOpen && (
          <>
            <div className="border-t border-black w-full my-4"></div>
            <p className="text-sm md:text-base">{answer}</p>
          </>
        )}
      </div>
    );
  };
  

const WorkingProcess = () => {
  const faqData = [
    {
      number: "01",
      question: "Consultation",
      answer: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
    },
    {
      number: "02",
      question: "Research and Strategy Development",
      answer: `Course duration varies; some are
                     completed in a few hours while others
                     may take several weeks, depending on the
                     depth of the content.`,
    },
    {
      number: "03",
      question: "Implementation",
      answer: `Yes, our courses are self-paced,
                     allowing you to learn at your 
                     own speed and convenience.`,
    },
    {
      number: "04",
      question: "Monitoring and Optimization",
      answer: `Yes, upon completing a course, you will
                     receive a certificate that you can download
                     and share.`,
    },
    {
      number: "05",
      question: "Reporting and Communication",
      answer: `Absolutely! If you are not satisfied
                     with a course, you can request a full
                     refund within 30 days of purchase.`,
    },
    {
      number: "06",
      question: "Continual Improvement",
      answer: `Yes, our platform is mobile-friendly,
                     allowing you to access courses on
                     smartphones and tablets.`,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto lg:px-16 px-8 mt-8 ">
      <div className="flex items-center gap-8 flex-col md:flex-row mb-4">
        <h1 className="text-3xl   font-medium bg-[#B9FF66] max-w-fit p-2 ">
          Our Working Process
        </h1>
        <p className="text-[16px] md:text-[18px] max-w-xl text-center md:text-left mb-8 md:mb-0">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          number={item.number}
        />
      ))}
    </div>
  );
};

export default WorkingProcess;
