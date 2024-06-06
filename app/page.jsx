'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Home from "../components/Home";

export default function HomePage() {

    return (
        <div className="bg-[#111111] overflow-hidden text-white">
            <Home />
        </div>
    )
}