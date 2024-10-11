import { IRequestState } from "@/interfaces/CreateRequest.interface";

const WhiteListedUrls = ["http://drive.google.com", "https://drive.google.com"];

const isUrlValid = (url: string) => {
  if (!url || typeof url !== "string") {
    return false;
  }

  try {
    const parsedUrl = new URL(url);
    for (let i = 0; i < WhiteListedUrls.length; i++) {
      if (
        parsedUrl.pathname !== "/" &&
        parsedUrl.origin.startsWith(WhiteListedUrls[i])
      ) {
        return true;
      }
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const validateRequest = (request: IRequestState[]) => {
  let isValid = true;
  const updateRequestState = request.map((request) => {
    if (!isUrlValid(request.url)) {
      isValid = false;
      return {
        ...request,
        error: "Enter a valid URL",
        value: "",
      };
    }
    const urlObj = new URL(request.url);
    const value = urlObj.pathname.substring(1, urlObj.pathname.length);
    return {
      ...request,
      value,
    };
  });

  return {
    isValid,
    request: updateRequestState,
  };
};

export const generateId = () =>
  "_" + Math.random().toString(36).substring(2, 11);
