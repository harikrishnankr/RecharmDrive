import { CreateRequestMainComponent, IRequest } from "@/components/CreateRequestMainComponent";
export default function Home() {

  const onRequestSubmit = (request: IRequest[]) => {
    alert(JSON.stringify(request));
  };

  return (
    <CreateRequestMainComponent onRequestSubmit={onRequestSubmit} />
  );
}
