"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import CustomButton from "../UIElements/CustomButton";

interface AuthProps {
  isOpen: boolean;
  closeModel: () => void;
}

const Auth: React.FC<AuthProps> = ({ isOpen, closeModel }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-20" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto bg-opacity-25">
            <div className="flex mt-12 mr-5 justify-end p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 sclae-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >
                <Dialog.Panel className="relative overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5 text-black-100">
                  <h2 className="text-xl font-semibold">Login or Sign in</h2>
                  <form className="flex flex-col">
                    <label className="text-medium my-2">Email</label>
                    <input
                      type="email"
                      className="border border-gray-200 rounded-lg pr-12 py-1 my-2"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      required
                    />
                    <label className="text-medium my-2">Password</label>
                    <input
                      type="password"
                      className="border border-gray-200 rounded-lg pr-12 py-1 my-2"
                      required
                    />
                    <CustomButton
                      title="Submit"
                      btnType="submit"
                      containerStyles="bg-primary-blue rounded-lg text-white my-2 py-2 "
                    />
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Auth;
