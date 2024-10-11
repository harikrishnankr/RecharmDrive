import { CreateRequestMainComponent } from "@/components/CreateRequestMainComponent";
import { IRequest } from "@/interfaces/CreateRequest.interface";
export default function Home() {

  const onRequestSubmit = (request: IRequest[]) => {
    alert(JSON.stringify(request));
  };

  return (
    <CreateRequestMainComponent onRequestSubmit={onRequestSubmit} />
  );
}
