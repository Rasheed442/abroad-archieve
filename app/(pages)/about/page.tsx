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
        "To empower students with trusted guidance, personalized support, and seamless access to world-class education opportunities, making the journey to studying abroad simple, achievable, and life-changing."
    },
    {
      icon: homeComServices.serv2,
      title: "Vision",
      description:
        "To become a globally trusted leader in international education, connecting ambitious students with top universities and creating opportunities that transform lives through quality education."
    }
  ];

  const coreValues = [
    { title: "Student First", description: "Every decision begins with what's best for our students." },
    { title: "Integrity", description: "Honest advice, transparent processes, and ethical guidance." },
    { title: "Excellence", description: "Delivering exceptional service at every stage of the journey." },
    { title: "Global Opportunity", description: "Connecting students with leading universities worldwide." },
    { title: "Innovation", description: "Using modern solutions to simplify the study abroad process." },
    { title: "Commitment", description: "Supporting students from their first consultation to life abroad." }
  ];

  const contactOptions = [
    {
      icon: HiOutlineMail,
      title: "Admissions Enquiries",
      lines: ["Speak with our admissions experts about studying abroad.", "ausvisastudy@gmail.com"]
    },
    {
      icon: BiMessageRoundedDots,
      title: "Student Support",
      lines: ["Need assistance? Our support team is ready to help.", "+234 808 995 3598"]
    },
    {
      icon: HiOutlineLocationMarker,
      title: "Visit Our Office",
      lines: [
        "Meet with our advisors in person.",
        "22, Unity close Balogun EstateOreyo, ikorodu Lagos, Nigeria"
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

      <div className="mx-auto mt-10 grid max-w-350 grid-cols-1 gap-6 px-4 py-10 md:mt-20 md:grid-cols-[50%_50%] place-items-center md:px-10">
        <div className="animate-fade-in relative aspect-square w-full max-w-[500px] overflow-hidden ">
          <Image
            src={aboutus.whoweare2}
            alt="who we are"
            // fill
            width={1000}
            height={1000}
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex h-full flex-col items-start justify-center gap-3 p-4 md:p-8 md:px-14">
          <p className="text-[#003557] text-[26px] md:text-[36px] font-bold">
            Why Choose Us
          </p>
          <span className="text-[#003557] font-medium max-w-[600px] text-[15px] md:text-[16px] leading-relaxed">
           At AbroadAchieve, we do more than help students study abroad, we help them build successful futures. With years of experience in international education,
            we’ve guided aspiring students 
           through university admissions, scholarship opportunities, visa applications, and relocation with confidence and clarity.
          </span>
          <span className="text-[#003557] font-medium max-w-[600px] text-[15px] md:text-[16px] leading-relaxed">
           Our personalized approach ensures every student receives expert guidance tailored to their academic goals, budget, and preferred destination. 
           Whether you’re applying
to universities in the UK, Canada, Australia, New Zealand, the USA, or Europe, we’re committed to making your study abroad journey simple, transparent, and successfu
          </span>
        </div>
      </div>

      <SubHeader
        title={"Our Comprehensive Services"}
        subtitle={"Complete support for every stage of your journey to studying abroad."}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8 max-w-350 mx-auto">
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

      <SubHeader
        title={"Core Values"}
        subtitle={"The principles that guide everything we do."}
      />

      <div className="max-w-350 flex items-center justify-center mx-auto px-4 md:px-8 pb-16">
        <div className="bg-white rounded-lg border border-gray-100 shadow-md p-6 md:p-10">
          <ul className="space-y-4">
            {coreValues.map((value, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-[#003557] font-semibold text-[16px] md:text-[17px] min-w-[140px]">
                  {value.title}
                </span>
                <span className="text-gray-600 font-normal text-[15px] md:text-[16px]">
                  – {value.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-white px-6 md:pl-14 pt-16 md:pt-20 pb-4">
        <p className="text-[#003557] font-semibold text-[25px] md:text-[28px]">
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