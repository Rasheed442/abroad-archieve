"use client";

import { fed1, fed2, fed3, fed4 } from "@/constants";
import SubHeader from "@/Reusables/SubHeader";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Testimonial {
  avatar: string;
  photo: string;
  quote: string;
  role: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    avatar: fed1.src,
    photo: fed1.src,
    quote:
      "Throughout the process, I find Abroad Achieve very helpful, informative and their work rate very effective. I recommend them",
    role: "Administration Officer,",
    name: "Babatunde Wale"
  },
  {
    avatar: fed2.src,
    photo: fed2.src,
    quote:
      "The team made a stressful application process feel simple. Every question was answered quickly and clearly.",
    role: "Software Engineer,",
    name: "Amaka Johnson"
  },
  {
    avatar: fed3.src,
    photo: fed3.src,
    quote:
      "From my first consultation to visa approval, Abroad Achieve was with me every step. Truly grateful for their guidance.",
    role: "Marketing Lead,",
    name: "Ifeoma Chukwu"
  },
  {
    avatar: fed4.src,
    photo: fed4.src,
    quote:
      "Professional, patient, and always available. They turned a confusing process into a clear, guided journey.",
    role: "Graduate Student,",
    name: "David Okafor"
  }
];

// Stack depth presets: how each card looks based on its distance from "front"
const stackStyles = [
  { x: 40, y: 0, rotate: 2, scale: 1, z: 40, opacity: 1 }, // front (active)
  { x: 20, y: 10, rotate: -8, scale: 0.94, z: 30, opacity: 1 }, // 1 behind
  { x: 0, y: 20, rotate: -16, scale: 0.88, z: 20, opacity: 1 }, // 2 behind
  { x: -16, y: 30, rotate: -22, scale: 0.82, z: 10, opacity: 0 } // fully hidden, waiting
];

function Feedback() {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = testimonials.length;

  const active = testimonials[activeIndex];

  const goPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? length - 1 : prev - 1));

  const goNext = () => setActiveIndex((prev) => (prev === length - 1 ? 0 : prev + 1));

  return (
    <div>

 <SubHeader
                 title={"What Our Clients Have to Say"} subtitle={""}/>
        <div className="w-full py-10 px-6 md:px-10">
      <style>{`
        @keyframes feedbackFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .feedback-fade {
          animation: feedbackFadeIn 0.35s ease-out;
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Photo stack */}
        <div className="relative h-[420px] w-full flex items-center justify-center md:justify-start">
          {testimonials.map((t, i) => {
            // distance of this card from the active one, going forward (0 = front)
            const depth = (i - activeIndex + length) % length;
            const style = stackStyles[Math.min(depth, stackStyles.length - 1)];

            return (
              <div
                key={t.name}
                className="absolute h-[500px] w-[400px] rounded-2xl  shadow-md transition-all duration-500 ease-out"
                style={{
                  transform: `translate(${style.x}px, ${style.y}px) rotate(${style.rotate}deg) scale(${style.scale})`,
                  zIndex: style.z,
                  opacity: style.opacity,
                  pointerEvents: depth === 0 ? "auto" : "none"
                }}
              >
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes=""
                />
              </div>
            );
          })}
        </div>

        {/* Testimonial content */}
        <div className="flex flex-col gap-6">
          {/* Avatar selector row */}
          <div className="flex items-center gap-4">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActiveIndex(i)}
                aria-label={`Show testimonial from ${t.name}`}
                aria-pressed={i === activeIndex}
                className={`relative h-14 w-14 rounded-full overflow-hidden shrink-0 transition
                  ${
                    i === activeIndex
                      ? "ring-2 ring-offset-2 ring-[#0F9D8E]"
                      : "opacity-70 hover:opacity-100"
                  }`}
              >
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </button>
            ))}
          </div>

          {/* Quote (remounts + fades in on change via key) */}
          <p
            key={`quote-${activeIndex}`}
            className="feedback-fade text-[#33415C] text-[19px] leading-relaxed font-normal max-w-xl"
          >
            {active.quote}
          </p>

          <div className="h-px w-full max-w-xl bg-gray-200" />

          {/* Name + role (also fades in on change) */}
          <div key={`meta-${activeIndex}`} className="feedback-fade text-[#33415C]">
            <p className="text-[17px] leading-snug">{active.role}</p>
            <p className="text-[17px] font-medium leading-snug">{active.name}</p>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3 mt-1">
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="h-11 w-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
            >
              <FaArrowLeft size={17} className="text-[#33415C]" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="h-11 w-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
            >
              <FaArrowRight size={17} className="text-[#33415C]" />
            </button>
          </div>
        </div>
      </div>
    </div> 
    </div>
   
  );
}

export default Feedback;

