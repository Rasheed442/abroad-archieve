import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { logo } from "@/constants";

function Footer() {
  return (
    <footer
      className="relative w-full px-4 py-10 sm:px-6 md:px-10 md:pt-12 md:pb-8"
      style={{
        background: "linear-gradient(135deg, #DCE9FF 0%, #B9D2FF 100%)"
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center sm:text-left md:grid-cols-[1.3fr_0.7fr_1fr] md:gap-16">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <Image
            src={logo}
            alt="AbroadAchieve Logo"
            width={220}
            height={80}
            className="h-auto w-44 sm:w-56"
          />

          <p className="max-w-[260px] text-[14px] leading-relaxed text-[#33415C]">
            From visa prep to securing admission, we guide you every step of the
            way.
          </p>

          <div className="mt-1 flex items-center gap-4">
            <Link
              href="https://instagram.com"
              aria-label="AbroadAchieve on Instagram"
              className="text-[#0F1B2B] transition hover:opacity-70"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="AbroadAchieve on LinkedIn"
              className="text-[#0F1B2B] transition hover:opacity-70"
            >
              <FaLinkedinIn size={18} />
            </Link>
            <Link
              href="https://x.com"
              aria-label="AbroadAchieve on X"
              className="text-[#0F1B2B] transition hover:opacity-70"
            >
              <FaXTwitter size={18} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 sm:items-start">
          <p className="text-[15px] font-semibold text-[#0F1B2B]">Menu</p>
          <nav className="flex flex-col gap-2">
            <Link
              href="/about"
              className="text-[14px] text-[#33415C] transition hover:text-[#003557]"
            >
              About Us
            </Link>
            <Link
              href="/courses"
              className="text-[14px] text-[#33415C] transition hover:text-[#003557]"
            >
              Courses
            </Link>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-3 sm:items-start">
          <p className="text-[15px] font-semibold text-[#0F1B2B]">
            Stay in the loop!
          </p>
          <p className="max-w-[280px] text-[14px] leading-relaxed text-[#33415C]">
            Call us today to make enquiries or book a free counselling session.
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-center md:mt-16">
        <div className="h-[3px] w-10 rounded-full bg-white/70" />
      </div>
    </footer>
  );
}

export default Footer;