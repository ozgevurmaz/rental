"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import CustomButton from "../UIElements/CustomButton";

import { CarProps } from "./CarCard";
import heroImg from "../../public/hero.png";

interface CarDetailsProp {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}

const CarDetails: React.FC<CarDetailsProp> = ({ isOpen, closeModel, car }) => {
  const [isBookModelOpen, setIsBookModelOpen] = useState(false);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-30"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto bg-opacity-25">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 sclae-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModel}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex flex-1 flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg ">
                      <Image
                        src={heroImg}
                        fill
                        alt="car model"
                        className="object-contain"
                      />
                    </div>

                    <div className="flex gap-3 ">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={heroImg}
                          fill
                          alt="car model"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={heroImg}
                          fill
                          alt="car model"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={heroImg}
                          fill
                          alt="car model"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <h2 className="font-semibold capitalize text-xl">
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right"
                          key={key}
                        >
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <CustomButton
                    title="Book Now"
                    containerStyles="w-full py-[16px] rounded-full bg-primary-blue py-3 px-6"
                    textStyles="text-white text-[14px] leading-[17px] font-bold"
                    rightIcon="/right-arrow.svg"
                    handleClick={() => setIsBookModelOpen(true)}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
