import React from "react"
import Logo from '../../public/logo/bugema.png';
import Image from "next/image";
import Link from "next/link";
import { BiMenu } from 'react-icons/bi';

// Type for props
interface Props {
    openNav: () => void;
}

export  default function Nav({openNav}: Props) {
    return(
        <div className="h-[12vh] shadow-md bg-gray-300">
            <div className="flex items-center justify-between h-[100%] w-[90%] mx-auto">

                {/* Logo */}
                <Image src={Logo} alt="bugemalogo" width={130} height={130}/>

                {/* Nav Links */}
                <ul className="hidden lg:flex items-center space-x-16">
                    <li className="text-[18px] font-semibold uppercase hover:text-blue-800 transition-all duration-200">
                        <Link href="#">Home</Link>
                    </li>
                    <li className="text-[18px] font-semibold uppercase hover:text-blue-800 transition-all duration-200">
                        <Link href="#">About</Link>
                    </li>
                    <li className="text-[18px] font-semibold uppercase hover:text-blue-800 transition-all duration-200">
                        <Link href="#">Sports & Games</Link>
                    </li>
                    <li className="text-[18px] font-semibold uppercase hover:text-blue-800 transition-all duration-200">
                        <Link href="#">Posts</Link>
                    </li>
                    <li className="text-[18px] font-semibold uppercase hover:text-blue-800 transition-all duration-200">
                        <Link href="#">Contact</Link>
                    </li>
                </ul>

                {/* Join Now Button */}
                <div className="flex items-center space-x-3">
                    <button className="px-6 py-2 sm:px-8 sm:py-2.5 transition-all duration-300 bg-blue-500 hover:bg-blue-600 font-semibold rounded text-white">
                        Join Now
                    </button>
                    {/* Menu */}
                    <BiMenu 
                        onClick={openNav} 
                        className="w-[2rem] h-[2rem] text-blue-500 lg:hidden" 
                    />
                </div>


            </div>
        </div>
    )
}