'use client';

import React from "react";
import { IconType } from "react-icons";
import coreValues from "../data/coreValues";

// Define the shape of a single core value object
interface CoreValue {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

const CoreValues = () => {
  return (
    <div className="my-4 md:my-8 lg:mb-0 lg:pb-20 lg:mt-32 justify-center gap-4 items-center mx-5 md:mx-14 lg:mx-28">
      <div className="text-center space-y-1 md:space-y-2">
        <h1 className="text-red-950 text-2xl md:text-3xl lg:text-4xl font-semibold">
          Our Core Values
        </h1>
        <p className="text-sm text-gray-700">
          The principles that guide everything we do at GUEHI and CO
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mt-5 md:mt-8 lg:mt-12">
        {(coreValues as CoreValue[]).map((value) => (
          <div
            key={value.id}
            className="p-5 border border-gray-300 rounded-lg shadow space-y-2"
          >
            <p className="text-red-950 font-bold bg-gray-300 inline-block p-2 rounded-full">
              {value.icon && <value.icon />}
            </p>
            <h2 className="text-red-900 text-md font-semibold">
              {value.title}
            </h2>
            <p className="text-sm text-black">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;