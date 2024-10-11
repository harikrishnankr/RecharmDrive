import { DrivePage } from "@/constants";
import React from "react";
import { HiX } from "react-icons/hi";

export const CreateRequestHeader: React.FC = () => {
  return (
    <>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-extrabold">
        {DrivePage.createNewRequest}
      </h3>
      <button className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
        <HiX className="w-5 h-5" />
      </button>
    </>
  );
};