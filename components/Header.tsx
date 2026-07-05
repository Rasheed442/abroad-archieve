import { logo } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center h-[9.2vh] px-6 bg-gray-100">
      <Image src={logo} alt="logo" width={300} height={300} />
      <div className="flex items-center space-x-16">
        <div className="flex space-x-4 text-[#003557] items-center text-[16px] font-medium cursor-pointer">
          <Link href="/" className="bg-gray-300 py-2 px-4 rounded-md">
            Home
          </Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <button className="bg-[#003557] text-white py-2 px-4 rounded">Book an Appointment</button>
      </div>
    </div>
  );
}

export default Header;
