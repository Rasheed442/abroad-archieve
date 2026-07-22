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
  programme: string;
  name: string;
  university: string;
  intake: string;
}

const testimonials: Testimonial[] = [
  {
    avatar: fed1.src,
    photo: fed1.src,
    quote:
      "Throughout the process, I find Abroad Achieve very helpful, informative and their work rate very effective.I recommend them",
    programme: "Master of Research in International Relations",
    name: "Titilayo",
    university: "University of wolverhampton united kingdom",
    intake: "January 2025"
  },
  {
    avatar: fed2.src,
    photo: fed2.src,
    quote:
      "The team made a stressful application process feel simple. Every question was answered quickly and clearly.",
    programme: "Master of Public Health and Health Promotion",
    name: "Latifat",
    university: "Robert Gordon University, Scotland",
    intake: "September 2025"
  },
  {
    avatar: fed3.src,
    photo: fed3.src,
    quote:
      "From my first consultation to visa approval, Abroad Achieve was with me every step. Truly grateful for their guidance.",
    programme: "Master of Research in Logistics and Supply Chain Management",
    name: "Sekinat",
    university: "University of Greater Manchester",
    intake: "January 2026"
  },
  {
    avatar: fed4.src,
    photo: fed4.src,
    quote:
      "Professional, patient, and always available. They turned a confusing process into a clear, guided journey.",
    programme: "Master of Health Promotion and Public Health",
    name: "Eniola",
    university: "Ulster University, Birmingham Campus",
    intake: "January 2026"
  }
];

// Stack depth presets: how each card looks based on its distance from "front"
const stackStyles = [
  { x: 40, y: 0, rotate: 2, scale: 1, z: 40, opacity: 1 },
  { x: 20, y: 10, rotate: -8, scale: 0.94, z: 30, opacity: 1 },
  { x: 0, y: 20, rotate: -16, scale: 0.88, z: 20, opacity: 1 },
  { x: -16, y: 30, rotate: -22, scale: 0.82, z: 10, opacity: 0 }
];

// Smaller offsets for mobile so the stack doesn't spill past the viewport edge
const stackStylesMobile = [
  { x: 16, y: 0, rotate: 2, scale: 1, z: 40, opacity: 1 },
  { x: 8, y: 6, rotate: -6, scale: 0.94, z: 30, opacity: 1 },
  { x: 0, y: 12, rotate: -12, scale: 0.88, z: 20, opacity: 1 },
  { x: -8, y: 18, rotate: -16, scale: 0.82, z: 10, opacity: 0 }
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
      <SubHeader title={"What Our Clients Have to Say"} subtitle={""} />

      <div className="w-full py-10 px-4 sm:px-6 md:px-10">
        <style>{`
          @keyframes feedbackFadeIn {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .feedback-fade {
            animation: feedbackFadeIn 0.35s ease-out;
          }
        `}</style>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Photo stack */}
          <div className="relative h-[280px] sm:h-[340px] md:h-[420px] w-full max-w-[260px] sm:max-w-[320px] md:max-w-none mx-auto md:mx-0 flex items-center justify-center md:justify-start">
            {testimonials.map((t, i) => {
              const depth = (i - activeIndex + length) % length;
              const style = stackStyles[Math.min(depth, stackStyles.length - 1)];
              const mobileStyle =
                stackStylesMobile[Math.min(depth, stackStylesMobile.length - 1)];

              return (
                <div
                  key={t.name}
                  className="absolute h-[300px] w-[300px] sm:h-[340px] sm:w-[270px] md:h-[500px] md:w-[400px]  transition-all duration-500 ease-out"
                  style={{
                    // Use CSS var so we can switch offsets responsively without JS resize listeners
                    ["--mx" as any]: `${mobileStyle.x}px`,
                    ["--my" as any]: `${mobileStyle.y}px`,
                    ["--mr" as any]: `${mobileStyle.rotate}deg`,
                    ["--dx" as any]: `${style.x}px`,
                    ["--dy" as any]: `${style.y}px`,
                    ["--dr" as any]: `${style.rotate}deg`,
                    transform: `translate(var(--mx), var(--my)) rotate(var(--mr)) scale(${mobileStyle.scale})`,
                    zIndex: style.z,
                    opacity: style.opacity,
                    pointerEvents: depth === 0 ? "auto" : "none"
                  }}
                >
                  <div
                    className="h-full w-full [@media(min-width:768px)]:[transform:translate(var(--dx),var(--dy))_rotate(var(--dr))]"
                  >
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      className="object-contain rounded-2xl"
                      sizes="(max-width: 767px) 270px, 400px"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonial content */}
          <div className="flex flex-col gap-5 md:gap-6 items-center md:items-start text-center md:text-left">
            {/* Avatar selector row */}
            <div className="flex items-center gap-3 md:gap-4">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  aria-pressed={i === activeIndex}
                  className={`relative h-11 w-11 md:h-14 md:w-14 rounded-full overflow-hidden shrink-0 transition
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

            {/* Quote */}
            <p
              key={`quote-${activeIndex}`}
              className="feedback-fade text-[#33415C] text-[16px] md:text-[19px] leading-relaxed font-normal max-w-xl"
            >
              {active.quote}
            </p>

            <div className="h-px w-full max-w-xl bg-gray-200" />

            {/* Name + role */}
            <div key={`meta-${activeIndex}`} className="feedback-fade text-[#33415C] flex flex-col gap-1">
              <p className="text-[15px] md:text-[17px] font-medium leading-snug">
               Name: {active.name}
              </p>
                            <p className="text-[15px] md:text-[17px] leading-snug">University: {active.university}</p>
                            <p className="text-[15px] md:text-[17px] leading-snug">Programme: {active.programme}</p>
                            <p className="text-[15px] md:text-[17px] leading-snug">Intake: {active.intake}</p>

            </div>

            {/* Nav arrows */}
            <div className="flex items-center gap-3 mt-1">
              <button
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="h-10 w-10 md:h-11 md:w-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
              >
                <FaArrowLeft size={15} className="text-[#33415C]" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next testimonial"
                className="h-10 w-10 md:h-11 md:w-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
              >
                <FaArrowRight size={15} className="text-[#33415C]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;