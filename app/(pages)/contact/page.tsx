import { contactus } from "@/constants";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

function page() {
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
        style={{ backgroundImage: `url(${contactus.contact.src})` }}
      >
        <p className="text-[52px] font-bold text-white">Contact Us</p>
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
      <div className="max-w-350 m-auto px-10 mb-20">
        <iframe
        allowfullscreen
          title="map"
          className="w-full h-[50vh]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.47139691747!2d3.5378092!3d6.588177699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bef2b15eacff1%3A0xf15e48e262066f30!2sUnity%20avenue%20Balogun%20Estate%20Oreyo%20Igbogbo!5e0!3m2!1sen!2sng!4v1783238760670!5m2!1sen!2sng"
          width="600"
          height="450"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
}

export default page;
