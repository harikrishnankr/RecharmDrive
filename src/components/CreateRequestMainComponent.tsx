import React, { useState } from "react";
import Layout from "./Layout";
import { DrivePage } from "@/constants";
import { DefaultDriveURLState } from "@/constants/drivePage";
import { generateId, validateRequest } from "@/utils/requestUtils";
import { CreateRequestHeader } from "./CreateRequestHeader";
import { CreateRequestFooter } from "./CreateRequestFooter";
import {
  CreateRequestMainComponentProps,
  IRequestState,
} from "@/interfaces/CreateRequest.interface";
import { CreateRequestItem } from "./CreateRequestItem";
import { useInputList } from "@/hooks/useInputList";
import { AddUrlButton } from "./AddUrlButton";

export function CreateRequestMainComponent(
  props: CreateRequestMainComponentProps
) {
  const { items, addItem, updateItem, deleteItem, setItems } =
    useInputList<IRequestState>([...DefaultDriveURLState]);

  const onCreateRequest = () => {
    const { isValid, request: newRequest } = validateRequest(items);
    if (!isValid) {
      setItems(newRequest);
      return;
    }
    props.onRequestSubmit(
      newRequest.map((req) => ({
        url: req.url,
        value: req.value as string,
      }))
    );
  };

  const addUrl = () => {
    if (items.length >= 10) {
      return;
    }
    addItem({ ...DefaultDriveURLState[0], id: generateId() });
  };

  return (
    <>
      <Layout
        header={<CreateRequestHeader />}
        footer={<CreateRequestFooter onCreateRequest={onCreateRequest} />}
        alignCenter
      >
        <div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {DrivePage.addVideosOrFolders}
          </h4>
          <p className="text-xs text-gray-900 dark:text-gray-400">
            {DrivePage.videoInstruction}
          </p>
        </div>
        <div className="mb-7 mt-4">
          {items.map((urlData, idx) => (
            <CreateRequestItem
              key={urlData.id}
              urlData={urlData}
              updateItem={(e) => updateItem(idx, e)}
              deleteItem={() => deleteItem(idx)}
              canDelete={items.length > 1}
              label={`${DrivePage.videoOrFolderUrl} ${idx + 1}`}
              autoFocus={idx !== 0 && idx === items.length - 1}
            />
          ))}
        </div>
        <div>
          <AddUrlButton addUrl={addUrl} items={items} />
        </div>
      </Layout>
    </>
  );
}
