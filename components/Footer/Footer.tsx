import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#111111]">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10">
        {/* About bu sports section */}
        <div className="">
          <h1 className="text-[22px] text-white font-semibold mb-[1.5rem] uppercase">
            About BU Sports
          </h1>
          <p className="text-[17px] text-white font-semibold text-opacity-70">
            Bugema University Sports is a conglamarate of various disciplines
            including football, volleyball, basketball, netball, woodball and
            indoor games.
          </p>

          {/* Socials */}
          <div className="mt-[1.5rem] flex items-center space-x-3">
            {/* Facebook */}
            <div className=" animate-pulse hover:scale-110 cursor-pointer transition-all duration-300 w-[2.4rem] h-[2.4rem] bg-blue-500 rounded-full flex items-center justify-center flex-col">
              <FaFacebookF className="text-white" />
            </div>

            {/* Twitter */}
            <div className="animate-pulse hover:scale-110 cursor-pointer transition-all duration-300 w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center justify-center flex-col">
              <FaTwitter className="text-white" />
            </div>

            {/* Youtube */}
            <div className="animate-pulse hover:scale-110 cursor-pointer transition-all duration-300 w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col">
              <FaYoutube className="text-white" />
            </div>

            {/* Instagram */}
            <div className="animate-pulse hover:scale-110 cursor-pointer transition-all duration-300 w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col">
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>

        {/* About bu section */}
        <div className="md:ml-6">
          <h1 className="text-[22px] text-white font-semibold mb-[1.5rem] uppercase">
            About BU
          </h1>
          <p className="text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer opacity-30 mb-[0.7rem] uppercase">
            Our Clubs
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer opacity-30 mb-[0.7rem] uppercase">
            Contacts
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer opacity-30 mb-[0.7rem] uppercase">
            Leagues
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer opacity-30 mb-[0.7rem] uppercase">
            Sports Staff
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer opacity-30 mb-[0.7rem] uppercase">
            Our Players
          </p>
        </div>

        {/* Quick links section  */}
        <div>
          <h1 className="text-[22px] text-white font-semibold mb-[1.5rem] uppercase">
            Quick Links
          </h1>
          <p className="text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer opacity-30 mb-[0.7rem] uppercase">
            Bugema University
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer opacity-30 mb-[0.7rem] uppercase">
            Apply Now
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer opacity-30 mb-[0.7rem] uppercase">
            Sponsorships
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer opacity-30 mb-[0.7rem] uppercase">
            Bursaries
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer opacity-30 mb-[0.7rem] uppercase">
            Our Partners
          </p>
        </div>

        {/* Get in touch section */}
        <div>
          <h1 className="text-[22px] text-white font-semibold mb-[1.5rem] uppercase">
            Get In Touch
          </h1>
          <p className="text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer opacity-30 mb-[0.7rem]">
            +256 700 624 015
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer opacity-30 mb-[0.7rem]">
            info@bugemauniv.ac.ug
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer opacity-30 mb-[0.7rem]">
            Bugema, Kampala, Uganda
          </p>
        </div>
      </div>

      {/* Copyright */}
      <h1 className=" text-center mt-[2rem] text-[14px] w-[80%] mx-auto text-white opacity-50">
        COPYRIGHT BY TROY - LEGACY 2024
      </h1>
    </div>
  );
}