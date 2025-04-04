"use client";

import { WixClientContext } from "@/context/wixcontext";
import { useContext } from "react";

export const useWixClient = () => {
  return useContext(WixClientContext);
};
