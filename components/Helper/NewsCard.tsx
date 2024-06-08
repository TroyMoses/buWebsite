import React from 'react'

interface Props {
    image: string;
    title: string;
    date: string;
    height: string;
}

export default function NewsCard({
    image,
    title,
    date,
    height}) {

    const cardBackground = {
        backgroundImage: `url(${image})`,
    };

  return (
    <div 
        className={`relative flex items-start justify-end flex-col bg-cover bg-center ${height}`} 
        style={cardBackground}>

            {/* Card overlay */}
            <div className='absolute top-0 left-0 bottom-0 right-0 bg-[#0000002f] h-[100%]'></div>

            {/* Card content */}
            <div className='relative z-[10] p-4'>
                <div className='flex items-center space-x-4'>
                    <h1 className='w-fit px-4 text-[12px] py-[2px] uppercase bg-blue-500 text-white'>
                        BU Sports
                    </h1>
                    <p className='text-white text-opacity-75'>{date}</p>
                </div>
                <h1 className='text-[20px] hover:text-white/70 hover:scale-105 cursor-pointer hover:underline transition-all duration-500 uppercase mt-[0.5rem] text-white font-semibold'>
                    {title}
                </h1>
                <div>
                    <p className='mt-[1rem] text-white hover:text-white/70 cursor-pointer hover:underline transition-all duration-500 text-[17px] font-semibold'>
                        Read More
                    </p>
                </div>
            </div>

    </div>
  )
}