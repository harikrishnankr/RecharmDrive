import { DrivePage } from "@/constants";
import { AddUrlButtonProps } from "@/interfaces/CreateRequest.interface";
import { Button } from "flowbite-react";
import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";

export const AddUrlButton: React.FC<AddUrlButtonProps> = ({ addUrl, items }) => {
  const [isMoved, setIsMoved] = useState(false);

  const onAdd = () => {
    setIsMoved(true);
    setTimeout(() => {
      setIsMoved(false);
      addUrl();
    }, 300);
  }

  return (
    <Button
      color="light"
      className={`text-sm font-medium hover:text-purple-800 bg-white hover:bg-gray-50 border border-gray-300 ${
        isMoved
          ? "transition-transform duration-300 ease-in-out transform translate-y-20"
          : ""
      }`}
      onClick={onAdd}
      disabled={items.length >= 10}
    >
      <span className="flex items-center">
        <span className="bg-primary rounded-full p-0.5 mr-2">
          <HiPlus className="h-3 w-3 text-white" />
        </span>
        {DrivePage.addUrl}
      </span>
    </Button>
  );
};
