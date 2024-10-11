import React, { RefObject, useEffect, useRef, useState } from "react";
import { InputField } from "./InputField";
import { HiTrash } from "react-icons/hi";
import {
  CreateRequestListProps,
  IRequestState,
} from "@/interfaces/CreateRequest.interface";

export const CreateRequestItem: React.FC<CreateRequestListProps> = ({
  urlData,
  deleteItem,
  updateItem,
  canDelete,
  label,
  autoFocus,
}) => {
  const [isVisible, setVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const onUrlUpdate = (
    e: React.ChangeEvent<HTMLInputElement>,
    currentState: IRequestState
  ) => {
    updateItem({
      ...currentState,
      url: e.target.value,
      error: "",
    });
  };

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
    setVisible(true);
  }, [autoFocus]);

  return (
    <InputField
      ref={inputRef as RefObject<HTMLInputElement>}
      placeholder="e.g http://drive.google.com/some-link"
      label={label}
      name={`urlField${urlData.id}`}
      rightIcon={
        canDelete ? (
          <HiTrash className="text-gray-400" onClick={() => deleteItem()} />
        ) : null
      }
      error={urlData.error}
      onChange={(e) => onUrlUpdate(e, urlData)}
      className={`transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};
