"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavIcons from "./navicons";

const Menu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div className="">
      <div className="flex items-center gap-2">
        <Image
          src="/menu.png"
          alt=""
          width={28}
          height={28}
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        />
        <NavIcons />
      </div>
      {open && (
        <div className="absolute bg-gray-200  left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10">
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
