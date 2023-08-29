"use client";

import React, { useState,useEffect } from "react";

import {
  Hero,
  SearchBar,
  CustomFilter,
  CarCard,
  CustomButton,
} from "@/components";
import { fuels, yearsOfProduction } from "@/constant";
import { RecentCarsData } from "@/utils";

export default function Home() {
  const allCars = RecentCarsData;

  const [disableButton, setDisableButton] = useState(false);
  const [visibleCars, SetVisibleCars] = useState(6);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  const handleShowMore = () => {
    SetVisibleCars((prev) => prev + 3);
    if (allCars.length <= visibleCars) {
      setDisableButton(true);
    }
  };


  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div  id="all-cars" className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold ">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />

          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allCars?.slice(0, visibleCars).map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{!allCars ? "No car in serve" : ""}</p>
          </div>
        )}
        <div className="flex items-center justify-center">
          <CustomButton
            title="Show More"
            btnType="button"
            containerStyles="bg-primary-blue text-white rounded-full mt-10 py-3 px-6"
            handleClick={handleShowMore}
            isDisabled={disableButton}
          />
        </div>
      </div>
    </main>
  );
}
