"use client";
import React from "react";

interface SubHeaderProps {
  title: string;
  subtitle: string;
}

function SubHeader({ title, subtitle }: SubHeaderProps) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center py-10 md:py-12 px-4 text-white">
      <p className="text-[#003557] font-semibold text-[22px] md:text-[28px] text-center">
        {title}
      </p>
      {subtitle && (
        <span className="text-[#003557] font-normal text-[14px] md:text-[16px] w-full sm:w-[85%] md:w-[60%] text-center leading-relaxed">
          {subtitle}
        </span>
      )}
    </div>
  );
}

export default SubHeader;