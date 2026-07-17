"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
  link?: boolean;
}

const faqs: FaqItem[] = [
  {
    question: "Why should I choose AbroadAchieve?",
    answer:
      "We provide personalized, end-to-end support, from choosing the right university and preparing your application to securing your student visa and settling abroad. Our goal is to make studying abroad simple, -transparent, and successful."
  },
  {
    question: "How do I start my study Abroad journey?",
    answer:
      "The first step is to book a consultation with our education advisors. We’ll assess your academic background, career goals, budget, and preferred destination, then recommend the best universities and courses for you.",
    link: true
  },
  {
    question: "How long does the study abroad application process take?",
    answer:
      "Timelines vary depending on your chosen university, course, and destination. Most applications take several weeks to a few months.Starting early gives you more options and increases your chances of securing admission and a visa."
  },
  {
    question: "Do you help with scholarships and student visas?",
    answer:
      "Yes. We assist with scholarship opportunities, university applications, student visa documentation, interview preparation, and pre-departure guidance to give you the best chance of success"
  },
  {
    question: "Do I need IELTS or another English proficiency test? ",
    answer:
      "Not always. While many universities require IELTS, TOEFL, or PTE, some institutions accept alternative qualifications or offer IELTS waivers depending on your level previous education and chosen destination. We’ll help you determine the best option. "
  },
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
                  className="flex w-full items-center gap-3 text-left"
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