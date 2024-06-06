import React from "react"
import { ImCross } from 'react-icons/im';
import Link from "next/link";

// Type for props
interface Props {
    nav:boolean;
    closeNav: () => void;
}

export  default function MobileNav({closeNav, nav}: Props) {

    const navStyle = nav?'translate-x-0':'translate-x-[-100%]';
    
    return(
        <div className={`fixed ${navStyle} right-0 left-0 top-0 bottom-0 transition-all duration-500 bg-[#000000e0] z-[1002]`}>

            {/* Closs button */}
            <ImCross 
                onClick={closeNav} 
                className="absolute top-[2rem] w-[1.5rem] right-[2rem] text-white"/>

            {/* Nav Links div */}
            <div className={`bg-blue-600 ${navStyle} transition-all duration-500 delay-200 flex items-center justify-center w-[70%] h-[100%]`}>
                {/* Nav links */}
                <ul className="space-y-10">
                    <li className="text-[27px] text-white font-black uppercase hover:text-yellow-600 transition-all duration-200">
                        <Link href="#">Home</Link>
                    </li>
                    <li className="text-[27px] text-white font-black uppercase hover:text-yellow-600 transition-all duration-200">
                        <Link href="#">About</Link>
                    </li>
                    <li className="text-[27px] text-white font-black uppercase hover:text-yellow-600 transition-all duration-200">
                        <Link href="#">News</Link>
                    </li>
                    <li className="text-[27px] text-white font-black uppercase hover:text-yellow-600 transition-all duration-200">
                        <Link href="#">Post</Link>
                    </li>
                    <li className="text-[27px] text-white font-black uppercase hover:text-yellow-600 transition-all duration-200">
                        <Link href="#">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}