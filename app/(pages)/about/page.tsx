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
        className="h-[90.8vh] flex items-center justify-center bg-no-repeat bg-cover w-full "
        style={{ backgroundImage: `url(${aboutus.heroab.src})` }}
      >
        <p className="text-[52px] font-bold text-white">About Us</p>
      </div>

      <div className="grid grid-cols-[50%_50%] px-10 mt-20  gap-4 place-items-center max-w-350 m-auto py-10">
        <Image
          src={aboutus.whoweare2}
          alt="who we are"
          width={500}
          height={500}
        />
        <div className=" h-full flex flex-col gap-3 justify-center items-start p-8 px-14">
          <p className="text-[#003557] text-[36px] font-bold">Why Choose Us</p>
          <span className="text-[#003557] font-medium max-w-[600px]">
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

      <div className="flex flex-col gap-2  h-[20vh] text-white pl-14 pt-20">
        <p className="text-[#003557] font-semibold text-[28px] medium">
          We'd love to hear from you
        </p>
        <span className="text-[#003557] font-normal text-[16px] w-[50%]">
          Our friendly team is always here to chat.
        </span>
      </div>

      {/* Contact options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-14 pb-20 max-w-350 mx-auto pt-10">
        {contactOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <div
              key={index}
              className="flex flex-col gap-6 p-6 rounded-xl bg-[#EAF3FC]"
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