"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import CartModal from "./cartmodal";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";

export default function Navicons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }

    setIsProfileOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    if (Cookies.get("refreshToken") === undefined) return;
    setLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    console.log("logoutUrl: ", logoutUrl);
    setLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };

  // AUTH WITH WIX-MANAGED AUTH
  // const wixClient = useWixClient();

  // const login = async () => {
  //   const loginRequestData = wixClient.auth.generateOAuthData(
  //     "http://localhost:3000"
  //   );

  //   localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
  //   const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);

  //   window.location.href = authUrl;
  // };

  useEffect(() => {
    if (isCartOpen) {
      const wrapperDiv = document.createElement("div");
      wrapperDiv.classList.add("wrapperDiv-cart");
      document.body.appendChild(wrapperDiv);

      const handleClick = () => {
        setIsCartOpen(false);
      };

      wrapperDiv.addEventListener("click", handleClick);

      return () => {
        wrapperDiv.removeEventListener("click", handleClick);
      };
    } else {
      // Remove the wrapperDiv when isCartOpen is false
      const wrapperDiv = document.getElementsByClassName("wrapperDiv-cart");
      if (wrapperDiv && wrapperDiv[0]) {
        // Find the parent node and remove the wrapperDiv
        wrapperDiv[0].parentNode?.removeChild(wrapperDiv[0]);
      }
    }
  }, [isCartOpen, setIsCartOpen]);

  useEffect(() => {
    if (isProfileOpen) {
      const wrapperDiv = document.createElement("div");
      wrapperDiv.classList.add("wrapperDiv-profile");
      document.body.appendChild(wrapperDiv);

      const handleClick = () => {
        setIsProfileOpen(false);
      };

      wrapperDiv.addEventListener("click", handleClick);

      return () => {
        wrapperDiv.removeEventListener("click", handleClick);
      };
    } else {
      // Remove the wrapperDiv when isCartOpen is false
      const wrapperDiv = document.getElementsByClassName("wrapperDiv-profile");
      if (wrapperDiv && wrapperDiv[0]) {
        // Find the parent node and remove the wrapperDiv
        wrapperDiv[0].parentNode?.removeChild(wrapperDiv[0]);
      }
    }
  }, [isProfileOpen, setIsProfileOpen]);

  return (
    <>
      <div className="flex items-center gap-4 relative">
        <Image
          src="/profile.png"
          alt="profile"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={handleProfile}
          // onClick={login}
        />
        {isProfileOpen && (
          <div className="absolute top-10 right-0 bg-white py-4 shadow-md rounded-md flex flex-col gap-2 z-20">
            <Link
              href="/"
              className="px-4 py-1 duration-300 ease-linear hover:bg-gray-100"
            >
              Profile
            </Link>
            <div
              onClick={handleLogout}
              className="cursor-pointer py-1 duration-300 ease-linear hover:bg-gray-100 px-4 text-red-500 min-w-max"
            >
              {loading ? "Loaging out" : "Logout"}
            </div>
          </div>
        )}
        <Image
          src="/notification.png"
          alt="profile"
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <div className="relative cursor-pointer">
          <Image
            src="/cart.png"
            alt="profile"
            width={22}
            height={22}
            className="cursor-pointer"
            onClick={() => setIsCartOpen((prev) => !prev)}
          />
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-batpink rounded-full text-white flex items-center justify-center">
            1
          </div>
          {isCartOpen && <CartModal />}
        </div>
      </div>
    </>
  );
}
