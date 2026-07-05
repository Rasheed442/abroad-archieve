"use client";

import { logo } from "@/constants";
import { useDynamicRouteParams } from "next/dist/server/app-render/dynamic-rendering";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" }
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="relative bg-gray-100">
      <div className="flex justify-between items-center h-[9.2vh] min-h-[64px] px-4 md:px-6">
        <Image src={logo} alt="logo" width={180} height={60} className="w-[140px] md:w-[180px] h-auto" />

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center space-x-16">
          <div className="flex space-x-4 text-[#003557] items-center text-[16px] font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 px-4 rounded-md ${
                  pathname === link.href ? "bg-gray-300" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button className="bg-[#003557] text-white py-2 px-4 rounded shrink-0 cursor-pointer" onClick={() => {
            router.push("/contact");
            setMenuOpen(false);
          }}>
            Book an Appointment
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="lg:hidden text-[#003557] p-2"
        >
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out bg-gray-100 ${
          menuOpen ? "max-h-[400px] border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-4 text-[#003557] text-[16px] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-2 px-4 rounded-md ${
                pathname === link.href ? "bg-gray-300" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className="bg-[#003557] text-white py-2 px-4 rounded mt-2 w-full cursor-pointer" onClick={() => {
            router.push("/contact");
            setMenuOpen(false);
          }}>
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;