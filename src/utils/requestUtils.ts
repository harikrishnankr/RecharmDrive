import { IRequestState } from "@/components/CreateRequestMainComponent";

const isUrlValid = (url: string) => {
  if (!url || typeof url !== "string") {
    return false;
  }

  try {
    const parsedUrl = new URL(url);
    return (
      parsedUrl.pathname !== "/" &&
      parsedUrl.origin.startsWith("http://drive.google.com")
    );
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
