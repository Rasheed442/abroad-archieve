import { hero } from "@/constants";
import SubHeader from "@/Reusables/SubHeader";

function Hero() {
  return (
    <>
      <div
        className="h-[90.8vh] min-h-[560px] flex items-center justify-center bg-no-repeat bg-cover bg-center w-full px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="text-center w-full sm:w-[85%] md:w-[65%] lg:w-[50%]">
          <p className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-white leading-tight">
            Your Global Education Journey Starts Here.
          </p>
          <span className="text-[15px] sm:text-[17px] md:text-[19px] font-medium text-white mt-4 block">
         Study abroad with confidence through expert university admissions, scholarship
guidance, visa support, and personalized counseling designed to help you succeed
from application to arrival.
          </span>
          <a
            href="https://api.whatsapp.com/message/XJKVB5QOJ4WPN1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#ffff] bg-[#003557] py-3 md:py-4 rounded-full cursor-pointer px-6 md:px-4 text-[15px] md:text-[16px] mt-6 text-white font-medium inline-block"
          >
            Start Your Journey
          </a>
        </div>
      </div>
      <SubHeader
        title={"Our Comprehensive Services"}
        subtitle={"Complete support for every stage of your journey to studying abroad."}
      />
    </>
  );
}

export default Hero;