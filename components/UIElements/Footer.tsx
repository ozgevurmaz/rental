"use client";

import React from "react";
import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";

import { footerLinks } from "@/constant";

function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-5">
          <Image src="/logo.svg" alt="logo" width={118} height={11} />
          <p className="text-base text-gray-700">
            Rental 2023 <br /> All rights reserved &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col gap-2 text-base min-w-[170px]"
            >
              <h3>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        </div>

        <div className="flex justify-between items-center border-t flex-wrap mt-10 border-gray-100 sm:px-16 px-6 py-10">
          <p>@2023 Rental All Rights Reserved</p>
          <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
            <Link href="/" className="text-gray-500">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-500">
              Terms of Use
            </Link>
          </div>
        </div>

    </footer>
  );
}

export default Footer;
