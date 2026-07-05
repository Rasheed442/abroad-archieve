import { services, whoweare } from "@/constants";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <div
        className="h-[90.8vh] flex items-center justify-center bg-no-repeat bg-cover w-full "
        style={{ backgroundImage: `url(${services.heroserv.src})` }}
      >
        <p className="text-[52px] font-bold text-white">Services</p>
      </div>

      <div className="grid grid-cols-[50%_50%] px-10 mt-20  gap-4 place-items-center max-w-350 m-auto py-10">
        <Image src={whoweare} alt="who we are" width={500} height={500} />
        <div className=" h-full flex flex-col gap-3 justify-center items-start p-8 px-14">
          <p className="text-[#003557] text-[36px] font-bold">Our Services</p>
          <div className="text-[#727272] font-normal text-[18px] max-w-150">
            <ul className="list-disc space-x-3 pl-5">
              <li>Independent</li>
              <li>Sensitive to the requirements of the universities</li>
              <li>Designed to match your own needs</li>
              <li>The best expert advice on courses</li>
              <li>
                Study destinations including the UK and Europe, Australia, New
                Zealand, Canada, USA and the UAE.
              </li>
            </ul>
          </div>
        </div>
      </div>

<div className="max-w-350 m-auto px-10">
     <div className="grid grid-cols-[50%_50%] mt-6 gap-4 px-20 place-items-center py-10">
        <div className=" h-full flex flex-col gap-3 justify-center items-start  ">
          <p className="text-[#003557] text-[36px] font-bold">Visa Lodgement</p>
          <span className="text-[#727272] font-normal text-[18px] w-150">
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
        <Image src={services.visa} alt="who we are" width={500} height={500} />
      </div>
      <div className="grid grid-cols-[50%_50%] mt-6 gap-4 place-items-center  py-10">
        <Image
          src={services.career}
          alt="who we are"
          width={500}
          height={500}
        />
        <div className=" h-full flex flex-col gap-3 justify-center items-start  ">
          <p className="text-[#003557] text-[36px] font-bold">
            Career Counselling
          </p>
          <span className="text-[#727272] font-normal text-[18px] w-150">
            Throughout our years of existence as a Registered and Certified
            Educational Agency, we’ve been always indulging in accurate daily
            research with both our partners and others Universities around the
            globe, so as to obtain a direct and genuine information or update
            from schools to verify their various policies and requirements. With
            this process, we can as well provide you with an extensive and sound
            counselling services that will assist you defeat your academic
            challenges, such as improving in performance, withdrawing from
            semester, navigating policies or procedures and financial issues. We
            also organized an interacting session where our prospective students
            or applicants can have a one-on-one conversation directly with our
            partners schools’ representatives worldwide.
          </span>
        </div>
      </div> 
</div>
    
    </div>
  );
}

export default page;
