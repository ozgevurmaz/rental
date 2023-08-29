"use client";

import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/utils";

interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

const SearchManufacturer: React.FC<SearchManufacturerProps> = ({
  manufacturer,
  setManufacturer,
}) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px] pl-3">
            <Image
              src="/car-logo.svg"
              alt="car logo"
              width={20}
              height={20}
              className="mi-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
            placeholder="Volkswagen"
            //displayValue={(manufacturer: String) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100 "
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
