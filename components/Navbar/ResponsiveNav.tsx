"use client"

import React, { useState } from 'react';
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function ResponsiveNav() {

    const [showNav, setShowNav] = useState(false);
    const openNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    return(
        <div>
            <Nav openNav={openNavHandler} />
            <MobileNav nav={showNav} closeNav={closeNavHandler} />
        </div>
    )
}