"use client";
import { homeComServices, whoweare } from "@/constants";
import SubHeader from "@/Reusables/SubHeader";
import Image from "next/image";
import React from "react";

function ComprehensiveServices() {
  const services = [
    {
      icon: homeComServices.serv1,
      title: "University & Course Selection",
      description:
        "Find the right universities and courses abroad based on your academic background, career goals, budget, and preferred study destination."
    },
    {
      icon: homeComServices.serv2,
      title: "Application Assistance",
      description:
        "Get expert support with your admission documents, personal statement, essay writing, application forms, and university submission deadlines."
    },
    {
      icon: homeComServices.serv3,
      title: "Visa & Interview Support",
      description:
        "Prepare confidently with step-by-step student visa guidance, document review, interview coaching, and embassy application support."
    },
    {
      icon: homeComServices.serv4,
      title: "Pre-Departure Briefing",
      description:
        "Get fully prepared for travel, accommodation, airport arrival, student life, culture, and everything you need before moving abroad."
    },
    {
      icon: homeComServices.serv5,
      title: "Scholarship Advising",
      description:
        "Discover suitable scholarships, grants, financial aid options, and funding opportunities that can make studying abroad more affordable."
    },
    {
      icon: homeComServices.serv6,
      title: "Ongoing Support",
      description:
        "Receive continuous guidance from admission to visa approval, travel preparation, arrival, and settling into your new country."
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 p-4 md:p-8 max-w-350 mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 px-5 py-8 md:py-10 shadow-md rounded-md border border-gray-100 hover:shadow-xl transition duration-300"
          >
            <Image
              src={service.icon.src}
              alt={service.title}
              width={40}
              height={40}
            />
            <p className="text-[#003557] font-semibold text-[17px] md:text-[18.85px]">
              {service.title}
            </p>
            <span className="text-gray-600 font-normal text-[15px] md:text-[16px]">
              {service.description}
            </span>
          </div>
        ))}
      </div>

      {/* who we are section */}
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] mt-8 md:mt-12 mb-8 md:mb-12">
        <div className="relative h-[240px] md:h-full w-full">
          <Image
            src={whoweare}
            alt="who we are"
            fill
            className="object-cover "
            // height={1000}
            // width={1000}
          />
        </div>
        <div className="bg-[#003557] flex flex-col gap-3 md:gap-7 justify-center items-start p-6 md:p-8 md:px-14 py-10 md:py-8">
          <p className="text-white text-[26px] pt-8 md:pt-0 md:text-[36px] font-bold">
            Who are we
          </p>
          <span className="text-white font-normal max-w-full md:max-w-350 text-[15px] md:text-[18px] leading-relaxed">
            At AbroadAchieve, we believe studying abroad is more than earning a degree, it’s about discovering opportunities that 
            shape your future. We are a trusted study abroad consultancy dedicated to helping students achieve their academic and career
             goals through personalized guidance and end-to-end support.
          </span>
          <span className="text-white font-normal max-w-full md:max-w-350 text-[15px] md:text-[18px] leading-relaxed">
           Whether you’re pursuing undergraduate, postgraduate, or professional studies, AbroadAchieve is committed to making your 
           international education journey smooth, transparent, and successful.
          </span>
          <button className="bg-white rounded-lg text-[#003557] text-[15px] md:text-[16px] font-medium px-4 py-3 mt-2 md:mt-4">
            Read more
          </button>
        </div>
      </div>

      <SubHeader
        title={"Popular Study Destinations"}
        subtitle={
          "We are fast growing study abroad agency recruiting student customers seeking higher education to UK and Europe, Australia, New Zealand, Canada, USA."
        }
      />
    </>
  );
}

export default ComprehensiveServices;