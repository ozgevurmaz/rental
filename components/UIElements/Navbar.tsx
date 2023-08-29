"use client";

import React, { useState } from "react";
import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";
import CustomButton from "./CustomButton";
import Auth from "../Forms/Auth";

function Navbar() {
  const [isModelOpen, setIsModelOpen] = useState(false);


  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={20}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          handleClick={() => setIsModelOpen(true)}
        />

        <Auth isOpen={isModelOpen} closeModel={()=>setIsModelOpen(false)} />
      </nav>
    </header>
  );
}

export default Navbar;
