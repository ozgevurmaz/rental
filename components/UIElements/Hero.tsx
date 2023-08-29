"use client";

import React from "react";
import Image from "@/node_modules/next/image";
import Typewriter from "react-ts-typewriter";

import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleScroll = () => {
    router.push("/#all-cars");
  };
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 padding-x">
        <h2 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          <Typewriter
            text="Find, book and rent a car"
            delay={200}
            cursor={false}
          />
        </h2>
        <p className="text-[27px] text-black-100 font-light mt-5">
          - quickly and easily
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 py-3 px-6"
          handleClick={handleScroll}
        />
      </div>

      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
          <div className="bsolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
