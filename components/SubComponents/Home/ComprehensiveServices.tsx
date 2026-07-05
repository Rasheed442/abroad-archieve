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
        "Personalized guidance to find universities and courses that match your academic profile, interests, and career goals."
    },
    {
      icon: homeComServices.serv2,
      title: "Application Assistance",
      description:
        "Complete support with document review, application timeline management, essay writing, and deadline tracking."
    },
    {
      icon: homeComServices.serv3,
      title: "Visa & Interview Support",
      description:
        "Expert guidance on visa documentation, interview preparation, and embassy procedures for major destinations."
    },
    {
      icon: homeComServices.serv4,
      title: "Pre-Departure Briefing",
      description:
        "Comprehensive preparation for accommodation, travel arrangements, cultural orientation, and settling in abroad."
    },
    {
      icon: homeComServices.serv5,
      title: "Scholarship Advising",
      description:
        "Guidance on finding and securing scholarships, financial aid, and funding opportunities for your studies."
    },
    {
      icon: homeComServices.serv6,
      title: "Ongoing Support",
      description:
        "Continuous assistance throughout your journey, from acceptance to arrival and beyond."
    }
  ];
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-350 mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 px-5 py-10 shadow-md rounded-md border border-gray-100 hover:shadow-xl transition duration-300"
        >
          <Image
            src={service.icon.src}
            alt={service.title}
            width={40}
            height={40}
          />
          <p className="text-[#003557] font-semibold text-[18.85px]">
            {service.title}
          </p>
          <span className="text-gray-600 font-normal text-[16px]">
            {service.description}
          </span>
        </div>
      ))}
    </div>

    {/* who we are section */}

    <div className="grid grid-cols-[40%_60%] mt-12 mb-12">
<Image src={whoweare} alt="who we are" width={1000} height={1000}/>
<div className="bg-[#003557] h-full flex flex-col gap-7 justify-center items-start p-8 px-14">
    <p className="text-white text-[36px] font-bold">Who are we</p>
    <span className="text-white font-normal max-w-350  text-[18px]">We are a trusted study abroad platform committed to helping students access world-class education opportunities across top global destinations. Our role goes beyond admissions — we serve as long-term partners, guiding students through every stage of their international education journey.</span>
    <button className="bg-white rounded-lg text-[#003557] text-[16px] font-medium px-4 py-3 mt-4">Read more</button>

</div>
    </div>

        <SubHeader title={"Popular Study Destinations"} subtitle={"We are fast growing study abroad agency recruiting student customers seeking higher education to UK and Europe, Australia, New Zealand, Canada, USA."}/>

    </>

  );
}

export default ComprehensiveServices;
