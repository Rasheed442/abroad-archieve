/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { australia, canada, us } from "@/constants";
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
        "Canada universities and colleges provides their prospective students with the ..."
    },
    {
      image: us,
      title: "USA",
      description:
        "United States universities and colleges provides their prospective students with the ..."
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
        "Canada universities and colleges provides their prospective students with the ..."
    },
    {
      image: us,
      title: "USA",
      description:
        "United States universities and colleges provides their prospective students with the ..."
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {popularDestinations.map((destination: any, index: any) => (
          <div
            key={index}
            className="relative isolate flex h-72 w-full flex-col justify-end overflow-hidden rounded-2xl bg-cover bg-center sm:h-80"
            style={{ backgroundImage: `url(${destination.image.src})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
            <div className="relative z-10 flex flex-col gap-1 border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
              <h3 className="text-[18.85px] font-semibold uppercase text-white">
                {destination.title}
              </h3>
              <p className="text-[15px] font-normal leading-snug text-white/90">
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