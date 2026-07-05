"use client";
import React from 'react'

interface SubHeaderProps {
  title: string;
  subtitle: string;
}
function SubHeader({ title, subtitle }: SubHeaderProps) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-[20vh] text-white">
        <p className='text-[#003557] font-semibold text-[28px] medium'>{title}</p>
        <span className='text-[#003557] font-normal text-[16px] w-[50%] text-center'>{subtitle}</span>
    </div>
  )
}

export default SubHeader