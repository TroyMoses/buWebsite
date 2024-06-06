"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import Modal from "../Helper/Modal";

interface Props {
  title: string;
  image: string;
  date: string;
}

export default function HighlightsCard({ date, image, title }: Props) {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <div className="bg-[#1e1c1c] p-4">
      {/* Modal */}
      {showModal && <Modal hideModal={closeModalHandler} />}

      {/* Image div */}
      <div className="h-[230px] relative z-[10]">
        {/* Image */}
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="object-cover h-[100%] w-[100%]"
        />

        {/* Play button */}
        <div
          onClick={showModalHandler}
          className="absolute w-[4rem] h-[4rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center flex-col bg-black hover:bg-blue-500 rounded-full transition-all duration-500 cursor-pointer animate-pulse"
        >
          <FaPlay className=" text-white" />
        </div>

        {/* Time */}
        <div className="absolute px-4 py-1 bg-blue-500 bottom-0 left-0 flex items-center space-x-2">
          <FaPlay className=" text-white" />
          <p className="text-white text-[15px]">5:00pm</p>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-[18px] text-white mt-[1.5rem] pb-[1.5rem] border-b-2 border-gray-500 border-opacity-30 font-semibold">
        {title}
      </h1>
      <p className="text-white text-opacity-70 mt-[0.5rem]">{date}</p>
    </div>
  );
}