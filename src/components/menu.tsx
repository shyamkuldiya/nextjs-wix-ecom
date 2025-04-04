"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"

export default function Menu() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Image src='/menu.png' alt="menu" width={28} height={28}
                className="cursor-pointer"
                onClick={() => setOpen(prev => !prev)}
            />

            {
                open && <div className="absolute top-16 right-0 bg-black shadow-md p-4 h-[calc(100vh-80px)]
                flex flex-col items-center justify-center text-xl z-10 left-0 text-white">
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Shop</Link>
                    <Link href='/'>Deals</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Contact</Link>
                    <Link href='/'>Logout</Link>
                    <Link href='/'>Cart</Link>
                </div>
            }
        </div>
    )
}
