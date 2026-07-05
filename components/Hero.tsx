import { hero } from "@/constants";
import SubHeader from "@/Reusables/SubHeader";


function Hero() {
  return (
    <>
      <div
      className="h-[90.8vh] flex items-center justify-center bg-no-repeat bg-cover w-full "
      style={{ backgroundImage: `url(${hero.src})` }}
    >
      <div className="text-center w-[50%]">
        <p className="text-[48px] font-bold text-white">
          Study Abroad Made Simple. Dreams Made Possible.
        </p>
        <span className="text-[19px]  font-medium text-white mt-4 block">
          Discover universities, scholarships, and expert guidance to help
          you study, live, and succeed abroad — from application to arrival.
        </span>
        <button className="border border-[#ffff] bg-[#003557] py-4 rounded-full cursor-pointer px-4 text-[16px]  mt-6 text-white font-medium">
          Start Your Journey
        </button>
      </div>
    </div>
    <SubHeader title={"Our Comprehensive Services"} subtitle={"Complete support for every stage of your journey to studying abroad."}/>
    </>
  
  );
}

export default Hero;
