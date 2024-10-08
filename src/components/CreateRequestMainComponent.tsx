import React, { useState } from "react";
import { Button } from "flowbite-react";
import { HiPlus, HiTrash, HiX } from "react-icons/hi";
import Layout from "./Layout";
import { DrivePage } from "@/constants";
import { DefaultDriveURLState } from "@/constants/drivePage";
import { InputField } from "./InputField";
import { validateRequest } from "@/utils/requestUtils";

export interface IRequest {
  url: string;
  value: string;
}

export interface IRequestState {
  url: string;
  error: string;
  id: number;
  value?: string;
}

interface CreateRequestMainComponentProps {
  onRequestSubmit: (request: IRequest[]) => void;
}

interface FooterProps {
  onCreateRequest: () => void;
}

const Header: React.FC = () => {
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

const Footer: React.FC<FooterProps> = ({ onCreateRequest }) => {
  return (
    <>
      <Button
        color="primary"
        className="text-sm font-medium bg-purple-700 hover:bg-purple-800 text-white"
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

export function CreateRequestMainComponent(
  props: CreateRequestMainComponentProps
) {
  const [request, setRequest] = useState<IRequestState[]>([
    ...DefaultDriveURLState,
  ]);

  const onCreateRequest = () => {
    const { isValid, request: newRequest } = validateRequest(request);
    if (!isValid) {
      setRequest(newRequest);
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
    if (request.length >= 10) {
      return;
    }
    setRequest([
      ...request,
      { ...DefaultDriveURLState[0], id: Date.now() },
    ]);
  };

  const onDelete = (id: number) => {
    if (request.length <= 1) {
      return;
    }
    const filteredRequest = request.filter((req) => req.id !== id);
    setRequest([...filteredRequest]);
  };

  const onUrlChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const newRequest = request.map((req) => {
      if (req.id === id) {
        return {
          ...req,
          url: e.target.value,
          error: "",
        };
      } else {
        return req;
      }
    });
    setRequest(newRequest);
  };

  return (
    <>
      <Layout
        header={<Header />}
        footer={<Footer onCreateRequest={onCreateRequest} />}
        alignCenter
      >
        <div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {DrivePage.addVideosOrFolders}
          </h4>
          <p className="text-sm text-gray-900 dark:text-gray-400">
            {DrivePage.videoInstruction}
          </p>
        </div>
        <div className="mb-7 mt-4">
          {request.map((urlData, idx) => (
            <InputField
              key={urlData.id}
              placeholder="e.g http://drive.google.com/some-link"
              label={`${DrivePage.videoOrFolderUrl} ${idx + 1}`}
              name={`urlField${urlData.id}`}
              rightIcon={
                request.length !== 1 ? (
                  <HiTrash
                    className="text-gray-400"
                    onClick={() => onDelete(urlData.id)}
                  />
                ) : null
              }
              error={urlData.error}
              onChange={(e) => onUrlChange(e, urlData.id)}
            />
          ))}
        </div>
        <div>
          <Button
            color="light"
            className="text-sm font-medium hover:text-purple-800 bg-white hover:bg-gray-50 border border-gray-300"
            onClick={addUrl}
            disabled={request.length >= 10}
          >
            <span className="flex items-center">
              <span className="bg-purple-800 rounded-full p-0.5 mr-2">
                <HiPlus className="h-3 w-3 text-white" />
              </span>
              {DrivePage.addUrl}
            </span>
          </Button>
        </div>
      </Layout>
    </>
  );
}
