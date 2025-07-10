"use client"

import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2025-07-11");

const CountDown = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // runs only on the client
    }, []);

    if (!mounted) return null; // render nothing on the server

    return (
        <Countdown
            className="font-bold text-5xl text-yellow-300"
            date={endingDate}
        />
    );
};

export default CountDown;
