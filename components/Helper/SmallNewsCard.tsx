import React from 'react'
import Image from 'next/image';

interface Props {
    date: string;
    title: string;
    image: string;
}

export default function SmallNewsCard({date, title, image}: Props) {
  return (
    <div className='bg-gray-900 p-4 flex items-center space-x-6'>

        {/* Image */}
        <div className="hidden sm:block">
            <Image 
                src={image} 
                alt={title} 
                width={150} 
                height={150} 
                className='object-cover'
            />
        </div>

        {/* Content */}
        <div>
            <div className='flex items-center space-x-4'>
                <h1 className='w-fit px-4 text-[12px] sm:text-[10px] py-[2px] uppercase bg-blue-500 text-white'>
                    BU Sports
                </h1>
                <p className='text-white text-[9px] sm:text-[12px] text-opacity-75'>
                    {date}
                </p>
            </div>
            <h1 className='text-[13px] sm:text-[17px] hover:text-blue-500 cursor-pointer hover:underline transition-all duration-500 uppercase mt-[0.5rem] text-white font-semibold'>
                {title}
            </h1>
            <p className='mt-[1rem] hover:text-blue-500 cursor-pointer hover:underline transition-all duration-500 text-white text-[12px] sm:text-[15px] font-semibold'>
                Read More
            </p>
        </div>

    </div>
  )
}