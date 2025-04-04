import Link from "next/link";
import React from "react";
import Menu from "./menu";
import Image from "next/image";
import Searchbar from "./searchbar";
import dynamic from "next/dynamic";
// import Navicons from './navicons'
const Navicons = dynamic(() => import("./navicons"), { ssr: false });

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16  relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
        <Menu />
      </div>

      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" width={24} height={24} alt="CATCOM" />
            <div className="tracking-wide text-xl">CATCOM</div>
          </Link>
          <div className="hidden xl:flex items-center gap-4">
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <Searchbar />
          <Navicons />
        </div>
      </div>
    </div>
  );
}
