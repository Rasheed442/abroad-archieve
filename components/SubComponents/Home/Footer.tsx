import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { PiGlobeHemisphereWestFill } from "react-icons/pi";
import Image from "next/image";
import { logo } from "@/constants";

function Footer() {
  return (
    <footer
      className="relative w-full px-6 md:px-10 pt-12 pb-8"
      style={{
        background: "linear-gradient(135deg, #DCE9FF 0%, #B9D2FF 100%)"
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr_1fr] gap-10 md:gap-16">
        {/* Brand column */}
        <div className="flex flex-col gap-4">
       <Image src={logo} alt="AbroadAchieve Logo" width={250} height={250} />

          <p className="text-[#33415C] text-[14px] leading-relaxed max-w-[260px]">
            From visa prep to securing admission, we guide you every step of
            the way.
          </p>

          <div className="flex items-center gap-4 mt-1">
            <Link
              href="https://instagram.com"
              aria-label="AbroadAchieve on Instagram"
              className="text-[#0F1B2B] hover:opacity-70 transition"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="AbroadAchieve on LinkedIn"
              className="text-[#0F1B2B] hover:opacity-70 transition"
            >
              <FaLinkedinIn size={18} />
            </Link>
            <Link
              href="https://x.com"
              aria-label="AbroadAchieve on X"
              className="text-[#0F1B2B] hover:opacity-70 transition"
            >
              <FaXTwitter size={18} />
            </Link>
          </div>
        </div>

        {/* Menu column */}
        <div className="flex flex-col gap-3">
          <p className="text-[#0F1B2B] font-semibold text-[15px]">Menu</p>
          <nav className="flex flex-col gap-2">
            <Link
              href="/about"
              className="text-[#33415C] text-[14px] hover:text-[#003557] transition"
            >
              About Us
            </Link>
            <Link
              href="/courses"
              className="text-[#33415C] text-[14px] hover:text-[#003557] transition"
            >
              Courses
            </Link>
          </nav>
        </div>

        {/* Contact column */}
        <div className="flex flex-col gap-3">
          <p className="text-[#0F1B2B] font-semibold text-[15px]">
            Stay in the loop!
          </p>
          <p className="text-[#33415C] text-[14px] leading-relaxed max-w-[280px]">
            Call us today to make enquiries or book a free counselling
            session.
          </p>
        </div>
      </div>

      {/* Bottom handle */}
      <div className="flex justify-center mt-16">
        <div className="h-[3px] w-10 rounded-full bg-white/70" />
      </div>
    </footer>
  );
}

export default Footer;