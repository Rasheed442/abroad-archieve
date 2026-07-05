/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { australia, canada, us } from "@/constants";
import SubHeader from "@/Reusables/SubHeader";
import React from "react";

function StudyDestination() {
  const popularDestinations = [
    {
      image: australia,
      title: "Australia",
      description:
        "Australia universities and colleges provides their prospective students with the .."
    },
    {
      image: canada,
      title: "Canada",
      description:
        " Canada universities and colleges provides their prospective students with the ..."
    },
    {
      image: us,
      title: "USA",
      description:
        " United States universities and colleges provides their prospective students with the ..."
    },
    {
      image: australia,
      title: "Australia",
      description:
        "Australia universities and colleges provides their prospective students with the .."
    },
    {
      image: canada,
      title: "Canada",
      description:
        " Canada universities and colleges provides their prospective students with the ..."
    },
    {
      image: us,
      title: "USA",
      description:
        "United States universities and colleges provides their prospective students with the ..."
    },
  ];

  return (
    <div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-312.5 m-auto gap-10  p-6">
      {popularDestinations.map((destination: any, index: any) => (
        <div
          key={index}
          className="relative isolate flex flex-col justify-end h-82.5 w-fit bg-cover bg-center rounded-2xl overflow-hidden"
          style={{ backgroundImage: `url(${destination.image.src})` }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" /> */}
          <div className="relative z-10 flex flex-col gap-1 px-5 py-4 border border-white/20 bg-white/10 backdrop-blur-md">
            <h3 className="text-white font-semibold text-[18.85px] uppercase">
              {destination.title}
            </h3>
            <p className="text-white/90 font-normal text-[15px] leading-snug">
              {destination.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    
    </div>

  
  );
}

export default StudyDestination;