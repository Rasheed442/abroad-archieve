"use client";
import { aboutus, homeComServices } from "@/constants";
import Image from "next/image";
import SubHeader from "@/Reusables/SubHeader";
import { HiOutlineMail } from "react-icons/hi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

function page() {
  const services = [
    {
      icon: homeComServices.serv1,
      title: "Misson",
      description:
        "Empowering global minds, Abroad Achieve streamlines the study abroad process, giving personal support and expert guidance to obtain a stress-free and a progressive international educational experience."
    },
    {
      icon: homeComServices.serv2,
      title: "Vision",
      description:
        "Becoming the leading educational agency, bridging divides and fostering global understanding through accessible, affordable, and abroad opportunities, transforming lives and shaping the future of international education"
    },
    {
      icon: homeComServices.serv3,
      title: "Core Values",
      description:
        "Student-centric approach Personalized support Global connectivity Innovation and adaptability Expertise and professionalism"
    }
  ];

  const contactOptions = [
    {
      icon: HiOutlineMail,
      title: "Chat to sales",
      lines: ["Speak to our friendly team.", "ausvisastudy@gmail.com"]
    },
    {
      icon: BiMessageRoundedDots,
      title: "Chat to support",
      lines: ["We're here to help.", "+234 808 995 3598"]
    },
    {
      icon: HiOutlineLocationMarker,
      title: "Visit us",
      lines: [
        "Visit our office HQ.",
        "22, Unity close Balogun Estate Oreyo, ikorodu Lagos, Nigeria"
      ]
    },
    {
      icon: FiPhone,
      title: "Call us",
      lines: ["Mon-Fri from 8am to 5pm.", "+234 808 995 3598"]
    }
  ];

  return (
    <div>
      <div
        className="flex h-[90.8vh] min-h-[480px] w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4"
        style={{ backgroundImage: `url(${aboutus.heroab.src})` }}
      >
        <p className="animate-fade-up text-center text-[32px] font-bold text-white sm:text-[40px] md:text-[52px]">
          About Us
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-350 grid-cols-1 gap-6 px-4 py-10 md:mt-20 md:grid-cols-[50%_50%] md:px-10">
        <div className="animate-fade-in relative aspect-square w-full max-w-[500px] overflow-hidden rounded-xl shadow-md">
          <Image
            src={aboutus.whoweare2}
            alt="who we are"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex h-full flex-col items-start justify-center gap-3 p-4 md:p-8 md:px-14">
          <p className="text-[#003557] text-[26px] md:text-[36px] font-bold">
            Why Choose Us
          </p>
          <span className="text-[#003557] font-medium max-w-[600px] text-[15px] md:text-[16px] leading-relaxed">
            We are a dedicated agency specializing in recruiting students for
            international schools in the UK, Canada, Australia, and New Zealand.
            With over 7 years of experience, we pride ourselves on guiding
            students smoothly through the application process to help them
            achieve their educational goals abroad. Our commitment to excellence
            is reflected in our 90% customer satisfaction rating, demonstrating
            the trust and success we've built with students and families. We are
            passionate about opening doors to global education opportunities and
            supporting every step of the journey.
          </span>
        </div>
      </div>

      <SubHeader
        title={"Our Comprehensive Services"}
        subtitle={"Complete support for every stage of your journey to studying abroad."}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 p-4 md:p-8 max-w-350 mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="hover-lift flex flex-col gap-4 rounded-md border border-gray-100 px-5 py-8 shadow-md transition duration-300 hover:shadow-xl md:py-10"
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

      <div className="flex flex-col gap-2 text-white px-6 md:pl-14 pt-16 md:pt-20 pb-4">
        <p className="text-[#003557] font-semibold text-[22px] md:text-[28px]">
          We'd love to hear from you
        </p>
        <span className="text-[#003557] font-normal text-[15px] md:text-[16px] w-full sm:w-[70%] md:w-[50%]">
          Our friendly team is always here to chat.
        </span>
      </div>

      {/* Contact options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-14 pb-20 max-w-350 mx-auto pt-10">
        {contactOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <div
              key={index}
              className="hover-lift flex flex-col gap-6 rounded-xl bg-[#EAF3FC] p-6"
            >
              <div className="h-11 w-11 rounded-lg bg-[#0B2A4A] flex items-center justify-center">
                <Icon size={20} className="text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#003557] font-semibold text-[17px]">
                  {option.title}
                </p>
                <div className="flex flex-col gap-1">
                  {option.lines.map((line, i) => (
                    <p
                      key={i}
                      className="text-[#33415C] font-normal text-[14.5px] leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;