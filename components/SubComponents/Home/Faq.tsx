"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
  link?: boolean;
}

const faqs: FaqItem[] = [
  {
    question: "How do I start my journey abroad?",
    answer:
      "It helps to do a little research before you speak to us. Once you do some research, you will get an idea of the subject areas that interest you the most. You could look at some course descriptions, university reviews and their locations. You can also start a wish list of your preferences and begin to narrow down your selection. Research can also include asking your friends and family if they have studied abroad. Post a message on your timeline on Facebook and you may be surprised at how many people have experience of an international education."
  },
  {
    question: "Do I need to sit for IELTS Exam?",
    answer:
      "It is always a good idea to brush up your English language skills to ensure you can keep up with what your lecturers are saying. This will be helpful, especially if English is not your first language. You can try watching English TV news and talk shows, reading books or listening to podcasts where the language is more formal. You can also have some fun learning the local slang in your study destination.",
    link: true
  },
  {
    question: "Do you help with navigations?",
    answer:
      "AbroadAchieve can provide you with some information to help make sure you are well positioned to navigate this process with the authorised migration departments."
  }
];

// Rotating shape markers — purely a visual rhythm device, not a semantic sequence
const shapes = ["circle", "diamond", "triangle"] as const;

function ShapeIcon({ shape }: { shape: typeof shapes[number] }) {
  const base = "h-3 w-3 bg-[#8A8F98] shrink-0";
  if (shape === "circle") return <span className={`${base} rounded-full`} />;
  if (shape === "diamond") return <span className={`${base} rotate-45`} />;
  return (
    <span
      className={`${base} bg-transparent border-l-[7px] border-r-[7px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#8A8F98]`}
    />
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full py-42 px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto items-start">
        {/* Heading */}
        <h2 className="text-[#003557] font-bold text-[40px] leading-[1.15] tracking-tight">
          Frequently Asked
          <br />
          Questions
        </h2>

        {/* Accordion list */}
        <div className="flex flex-col gap-4 w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const shape = shapes[index % shapes.length];

            return (
              <div
                key={faq.question}
                className="bg-[#F2F2F3] rounded-xl px-6 py-5 transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-3 text-left"
                >
                  <ShapeIcon shape={shape} />
                  <span
                    className={`text-[#0F1B2B] font-semibold text-[18px] ${
                      faq.link ? "underline decoration-[#3B82F6] text-[#1D2B3A]" : ""
                    }`}
                  >
                    {faq.question}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#6B7280] text-[15px] leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Faq;