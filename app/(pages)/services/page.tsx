import { services, whoweare } from "@/constants";
import Image from "next/image";
import React from "react";

function page() {
  const featureList = [
    "Independent study abroad advice",
    "University requirement guidance",
    "Personalized course and destination matching.",
    "Expert support on courses and applications.",
    "Study destinations: UK, Europe, Australia, New Zealand, Canada, USA, and UAE."
  ];

  return (
    <div>
      <div
        className="h-[90.8vh] min-h-[480px] flex items-center justify-center bg-no-repeat bg-cover bg-center w-full px-4"
        style={{ backgroundImage: `url(${services.heroserv.src})` }}
      >
        <p className="text-[32px] sm:text-[40px] md:text-[52px] font-bold text-white text-center">
          Services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[50%_50%] px-4 md:px-10 mt-10 md:mt-20 gap-6 place-items-center max-w-350 mx-auto py-10">
        <div className="relative w-full max-w-[500px] aspect-square order-1">
          <Image src={whoweare} alt="who we are" fill className="object-cover rounded-md" />
        </div>
        <div className="h-full flex flex-col gap-3 justify-center items-start p-4 md:p-8 md:px-14 order-2">
          <p className="text-[#003557] text-[26px] md:text-[36px] font-bold">
            Our Services
          </p>
          <div className="text-[#727272] font-normal text-[15px] md:text-[18px] max-w-full md:max-w-150">
            <ul className="list-disc space-y-2 pl-5">
              {featureList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-4 md:px-10">
        {/* Visa Lodgement */}
        <div className="grid grid-cols-1 md:grid-cols-[50%_50%] mt-6 gap-6 md:gap-4 md:px-20 place-items-center py-8 md:py-10">
          <div className="h-full flex flex-col gap-3 justify-center items-start order-2 md:order-1">
            <p className="text-[#003557] text-[26px] md:text-[36px] font-bold">
              Visa Lodgement
            </p>
            <span className="text-[#727272] font-normal text-[15px] md:text-[18px] w-full md:w-120 leading-relaxed">
           We guide students through the visa applicationprocess with proper document review, application support, and preparation for embassy requirements, helping them submit with confidence.
            </span>
          </div>
          <div className="relative w-full max-w-[500px] aspect-square order-1 md:order-2">
            <Image src={services.visa} alt="visa lodgement" fill className="object-cover rounded-md" />
          </div>
        </div>

        {/* Career Counselling */}
        <div className="grid grid-cols-1 md:grid-cols-[50%_50%] mt-6 gap-6 md:gap-4 place-items-center py-8 md:py-10">
          <div className="relative w-full max-w-[500px] aspect-square order-1">
            <Image src={services.career} alt="career counselling" fill className="object-cover rounded-md" />
          </div>
          <div className="h-full flex flex-col gap-3 justify-center items-start order-2">
            <p className="text-[#003557] text-[26px] md:text-[36px] font-bold">
              Career Counselling
            </p>
            <span className="text-[#727272] font-normal text-[15px] md:text-[18px] w-full md:w-120 leading-relaxed">
            We provide personalized career counselling to help students choose the right course,
university, and study destination based on their academic background, goals, and
future career plans.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;