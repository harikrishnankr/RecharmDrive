import { DrivePage } from "@/constants";
import { Button } from "flowbite-react";
import React from "react";
import { HiPlus } from "react-icons/hi";

interface FooterProps {
  onCreateRequest: () => void;
}

export const CreateRequestFooter: React.FC<FooterProps> = ({ onCreateRequest }) => {
  return (
    <>
      <Button
        color="primary"
        className="text-sm font-medium bg-primary hover:bg-purple-800 text-white"
        onClick={onCreateRequest}
      >
        <span className="flex items-center mr-2">
          <HiPlus className="h-3 w-3 text-white" />
        </span>
        {DrivePage.createRequest}
      </Button>
    </>
  );
};