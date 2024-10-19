"use client";

import { IoIosMoon } from "react-icons/io";
import { LuSun } from "react-icons/lu";

import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";

export default function index() {

    const [mounted, setMounted ] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true);
        setTheme("dark")
    }, []);

    console.log('theme', theme)
    console.log('resolvedTheme', resolvedTheme)
    console.log('mounted', mounted)

    if(!mounted) return null;

    return (
        <>
            <div className="flex items-center gap-4">
                <button onClick={() => setTheme('light')}>Light Mode</button>
                <button onClick={() => setTheme('dark')}>Dark Mode</button>
                {/* <button className="" onClick={() => setTheme("light")}>
                    <IoIosMoon />
                </button>
                <button className="" onClick={() => setTheme("light")}>
                    <LuSun />
                </button> */}
            </div>
        </>
    )
}