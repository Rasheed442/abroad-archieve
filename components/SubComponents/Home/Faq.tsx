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

const shapes = ["circle", "diamond", "triangle"] as const;

function ShapeIcon({ shape }: { shape: (typeof shapes)[number] }) {
  const base = "h-3 w-3 bg-[#8A8F98] shrink-0";
  if (shape === "circle") return <span className={`${base} rounded-full`} />;
  if (shape === "diamond") return <span className={`${base} rotate-45`} />;
  return (
    <span
      className={`${base} border-b-[12px] border-l-[7px] border-r-[7px] border-b-[#8A8F98] border-l-transparent border-r-transparent bg-transparent`}
    />
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full px-4 py-16 sm:px-6 md:px-10 md:py-28 lg:py-42">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-16">
        <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#003557] sm:text-4xl lg:text-[40px]">
          Frequently Asked
          <br />
          Questions
        </h2>

        <div className="flex w-full flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const shape = shapes[index % shapes.length];

            return (
              <div
                key={faq.question}
                className="rounded-xl bg-[#F2F2F3] px-4 py-5 transition-colors sm:px-6"
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start gap-3 text-left"
                >
                  <ShapeIcon shape={shape} />
                  <span
                    className={`text-base font-semibold text-[#0F1B2B] sm:text-[18px] ${
                      faq.link ? "text-[#1D2B3A] underline decoration-[#3B82F6]" : ""
                    }`}
                  >
                    {faq.question}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "mt-3 max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pl-6 text-sm leading-relaxed text-[#6B7280] sm:text-[15px]">
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