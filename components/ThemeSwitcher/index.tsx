"use client";

import { IoIosMoon } from "react-icons/io";
import { LuSun } from "react-icons/lu";

import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";

export default function index() {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        // Check local storage on mount
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.add(storedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('light');
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
        setMounted(true);
    }, []);

    const toggleTheme = (newTheme: any) => {
        setTheme(newTheme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
        window.location.reload();
    };

    console.log('theme', theme)

    if (!mounted) return null;

    return (
        <>
            <div className="flex items-center gap-4">
                <button className="" onClick={() => toggleTheme((!localStorage.getItem('theme') || localStorage.getItem('theme') === 'light') ? "dark" : "light")}>
                    {
                        (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'light') ?
                            <IoIosMoon />
                            :
                            <LuSun />
                    }
                </button>
            </div>
        </>
    )
}