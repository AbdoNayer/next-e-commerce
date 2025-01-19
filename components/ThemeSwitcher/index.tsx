"use client";

import { IoIosMoon } from "react-icons/io";
import { LuSun } from "react-icons/lu";

import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";

export default function index() {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = (newTheme: any) => {
        setTheme(newTheme);
    };

    if (!mounted) return null;

    return (
        <>
            <div className="flex items-center gap-4">
                <button className="" onClick={() => toggleTheme((theme === 'light') ? "dark" : "light")}>
                    {
                        theme === 'light' ?
                            <IoIosMoon />
                            :
                            <LuSun />
                    }
                </button>
            </div>
        </>
    )
}