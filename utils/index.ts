import { CarProps } from "@/components/CarCardComponents/CarCard";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const RecentCarsData = [
  {
    id:1,
    city_mpg: 28,
    class: "sedan",
    combination_mpg: 31,
    cylinders: 4,
    displacement: 2.0,
    drive: "fwd",
    fuel_type: "gas",
    highway_mpg: 35,
    make: "honda",
    model: "civic",
    transmission: "cvt",
    year: 2023,
  },
  {
    id:2,
    city_mpg: 22,
    class: "SUV",
    combination_mpg: 25,
    cylinders: 6,
    displacement: 3.5,
    drive: "awd",
    fuel_type: "gas",
    highway_mpg: 28,
    make: "toyota",
    model: "highlander",
    transmission: "automatic",
    year: 2023,
  },
  {
    id:3,
    city_mpg: 20,
    class: "truck",
    combination_mpg: 23,
    cylinders: 8,
    displacement: 5.7,
    drive: "4wd",
    fuel_type: "gas",
    highway_mpg: 24,
    make: "ford",
    model: "f-150",
    transmission: "automatic",
    year: 2023,
  },
  {
    id:4,
    city_mpg: 25,
    class: "hatchback",
    combination_mpg: 28,
    cylinders: 3,
    displacement: 1.5,
    drive: "fwd",
    fuel_type: "hybrid",
    highway_mpg: 31,
    make: "toyota",
    model: "prius",
    transmission: "e-cvt",
    year: 2023,
  },
  {
    id:5,
    city_mpg: 24,
    class: "compact car",
    combination_mpg: 28,
    cylinders: 4,
    displacement: 1.8,
    drive: "fwd",
    fuel_type: "gas",
    highway_mpg: 32,
    make: "volkswagen",
    model: "golf",
    transmission: "automatic",
    year: 2023,
  },
  {
    id:6,
    city_mpg: 22,
    class: "SUV",
    combination_mpg: 25,
    cylinders: 4,
    displacement: 2.0,
    drive: "awd",
    fuel_type: "gas",
    highway_mpg: 28,
    make: "volkswagen",
    model: "tiguan",
    transmission: "automatic",
    year: 2023,
  },
  {
    id:7,
    city_mpg: 28,
    class: "sedan",
    combination_mpg: 31,
    cylinders: 4,
    displacement: 1.5,
    drive: "fwd",
    fuel_type: "hybrid",
    highway_mpg: 35,
    make: "volkswagen",
    model: "passat",
    transmission: "automatic",
    year: 2023,
  },
  {
    id:8,
    city_mpg: 24,
    class: "crossover",
    combination_mpg: 27,
    cylinders: 4,
    displacement: 2.5,
    drive: "awd",
    fuel_type: "gas",
    highway_mpg: 30,
    make: "subaru",
    model: "outback",
    transmission: "cvt",
    year: 2023,
  },
  {
    id:9,
    city_mpg: 18,
    class: "sports car",
    combination_mpg: 21,
    cylinders: 6,
    displacement: 3.0,
    drive: "rwd",
    fuel_type: "gas",
    highway_mpg: 24,
    make: "chevrolet",
    model: "camaro",
    transmission: "manual",
    year: 2023,
  },
  {
    id:10,
    city_mpg: 20,
    class: "SUV",
    combination_mpg: 22,
    cylinders: 6,
    displacement: 3.0,
    drive: "4wd",
    fuel_type: "diesel",
    highway_mpg: 25,
    make: "toyota",
    model: "fortuner",
    transmission: "automatic",
    year: 2023,
  },
  {
    id:11,
    city_mpg: 18,
    class: "SUV",
    combination_mpg: 21,
    cylinders: 4,
    displacement: 2.5,
    drive: "2wd",
    fuel_type: "diesel",
    highway_mpg: 23,
    make: "toyota",
    model: "fortuner",
    transmission: "manual",
    year: 2023,
  },
];

const manufacturersSet = new Set(RecentCarsData.map(item => item.make));
export const manufacturers = Array.from(manufacturersSet);

export const updateSearchParams = (type: string, value: string) => {

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
